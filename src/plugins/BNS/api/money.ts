import { defineDirective } from "@/modules/command";
import moneyList from "@/utils/money"
import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";
import * as puppeteer from "puppeteer";
import { sleep } from "@/utils/async";
import { MessageElem } from "@/modules/lib";
import { response } from "express";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage( '查询中请稍等~' )
	
	const zone = matchResult.match[0]
	const numberType = matchResult.match[1] === '1' ? 'dd' : matchResult.match[1] === '2' ? 'uu' : 'selfZone'
	
	let moneyZone = []
	
	
	fetch('http://45.155.220.111:3000/chai/search').then(response => {
		return response.json()
	}).then(async res => {
		moneyZone = res
		for ( const item of moneyZone ) {
			if ( item.zone === zone ) {
				await sendMessage( `${ zone }-商人实时金价：\n100元 = ${ item.money }\n数据来源：${item.name === '车车' ? '剑灵商人小火车' : '商人娜娜'}\nwx：${item.name === '车车' ? 'huoc88' : 'h66671055'}\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）` )
			}
			
		}
	})

	// 	'月华神': '月华神-商人实时金价：\n100元 = 6150\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'极致时代': '极致时代-商人实时金价：\n100元 = 6150\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'无日峰': '无日峰-商人实时金价：\n100元 = 6450\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'铁傀王': '铁傀王-商人实时金价：\n100元 = 6450\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'飞扇堂': '飞扇堂-商人实时金价：\n100元 = 6450\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'御剑出鞘': '御剑出鞘-商人实时金价：\n100元 = 6450\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'似水华年': '似水华年-商人实时金价：\n100元 = 6450\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'花样年华': '花样年华-商人实时金价：\n100元 = 6100\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'南道拳豪': '南道拳豪-商人实时金价：\n100元 = 6100\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'直上云霄': '直上云霄-商人实时金价：\n100元 = 7100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'涅槃重生': '涅槃重生-商人实时金价：\n100元 = 7100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'疾剑无形': '疾剑无形-商人实时金价：\n100元 = 7100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'华舞天青': '华舞天青-商人实时金价：\n100元 = 7100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'无限火力': '无限火力-商人实时金价：\n100元 = 7100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
	// 	'仙衣舞绝色': '仙衣舞绝色-商人实时金价：\n100元 = 5250\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'
	// }
	
	// const selfZoneUrl = moneyZone[zone]
	// console.log( selfZoneUrl, "selfZoneUrl" )
	// if ( selfZoneUrl ) {
		// await sendMessage( moneyZone[zone] )
	// } else {
	// 	await sendMessage( '没有找到这个服务器哦，请重新检查后再尝试' )
	// 	return
	// }
	const url = moneyList['uu'][zone]
	const url1 = moneyList['dd'][zone]
	
	if ( url || url1 ) {
		console.log( 111 )
		const res = await renderer.asForFunction( url, async function ( page, ) {
			const encoding = 'base64'
			const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
			const element = await page.$( '#divCommodityLst ul:nth-of-type(2) li:nth-of-type(4) h6' );
			
			if ( !element ) {
				throw new Error( "未找到目标元素" );
			}
			await sleep( 1000 )
			
			return element?.screenshot( option );
			
		}, null, undefined )
		if ( res.code === 'ok' ) {
			await sendMessage( [ `${zone}uu实时金价：\n`, '\n', `uu网址: ${ url }`, '\n', '\n', res.data as MessageElem, '\n', '\n', '推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）' ] )
		}
		const res1 = await renderer.asSegment( url1, {}, undefined, '.width233' )
		
		if ( res1.code === 'ok' ) {
			await sendMessage( [ `${zone}dd实时金价：\n`, '\n', `dd网址: ${ url1 }`, '\n', '\n', res1.data as MessageElem, '\n', '\n', '推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）' ] )
		}
		
	} else {
		await sendMessage( '正式服没有找到这个服务器哦，请重新检查后再尝试\n' +
			'正式服金价指令：金价 区服\n' +
			'怀旧服金价指令：怀旧金价 区服' )
	}
} );