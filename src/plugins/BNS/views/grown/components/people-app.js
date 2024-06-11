const template = `<div>
<!--	<info-base v-if="data" :data="data">-->
<!--		<info-character v-if="data.type === '角色'" :data="data" :skill="skill"></info-character>-->
<!--		<info-weapon v-else :data="data"></info-weapon>-->
<!--	</info-base>-->
</div>`;

import { defineComponent, onMounted, ref } from "vue";
// import $https from "../../../front-utils/api.js";
// import { urlParamsGet } from "../../../front-utils/url.js";
import InfoBase from "./base.js";
// import InfoWeapon from "./weapon.js";
// import InfoCharacter from "./character.js";
// import { initBaseColor } from "../../../front-utils/data-parser.js";

export default defineComponent( {
	name: "InfoApp",
	template,
	// components: {
	// 	InfoBase,
	// 	InfoWeapon,
	// 	InfoCharacter
	// },
	setup(props) {
		const userInfo = ref({})
		const weapenInfo = ref({})
		console.log(props,"props2")
		fetch('/BNS/api/getUserInfo').then((response) => {
					return response.json();
				})
				.then(async ( e ) => {

					// if(e.account_id === null) {
					// 	await sendMessage('查询失败，原因可能为' +
					// 		'1.用户名错误（请注意用户名的特殊符号也要输入正确哦）' +
					// 		'2.该角色并不属于该服务器' +
					// 		'3.接口崩溃，请稍后再试')
					// } else {
					// 	const res = await renderer.asSegment( '/views/people.html', { data: matchResult.match.join(',') } )
					// }
					// const res = await renderer.asSegment( 'http://20gate.bns.qq.com/ingame/bs/character/profile', {c:e.name}  )
					// console.log(res,"resss")
					// if(res.code === 'ok') {
					// 	await sendMessage(res.data)
					// }
				});
		// const urlParams = urlParamsGet( location.href );
		// const skill = urlParams.skill === "true";
		//
		// const data = ref( null );
		//
		// const getData = async () => {
		// 	const res = await $https( "/info", { name: urlParams.name } );
		// 	initBaseColor( res );
		// 	data.value = res;
		// }
		//
		// onMounted( () => {
		// 	getData();
		// } );
		//
		// return {
		// 	skill,
		// 	data
		// }
	}
} );
