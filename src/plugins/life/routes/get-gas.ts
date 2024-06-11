import express from "express";
import bot from "ROOT";
import { MessageType } from "@/modules/message";
import zoneList from "@/utils/zoneList"
import onlineList from "@/utils/online"
import weapenList from "@/utils/weapenList";

export default express.Router().get( "/", async ( req: {
	query: { gas: string, userId: string, groupId: number }
}, res ) => {
	const dataList = req.query
	
	const sendMessage = bot.message.getSendMessageFunc( req.query.userId, MessageType.Group, req.query.groupId )
	// const userUrl = zoneList[dataList.zone]
	// const baseUrl = `${userUrl}${dataList.userName}`
	//
	// let accountId = ''
	//
	fetch( `https://api.oioweb.cn/api/common/GasolinePriceQuery` )
		.then( ( response ) => {
			return response.json();
		} )
		.then( async ( e ) => {
			if ( e.code === 200 ) {
				console.log(dataList,"datalist")
				console.log(e,"eee123")
				const aa = e.result.find(item => item.Region === dataList.gas)
				if(aa !== undefined) {
					res.send( { gas: e,city:dataList.gas } )
				} else {
					await sendMessage('没有找到这个省份哦，可能原因：\n' +
						'1.该省份暂不支持油价查询\n' +
						'2.省份名称输入错误（不需要带省字）\n' +
						'示例：油价 云南')
				}
			} else {
				await sendMessage( '查询失败，请稍后重试' )
			}
			
			
			// accountId = e.account_id
			//
			// const onlineUrl = onlineList[dataList.zone]
			// if(e.account_id === null) {
			// 	await sendMessage('查询失败，原因可能为\n' +
			// 		'1.用户名错误（请注意用户名的特殊符号也要输入正确哦）\n' +
			// 		'2.该角色并不属于该服务器\n' +
			// 		'3.接口崩溃，请稍后再试')
			// } else {
			// 	console.log(accountId,"accountId")
			// 	const url = `${onlineUrl}?guid=${accountId}`
			// 	fetch(url)
			// 		.then((response) => {
			// 			return response.json();
			// 		})
			// 		.then(async ( info ) => {
			// 		});
			// }
		} );
} )