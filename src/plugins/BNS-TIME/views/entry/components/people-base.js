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
		<div :class="item?.ring?.fun[item?.ring?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.ring.fun[1]) ? '' : item.ring.fun[1]}}</div>
		<div :class="item?.ring?.fun[item?.ring?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.ring.fun[2]) ? '' : item.ring.fun[2]}}</div>
	</div>
<!--	耳环-->
	<div class="item-box">
		<div class="item-name">耳环</div>
		<div class="item-item">{{item?.ear.name|| ''}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.ear.fun[0] || ''}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.ear.fun[1]) ? '' : item.ear.fun[1]}}</div>
		<div :class="item?.ear?.fun[item?.ear?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.ear.fun[2]) ? '' : item.ear.fun[2]}}</div>
	</div>
<!--	项链-->
	<div class="item-box">
		<div class="item-name">项链</div>
		<div class="item-item">{{item?.neck.name|| ''}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.neck.fun[0] || ''}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.neck.fun[1]) ? '' : item.neck.fun[1]}}</div>
		<div :class="item?.neck?.fun[item?.neck?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.neck.fun[2]) ? '' : item.neck.fun[2]}}</div>
	</div>
<!--	手套-->
	<div class="item-box">
		<div class="item-name">手套</div>
		<div class="item-item">{{item?.glove.name|| ''}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.glove.fun[0] || ''}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.glove.fun[1]) ? '' : item.glove.fun[1]}}</div>
		<div :class="item?.glove?.fun[item?.glove?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.glove.fun[2]) ? '' : item.glove.fun[2]}}</div>
	</div>
<!--	手镯-->
	<div class="item-box">
		<div class="item-name">手镯</div>
		<div class="item-item">{{item?.hand.name|| ''}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.hand.fun[0] || ''}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.hand.fun[1]) ? '' : item.hand.fun[1]}}</div>
		<div :class="item?.hand?.fun[item?.hand?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.hand.fun[2]) ? '' : item.hand.fun[2]}}</div>
	</div>
<!--	腰带-->
	<div class="item-box">
		<div class="item-name">腰带</div>
		<div class="item-item">{{item?.body.name|| ''}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.body.fun[0] || ''}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.body.fun[1]) ? '' : item.body.fun[1]}}</div>
		<div :class="item?.body?.fun[item?.body?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{ /[123]/.test(item.body.fun[2]) ? '' : item.body.fun[2]}}</div>
	</div>
<!--	神功牌-->
	<div class="item-box">
		<div class="item-name">神功牌</div>
		<div class="item-item">{{item?.nove1.name|| ''}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.nove1.fun[0] || ''}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.nove1.fun[1]) ? '' : item.nove1.fun[1]}}</div>
		<div :class="item?.nove1?.fun[item?.nove1?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.nove1.fun[2]) ? '' : item.nove1.fun[2]}}</div>
	</div>
