// /src/plugins/example/init.ts
import { Renderer } from "@/modules/renderer";
import { definePlugin } from "@/modules/plugin";
import express, { Router } from "express";
import * as r from "./routes";

export let renderer: Renderer;

const serverRouters: Record<string, Router> = {
	"/api/getUserInfo": r.UserRoute,
	"/api/getOnline": r.UserOnline

}

export default definePlugin( {
	name: "灵灵-正式服",
	cfgList: [
		{
			type: "order",
			cmdKey: "chai.searchAll",
			desc: [ "查询装备", "[大区全名] [角色全名]" ],
			headers: [ "__查询","__装备" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", ".*" ],
			main: "api/getZone",
			detail: "查询方式：\n查询 南道拳豪（大区全名） 你算哪只傻兔兔灬（角色全名）"
		},
		{
			type: "order",
			cmdKey: "chai.money",
			desc: [ "金价", "[大区全名]" ],
			headers: [ "__金价" ],
			regexps: [ "[\\u4e00-\\u9fa5]+"],
			main: "api/money",
			detail: "查询方式：\n金价 南道拳豪（大区全名）"
		},
		{
			type: "order",
			cmdKey: "chai.online",
			desc: [ "在线情况", "[大区全名] [角色全名]" ],
			headers: [ "__在线" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", ".*" ],
			main: "api/online",
			detail: "查询方式：\n在线 南道拳豪（大区全名） 你算哪只傻兔兔灬（角色全名）"
		},
		{
			type: "order",
			cmdKey: "chai.tips",
			desc: [ "小道消息", "" ],
			headers: [ "__小道消息" ],
			regexps: [],
			main: "api/tips",
			detail: "查询方式：\n小道消息"
		},
		{
			type: "order",
			cmdKey: "chai.strategy",
			desc: [ "悬赏攻略", "[boss全名]" ],
			headers: [ "__悬赏" ],
			regexps: ["[\\u4e00-\\u9fa5]+"],
			main: "api/strategy",
			detail: "查询方式：\n悬赏 塔尔卡（boss全名）"
		},
	],
	server: {
		routers: serverRouters
	},
	publicDirs: [ "/people", "views", "assets" ],
	async mounted( param ) {
		renderer = param.renderRegister( ".width233", "" );
		
	},
} )