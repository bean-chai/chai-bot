import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import { response } from "express";
import { send } from "vite";
import fetch from "node-fetch";
import { segment } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	const aa = messageData.message.filter(item => item.type === 'at')
	
	fetch( `https://api.xingzhige.com/API/LaughTogether/?qq=${aa[0].data?.qq}` ).then( response => {
		return response.buffer()
	} ).then( async res => {
		if ( res ) {
			await sendMessage(segment.image(res))
		}
	} )
	
} );