import { defineDirective } from "@/modules/command";
import moneyList from "@/utils/money"
import { RenderResult } from "@/modules/renderer";
import { renderer } from "#/BNS/init";
import * as puppeteer from "puppeteer";
import { sleep } from "@/utils/async";
import { MessageElem } from "@/modules/lib";

export default defineDirective( "order", async ( { sendMessage, messageData, matchResult } ) => {
	await sendMessage('查询中请稍等~')
	
	const zone = matchResult.match[0]
	const numberType = matchResult.match[1] === '1' ? 'dd' : matchResult.match[1] === '2' ? 'uu' : 'selfZone'
	
	const moneyZone = {
		'月华神': '月华神-实时金价：\n100元 = 5050\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'极致时代': '极致时代-实时金价：\n100元 = 5050\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'无日峰': '无日峰-实时金价：\n100元 = 5550\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'铁傀王': '铁傀王-实时金价：\n100元 = 5550\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'飞扇堂': '飞扇堂-实时金价：\n100元 = 5550\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'御剑出鞘': '御剑出鞘-实时金价：\n100元 = 5550\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'似水华年': '似水华年-实时金价：\n100元 = 5550\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'花样年华': '花样年华-实时金价：\n100元 = 5050\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'南道拳豪': '南道拳豪-实时金价：\n100元 = 5050\n数据来源：剑灵商人小火车\nwx：huoc88\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'直上云霄': '直上云霄-实时金价：\n100元 = 6900\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'涅槃重生': '涅槃重生-实时金价：\n100元 = 6900\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'疾剑无形': '疾剑无形-实时金价：\n100元 = 6900\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'华舞天青': '华舞天青-实时金价：\n100元 = 6900\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'无限火力': '无限火力-实时金价：\n100元 = 6900\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）',
		'仙衣舞绝色': '仙衣舞绝色-实时金价：\n100元 = 5100\n数据来源：商人娜娜\nwx：h66671055\n\n推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'
	}
	
	if ( numberType === 'selfZone' ) {
		const selfZoneUrl = moneyZone[zone]
		console.log(selfZoneUrl,"selfZoneUrl")
		if(selfZoneUrl) {
			await sendMessage(moneyZone[zone])
		} else {
				await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
		}
	} else {
		const url = moneyList[numberType][zone]
		console.log( url, "url" )
		if(url) {
			console.log(111)
			if(numberType === 'uu') {
				const res = await renderer.asForFunction(url,async function (page,) {
					const encoding = 'base64'
					const option: puppeteer.ScreenshotOptions = { encoding, type: 'jpeg', quality: 100 };
					const element = await page.$( '#divCommodityLst ul:nth-of-type(2) li:nth-of-type(4) h6' );
					
					if ( !element ) {
						throw new Error( "未找到目标元素" );
					}
					await sleep(1000)
					
					return element?.screenshot( option );
					
				}, null,undefined)
				console.log(res,"ress")
				if ( res.code === 'ok' ) {
					await sendMessage( ['uu实时金价：\n','\n',`uu网址: ${url}`,'\n','\n',res.data as MessageElem,'\n','\n','推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'] )
				}
			} else {
				const res = await renderer.asSegment(url,{},undefined, '.width233' )
				
				if ( res.code === 'ok' ) {
					await sendMessage( ['dd实时金价：\n','\n',`dd网址: ${url}`,'\n','\n', res.data as MessageElem,'\n','\n','推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）'] )
				}
			}
			
		}else {
			await sendMessage('没有找到这个服务器哦，请重新检查后再尝试')
		}
	}
} );