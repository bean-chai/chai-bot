import { defineDirective } from "@/modules/command";
import moneyList from "@/utils/money"
import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";
import * as puppeteer from "puppeteer";
import { sleep } from "@/utils/async";
import { MessageElem } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage('查询中请稍等~')
	// await sendMessage('小道消息更新中，请耐心等待公告~')
	// return
	
	// const zone = matchResult.match[0]
	// const numberType = matchResult.match[1] === '1' ? 'dd' : matchResult.match[1] === '2' ? 'uu' : 'selfZone'
	
	
	const tipsZone = '' +
		'国服2024.6.20更新小道消息\n' +
		'1.更新新灵，名称雷神灵，野外boss转盘产出（基亚、真·基亚）。（强化使用神龙水）\n' +
		'\n' +
		'2.每日、周本、封魔箱子变更，名称：雨滴箱，奖励待定\n' +
		'\n' +
		'3.飞龙工商更新\n' +
		'\n' +
		'4.其余更新待定，后续会持续更新\n' +
		'\n' +
		'相关图片正在发送中~'+
		'\n' +
		'\n' +
		'推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'
	await sendMessage(tipsZone)
	let url = ''
	for ( let i = 0; i<5;i++ ) {
		console.log(i,"ii")
		url = `/assets/tips/tips${i+1}.png`
		if(url) {
			const res = await renderer.asForFunction(url,async function (page,) {
				const encoding = 'base64'
				const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
				const element = await page.$( 'img' );
				
				if ( !element ) {
					throw new Error( "未找到目标元素" );
				}
				
				return element?.screenshot( option );
				
			}, null,undefined)
			console.log(res,"ress")
			if ( res.code === 'ok' ) {
				await sendMessage( res.data as MessageElem )
			}
		}
	}
	
} );