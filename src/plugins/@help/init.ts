import { OrderConfig } from "@/modules/command";
import { Renderer } from "@/modules/renderer";
import * as r from "./routes";
import { Router } from "express";
import { definePlugin } from "@/modules/plugin";
import { GroupIncreaseNoticeEvent, GroupRecallNoticeEvent, segment } from "@/modules/lib";
import bot from "ROOT";
import { MessageType } from "@/modules/message";
import BaseClient from "@/modules/lib/core/base-client/base";

const help: OrderConfig = {
	type: "order",
	cmdKey: "adachi.help",
	desc: [ "帮助", "(-k)" ],
	headers: [ "help" ],
	regexps: [ "(-k)?" ],
	main: "achieves/help",
	detail: "追加 -k 来查看指令 key 值"
};

const detail: OrderConfig = {
	type: "order",
	cmdKey: "adachi.detail",
	desc: [ "指令详细", "[序号]" ],
	headers: [ "detail" ],
	regexps: [ "\\d+" ],
	main: "achieves/detail",
	display: false
};

const call: OrderConfig = {
	type: "order",
	cmdKey: "adachi.call",
	desc: [ "联系bot持有者", "[内容]" ],
	headers: [ "call" ],
	regexps: [ ".+" ],
	scope: 2,
	ignoreCase: false,
	main: "achieves/call",
	detail: "向 bot 持有者反馈信息\n" +
			"仅允许发送包含文字/图片的内容"
};

const serverRouters: Record<string, Router> = {
	"/api/help": r.HelpRoute
}

export let renderer: Renderer;

function sendGroupMsg(data:GroupIncreaseNoticeEvent) {
	// 虎牙隐藏定制需求
	if(data.group_id === 892266970) {
		const sendMessageFunc = bot.message.getSendMessageFunc( data.user_id, MessageType.Group, 892266970 );
		const aa = sendMessageFunc(['请注意：进群请修改马甲：\n拾忆 灵剑 虎牙丶隐藏\nYY交流组队（下单）频道：76728009'],true)
		
	}
}

export default definePlugin( {
	name: "help",
	cfgList: [ help, detail, call ],
	server: {
		routers: serverRouters
	},
	publicDirs: [ "assets", "views", "adachi-lib" ],
	cdnLib: {
		libs: {
			"vue.esm-browser.prod.js": "https://mari-files.oss-cn-beijing.aliyuncs.com/lib/vue%403.2.47/vue.esm-browser.prod.js"
		}
	},
	mounted( params ) {
		/* 未启用卡片帮助时不启动服务 */
		renderer = params.renderRegister( "#app", "views" );
		// Client.on("notice.group.member_increase", data => {
		// 	console.log(data,"data111111")
		// })
		params.client.on('notice.group.member_increase', sendGroupMsg)
		
		
	},
	unmounted(params) {
		params.client.off('notice.group.member_increase', sendGroupMsg)
	}
} );