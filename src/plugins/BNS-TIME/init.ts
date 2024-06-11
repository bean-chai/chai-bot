import { Renderer } from "@/modules/renderer";
import { definePlugin } from "@/modules/plugin";

export let renderer: Renderer;


export default definePlugin( {
	name: "灵灵-怀旧服",
	cfgList: [
		{
			type: "order",
			cmdKey: "chai.oldMoney",
			desc: [ "怀旧服金价", "[区服全名]" ],
			headers: [ "__怀旧金价" ],
			regexps: [ "[\\u4e00-\\u9fa5]+"],
			main: "api/money",
			detail: "查询方式：\n金价 大漠孤烟（区服全名）"
		},
		{
			type: "order",
			cmdKey: "chai.entry",
			desc: [ "词条推荐", "[职业全名]" ],
			headers: [ "__词条" ],
			regexps: [ "[\\u4e00-\\u9fa5]+" ],
			main: "api/entry",
			detail: "查询方式：\n词条 气功（职业全名）"
		},
		{
			type: "order",
			cmdKey: "chai.outSide",
			desc: [ "野外boss", "[boss全名]" ],
			headers: [ "__野外" ],
			regexps: ["[\\u4e00-\\u9fa5]+"],
			main: "api/strategy",
			detail: "查询方式：\n野外 千年灵妖（boss全名）"
		},
		{
			type: "order",
			cmdKey: "chai.timetips",
			desc: [ "怀旧服小道消息", "" ],
			headers: [ "__怀旧服小道消息" ],
			regexps: [],
			main: "api/tips",
			detail: "查询方式：\n怀旧服小道消息"
		}
	],
	publicDirs: [ "/people", "views", "assets" ],
	async mounted( param ) {
		renderer = param.renderRegister( ".width233", "" );
		
	},
} )