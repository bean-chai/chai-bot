import express, { response } from "express";
import bot from "ROOT";
import { MessageType } from "@/modules/message";
import zoneList from "@/utils/zoneList"
import onlineList from "@/utils/online"
import weapenList from "@/utils/weapenList";

export default express.Router().get( "/", async ( req: {
	query: { city: string, role: string, userId: string, groupId: number }
}, res ) => {
	const dataList = req.query
	console.log( dataList, "dataListcity" )
	
	const sendMessage = bot.message.getSendMessageFunc( req.query.userId, MessageType.Group, req.query.groupId )
	// const userUrl = zoneList[dataList.zone]
	// const baseUrl = `${userUrl}${dataList.userName}`
	//
	// let accountId = ''
	
	fetch(`https://api.map.baidu.com/traffic/v1/road?road_name=${dataList.role}&city=${dataList.city}&ak=gInUq2gpyjvbnK0ASBThGsMcu5Mv0I8H`).then((response) => {
		return response.json()
	}).then(async (e) => {
		console.log(e,"daohange")
		if ( e.message === '成功' ) {
			res.send( { role: e,city: dataList.city,roleName:dataList.role } )
		} else {
			await sendMessage( '查询失败，请稍后重试' )
		}
	})
	//
	
} )