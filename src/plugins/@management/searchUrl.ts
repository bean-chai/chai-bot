import { defineDirective } from "@/modules/command";
import idParser from "#/@help/utils/id-parser";
import { MessageType } from "@/modules/message";
import { response } from "express";

export default defineDirective( "order", async ( { sendMessage, matchResult, interval } ) => {
	
	const ulrList = ['https://act.daoju.qq.com/act/a20240402bnsluck/index.html',"https://act.daoju.qq.com/act/a20240428bnshlsecret/index.html","https://act.daoju.qq.com/act/a20240509bnsgift/index.html","https://act.daoju.qq.com/act/a20230621bnsecret/index.html"]

	await sendMessage('查询中请稍后')
	const day = matchResult.match[0].split('-')
	for ( let i = 1; i<=Number(day[1]); i++ ) {
		// let url = `https://act.daoju.qq.com/act/a202406${i < 10 ? '0'+i : i}bnsluck/index.html`
		// let url = `https://act.daoju.qq.com/act/a202406${i < 10 ? '0'+i : i}bnshlsecret/index.html`
		// let url = `https://act.daoju.qq.com/act/a202406${i < 10 ? '0'+i : i}bnsgift/index.html`
		let url = `https://act.daoju.qq.com/act/a202306${i < 10 ? '0'+i : i}bnsecret/index.htmll`
		
		
		fetch(url).then(async response => {
			if ( response.status !== 404 ) {
				await sendMessage( url )
			}
		})
	}
	
// 	const ulrList = ['https://act.daoju.qq.com/act/a20240402bnsluck/index.html',"https://act.daoju.qq.com/act/a20240428bnshlsecret/index.html","https://act.daoju.qq.com/act/a20240509bnsgift/index.html","https://act.daoju.qq.com/act/a20230621bnsecret/index.html"];
//
// 	const day = matchResult.match[0].split('-');
// 	const fetchPromises: Promise<void>[] = [];
//
// 	const fetchData = async (url: string) => {
// 		const response = await fetch(url);
// 		if (response.status !== 404) {
// 			await sendMessage(url);
// 		} else {
// 			await sendMessage([url,'\n','无效链接'])
// 		}
// 	}
//
// 	ulrList.forEach((url) => {
// 		for (let i = 1; i <= Number(day[1]); i++) {
// 			const fullUrl = `${url.slice(0, -5)}${i < 10 ? '0'+i : i}${url.slice(-5)}`;
// 			fetchPromises.push(fetchData(fullUrl).then(() => {}));
// 		}
// 	});
//
// // 等待所有请求完成
// 	Promise.all(fetchPromises).then(() => {
// 		console.log('All requests completed');
// 	}).catch((err) => {
// 		console.error('An error occurred:', err);
// 	});
} );