<!--	秘功牌-->
	<div class="item-box">
		<div class="item-name">秘功牌</div>
		<div class="item-item">{{item?.nove2.name|| ''}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(1) ? 'red-text' : 'item-item'">{{item.nove2.fun[0] || ''}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(2) ? 'red-text' : 'item-item'">{{/[123]/.test(item.nove2.fun[1]) ? '' : item.nove2.fun[1]}}</div>
		<div :class="item?.nove2?.fun[item?.nove2?.fun?.length - 1]?.includes(3) ? 'red-text' : ''">{{/[123]/.test(item.nove2.fun[2]) ? '' : item.nove2.fun[2]}}</div>
	</div>
    </div>
</div>
</div>
<div class="entry-box1"  v-if="userInfo[1] === '剑士'">
<p style="text-align: center">特别感谢：攻略来源小小蓝，bilibili（拉风的薛哥）</p>
</div>
<div class="entry-box1"  v-if="userInfo[1] === '灵剑'">
<p style="text-align: center">特别感谢：雷剑攻略来源钟馗</p>
</div>
<div class="entry-box1"  v-if="userInfo[1] === '气功'">
<p style="text-align: center">特别感谢：攻略来源清辞，粉丝3群（958136077） </p>
</div>
<div class="entry-box1"  v-if="userInfo[1] === '召唤'">
<p style="text-align: center">特别感谢：攻略来源米娜儿，粉丝2群（417605433）， 虎牙（520616）</p>
</div>
<div class="entry-box1"  v-if="userInfo[1] === '刺客'">
<p style="text-align: center">特别感谢：攻略来源Nuke，bilibili（Nukkkke），粉丝2群（325302482）</p>
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
		console.log( userInfo, "userInfo" )
		
		const entryList = {
			jianshi: {
				torn: {
					name: '刺剑',
					ring: {
						name: '洪门一式',
						fun: [ '刺剑式*速', '破招式*反', '落剑式*衔', '1,3' ]
					},
					ear: {
						name: '洪门一式',
						fun: [ '追风剑*加', '下段斩*攻', '满月斩*广虚', '1,3' ]
					},
					neck: {
						name: '洪门一式',
						fun: [ '飞燕剑*地', '天隙流光*广害', '破心脚*地', '1,2' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '五连斩*挺', '一闪*集攻/集破', '逆风行*命', '1,2' ]
					},
					hand: {
						name: '洪门一式',
						fun: [ '夺命剑*虚', '拔剑*急速', '凌云撩剑*时', '1' ]
					},
					body: {
						name: '洪门一式',
						fun: [ '风火轮*血充/挺胁', '巧劲冲', '御剑出鞘*步护', '1' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '刺剑式强化' ]
					},
					nove2: {
						name: '洪门一式',
						fun: [ '御剑出鞘触发效果' ]
					}
				},
				mine: {
					name: '雷剑',
					ring: {
						name: '洪门三式',
						fun: [ '破招式*雷护', '断空斩', '杀龙闪', '1,3' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '追风剑*减', '雷月斩*长', '山崩地裂*加暴', '1,2' ]
					},
					neck: {
						name: '洪门三式',
						fun: [ '天隙流光*雷长', '御剑连斩*势/御剑连斩', '飞燕剑*伤引', '1,2' ]
					},
					glove: {
						name: '洪门三式',
						fun: [ '五连斩*雷挺', '天雷令*命', '一闪*雷集', '1,3' ]
					},
					hand: {
						name: '洪门三式',
						fun: [ '雷龙斩*命加', '拔剑*雷/雷破', '凌云撩剑*雷时', '1,2' ]
					},
					body: {
						name: '洪门三式',
						fun: [ '天剑*破', '金刚令*力', '风月斩*伤', '1' ]
					},
					nove1: {
						name: '洪门三式',
						fun: [ '雷龙斩强化' ]
					},
					nove2: {
						name: '洪门三式',
						fun: [ '天剑触发效果' ]
					}
				},
				fire: {
					name: '火剑',
					ring: {
						name: '洪门二式',
						fun: [ '落剑式*火', '破招式*反极' ]
					},
					ear: {
						name: '洪门二式',
						fun: [ '追风剑*时', '山崩地裂*地/域', '烈阳斩*延', '1,3' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '烈火龙闪*域', '火龙激轮*减火', '流星击', '1,2' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '五连斩*火/体', '一闪*势', '逆风行*广/挺加', '1,2' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '拔剑*速', '火龙连斩/火龙连斩*加广', '1,2' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '风火轮', '巧劲冲*加破/挺', '凤翼/凤翼*功', '1,3' ]
					},
					nove1: {
						name: '洪门二式',
						fun: [ '火龙连斩强化' ]
					},
					nove2: {
						name: '洪门二式',
						fun: [ '烈火龙闪触发效果' ]
					}
				}
			},
			lishi: {
				torn: {
					name: '风扫',
					ring: {
						name: '洪门二式',
						fun: [ '怒扫*害', '风扫*时', '愤怒*时', '1,2,3' ]
					},
					ear: {
						name: '洪门一式',
						fun: [ '毁灭*迅集', '冲锋*挺/堕', '霸王击鼎*衔', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '狂风*时步/破步', '台风*暴衔/挺', '千军倒', '1' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '獠牙狂风', '灭绝*时', '1,2' ]
					},
					hand: {
						name: '洪门一式',
						fun: [ '撼地*镜', '金刚不坏*晕' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '天崩地裂*时', '碎金脚*时', '逆风行*时怒', '1' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '刺毁灭强化' ]
					},
					nove2: {
						name: '洪门一式',
						fun: [ '刺毁灭强化' ]
					}
				},
				mine: {
					name: '审判',
					ring: {
						name: '洪门一式',
						fun: [ '审判*加', '烈火轮*加', '1' ]
					},
					ear: {
						name: '洪门一式',
						fun: [ '毁灭*迅集', '冲锋*挺/堕', '霸王击鼎*衔', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '狂风*时步/破步', '台风*晕衔/挺', '千军倒', '1' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '獠牙狂风', '灭绝*时', '1' ]
					},
					hand: {
						name: '洪门一式',
						fun: [ '撼地*镜', '金刚不坏*晕' ]
					},
					body: {
						name: '',
						fun: [ '' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '刺毁灭强化' ]
					},
					nove2: {
						name: '洪门一式',
						fun: [ '刺毁灭强化' ]
					}
				},
			},
			cike: {
				torn: {
					name: '暗影',
					ring: {
						name: '洪门三式',
						fun: [ '迷雾斩*强', '乱刀', '替身术*衔罩/替身术*挺罩', '1' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '墨烟/暗影侵蚀*强加', '暗影枷锁*惰加', '影法*广', '1' ]
					},
					neck: {
						name: '洪门三式',
						fun: [ '斩影*远广/斩影*远', '暗影乱舞', '暗影移行', '1,2' ]
					},
					glove: {
						name: '洪门三式',
						fun: [ '暗影斩击', '潜行*强', '瞬步*远', '1' ]
					},
					hand: {
						name: '洪门三式',
						fun: [ '黑风*影', '影击步', '1' ]
					},
					body: {
						name: '洪门三式',
						fun: [ '暗影之阵*体加强', '左横步*强', '回身踢*减', '1' ]
					},
					nove1: {
						name: '洪门三式',
						fun: [ '斩影强化' ]
					},
					nove2: {
						name: '',
						fun: [ '' ]
					}
				},
				mine: {
					name: '洪门二式',
					ring: {
						name: '洪门二式',
						fun: [ '雷殛', '雷电杀/雷电杀*广', '替身术*衔命/替身术*挺命', '1' ]
					},
					ear: {
						name: '洪门二式',
						fun: [ '雷电斩', '烟雾弹*体加', '踏雷术*地/踏雷术', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '木叶疾斩', '雷电乱舞*直挺', '斩影*体/斩影*隐', '1' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '长线火雷*毒', '吹毒*体', '潜行*加毒', '1,2' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '无影步*毒', '雷击步/雷击步*弑', '掷雷*害', '1' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '斗志集中/斗志发散', '回身踢*毒隐', '左横步', '1,2' ]
					},
					nove1: {
						name: '洪门二式',
						fun: [ '雷电斩强化' ]
					},
					nove2: {
						name: '',
						fun: [ '' ]
					}
				},
			},
			qigong: {
				torn: {
					name: '冰',
					ring: {
						name: '洪门三式',
						fun: [ '青花掌/青花掌*害/青花掌*衔', '冰河神掌', '火连掌', '1,2' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '寒风波', '冰日寒炮*晕冻', '冰河掌*时', '1,3' ]
					},
					neck: {
						name: '洪门三式',
						fun: [ '雪冰掌*害', '荡华涟*延体/延加', '混元罩*延体/延加', '1,2,3' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '双龙破*广血', '真空破*反幕退', '1' ]
					},
					hand: {
						name: '',
						fun: []
					},
					body: {
						name: '洪门一式',
						fun: [ '燎原之火*反幕空/火/额', '1' ]
					},
					nove1: {
						name: '洪门三式',
						fun: [ '冰河神掌强化', '1' ]
					},
					nove2: {
						name: '洪门三式',
						fun: [ '雪冰掌强化', '1' ]
					}
				},
				mine: {
					name: '火',
					ring: {
						name: '洪门二式',
						fun: [ '烈火掌*功讯乘/广火', '爆裂炎炮*功时', '火莲掌*乘', '1,2' ]
					},
					ear: {
						name: '洪门二式',
						fun: [ '寒风波', '冰白寒炮*晕冻', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '荡华涟', '混元罩*体/加', '1,2' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '双龙破*广血', '真空破*反幕退/真空炮*加', '1' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '莲花指*伤', '炎爆*广', '流星指*火', '1' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '燎原之火*反幕空/火/额' ]
					},
					nove1: {
						name: '洪门二式',
						fun: [ '爆裂炎炮', '1' ]
					},
					nove2: {
						name: '洪门二式',
						fun: [ '流星指' ]
					}
				},
			},
			zhaohuan: {
				torn: {
					name: '大马蜂',
					ring: {
						name: '洪门二式',
						fun: [ '玫瑰*害加', '大黄蜂*讯/衔', '鼓励*命步/体加', '1,2' ]
					},
					ear: {
						name: '洪门二式',
						fun: [ '牵牛花*讯加', '荆棘藤*害', '友情*挺命/挺加/挺体', '3' ]
					},
					neck: {
						name: '洪门一式',
						fun: [ '花粉*命', '蒲公英*广镜', '蜷缩*镜加/镜体', '2,3' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '下端斩*衔', '1' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '芒背在刺*时' ]
					},
					body: {
						name: '洪门一式',
						fun: [ '喵喵出击*晕', '狗尾草*加' ]
					},
					nove1: {
						name: '洪门二式',
						fun: [ '大黄蜂强化' ]
					},
					nove2: {
						name: '洪门二式',
						fun: [ '荆棘藤触发强化' ]
					}
				},
				mine: {
					name: '向日葵',
					ring: {
						name: '洪门三式',
						fun: [ '玫瑰*阳破/阳毒', '向日葵*阳加', '鼓励*镜加', '1,2' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '牵牛花*阳加', '烈日摄取*阳体', '光合作用*阳命/阳加', '1,2' ]
					},
					neck: {
						name: '洪门一式',
						fun: [ '花粉*命', '蒲公英*广镜', '蜷缩*镜加/镜体', '2,3' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '下端斩*衔', '1' ]
					},
					hand: {
						name: '洪门三式',
						fun: [ '春阳拂面*阳弱', '枫叶飘', '飞栗球*血', '1,2' ]
					},
					body: {
						name: '洪门三式',
						fun: [ '喵喵出击*虚', '太阳光线*镜/破', '2' ]
					},
					nove1: {
						name: '洪门三式',
						fun: [ '大向日葵强化' ]
					},
					nove2: {
						name: '洪门三式',
						fun: [ '牵牛花触发强化' ]
					}
				},
				fire: {
					name: '马蜂',
					ring: {
						name: '洪门一式',
						fun: [ '玫瑰*广/广攻', '黄蜂*攻血', '鼓励*体命', '2' ]
					},
					ear: {
						name: '洪门一式',
						fun: [ '牵牛花*加', '摄取*加', '友情*挺', '1,3' ]
					},
					neck: {
						name: '洪门一式',
						fun: [ '花粉*命', '蒲公英*广镜', '蜷缩*镜加/镜体', '2,3' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '下端斩*衔', '挠挠*有就行', '喵火流星*有就行', '1' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '芒刺在背*时', '滚栗*地/虚', '后撤逆风行*有就行' ]
					},
					body: {
						name: '洪门一式',
						fun: [ '喵喵出击*晕', '狗尾草*加' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '马蜂强化' ]
					},
					nove2: {
						name: '洪门一式',
						fun: [ '马蜂强化' ]
					}
				}
			},
			lingjian: {
				torn: {
					name: '风',
					ring: {
						name: '洪门三式',
						fun: [ '台风剑*风暴', '连斩*加泈', '断水流', '1,2,3' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '飞燕剑*风血地', '流风斩*加风', '风龙腾天*讯风', '3' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '落剑式*加名', '烈风连斩*风', '拔剑*风血', '2,3' ]
					},
					glove: {
						name: '洪门三式',
						fun: [ '逆功', '皓风剑*血害', '疾风三连斩*风', '2,3' ]
					},
					hand: {
						name: '洪门三式',
						fun: [ '侧身闪', '回天令*风挺体', '风烟剑*功害', '2,3' ]
					},
					body: {
						name: '洪门三式',
						fun: [ '涡流斩击', '天空斩', '御剑连斩*强', '3' ]
					},
					nove1: {
						name: '洪门三式',
						fun: [ '台风斩强化' ]
					},
					nove2: {
						name: '洪门三式',
						fun: [ '回天令触发强化' ]
					}
				},
				mine: {
					name: '雷',
					ring: {
						name: '洪门二式',
						fun: [ '追风剑*雷/晕', '断水流*害', '天雷令*血情', '2' ]
					},
					ear: {
						name: '洪门二式',
						fun: [ '飞燕剑*血雷', '流风斩*护挺步', '断空斩*害', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '拔剑*雷破/雷惰', '天隙流光*雷暴/雷攻', '落剑式*雷暴', '1,2' ]
					},
					glove: {
						name: '洪门二式',
						fun: [ '残月*强', '绝命斩*血', '逆攻*雷步', '1,2' ]
					},
					hand: {
						name: '洪门二式',
						fun: [ '雷炎闪*血害/血爆', '鬼剑令*雷暴', '侧身闪*雷加' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '山崩地裂*雷加', '雷鸣斩*寸雷/阳' ]
					},
					nove1: {
						name: '洪门二式',
						fun: [ '雷炎闪强化' ]
					},
					nove2: {
						name: '洪门二式',
						fun: [ '绝命斩强化' ]
					}
				},
			},
			quanshi: {
				torn: {
					name: '冲拳',
					ring: {
						name: '洪门三式',
						fun: [ '正拳*衔', '盘龙腿*引晕', '连环腿*晕体', '1' ]
					},
					ear: {
						name: '洪门三式',
						fun: [ '爆裂脚', '鬼步', '天籁跃*衔', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '爆拳*加衔', '冲锋拳*鶸时/时', '幽步', '1,2' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '点穴*镜/镜加', '冲拳*集攻/集攻胁', '升龙拳*加', '1,2' ]
					},
					hand: {
						name: '洪门三式',
						fun: [ '劫拳*暴衔', '拳舞*延时挺', '铁山靠*暴增', '1' ]
					},
					body: {
						name: '洪门二式',
						fun: [ '斗志集中', '逆风行*镜', '2' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '冲拳强化' ]
					},
					nove2: {
						name: '',
						fun: [ '' ]
					}
				},
				mine: {
					name: '回天',
					ring: {
						name: '洪门二式',
						fun: [ '正拳*命', '破山拳', '1' ]
					},
					ear: {
						name: '洪门一式',
						fun: [ '回天脚*破', '鬼步', '1' ]
					},
					neck: {
						name: '洪门二式',
						fun: [ '爆拳*加衔', '冲锋拳*鶸时/时', '幽步', '1,2' ]
					},
					glove: {
						name: '洪门一式',
						fun: [ '点穴*镜/镜加', '冲拳*集攻/集攻胁', '1,2' ]
					},
					hand: {
						name: '洪门一式',
						fun: [ '劫拳*胁', '拳舞*吸挺', '1' ]
					},
					body: {
						name: '',
						fun: [ '' ]
					},
					nove1: {
						name: '洪门一式',
						fun: [ '冲拳强化' ]
					},
					nove2: {
						name: '',
						fun: [ '' ]
					}
				},
			},
		}
		
		const whichEntry = entryList[userInfo[0]]
		console.log( whichEntry, "whichEntry" )
		
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
