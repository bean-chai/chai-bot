import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	await sendMessage('查询中请稍等~')
	
	const zone = matchResult.match[0] as string
	if( matchResult.match[0] === '') {
		await sendMessage('格式错误，正确格式为：\n材料 喷风（可选喷风、风岛首饰、万威） ')
		return
	}
	
	
	if(zone==='风岛首饰' || zone==='喷风' || zone==='万威' || zone ==='狂虎' || zone==='海意' || zone==='九尾灵' || zone==='海意' || zone==='盛放') {
		if ( "group_id" in messageData ) {
			const res = await renderer.asSegment( '/views/grown/people.html', { data: [messageData.user_id,messageData.group_id,zone].join(',') } )
			if(res.code === 'ok') {
				await sendMessage(res.data)
			}
		}
	} else {
		await sendMessage('柴柴懒狗暂时没有给这个装备暂时没有统计耗材数据哦')
	}
	
	
} );