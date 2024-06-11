import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import { response } from "express";
import { send } from "vite";
import fetch from "node-fetch";
import { segment } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	const aa = messageData.message.filter(item => item.type === 'at')
	fetch(`https://api.oioweb.cn/api/qq/info?qq=${aa[0].data?.qq}`).then(response => {
		return response.json()
	}).then(async res => {
		if ( res.code === 200 ) {
			fetch( `https://api.tangdouz.com/qqname.php?qq=${ aa[0].data?.qq }&name=${ res.result.nickname }` ).then( async res1 => {
				console.log( res, "resssssss" )
				if ( res1.status === 200 ) {
					fetch( `https://api.tangdouz.com/wz/qunshuo.php?qq=${ aa[0].data?.qq }&nr=${ matchResult.match[1] }` ).then( response => {
						return response.buffer()
					} ).then( async res => {
						if ( res ) {
							await sendMessage( segment.image( res ) )
						}
					} )
				} else {
					await sendMessage( '接口错误请稍后重试！' )
				}
			} )
			
		} else {
			await sendMessage( '接口错误请稍后重试！' )
			
		}
		
	})

	
	
} );