const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  词条推荐
                <div class="logo-box">
                <img src="../entry/assets/pangxie.png" />
<!--                <span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
			</div>
</div>
<div class="boss-name">45级版本词条推荐 -- {{userInfo[1]}}</div>

<div class="border-box">

<div v-for="(item,index) in whichEntry" v-key="index" style="width: 100%;">
	<div style="width: 1000px;font-size: 22px;font-weight: 600">
		{{userInfo[1]}} -- {{item?.name || ''}}
	</div>
	<div class="entry-box">
	<!--	戒指-->
	<div class="item-box">
		<div class="item-name">戒指</div>
		<div class="item-item">{{item?.ring.name|| ''}}</div>
		<div :class="item?.ring?.fun[item?.ring?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.ring.fun[0] || ''}}</div>
		<div :class="item?.ring?.fun[item?.ring?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.ring.fun[1] || ''}}</div>
		<div :class="item?.ring?.fun[item?.ring?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.ring.fun[2] || ''}}</div>
	</div>
<!--	耳环-->
	<div class="item-box">
		<div class="item-name">耳环</div>
		<div class="item-item">{{item?.ear.name|| ''}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.ear.fun[0] || ''}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.ear.fun[1] || ''}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.ear.fun[2] || ''}}</div>
	</div>
<!--	项链-->
	<div class="item-box">
		<div class="item-name">项链</div>
		<div class="item-item">{{item?.neck.name|| ''}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.neck.fun[0] || ''}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.neck.fun[1] || ''}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.neck.fun[2] || ''}}</div>
	</div>
<!--	手套-->
	<div class="item-box">
		<div class="item-name">手套</div>
		<div class="item-item">{{item?.glove.name|| ''}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.glove.fun[0] || ''}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.glove.fun[1] || ''}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.glove.fun[2] || ''}}</div>
	</div>
<!--	手镯-->
	<div class="item-box">
		<div class="item-name">手镯</div>
		<div class="item-item">{{item?.hand.name|| ''}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.hand.fun[0] || ''}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.hand.fun[1] || ''}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.hand.fun[2] || ''}}</div>
	</div>
<!--	腰带-->
	<div class="item-box">
		<div class="item-name">腰带</div>
		<div class="item-item">{{item?.body.name|| ''}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.body.fun[0] || ''}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.body.fun[1] || ''}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.body.fun[2] || ''}}</div>
	</div>
<!--	神功牌-->
	<div class="item-box">
		<div class="item-name">神功牌</div>
		<div class="item-item">{{item?.nove1.name|| ''}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.nove1.fun[0] || ''}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.nove1.fun[1] || ''}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.nove1.fun[2] || ''}}</div>
	</div>
<!--	秘功牌-->
	<div class="item-box">
		<div class="item-name">秘功牌</div>
		<div class="item-item">{{item?.nove2.name|| ''}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.nove2.fun[0] || ''}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{item.nove2.fun[1] || ''}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{item.nove2.fun[2] || ''}}</div>
	</div>
    </div>
</div>

