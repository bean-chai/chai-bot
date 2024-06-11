import { defineDirective } from "@/modules/command";
import moneyList from "@/utils/money"
import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/life/init";
import * as puppeteer from "puppeteer";
import { sleep } from "@/utils/async";
import { MessageElem } from "@/modules/lib";
import fetch from "node-fetch";
import { response } from "express";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	
	fetch('https://api.vvhan.com/api/60s').then((response) => {
		return response.json()
	}).then(async res => {
		console.log( res, "resss" )
		if ( res.success ) {
			const result = res.data.map( item => item + '\n' + '\n' );
			await sendMessage( ['chaichai-BOT 小助手 -- 今日新闻\n','\n',...result,'\n','推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'] )
		}
	})
	
} );