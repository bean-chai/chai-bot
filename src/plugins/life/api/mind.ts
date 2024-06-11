import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import { response } from "express";
import { send } from "vite";
import fetch from "node-fetch";
import { segment } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	const aa = messageData.message.filter(item => item.type === 'at')
	
	fetch( `https://api.tangdouz.com/beill.php?name=${matchResult.match[0]}` ).then( response => {
		return response.text()
	} ).then( async res => {
		if ( res ) {
			console.log(res,"resss")
			// await sendMessage(segment.image(res))
			await sendMessage(res)
		}
	} )
	
} );