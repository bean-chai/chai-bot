import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS-TIME/init";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	console.log( matchResult, "match" )
	const bossName = matchResult.match[0]
	
	const bossList = {
		'剑士': 'jianshi',
		'力士': 'lishi',
		'刺客': 'cike',
		'召唤': 'zhaohuan',
		'气功': 'qigong',
		'灵剑': 'lingjian',
		'拳师': 'quanshi'
	}
	
	if ( matchResult.match[0] !== '' ) {
		if ( bossList[bossName] ) {
			// await sendMessage('测试123')
			const res = await renderer.asSegment( '/views/entry/people.html', { data: [bossList[bossName],bossName] } )
			if ( res.code === 'ok' ) {
				await sendMessage( res.data )
			}
		} else {
			await sendMessage( '没有找到这个职业欸，可能是：\n' +
				'1.怀旧服暂未开放该职业\n' +
				'2.字打错啦，请好好检查职业名称\n')
		}
		
		
	} else {
		await sendMessage( '请输入\n 词条 职业全名 进行查询哦' )
	}
	
	// const zone = matchResult.match[0] as string
	// if(matchResult.match.length !== 2 || matchResult.match[0] === '' || matchResult.match[1] === '') {
	// 	await sendMessage('格式错误，正确格式为：查询 南道拳豪（大区） 你算哪只傻兔兔灬（角色名） ')
	// 	return
	// }
	//
	// const url = zoneList[zone]
	//
	// if(url) {
	// 	if ( "group_id" in messageData ) {
	
	// 	}
	// } else {
	// 	await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
	// }
	//
	
} );