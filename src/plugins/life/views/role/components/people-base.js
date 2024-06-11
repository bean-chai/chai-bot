const template = `
<div class="header-text">
    chaichai-BOT 小助手 -- 实时路况
    <div class="logo-box">
        <img src="../role/assets/pangxie.png" />
    </div>
</div>

<div class="border-box">
    <div class="header-box">
		<div class="flex-box">
		    <div class="city-name">{{city}} -- {{roleName}}</div>
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
<!--        <div class="weather-tips">{{roleInfo.description}}</div>-->
    </div>
    <div style="width: 100%;margin-bottom: 10px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">整体路况 -- {{roleInfo.evaluation.status === 0 ? "未知路况" : roleInfo.evaluation.status === 1 ? "畅通" : roleInfo.evaluation.status === 2 ? "缓行" : roleInfo.evaluation.status === 3 ? "拥堵" : "严重拥堵"}}</div>
    
    <div class="flex-box">
<!--    	<div v-for="(item,index) in weatherInfo.hourly_forecast" v-key="index">-->
    		<div class="center-box margin-box">{{roleInfo.description}}</div>
<!--    		<div class="center-box weight">{{item.temperature}} ℃</div>-->
<!--		</div>-->
	</div>

    <div style="width: 100%;margin-bottom: 10px;margin-top: 25px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">详细路况</div>
<!--	    <div class="flex-box1">-->
    	<div v-for="(item,index) in roleInfo?.road_traffic[0]?.congestion_sections" v-key="index">
    		<div class="center-box1">拥堵路段：{{item.section_desc}}</div>
    		<div class="center-box1 margin-box">拥堵距离：{{item.congestion_distance}} 米</div>
    		<div class="center-box1 margin-box weight">平均通行速度：{{item.speed}} 千米/小时</div>
    		<div class="center-box1 margin-box">路段拥堵程度：{{item.status === 0 ? "未知路况" : item.status === 1 ? "畅通" : item.status === 2 ? "缓行" : item.status === 3 ? "拥堵" : "严重拥堵"}}</div>
    		<div class="center-box1 margin-box">较10分钟前拥堵趋势：{{item.congestion_trend\t}}</div>
		</div>
<!--	</div>-->

</div>

<div class="footer">
    <p class="sign">Created by chaichai-BOT & adachi</p>
</div>
`;

import { defineComponent, computed, ref,onMounted,onUnmounted } from "vue";

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
		
		onMounted(() => {
			// drawLineChart(canvas.value, data.value);
		});
		
		
		const roleInfo = ref( [] )
		const roleName = ref( [] )
		const city = ref( [] )
		const urlParams = urlParamsGet( location.href );
		// const city = urlParams.data
		const userList = urlParams.data.split( ',' )
		console.log( userList, "userList" )
		
		fetch( `/life/api/getRole?groupId=${userList[1]}&userId=${userList[0]}&role=${userList[3]}&city=${userList[2]}` ).then( ( response ) => {
			return response.json();
		} )
			.then( async ( e ) => {
				console.log(e,"rubbishee")
				roleInfo.value = e.role
				city.value = e.city
				roleName.value = e.roleName
				// e.weather.result.hourly_forecast = e.weather.result.hourly_forecast.splice(0, 11)
				// e.weather.result.forecast_list = e.weather.result.forecast_list.splice(1, 7)
				// weatherInfo.value = e.weather.result
				
				// console.log(userInfo,"userInfo")

				// userInfo.value =  e.user
				// weapenInfo.value = e.weapen
				// console.log( userInfo.value.name, "userinfo" )
			} );
		
	
		
		return {
			roleInfo,
			city,
			roleName
		}
	}
} );
