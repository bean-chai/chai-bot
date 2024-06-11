const template = `
<div class="header-text">
    chaichai-BOT 小助手 -- 今日油价
    <div class="logo-box">
        <img src="../gas/assets/pangxie.png" />
    </div>
</div>

<div class="border-box">
    <div class="header-box">
		<div class="flex-box">
		    <div class="city-name">{{gasInfo.Region}} -- </div>
        	<div class="update-time">数据更新时间：{{gasInfo.UpdateTime}}</div>
		</div>
<!--        <div class="wendu-box">-->
<!--            <div class="wendu">{{weatherInfo.current_temperature}}℃</div>-->
<!--            <div>-->
<!--				<div class="flex-box">-->
<!--					<div>{{weatherInfo.current_condition}}</div>-->
<!--					<div class="wind">{{weatherInfo.wind_direction}}</div>-->
<!--				</div>-->
<!--				<div class="flex-box level-box">-->
<!--					<div>{{weatherInfo.low_temperature}} ~ {{weatherInfo.high_temperature}} ℃</div>-->
<!--					<div class="status-box">{{weatherInfo.aqi}} {{weatherInfo.quality_level}}</div>-->
<!--				</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="weather-tips">{{weatherInfo.tips}}</div>-->
    </div>
<!--    <div style="width: 100%;margin-bottom: 10px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">今日油价</div>-->
<!--    -->
<!--    <div class="flex-box">-->
<!--    	<div v-for="(item,index) in weatherInfo.hourly_forecast" v-key="index">-->
<!--    		<div class="center-box margin-box">{{new Date().getHours() == item.hour ? '现在' : item.hour + ':00'}}</div>-->
<!--    		<div class="center-box weight">{{item.temperature}} ℃</div>-->
<!--		</div>-->
<!--	</div>-->
    <div style="width: 100%;margin-bottom: 10px;margin-top: 25px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">今日油价</div>
	    <div class="flex-box1">
<!--    	<div v-for="(item,index) in weatherInfo.forecast_list" v-key="index">-->
    		<div class="center-box1 margin-box">92号汽油：{{gasInfo.Gasoline92}} (元)/升</div>
    		<div class="center-box1 margin-box">95号汽油：{{gasInfo.Gasoline95}} (元)/升</div>
    		<div class="center-box1 margin-box">98号汽油：{{gasInfo.Gasoline98}} (元)/升</div>
    		<div class="center-box1 margin-box">0号柴油：{{gasInfo.Diesel0}} (元)/升</div>
<!--		</div>-->
	</div>

	<div>备注：云南、陕西、四川、辽宁、新疆、青海、西藏，贵州、内蒙古、黑龙江油价没有实现统一价格价格仅供参考使用，今日油价数据来源于各地网友提供的中石油、中石化、壳牌加油站最新价格. </div>
</div>

<div class="footer">
    <p class="sign">Created by chaichai-BOT & adachi</p>
</div>
`;

import { defineComponent, computed, ref,onMounted,onUnmounted } from "vue";



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
		const gasInfo = ref( [] )
		const urlParams = urlParamsGet( location.href );
		const userList = urlParams.data.split( ',' )
		
		fetch( `/life/api/getGas?groupId=${userList[1]}&userId=${userList[0]}&gas=${userList[2]}` ).then( ( response ) => {
			return response.json();
		} )
			.then( async ( e ) => {
				console.log(e,"eee")
				
				gasInfo.value = e.gas.result.find(item => item.Region === userList[2] );
				console.log(gasInfo.value,"gasInfo")

			} );
		
	
		
		return {
			gasInfo,
		}
	}
} );
