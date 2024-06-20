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
		'怀旧服6.19小道消息\n' +
		'1.熟练血鲨个人掉落必出八卦（暂定）\n' +
		'\n' +
		'2.副本整体血量下调，副本小怪&boss伤害降低60%，小怪&boss防御力也大幅降低\n' +
		'\n' +
		'3.东天霸落雷范围修改，全图都有可能落雷（远程不能挂机了），落雷速度变慢（方便近战应对）\n' +
		'\n' +
		'4.近战职业的QESS优先级设定为最优先，可以无视其他技能前后摇释放\n' +
		'\n' +
		'5.迷宫副本，旋风，闪电，雷池伤害下调\n' +
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