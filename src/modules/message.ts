import bot from "ROOT";
import * as core from "@/modules/lib";
import { BotConfig } from "@/modules/config";

export enum MessageScope {
	Neither,
	Group = 1 << 0,
	Private = 1 << 1,
	Both = Group | Private
}

export enum MessageType {
	Group,
	Private,
	Unknown
}

export type SendFunc = ( content: core.Sendable | core.ForwardElem, allowAt?: boolean ) => Promise<number>;
export type Message = core.PrivateMessageEvent | core.GroupMessageEvent;

interface MsgManagementMethod {
	getSendMessageFunc( userID: number | "all" | string, type: MessageType, groupID?: number ): SendFunc;
	sendMaster( content: core.Sendable ): Promise<number | null>;
	sendMaster( content: core.ForwardElem ): Promise<core.SendForwardMessage | null>;
}

function checkIterator( obj: core.ForwardElem | core.MessageElem | Iterable<core.MessageElem | string> ): obj is Iterable<core.MessageElem | string> {
	return typeof obj[Symbol.iterator] === "function";
}

function checkoutForward( obj: core.Sendable | core.ForwardElem ): obj is core.ForwardElem {
	if ( typeof obj === "string" || checkIterator( obj ) ) {
		return false;
	} else {
		return obj.type === "forward";
	}
}

export default class MsgManagement implements MsgManagementMethod {
	private master: number;
	private atUser: boolean;
	
	constructor( config: BotConfig["base"], private readonly client: core.Client ) {
		this.master = config.master;
		this.atUser = config.atUser;
		config.on( "refresh", newCfg => {
			this.master = newCfg.master;
			this.atUser = newCfg.atUser;
		} );
	}
	
	public getSendMessageFunc( userID: number | "all" | string, type: MessageType, groupID: number = -1 ): SendFunc {
		const client = this.client;
		const atUser = this.atUser;
		if ( type === MessageType.Private ) {
			return async content => {
				/* 发送转发消息 */
				if ( checkoutForward( content ) ) {
					const sendRes = await client.sendPrivateForwardMessage( <number>userID, content );
					if ( sendRes.retcode === 0 ) {
						return sendRes.data.message_id;
					}
					if ( sendRes.retcode === 1404 ) {
						content = "当前实现端不支持发送转发消息";
					} else {
						throw new Error( sendRes.wording || sendRes.msg );
					}
				}
				const sendRes = await client.sendPrivateMsg( <number>userID, content );
				if ( sendRes.retcode === 0 ) {
					return sendRes.data;
				}
				throw new Error( sendRes.wording || sendRes.msg );
			}
		} else {
			return async function ( content, allowAt ) {
				/* 发送转发消息 */
				if ( checkoutForward( content ) ) {
					const sendRes = await client.sendGroupForwardMessage( groupID, content );
					if ( sendRes.retcode === 0 ) {
						return sendRes.data.message_id;
					}
					if ( sendRes.retcode === 1404 ) {
						content = "当前实现端不支持发送转发消息";
					} else {
						throw new Error( sendRes.wording || sendRes.msg );
					}
				}
				
				const buildAtMsg = ( content: core.Sendable ) => {
					const at = core.segment.at( userID );
					if ( typeof content === "string" ) {
						const split = content.length < 60 ? " " : "\n";
						content = [ at, split, content ];
					} else if ( checkIterator( content ) ) {
						content = [ at, " ", ...content ];
					} else {
						content = [ at, " ", content ];
					}
					return content;
				}
				
				if ( userID === "all" ) {
					const atAllRemainRes = await client.getGroupAtAllRemain( groupID );
					if ( atAllRemainRes.retcode === 0 ) {
						allowAt = atAllRemainRes.data.can_at_all ? allowAt : false;
					} else {
						allowAt = atAllRemainRes.retcode === 1404;
					}
					// 强制使用 @全体成员，不受atUser配置控制
					if ( allowAt ) {
						content = buildAtMsg( content );
					}
				} else {
					if ( atUser && allowAt !== false ) {
						content = buildAtMsg( content );
					}
				}
				
				const sendRes = await client.sendGroupMsg( groupID, content );
				console.log(sendRes,"sendRessendRes")
				if ( sendRes.retcode === 0 ) {
					return sendRes.data;
				}
				throw new Error( sendRes.wording || sendRes.msg );
			}
		}
	}
	
	public async sendMaster( content: core.Sendable ): Promise<number | null>
	public async sendMaster( content: core.ForwardElem ): Promise<core.SendForwardMessage | null>
	public async sendMaster( content: core.Sendable | core.ForwardElem ): Promise<core.SendForwardMessage | number | null> {
		let sendRes: core.ActionResponse;
		if ( checkoutForward( content ) ) {
			sendRes = await this.client.sendPrivateForwardMessage( this.master, content );
		} else {
			sendRes = await this.client.sendPrivateMsg( this.master, content );
		}
		return sendRes.retcode === 0 ? sendRes.data : null;
	}
}

export function removeStringPrefix( string: string, prefix: string ): string {
	if ( !bot.config.directive.header.length ) {
		return string.replace( new RegExp( `${ prefix.charAt(0) }|${ prefix.slice(1) }`, "g" ), "" );
	}
	return string.replace( new RegExp( prefix, "g" ), "" );
}

export function isPrivateMessage( data: Message ): data is core.PrivateMessageEvent {
	return data.message_type === "private";
}

export function isGroupMessage( data: Message ): data is core.GroupMessageEvent {
	return data.message_type === "group";
}