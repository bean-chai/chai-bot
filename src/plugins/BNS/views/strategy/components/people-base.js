const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  悬赏攻略
            <div class="logo-box">
                <img src="../userInfo/assets/pangxie.png" />
<!--                <span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
			</div>
</div>
<div class="border-box">
<div class="boss-name">悬赏BOSS -- {{ userInfo[1] }}</div>
<!--塔尔卡-->
<div v-if="userInfo[0] === 'taerka'">
	<div class="img-box">
		<img src="../strategy/assets/takaer/taerka1.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/takaer/taerka2.png" alt="123">
	</div>
</div>
<!--震地-->
<div v-if="userInfo[0] === 'zhendi'">
	<div class="img-box">
		<img src="../strategy/assets/bale/bale3.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/zhendi/zhendi2.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/zhendi/zhendi1.jpg" alt="123">
	</div>
</div>
<!--傻大个-->
<div v-if="userInfo[0] === 'shadage'">
	<div class="img-box">
		<img src="../strategy/assets/bale/bale3.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/shadage/shadage2.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/shadage/shadage1.jpg" alt="123">
	</div>
</div>
<!--族长巴拉汗-->
<div v-if="userInfo[0] === 'balahan'">
	<div class="img-box">
		<img src="../strategy/assets/bale/bale3.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/balahan/balahan2.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/balahan/balahan1.jpg" alt="123">
	</div>
</div>
<!--巴勒-->
<div v-if="userInfo[0] === 'bale'">
	<div class="img-box">
		<img src="../strategy/assets/bale/bale3.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/bale/bale2.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/bale/bale1.jpg" alt="123">
	</div>
</div>
<!--黑巴勒-->
<div v-if="userInfo[0] === 'heibale'">
	<div class="box-text">固定刷新时间：12点15分、19点15分、22点15分</div>
	<div class="img-box">
		<img src="../strategy/assets/bale/bale3.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heibale/heibale2.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heibale/heibale1.jpg" alt="123">
	</div>
</div>
<!--银雪力士-->
<div v-if="userInfo[0] === 'yinxuelishi'">
	<div class="img-box">
		<img src="../strategy/assets/yinxuelishi/yinxue1.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/yinxuelishi/yinxue2.png" alt="123">
	</div>
</div>
<!--雷神鸟-->
<div v-if="userInfo[0] === 'leishenniao'">
	<div class="img-box">
		<img src="../strategy/assets/leishenniao/leishen1.png" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/leishenniao/leishen2.jpg" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/leishenniao/leishen3.jgp" alt="123">
	</div>
</div>
<!--垂尾狮-->
<div v-if="userInfo[0] === 'chuiweishi'">
	<div class="img-box">
		<img src="../strategy/assets/chuiweishi/chuiwei1.png" alt="123">
	</div>
</div>

<div>
	<div class="img-box">
		<p>作者留言：如果发现有错别字或攻略不正确，请联系作者（2787922490）进行修订改正！\n 如果你在使用过程中有任何意见、建议、合作意向，请bot联系作者，我将不胜感激！╰(￣ω￣ｏ)</p>
	</div>
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

		const urlParams = urlParamsGet( location.href );
		// console.log( location.href, "urlParams.data" )
		console.log( urlParams, "urlParams" )
		const userInfo = urlParams.data.split( ',' )
		console.log(userInfo,"userInfo")
		
		
		// fetch( `/BNS/api/getOnline?id=${ userList[0] }&groupId=${ userList[1] }&zone=${ userList[2] }&userName=${ userList[3] }` ).then( ( response ) => {
		// 	return response.json();
		// } )
		// 	.then( async ( e ) => {
		// 		console.log( e, "eeee" )
		// 		userInfo.value = e.online
		// 		console.log(userInfo,"userInfo")
		//
		// 		// userInfo.value =  e.user
		// 		// weapenInfo.value = e.weapen
		// 		// console.log( userInfo.value.name, "userinfo" )
		// 	} );
		//
		return {
			userInfo,
		}
	}
} );
