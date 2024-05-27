import express from "express";
import bot from "ROOT";
import { MessageType } from "@/modules/message";
import zoneList from "@/utils/zoneList"
import onlineList from "@/utils/online"
import weapenList from "@/utils/weapenList";

export default express.Router().get( "/", async ( req: {query: {id:string,groupId:number,zone:string,userName:string}}, res ) => {
	const dataList = req.query
	
	const sendMessage = bot.message.getSendMessageFunc( req.query.id, MessageType.Group, req.query.groupId)
	const userUrl = zoneList[dataList.zone]
	const baseUrl = `${userUrl}${dataList.userName}`
	
	let accountId = ''
	
	fetch(baseUrl)
		.then((response) => {
			return response.json();
		})
		.then(async ( e ) => {
			accountId = e.account_id
			
			const onlineUrl = onlineList[dataList.zone]
			if(e.account_id === null) {
				await sendMessage('查询失败，原因可能为\n' +
					'1.用户名错误（请注意用户名的特殊符号也要输入正确哦）\n' +
					'2.该角色并不属于该服务器\n' +
					'3.接口崩溃，请稍后再试')
			} else {
				console.log(accountId,"accountId")
				const url = `${onlineUrl}?guid=${accountId}`
				fetch(url)
					.then((response) => {
						return response.json();
					})
					.then(async ( info ) => {
						res.send({online: info})
					});
			}
		});
} )