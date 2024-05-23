import { Renderer } from "@/modules/renderer";
import { definePlugin } from "@/modules/plugin";

export let renderer: Renderer;


export default definePlugin( {
	name: "灵灵-怀旧服",
	cfgList: [
		{
			type: "order",
			cmdKey: "chai.entry",
			desc: [ "词条推荐", "[职业全名]" ],
			headers: [ "__词条" ],
			regexps: [ "[\\u4e00-\\u9fa5]+" ],
			main: "api/entry",
			detail: "查询方式：\n词条 气功（职业全名）"
		}
	],
	publicDirs: [ "/people", "views", "assets" ],
	async mounted( param ) {
		renderer = param.renderRegister( ".width233", "" );
		
	},
} )