import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	console.log( matchResult, "match" )
	const bossName = matchResult.match[0]
	
	const bossList = {
		'塔尔卡': 'taerka',
		'震地': 'zhendi',
		'巴勒': 'bale',
		'黑巴勒': 'heibale',
		'傻大个': 'shadage',
		'族长巴拉汗': 'balahan',
		'银雪力士': 'yinxuelishi',
		'雷神鸟': 'leishennniao',
		'垂尾狮': 'chuiweishi'
	}
	
	if ( matchResult.match[0] !== '' ) {
		if ( bossList[bossName] ) {
			// await sendMessage('测试123')
			const res = await renderer.asSegment( '/views/strategy/people.html', { data: [bossList[bossName],bossName] } )
			if ( res.code === 'ok' ) {
				await sendMessage( res.data )
			}
		} else {
			await sendMessage( '没有找到这个boss欸，可能是：\n' +
				'1.输入的不是boss完整的全名\n' +
				'2.字打错啦，请好好查看游戏内悬赏boss名，比如巴拉汗（汉）\n' +
				'3.柴柴懒狗还没做这个boss的素材' )
		}
		
		
	} else {
		await sendMessage( '请输入\n 悬赏 boss全名进行查询哦' )
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