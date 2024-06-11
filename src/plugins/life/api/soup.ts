import { defineDirective } from "@/modules/command";

import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import { response } from "express";
import { send } from "vite";
import fetch from "node-fetch";
import { segment } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData,matchResult  } ) => {
	const aa = messageData.message.filter(item => item.type === 'at')
	
	fetch( `https://v2.alapi.cn/api/soul?token=JOc8Hv8hVk9Qw856&format=json` ).then( response => {
		return response.json()
	} ).then( async res => {
		if ( res ) {
			if(res.code === 200) {
				await sendMessage(res.data.content)
			}
		}
	} )
	
} );