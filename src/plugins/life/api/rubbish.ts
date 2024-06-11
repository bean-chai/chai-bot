import { defineDirective } from "@/modules/command";
import zoneList from "@/utils/zoneList"

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	console.log( matchResult, "weatherMatch" )
	const rubbish = matchResult.match[0] as string
	if ( rubbish !== '' ) {
		if ( "group_id" in messageData ) {
			fetch( `https://api.oioweb.cn/api/common/rubbish?name=${ rubbish }` )
				.then( ( response ) => {
					return response.json();
				} )
				.then( async ( e ) => {
					console.log(e,"eee")
					if ( e.code === 200 ) {
						await sendMessage(`${matchResult.match[0]}是${e.result[0].category == 2 ? '湿垃圾' : e.result[0].category == 1 ? "有害垃圾" : e.result[0].category == 0 ? "可回收垃圾" : "干垃圾"}`)
					} else {
						await sendMessage( '查询失败，请稍后重试' )
					}
					
				} );
			// const res = await renderer.asSegment( '/views/rubbish/people.html', { data: [ messageData.user_id, messageData.group_id, rubbish ] } )
			// if ( res.code === 'ok' ) {
			// 	await sendMessage( res.data )
			// }
		}
	}
} );