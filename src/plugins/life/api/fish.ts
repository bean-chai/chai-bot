import { defineDirective } from "@/modules/command";
import { renderer } from "#/life/init";
import { response } from "express";
import { segment } from "@/modules/lib";

const fetch = require('node-fetch');

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {

	fetch( 'https://api.vvhan.com/api/moyu' ).then( response => {
		return response.buffer()
	} ).then( async res => {
		if ( res ) {
		await sendMessage(segment.image(res))
		}
	} )
	
} );