// /src/plugins/example/init.ts
import { Renderer } from "@/modules/renderer";
import { definePlugin } from "@/modules/plugin";
import express, { Router } from "express";
import * as r from "./routes";
import fetch from "node-fetch";
import * as puppeteer from "puppeteer";
import { MessageElem } from "@/modules/lib";
import { createScalarToken } from "yaml/dist/parse/cst-scalar";

export let renderer: Renderer;

const serverRouters: Record<string, Router> = {
	"/api/getWeather": r.Weather,
	"/api/getRubbish": r.Rubbish,
	"/api/getGas": r.Gas,
	"/api/getRole": r.Role
	
}

// async function mofish(params) {
// 	console.log(params,"params")
// 	const res = await renderer.asSegment( 'https://api.vvhan.com/api/moyu', {}, undefined, 'img' )
// 	if ( res.code === 'ok' ) {
// 		await sendMessage( res.data )
// 	}
// }


export default definePlugin( {
	name: "生活小助手",
	cfgList: [
		{
			type: "order",
			cmdKey: "chai.weather",
			desc: [ "城市天气", "[城市]" ],
			headers: [ "__天气" ],
			regexps: [ "[\\u4e00-\\u9fa5]+" ],
			main: "api/weather",
			detail: "查询方式：\n天气 重庆（城市）"
		},
		{
			type: "order",
			cmdKey: "chai.rubbish",
			desc: [ "垃圾分类", "[物品]" ],
			headers: [ "__分类" ],
			regexps: [ "[\\u4e00-\\u9fa5]+" ],
			main: "api/rubbish",
			detail: "查询方式：\n分类 香蕉"
		},
		{
			type: "order",
			cmdKey: "chai.gas",
			desc: [ "今日油价", "[省份]" ],
			headers: [ "__油价" ],
			regexps: [ "[\\u4e00-\\u9fa5]+" ],
			main: "api/gas",
			detail: "查询方式：\n油价 云南"
		},
		{
			type: "order",
			cmdKey: "chai.role",
			desc: [ "实时路况", "[城市] [道路]" ],
			headers: [ "__路况" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", ".*" ],
			main: "api/role",
			detail: "查询方式：\n路况 重庆 北滨路"
		},
		{
			type: "order",
			cmdKey: "chai.news",
			desc: [ "新闻", "" ],
			headers: [ "__新闻" ],
			regexps: [],
			main: "api/news",
			detail: "查询方式：\n新闻"
		},
		{
			type: "order",
			cmdKey: "chai.fish",
			desc: [ "摸鱼日历", "" ],
			headers: [ "__摸鱼" ],
			regexps: [],
			main: "api/fish",
			detail: "查询方式：\n摸鱼"
		},
		{
			type: "order",
			cmdKey: "chai.lucky",
			desc: [ "今日运势", "" ],
			headers: [ "__今日运势" ],
			regexps: [],
			main: "api/lucky",
			detail: "查询方式：\n今日运势 或 #今日运势"
		},
		{
			type: "order",
			cmdKey: "chai.happy",
			desc: [ "喜报", "[喜报的内容]" ],
			headers: [ "__喜报" ],
			regexps: [ ".+" ],
			main: "api/happy",
			detail: "查询方式：\n喜报 我考上地瓜了"
		},
		{
			type: "order",
			cmdKey: "chai.speak",
			desc: [ "群友说","[@一个人] [要说的内容]" ],
			headers: [ "__群友说" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]",".+" ],
			main: "api/speak",
			detail: "查询方式：\n群友说 @柴柴 我考上地瓜啦"
		},
		{
			type: "order",
			cmdKey: "chai.soup",
			desc: [ "毒鸡汤","" ],
			headers: [ "__毒鸡汤" ],
			regexps: [  ],
			main: "api/soup",
			detail: "查询方式：\n毒鸡汤"
		},
		{
			type: "order",
			cmdKey: "chai.dog",
			desc: [ "舔狗日记","" ],
			headers: [ "__舔狗日记" ],
			regexps: [  ],
			main: "api/dog",
			detail: "查询方式：\n舔狗日记"
		},
		{
			type: "order",
			cmdKey: "chai.mind",
			desc: [ "发病","[发病的对象]" ],
			headers: [ "__发病" ],
			regexps: [".+"],
			main: "api/mind",
			detail: "查询方式：\n发病 柴柴"
		},
		// {
		// 	type: "order",
		// 	cmdKey: "chai.card",
		// 	desc: [ "签到", "" ],
		// 	headers: [ "__签到" ],
		// 	regexps: [],
		// 	main: "api/card",
		// 	detail: "查询方式：\n签到 或 #签到"
		// }
		{
			type: "order",
			cmdKey: "chai.bite",
			desc: [ "咬", "" ],
			headers: [ "__咬" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/bite",
			detail: "使用方式：\n咬@要咬的人"
		},
		{
			type: "order",
			cmdKey: "chai.tip",
			desc: [ "顶", "" ],
			headers: [ "__顶" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/tip",
			detail: "使用方式：\n顶@要顶的人"
		},
		{
			type: "order",
			cmdKey: "chai.eat",
			desc: [ "吃", "" ],
			headers: [ "__吃" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/eat",
			detail: "使用方式：\n吃@要吃的人"
		},
		{
			type: "order",
			cmdKey: "chai.hug",
			desc: [ "抱", "" ],
			headers: [ "__抱" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/hug",
			detail: "使用方式：\n抱@要抱的人"
		},
		{
			type: "order",
			cmdKey: "chai.lol",
			desc: [ "笑", "" ],
			headers: [ "__笑" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/lol",
			detail: "使用方式：\n笑@要笑的人"
		},
		{
			type: "order",
			cmdKey: "chai.hit",
			desc: [ "锤", "" ],
			headers: [ "__锤" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/hit",
			detail: "使用方式：\n锤@要锤的人"
		},
		{
			type: "order",
			cmdKey: "chai.look",
			desc: [ "指", "" ],
			headers: [ "__指" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/look",
			detail: "使用方式：\n指@要指的人"
		},
		{
			type: "order",
			cmdKey: "chai.beat",
			desc: [ "拍", "" ],
			headers: [ "__拍" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/beat",
			detail: "使用方式：\n拍@要拍的人"
		},
		{
			type: "order",
			cmdKey: "chai.grab",
			desc: [ "抓", "" ],
			headers: [ "__抓" ],
			regexps: [ "\\[CQ:at,qq=\\d+.*]" ],
			main: "api/grab",
			detail: "使用方式：\n抓@要抓的人"
		}
	],
	server: {
		routers: serverRouters
	},
	publicDirs: [ "/people", "views", "assets" ],
	async mounted( params ) {
		renderer = params.renderRegister( ".width233", "" );
		// await params.client.sendGroupMsg(123123, mofish(params))
		// console.log(params,"params")
		// setInterval(mofish, 60000);
	},
} )