</div>
<div class="entry-box1">
<p>作者留言：如果发现有错别字或词条不正确，请联系作者（2787922490）进行修订改正！\n 如果你在使用过程中有任何意见、建议、合作意向，请bot联系作者，我将不胜感激！╰(￣ω￣ｏ)</p>
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
		// // console.log( location.href, "urlParams.data" )
		console.log( urlParams, "urlParams" )
		const userInfo = urlParams.data.split( ',' )
		console.log(userInfo,"userInfo")
		
		const entryList = {
			jianshi: {
				torn:{
					name:'刺剑',
					ring:{
						name:'洪门一式',
						fun:['刺剑式*速','破招式*反','落剑式*衔','1,3']
					},
					ear:{
						name:'洪门二式',
						fun:['追风剑*时','山崩地裂*域','烈焰斩*延','1']
					},
					neck:{
						name:'洪门一式',
						fun:['飞燕剑*加/地','天隙流光*命','碎心脚*命','1,2']
					},
					glove:{
						name:'洪门二式',
						fun:['五连斩*火/体','一闪*势','逆风行*广/挺加','1,2']
					},
					hand:{
						name:'洪门二式',
						fun:['火龙连斩*广']
					},
					body:{
						name:'',
						fun:['']
					},
					nove1:{
						name:'洪门一式',
						fun:['刺剑式强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
				mine:{
					name:'雷剑',
					ring:{
						name:'洪门三式',
						fun:['破招式*雷护','断空斩','杀龙闪*雷/杀龙闪','3']
					},
					ear:{
						name:'洪门三式',
						fun:['追风剑*感/长','雷月斩*长','山崩地裂*加爆','1,2']
					},
					neck:{
						name:'洪门三式',
						fun:['天隙流光*雷长','御剑连斩','1,2']
					},
					glove:{
						name:'洪门三式',
						fun:['五连斩*雷挺','天雷令*命','一闪*雷集','1,2']
					},
					hand:{
						name:'洪门三式',
						fun:['雷龙斩*命加','拔剑*雷破','1,2']
					},
					body:{
						name:'洪门三式',
						fun:['天剑*雷','金刚令*力','1,2']
					},
					nove1:{
						name:'洪门三式',
						fun:['雷龙斩强化']
					},
					nove2:{
						name:'洪门三式',
						fun:['天剑触发强化']
					}
				},
				fire:{
					name:'火剑',
					ring:{
						name:'洪门二式',
						fun:['落剑式*火','破招式*反极','2']
					},
					ear:{
						name:'洪门二式',
						fun:['追风剑*时','山崩地裂*地/域','烈阳斩*延','1,3']
					},
					neck:{
						name:'洪门二式',
						fun:['烈火龙闪*域','火龙激轮*减火','流星击','1,2']
					},
					glove:{
						name:'洪门二式',
						fun:['五连斩*火/体','一闪*势','逆风行*广/挺加','1,2']
					},
					hand:{
						name:'洪门二式',
						fun:['拔剑','火龙连斩/火龙连斩*加广','1,2']
					},
					body:{
						name:'洪门二式',
						fun:['风火轮','巧劲冲*加破/挺','凤翼/凤翼*功','1,3']
					},
					nove1:{
						name:'洪门二式',
						fun:['火龙连斩，夺命剑强化']
					},
					nove2:{
						name:'洪门二式',
						fun:['烈火龙闪触发强化']
					}
				}
			},
			lishi: {
				torn:{
					name:'风扫',
					ring:{
						name:'洪门二式',
						fun:['怒扫*害','风扫*时','愤怒*时','1,2,3']
					},
					ear:{
						name:'洪门一式',
						fun:['毁灭*迅集','冲锋*挺/堕','霸王击鼎*衔','1']
					},
					neck:{
						name:'洪门二式',
						fun:['狂风*时步/破步','台风*暴衔/挺','千军倒','1']
					},
					glove:{
						name:'洪门二式',
						fun:['獠牙狂风','灭绝*时','1,2']
					},
					hand:{
						name:'洪门一式',
						fun:['撼地*镜','金刚不坏*晕']
					},
					body:{
						name:'洪门二式',
						fun:['天崩地裂*时','碎金脚*时','逆风行*时怒','1']
					},
					nove1:{
						name:'洪门一式',
						fun:['刺毁灭强化']
					},
					nove2:{
						name:'洪门一式',
						fun:['刺毁灭强化']
					}
				},
				mine:{
					name:'审判',
					ring:{
						name:'洪门一式',
						fun:['审判*加','烈火轮*加','1']
					},
					ear:{
						name:'洪门一式',
						fun:['毁灭*迅集','冲锋*挺/堕','霸王击鼎*衔','1']
					},
					neck:{
						name:'洪门二式',
						fun:['狂风*时步/破步','台风*晕衔/挺','千军倒','1']
					},
					glove:{
						name:'洪门二式',
						fun:['獠牙狂风','灭绝*时','1']
					},
					hand:{
						name:'洪门一式',
						fun:['撼地*镜','金刚不坏*晕']
					},
					body:{
						name:'',
						fun:['']
					},
					nove1:{
						name:'洪门一式',
						fun:['刺毁灭强化']
					},
					nove2:{
						name:'洪门一式',
						fun:['刺毁灭强化']
					}
				},
			},
			cike: {
				torn:{
					name:'暗影',
					ring:{
						name:'洪门三式',
						fun:['迷雾斩*强','乱刀','替身术*赢虚罩','1']
					},
					ear:{
						name:'洪门三式',
						fun:['暗影侵蚀','暗影枷锁*堕加','影法*广','1']
					},
					neck:{
						name:'洪门三式',
						fun:['暗影乱舞*影体','斩影*远','暗影移行*地','1,2']
					},
					glove:{
						name:'洪门三式',
						fun:['奔袭*强','暗影斩击','瞬步','1,2']
					},
					hand:{
						name:'洪门三式',
						fun:['黑风*空','影击步','吸影','1']
					},
					body:{
						name:'洪门三式',
						fun:['暗影之阵','回身踢*减','侧身闪','1']
					},
					nove1:{
						name:'洪门三式',
						fun:['斩影强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
				mine:{
					name:'雷殛',
					ring:{
						name:'洪门二式',
						fun:['雷殛*雷殛*害','雷电杀','替身术*衔命','1,2']
					},
					ear:{
						name:'洪门一式',
						fun:['手里剑*毒','1']
					},
					neck:{
						name:'洪门二式',
						fun:['斩影','莲华乱舞','木叶疾斩','3']
					},
					glove:{
						name:'洪门二式',
						fun:['长线火雷*毒','吹毒*体','潜行*加毒','1,2']
					},
					hand:{
						name:'洪门二式',
						fun:['无影步*毒','雷击步/雷击步*弑','掷雷*害','1']
					},
					body:{
						name:'',
						fun:['']
					},
					nove1:{
						name:'洪门一式',
						fun:['雷殛，震天雷强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
			},
			qigong: {
				torn:{
					name:'冰',
					ring:{
						name:'洪门三式',
						fun:['青花掌*衔玉','冰河神掌','火连掌']
					},
					ear:{
						name:'洪门三式',
						fun:['寒风波','冰日寒炮*阳','冰河掌*时']
					},
					neck:{
						name:'洪门三式',
						fun:['雪冰掌','荡华涟*延加','混元罩*延加']
					},
					glove:{
						name:'洪门二式',
						fun:['双龙破*广血','真空破*反幕退','大挪移*重力掌']
					},
					hand:{
						name:'洪门二式',
						fun:['炎爆*破/广','莲花指*鶸加/伤','流星指']
					},
					body:{
						name:'洪门一式',
						fun:['寒霜之体*充体','解冰*雪冰','燎原之火*半脉天']
					},
					nove1:{
						name:'洪门三式',
						fun:['冰河神掌强化']
					},
					nove2:{
						name:'洪门三式',
						fun:['雪冰掌强化']
					}
				},
				mine:{
					name:'火',
					ring:{
						name:'洪门二式',
						fun:['烈火掌*功讯乘','爆裂炎炮','火莲掌*广鶸攻','1,2']
					},
					ear:{
						name:'洪门三式',
						fun:['寒风破','冰白寒炮*害','冰河掌*时','1']
					},
					neck:{
						name:'洪门二式',
						fun:['破冰*火','荡华涟*延加','混元罩*暴','2']
					},
					glove:{
						name:'洪门二式',
						fun:['双龙破*广血','真空破*反幕退','大挪移*重力掌','1']
					},
					hand:{
						name:'洪门二式',
						fun:['莲花指*伤','炎爆*广','流星指','1']
					},
					body:{
						name:'',
						fun:['']
					},
					nove1:{
						name:'洪门二式',
						fun:['爆裂炎炮强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
			},
			zhaohuan: {
				torn:{
					name:'大马蜂',
					ring:{
						name:'洪门二式',
						fun:['玫瑰*害加','大黄蜂*讯/衔','鼓励*命步/体加','1,2']
					},
					ear:{
						name:'洪门二式',
						fun:['牵牛花*讯加','荆棘藤*害','友情*挺命/挺加','3']
					},
					neck:{
						name:'洪门二式',
						fun:['蜂蜜*加','保护蒲公英*镜','大榔头*命','2']
					},
					glove:{
						name:'洪门一式',
						fun:['下端斩*衔','1']
					},
					hand:{
						name:'洪门二式',
						fun:['芒背在刺*时']
					},
					body:{
						name:'洪门二式',
						fun:['喵喵出击*血','狗尾草*命']
					},
					nove1:{
						name:'洪门二式',
						fun:['大黄蜂强化']
					},
					nove2:{
						name:'洪门二式',
						fun:['荆棘藤触发强化']
					}
				},
				mine:{
					name:'向日葵',
					ring:{
						name:'洪门三式',
						fun:['玫瑰*阳破/阳毒','向日葵*阳加/阳害','鼓励*讯命体/镜加','1,2']
					},
					ear:{
						name:'洪门三式',
						fun:['牵牛花*阳破','烈日摄取*阳体','光合作用*阳命','1,2']
					},
					neck:{
						name:'洪门二式',
						fun:['蜂蜜*加','保护蒲公英*镜','大榔头*命','2']
					},
					glove:{
						name:'洪门一式',
						fun:['下端斩*衔','1']
					},
					hand:{
						name:'洪门三式',
						fun:['春阳拂面*阳弱','枫叶飘','飞栗球*血','1,2']
					},
					body:{
						name:'洪门三式',
						fun:['喵喵出击*虚','太阳光线*镜/阳','2']
					},
					nove1:{
						name:'洪门三式',
						fun:['大向日葵强化']
					},
					nove2:{
						name:'洪门三式',
						fun:['牵牛花触发强化']
					}
				},
				fire:{
					name:'马蜂',
					ring:{
						name:'洪门一式',
						fun:['玫瑰*广','黄蜂*攻血','鼓励*坚/命','2']
					},
					ear:{
						name:'洪门一式',
						fun:['牵牛花*加','摄取*加','友情*挺','1,3']
					},
					neck:{
						name:'洪门一式',
						fun:['花粉*命','蒲公英*广镜','蜷缩*镜体/镜加','2,3']
					},
					glove:{
						name:'洪门一式',
						fun:['下端斩*衔','挠挠/血衔','喵火流星*体','1']
					},
					hand:{
						name:'洪门一式',
						fun:['疯狂生长*广','板栗球*血','后撤逆风行*毒']
					},
					body:{
						name:'洪门一式',
						fun:['喵喵出击*晕','狗尾草*步']
					},
					nove1:{
						name:'洪门一式',
						fun:['马蜂强化']
					},
					nove2:{
						name:'洪门一式',
						fun:['马蜂强化']
					}
				}
			},
			lingjian: {
				torn:{
					name:'风',
					ring:{
						name:'洪门三式',
						fun:['台风剑*风暴','连斩*加泈','断水流','1,2,3']
					},
					ear:{
						name:'洪门三式',
						fun:['飞燕剑*风血地','流风斩*加风','风龙腾天*讯风','3']
					},
					neck:{
						name:'洪门二式',
						fun:['落剑式*加名','烈风连斩*风','拔剑*风血','2,3']
					},
					glove:{
						name:'洪门三式',
						fun:['逆功','皓风剑*血害','疾风三连斩*风','2,3']
					},
					hand:{
						name:'洪门三式',
						fun:['侧身闪','回天令*风挺体','风烟剑*功害','2,3']
					},
					body:{
						name:'洪门三式',
						fun:['涡流斩击','天空斩','御剑连斩*强','3']
					},
					nove1:{
						name:'洪门三式',
						fun:['台风斩强化']
					},
					nove2:{
						name:'洪门三式',
						fun:['回天令触发强化']
					}
				},
				mine:{
					name:'雷',
					ring:{
						name:'洪门二式',
						fun:['追风剑*雷/晕','断水流*害','天雷令*血情','2']
					},
					ear:{
						name:'洪门三式',
						fun:['飞燕剑*血雷','流风斩*挺幕','断空斩*害','1']
					},
					neck:{
						name:'洪门二式',
						fun:['拔剑*雷破','天隙流光*雷血','落剑式*雷暴','1,2']
					},
					glove:{
						name:'洪门二式',
						fun:['残月*强','绝命斩*血','逆攻*雷步','1,2']
					},
					hand:{
						name:'洪门二式',
						fun:['雷炎闪*血害','鬼剑令*名加','侧身闪*雷加']
					},
					body:{
						name:'洪门二式',
						fun:['雷鸣斩*后加']
					},
					nove1:{
						name:'洪门二式',
						fun:['雷炎闪强化']
					},
					nove2:{
						name:'洪门二式',
						fun:['绝命斩强化']
					}
				},
			},
			quanshi: {
				torn:{
					name:'冲拳',
					ring:{
						name:'洪门三式',
						fun:['正拳*衔','盘龙腿*引晕','连环腿*晕体','1']
					},
					ear:{
						name:'洪门三式',
						fun:['爆裂脚','鬼步','天籁跃*衔','1']
					},
					neck:{
						name:'洪门二式',
						fun:['爆拳*加衔','冲锋拳*鶸时/时','幽步','1,2']
					},
					glove:{
						name:'洪门一式',
						fun:['点穴*镜/镜加','冲拳*集攻/集攻胁','升龙拳*加','1,2']
					},
					hand:{
						name:'洪门三式',
						fun:['劫拳*暴衔','拳舞*延时挺','铁山靠*暴增','1']
					},
					body:{
						name:'洪门二式',
						fun:['斗志集中','逆风行*镜','2']
					},
					nove1:{
						name:'洪门一式',
						fun:['冲拳强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
				mine:{
					name:'回天',
					ring:{
						name:'洪门二式',
						fun:['正拳*命','破山拳','1']
					},
					ear:{
						name:'洪门一式',
						fun:['回天脚*破','鬼步','1']
					},
					neck:{
						name:'洪门二式',
						fun:['爆拳*加衔','冲锋拳*鶸时/时','幽步','1,2']
					},
					glove:{
						name:'洪门一式',
						fun:['点穴*镜/镜加','冲拳*集攻/集攻胁','1,2']
					},
					hand:{
						name:'洪门一式',
						fun:['劫拳*胁','拳舞*吸挺','1']
					},
					body:{
						name:'',
						fun:['']
					},
					nove1:{
						name:'洪门一式',
						fun:['冲拳强化']
					},
					nove2:{
						name:'',
						fun:['']
					}
				},
			},
		}
		
		const whichEntry = entryList[userInfo[0]]
		console.log(whichEntry,"whichEntry")
		
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
			whichEntry
		}
	}
} );
