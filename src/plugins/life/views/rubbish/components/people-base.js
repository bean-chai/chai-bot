const template = `
<div class="header-text">
    chaichai-BOT 小助手 -- 垃圾分类
    <div class="logo-box">
        <img src="../rubbish/assets/pangxie.png" />
    </div>
</div>

<div class="border-box">
    <div class="header-box">
		<div class="flex-box">
		    <div class="city-name">{{weatherInfo.city_name}} -- </div>
		</div>
        <div class="wendu-box">
            <div class="wendu">{{weatherInfo.current_temperature}}℃</div>
            <div>
				<div class="flex-box">
					<div>{{weatherInfo.current_condition}}</div>
					<div class="wind">{{weatherInfo.wind_direction}}</div>
				</div>
				<div class="flex-box level-box">
					<div>{{weatherInfo.low_temperature}} ~ {{weatherInfo.high_temperature}} ℃</div>
					<div class="status-box">{{weatherInfo.aqi}} {{weatherInfo.quality_level}}</div>
				</div>
            </div>
        </div>
        <div class="weather-tips">{{weatherInfo.tips}}</div>
    </div>
    <div style="width: 100%;margin-bottom: 10px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">今日气温</div>
    
    <div class="flex-box">
    	<div v-for="(item,index) in weatherInfo.hourly_forecast" v-key="index">
    		<div class="center-box margin-box">{{new Date().getHours() == item.hour ? '现在' : item.hour + ':00'}}</div>
    		<div class="center-box weight">{{item.temperature}} ℃</div>
		</div>
	</div>
    <div style="width: 100%;margin-bottom: 10px;margin-top: 25px;border-left:2px solid #ccc;padding-left: 5px;font-weight: 600;font-size: 18px">未来七天</div>
	    <div class="flex-box1">
    	<div v-for="(item,index) in weatherInfo.forecast_list" v-key="index">
    		<div class="center-box1 margin-box">{{item.date}}</div>
    		<div class="center-box1 margin-box weight">{{item.low_temperature}} ~ {{item.high_temperature}} ℃</div>
    		<div class="center-box1 margin-box">{{item.condition}}</div>
    		<div class="center-box1 margin-box">{{item.wind_direction}}</div>
    		<div class="center-box1">风力：{{item.wind_level}} 级</div>
		</div>
	</div>

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

		
		const weatherInfo = ref( [] )
		const urlParams = urlParamsGet( location.href );
		// const city = urlParams.data
		const userList = urlParams.data.split( ',' )
		console.log( userList, "userList" )
		
		fetch( `/life/api/getRubbish?groupId=${userList[1]}&userId=${userList[0]}&rubbish=${userList[2]}` ).then( ( response ) => {
			return response.json();
		} )
			.then( async ( e ) => {
				console.log(e,"rubbishee")
				// e.weather.result.hourly_forecast = e.weather.result.hourly_forecast.splice(0, 11)
				// e.weather.result.forecast_list = e.weather.result.forecast_list.splice(1, 7)
				// weatherInfo.value = e.weather.result
				
				// console.log(userInfo,"userInfo")

				// userInfo.value =  e.user
				// weapenInfo.value = e.weapen
				// console.log( userInfo.value.name, "userinfo" )
			} );
		
	
		
		return {
			weatherInfo,
		}
	}
} );
