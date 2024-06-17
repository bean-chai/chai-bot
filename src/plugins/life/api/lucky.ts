import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import { response } from "express";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	await sendMessage('查询中请稍等~')
	if(messageData?.user_id === 2787922490) {
		await sendMessage(['今日运势\n','超级无敌宇宙第一吉','\n','★★★★★★★★★★★★★★★','\n','柴柴的话超级无敌吉中吉就完事了','\n','五福临门 万事顺利 万事顺意 六蓄兴旺 四季平安 五福临门 风光胜旧 岁序更新 官运亨通 美梦连连 万事顺利 荣华富贵 吉星高照 吉祥如意 开春大吉 五谷丰登 财源广进 合家欢乐 飞黄腾达 万事顺意 荣华富贵 一帆风顺 金玉满堂 龙凤呈祥'])
		return
	}
	
	// const zone = matchResult.match[0] as string
	// if( matchResult.match[0] === '') {
	// 	await sendMessage('格式错误，正确格式为：\n材料 喷风（可选喷风、风岛首饰、万威） ')
	// 	return
	// }
	
	fetch(`https://api.fanlisky.cn/api/qr-fortune/get/${messageData.user_id}`).then(response => {
		return response.json()
	}).then(async res => {
		if ( res.code === 200 ) {
			await sendMessage(['今日运势\n',res.data.fortuneSummary,'\n',res.data.luckyStar,'\n',res.data.signText,'\n',res.data.unSignText])
		} else {
			await sendMessage('接口崩溃，请稍后再试！')
		}
		
	})
	
	
	// if(zone==='风岛首饰' || zone==='喷风' || zone==='万威') {
	// 	if ( "group_id" in messageData ) {
			// const res = await renderer.asSegment( '/views/grown/people.html', { data: [messageData.user_id,messageData.group_id].join(',') } )
			// if(res.code === 'ok') {
			// 	await sendMessage(res.data)
			// }
		// }
	// } else {
	// 	await sendMessage('这个装备暂时没有统计耗材数据哦')
	// }
	
	
} );