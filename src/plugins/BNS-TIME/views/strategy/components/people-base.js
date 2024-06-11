const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  野外boss
            <div class="logo-box">
                <img src="../strategy/assets/pangxie.png" />
<!--                <span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
			</div>
</div>
<div class="border-box">
<div class="boss-name">野外BOSS -- {{ userInfo[1] }}</div>
<!--千年灵妖-->
<div v-if="userInfo[0] === 'qiannian'">
	<div class="box-text">野外boss-千年灵妖（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/qiannian/qiannian.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/qiannian/qiannian2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/qiannian/qiannian3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/qiannian/qiannian4.JPG" alt="123">
	</div>
</div>
<!--仇满天-->
<div v-if="userInfo[0] === 'chouman'">
	<div class="box-text">野外boss-仇满天（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/chouman/chouman.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/chouman/chouman2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/chouman/chouman3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/chouman/chouman4.JPG" alt="123">
	</div>
</div>
<!--龇牙犬-->
<div v-if="userInfo[0] === 'ciya'">
	<div class="box-text">野外boss-龇牙犬（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/ciya/ciya.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/ciya/ciya2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/ciya/ciya3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/ciya/ciya4.JPG" alt="123">
	</div>
</div>
<!--金刚罗汉-->
<div v-if="userInfo[0] === 'jingang'">
	<div class="box-text">野外boss-金刚罗汉（消耗疲劳），等待一定时间后击杀两个狮子并点亮石灯后出现</div>
	<div class="img-box">
		<img src="../strategy/assets/jingang/jingang.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/jingang/jingang2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/jingang/jingang3.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/jingang/jingang4.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/jingang/jingang5.JPG" alt="123">
	</div>
</div>
<!--黄沙领主-->
<div v-if="userInfo[0] === 'huangsha'">
	<div class="box-text">野外boss-黄沙领主（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/huangsha/huangsha.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/huangsha/huangsha2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/huangsha/huangsha3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/huangsha/huangsha4.JPG" alt="123">
	</div>
</div>
<!--古力大仙-->
<div v-if="userInfo[0] === 'guli'">
	<div class="box-text">野外boss-古力大仙（消耗疲劳），清够周围一定数量小怪会出</div>
	<div class="img-box">
		<img src="../strategy/assets/guli/guli.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/guli/guli2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/guli/guli3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/guli/guli4.JPG" alt="123">
	</div>
</div>
<!--黑神鸟-->
<div v-if="userInfo[0] === 'heishen'">
	<div class="box-text">野外boss-黑神鸟（消耗疲劳），清够周围一定数量小怪会出</div>
	<div class="img-box">
		<img src="../strategy/assets/heishen/heishen.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heishen/heishen2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heishen/heishen3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/heishen/heishen4.JPG" alt="123">
	</div>
</div>
<!--蛮骨沙魂-->
<div v-if="userInfo[0] === 'mangu'">
	<div class="box-text">野外boss-蛮骨沙魂（消耗疲劳），清够周围一定数量小怪会出</div>
	<div class="img-box">
		<img src="../strategy/assets/mangu/mangu.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/mangu/mangu2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/mangu/mangu3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/mangu/mangu4.JPG" alt="123">
	</div>
</div>
<!--黑天照-->
<div v-if="userInfo[0] === 'heitian'">
	<div class="box-text">野外boss-黑天照（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/heitian/heitian.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heitian/heitian2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heitian/heitian3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/heitian/heitian4.JPG" alt="123">
	</div>
</div>
<!--棕熊血牙-->
<div v-if="userInfo[0] === 'zongxiong'">
	<div class="box-text">野外boss-棕熊血牙（消耗疲劳），清够周围一定数量小怪会出</div>
	<div class="img-box">
		<img src="../strategy/assets/zongxiong/zongxiong.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/zongxiong/zongxiong2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/zongxiong/zongxiong3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/zongxiong/zongxiong4.JPG" alt="123">
	</div>
</div>
<!--食海龙-->
<div v-if="userInfo[0] === 'shihai'">
	<div class="box-text">野外boss-食海龙（消耗疲劳），击杀一只猪，等待一定时间后，把尸体放在供台上会吸引出来</div>
	<div class="img-box">
		<img src="../strategy/assets/shihai/shihai.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/shihai/shihai2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/shihai/shihai3.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/shihai/shihai4.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/shihai/shihai5.JPG" alt="123">
	</div>
</div>
<!--黑鳍将军-->
<div v-if="userInfo[0] === 'heiqi'">
	<div class="box-text">野外boss-黑鳍将军（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/heiqi/heiqi.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heiqi/heiqi2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/heiqi/heiqi3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/heiqi/heiqi4.JPG" alt="123">
	</div>
</div>
<!--先师幽魂-->
<div v-if="userInfo[0] === 'xianshi'">
	<div class="box-text">野外boss-先师幽魂（消耗疲劳），清够周围一定数量小怪会出</div>
	<div class="img-box">
		<img src="../strategy/assets/xianshi/xianshi.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/xianshi/xianshi2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/xianshi/xianshi3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/xianshi/xianshi4.JPG" alt="123">
	</div>
</div>
<!--万魂灵妖-->
<div v-if="userInfo[0] === 'wanhun'">
	<div class="box-text">野外boss-万魂灵妖（消耗疲劳），等待一定时间后，解开几个结界后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/wanhun/wanhun.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/wanhun/wanhun2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/wanhun/wanhun3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/wanhun/wanhun4.JPG" alt="123">
	</div>
</div>
<!--洪连-->
<div v-if="userInfo[0] === 'honglian'">
	<div class="box-text">野外boss-洪连（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/honglian/honglian.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/honglian/honglian2.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/honglian/honglian3.JPG" alt="123">
	</div>
</div>
<!--敌万夫-->
<div v-if="userInfo[0] === 'diwan'">
	<div class="box-text">野外boss-敌万夫（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/diwan/diwan.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/diwan/diwan2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/diwan/diwan3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/diwan/diwan4.JPG" alt="123">
	</div>
</div>
<!--巨蛙-->
<div v-if="userInfo[0] === 'juwa'">
	<div class="box-text">野外boss-巨蛙（消耗疲劳），等待一定时间后会出</div>
	<div class="img-box">
		<img src="../strategy/assets/juwa/juwa.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/juwa/juwa2.JPG" alt="123">
	</div>
	<div class="img-box">
		<img src="../strategy/assets/juwa/juwa3.JPG" alt="123">
	</div>
	<div class="box-text">战利品一览</div>
	<div class="img-box">
		<img src="../strategy/assets/juwa/juwa4.JPG" alt="123">
	</div>
</div>




</div>
<div>
	<div class="img-box">
		<p>特别感谢：攻略来源小小蓝，bilibili（拉风的薛哥）</p>
	</div>
</div>

<div>
	<div class="img-box">
		<p>作者留言：如果发现有错别字或攻略不正确，请联系作者（2787922490）进行修订改正！\n 如果你在使用过程中有任何意见、建议、合作意向，请bot联系作者，我将不胜感激！╰(￣ω￣ｏ)</p>
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
