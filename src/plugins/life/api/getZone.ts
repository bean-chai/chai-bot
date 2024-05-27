import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	await sendMessage('查询中请稍等~')
	
	const zone = matchResult.match[0] as string
	if(matchResult.match.length !== 2 || matchResult.match[0] === '' || matchResult.match[1] === '') {
		await sendMessage('格式错误，正确格式为：查询 南道拳豪（大区） 你算哪只傻兔兔灬（角色名） ')
		return
	}
	
	const url = zoneList[zone]
	
	if(url) {
		if ( "group_id" in messageData ) {
			const res = await renderer.asSegment( '/views/userInfo/people.html', { data: [messageData.user_id,messageData.group_id,...matchResult.match].join(',') } )
			if(res.code === 'ok') {
				await sendMessage(res.data)
			}
		}
	} else {
		await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
	}
	
	
} );