import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	const city = matchResult.match[0] as string
	const role = matchResult.match[1]
	if ( city !== '' && role !=='') {
		if ( "group_id" in messageData ) {
			const res = await renderer.asSegment( '/views/role/people.html', { data: [ messageData.user_id, messageData.group_id, city,role ] } )
			if ( res.code === 'ok' ) {
				await sendMessage( res.data )
			}
		}
	} else {
		await sendMessage('查询错误，请检查格式\n' +
			'示例：路况 重庆 北滨路')
	}
} );