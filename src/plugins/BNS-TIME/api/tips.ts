import { defineDirective } from "@/modules/command";
import moneyList from "@/utils/money"
import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS-TIME/init";
import * as puppeteer from "puppeteer";
import { sleep } from "@/utils/async";
import { MessageElem } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage('查询中请稍等~')
	
	// const zone = matchResult.match[0]
	// const numberType = matchResult.match[1] === '1' ? 'dd' : matchResult.match[1] === '2' ? 'uu' : 'selfZone'
	
	
	const tipsZone = '' +
		'怀旧服小道消息\n' +
		'一、5.29推出极限挑战副本（被侵蚀的螺旋迷宫）\n' +
		// '\t示例参数：\n' +
		// '\t\t生命：148700\n' +
		// '\t\t治疗：4615\n' +
		// '\t\t防御：1958\n' +
		// '\t\t伤害减免：189\n' +
		// '\t\t战斗中恢复生命：1521\n' +
		// '\n' +
		// '\t\t分解：\n' +
		// '\t\t精制炎虎水：1300个\n' +
		// '\t\t守护水：300个\n' +
		'\n' +
		'二、6.12推出副本血浪鲨湾（东天霸）\n' +
		// '\t示例参数：\n' +
		// '\t\t攻击：20\n' +
		// '\t\t功力：550\n' +
		// '\t\t暴击伤害：550\n' +
		// '\t\t降魔攻击力：15\n' +
		'\n' +
		'\n' +
		'推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'
	await sendMessage(tipsZone)
	let url = ''
	// for ( let i = 0; i<7;i++ ) {
	// 	console.log(i,"ii")
	// 	url = `/assets/tips/tips${i+1}.jpg`
	// 	if(url) {
	// 		const res = await renderer.asForFunction(url,async function (page,) {
	// 			const encoding = 'base64'
	// 			const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
	// 			const element = await page.$( 'img' );
	//
	// 			if ( !element ) {
	// 				throw new Error( "未找到目标元素" );
	// 			}
	//
	// 			return element?.screenshot( option );
	//
	// 		}, null,undefined)
	// 		console.log(res,"ress")
	// 		if ( res.code === 'ok' ) {
	// 			await sendMessage( res.data as MessageElem )
	// 		}
	// 	}
	// }
	
	// if ( res.code === "ok" ) {
	// 	const res = await renderer.asForFunction(url,async function (page,) {
	// 		const encoding = 'base64'
	// 		const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
	// 		const element = await page.$( '#divCommodityLst ul:nth-of-type(2) li:nth-of-type(4) h6' );
	//
	// 		if ( !element ) {
	// 			throw new Error( "未找到目标元素" );
	// 		}
	// 		await sleep(1000)
	//
	// 		return element?.screenshot( option );
	//
	// 	}, null,undefined)
	// 	console.log(res,"ress")
	// 	if ( res.code === 'ok' ) {
	// 		await sendMessage( ['uu实时金价：\n','\n',`uu网址: ${url}`,'\n','\n',res.data as MessageElem] )
	// 	}
	// 	await sendMessage(res.data)
	//
	// }
	
	// if ( numberType === 'selfZone' ) {
	// 	const selfZoneUrl = moneyZone[zone]
	// 	console.log(selfZoneUrl,"selfZoneUrl")
	// 	if(selfZoneUrl) {
	// 		await sendMessage(moneyZone[zone])
	// 	} else {
	// 		await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
	// 	}
	// } else {
	// 	const url = moneyList[numberType][zone]
	// 	console.log( url, "url" )
	// 	if(url) {
	// 		console.log(111)
	// 		if(numberType === 'uu') {
	// 			const res = await renderer.asForFunction(url,async function (page,) {
	// 				const encoding = 'base64'
	// 				const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
	// 				const element = await page.$( '#divCommodityLst ul:nth-of-type(2) li:nth-of-type(4) h6' );
	//
	// 				if ( !element ) {
	// 					throw new Error( "未找到目标元素" );
	// 				}
	// 				await sleep(1000)
	//
	// 				return element?.screenshot( option );
	//
	// 			}, null,undefined)
	// 			console.log(res,"ress")
	// 			if ( res.code === 'ok' ) {
	// 				await sendMessage( ['uu实时金价：\n','\n',`uu网址: ${url}`,'\n','\n',res.data as MessageElem] )
	// 			}
	// 		} else {
	// 			const res = await renderer.asSegment(url,{},undefined, '.width233' )
	//
	// 			if ( res.code === 'ok' ) {
	// 				await sendMessage( ['dd实时金价：\n','\n',`dd网址: ${url}`,'\n','\n', res.data as MessageElem] )
	// 			}
	// 		}
	//
	// 	}else {
	// 		await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
	// 	}
	// }
} );