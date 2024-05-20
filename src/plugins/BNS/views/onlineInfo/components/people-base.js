const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  在线情况
</div>
<div class="border-box">
<div v-for="(item,index) in userInfo" v-key="index" class="online-box">
	<div class="flex-box">
		<div style="font-size: 24px">{{item?.name}}</div>
		<div class="flex-box">（在线情况: <i :class="item.playing ? 'green' : 'red'" style="display: block"/>{{item?.playing ? '在线' : '不在线'}}）</div>
	</div>
	<div>服务器：{{item.server_name}}</div>
	<div>职业：{{item?.class_name}}</div>
	<div>等级：{{item?.level}}级 {{item?.mastery_level}}星</div>
	<div>门派：{{item?.guild?.guild_name || '暂无门派'}}</div>
</div>
<div class="online-box">
<div style="border-bottom: 2px solid #ccc;text-align: center">作者留言</div>
<div class="weapen-list" style="margin-bottom: 5px;margin-top: 10px">
                    <span>bot作者：</span>
                    <span>电二（南道拳豪）你算哪只傻兔兔灬</span>
                </div>
                <div class="weapen-list" style="margin-bottom: 5px">如果你在使用过程中有任何建议、意见、合作意向</div>
                <div class="weapen-list" style="margin-bottom: 5px">请联系bot作者，我将不胜感激 ╰(￣ω￣ｏ)</div>
                <div class="weapen-list">作者QQ：2787922490（柴柴）</div>
</div>
</div>

<div class="footer">
     <p class="sign">Created by chaichai-BOT & adachi</p>
</div>
`;

import { defineComponent, computed, ref } from "vue";

// import { infoDataParser } from "../../../front-utils/data-parser.js";

function urlParamsGet( url ) {
	try {
		const searchParams = [ ...new URL( url ).searchParams ].map( ( [ key, value ] ) => {
			return [ key, decodeURIComponent( value ) ];
		} )
		return Object.fromEntries( searchParams );
	} catch {
		return {};
	}
}

export default defineComponent( {
	name: "people",
	template,
	
	setup() {
		const userInfo = ref( [] )
		const urlParams = urlParamsGet( location.href );
		console.log( location.href, "urlParams.data" )
		console.log( urlParams, "urlParams" )
		const userList = urlParams.data.split( ',' )
		console.log( userList, "userList" )
		
		
		fetch( `/BNS/api/getOnline?id=${ userList[0] }&groupId=${ userList[1] }&zone=${ userList[2] }&userName=${ userList[3] }` ).then( ( response ) => {
			return response.json();
		} )
			.then( async ( e ) => {
				console.log( e, "eeee" )
				userInfo.value = e.online
				console.log(userInfo,"userInfo")
				
				// userInfo.value =  e.user
				// weapenInfo.value = e.weapen
				// console.log( userInfo.value.name, "userinfo" )
			} );
		
		return {
			userInfo,
		}
	}
} );
