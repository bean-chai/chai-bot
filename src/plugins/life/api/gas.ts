import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	console.log( matchResult, "weatherMatch" )
	const gas = matchResult.match[0] as string
	if ( gas !== '' ) {
		if ( "group_id" in messageData ) {
			const res = await renderer.asSegment( '/views/gas/people.html', { data: [ messageData.user_id, messageData.group_id, gas ] } )
			if ( res.code === 'ok' ) {
				await sendMessage( res.data )
			}
		}
	}
} );