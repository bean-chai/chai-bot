import express from "express";
import bot from "ROOT";
import { MessageType } from "@/modules/message";
import zoneList from "@/utils/zoneList"
import onlineList from "@/utils/online"
import weapenList from "@/utils/weapenList";

export default express.Router().get( "/", async ( req: {
	query: { rubbish: string, userId: string, groupId: number }
}, res ) => {
	const dataList = req.query
	console.log( dataList, "dataListforweather" )
	
	const sendMessage = bot.message.getSendMessageFunc( req.query.userId, MessageType.Group, req.query.groupId )
	// const userUrl = zoneList[dataList.zone]
	// const baseUrl = `${userUrl}${dataList.userName}`
	//
	// let accountId = ''
	//
	fetch( `https://api.oioweb.cn/api/common/rubbish?name=${ dataList.rubbish }` )
		.then( ( response ) => {
			return response.json();
		} )
		.then( async ( e ) => {
			console.log(e,"eee")
			if ( e.code === 200 ) {
				res.send( { rubbish: e } )
			} else {
				await sendMessage( '查询失败，请稍后重试' )
			}
			
		} );
} )