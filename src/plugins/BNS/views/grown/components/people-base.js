
const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  装备耗材
<!--                   <div class="logo-box">-->
<!--                <img src="../userInfo/assets/pangxie.png" />-->
<!--                			<span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
<!--</div>-->
</div>
<div style="position: relative;z-index: 99999">
  	<div v-if="userList[2] === '喷风'" style="border-radius: 20px;overflow: hidden;margin-bottom: 70px">
        <table align="center" border="1" cellpadding="10" cellspacing="0" width="100%" style="border-radius: 20px;border: 2px solid #ccc;color: #fff;text-align: center;">
            <tr>
                <th width="80">喷风20-25</th>
                <th>神物</th>
                <th>风岛结晶</th>
                <th>风岛油</th>
                <th>风岛镜</th>
                <th>月锻石</th>
                <th>日锻石</th>
                <th>高白精髓</th>
                <th>金币</th>
            </tr>
            <tr>
                <td>20-21</td>
                <td>206</td>
                <td>549</td>
                <td>132</td>
                <td>147</td>
                <td>3602</td>
                <td>3602</td>
                <td>288</td>
                <td>32932</td>
            </tr>
            <tr>
                <td>21-22</td>
                <td>217</td>
                <td>580</td>
                <td>139</td>
                <td>155</td>
                <td>3805</td>
                <td>3805</td>
                <td>304</td>
                <td>34784</td>
            </tr>
            <tr>
                <td>22-23</td>
                <td>229</td>
                <td>611</td>
                <td>147</td>
                <td>164</td>
                <td>4010</td>
                <td>4010</td>
                <td>321</td>
                <td>36664</td>
            </tr>
            <tr>
                <td>23-24</td>
                <td>241</td>
                <td>643</td>
                <td>155</td>
                <td>172</td>
                <td>4219</td>
                <td>4219</td>
                <td>337</td>
                <td>38568</td>
            </tr>
            <tr>
                <td>24-25</td>
                <td>253</td>
                <td>675</td>
                <td>162</td>
                <td>181</td>
                <td>4430</td>
                <td>4430</td>
                <td>354</td>
                <td>40500</td>
            </tr>
            <tr height="40">
                <td colspan="9">

                </td>
            </tr>
            <tr>
                <td>总计</td>
                <td>1146</td>
                <td>3058</td>
                <td>735</td>
                <td>819</td>
                <td>20066</td>
                <td>20066</td>
                <td>1604</td>
                <td>183448</td>
            </tr>

        </table>
    </div>
	<div v-if="userList[2] === '风岛首饰'" style="border-radius: 20px;overflow: hidden;margin-bottom: 70px">
        <table align="center" border="1" cellpadding="10" cellspacing="0" width="100%" style="border-radius: 20px;border: 2px solid #ccc;color: #fff;text-align: center;">
            <tr>
                <th width="80">风岛首饰20-25</th>
                <th>神物</th>
                <th>风岛结晶</th>
                <th>风岛油</th>
                <th>风岛镜</th>
                <th>月锻石</th>
                <th>日锻石</th>
                <th>高白精髓</th>
                <th>金币</th>
            </tr>
            <tr>
                <td>20-21</td>
                <td>91</td>
                <td>244</td>
                <td>59</td>
                <td>65</td>
                <td>1601</td>
                <td>1601</td>
                <td>128</td>
                <td>14636</td>
            </tr>
            <tr>
                <td>21-22</td>
                <td>97</td>
                <td>258</td>
                <td>62</td>
                <td>69</td>
                <td>1691</td>
                <td>1691</td>
                <td>135</td>
                <td>15460</td>
            </tr>
            <tr>
                <td>22-23</td>
                <td>102</td>
                <td>272</td>
                <td>65</td>
                <td>73</td>
                <td>1782</td>
                <td>1782</td>
                <td>143</td>
                <td>16296</td>
            </tr>
            <tr>
                <td>23-24</td>
                <td>107</td>
                <td>286</td>
                <td>69</td>
                <td>77</td>
                <td>1875</td>
                <td>1875</td>
                <td>150</td>
                <td>17144</td>
            </tr>
            <tr>
                <td>24-25</td>
                <td>113</td>
                <td>300</td>
                <td>72</td>
                <td>80</td>
                <td>1969</td>
                <td>1969</td>
                <td>158</td>
                <td>18000</td>
            </tr>
            <tr height="40">
                <td colspan="9">

                </td>
            </tr>
            <tr>
                <td>总计</td>
                <td>510</td>
                <td>1360</td>
                <td>327</td>
                <td>364</td>
                <td>8918</td>
                <td>8918</td>
                <td>714</td>
                <td>81536</td>
            </tr>

        </table>
    </div>
    <div v-if="userList[2] === '万威'" style="border-radius: 20px;overflow: hidden;margin-bottom: 70px">
        <table align="center" border="1" cellpadding="10" cellspacing="0" width="100%" style="border-radius: 20px;border: 2px solid #ccc;color: #fff;text-align: center;">
            <tr>
                <th width="80">万威20-25</th>
                <th>神物</th>
                <th>万威结晶</th>
                <th>万威镜</th>
                <th>月锻石</th>
                <th>日锻石</th>
                <th>高白精髓</th>
                <th>金币</th>
            </tr>
            <tr>
                <td>20-21</td>
                <td>221</td>
                <td>738</td>
                <td>517</td>
                <td>1845</td>
                <td>1845</td>
                <td>49</td>
                <td>2952</td>
            </tr>
            <tr>
                <td>21-22</td>
                <td>241</td>
                <td>803</td>
                <td>562</td>
                <td>2008</td>
                <td>2008</td>
                <td>54</td>
                <td>3212</td>
            </tr>
            <tr>
                <td>22-23</td>
                <td>261</td>
                <td>871</td>
                <td>610</td>
                <td>2178</td>
                <td>2178</td>
                <td>58</td>
                <td>3484</td>
            </tr>
            <tr>
                <td>23-24</td>
                <td>282</td>
                <td>941</td>
                <td>659</td>
                <td>2353</td>
                <td>2353</td>
                <td>63</td>
                <td>3764</td>
            </tr>
            <tr>
                <td>24-25</td>
                <td>304</td>
                <td>1014</td>
                <td>710</td>
                <td>2535</td>
                <td>2535</td>
                <td>68</td>
                <td>4056</td>
            </tr>
            <tr height="40">
                <td colspan="9">

                </td>
            </tr>
            <tr>
                <td>总计</td>
                <td>1309</td>
                <td>4367</td>
                <td>3058</td>
                <td>10919</td>
                <td>10919</td>
                <td>292</td>
                <td>17468</td>
            </tr>

        </table>
    </div>
</div>
<!--        <div class="mimi-box">-->
<!--			<img src="../userInfo/assets/pangxie.png">-->
<!--			<span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
<!--		</div>-->
<!--        页脚-->
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
		 console.log(location.href,"urlParams.data")
		console.log( urlParams, "urlParams" )
		const userList = urlParams.data.split( ',' )
		console.log( userList, "userList" )

		
		return {
			userList,
		}
	}
} );
