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
	name: "灵灵",
	cfgList: [
		{
			type: "order",
			cmdKey: "chai.searchAll",
			desc: [ "查询装备", "[大区] [角色名]" ],
			headers: [ "__查询","__装备" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", ".*" ],
			main: "api/getZone",
			detail: "查询方式：查询 南道拳豪（大区） 你算哪只傻兔兔灬（角色名）"
		},
		{
			type: "order",
			cmdKey: "chai.money",
			desc: [ "金价", "[大区] [渠道(1-3)]" ],
			headers: [ "__金价" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", "[1-3]"],
			main: "api/money",
			detail: "查询方式：金价 南道拳豪（大区） 1（1：DD，2：UU，3：各区商人）"
		},
		{
			type: "order",
			cmdKey: "chai.online",
			desc: [ "在线情况", "[大区] [角色名]" ],
			headers: [ "__在线" ],
			regexps: [ "[\\u4e00-\\u9fa5]+", ".*" ],
			main: "api/online",
			detail: "查询方式：在线 南道拳豪（大区） 你算哪只傻兔兔灬（角色名）"
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