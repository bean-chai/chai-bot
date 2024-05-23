
const template = `
<div class="header-text">
    chaichai-BOT 小助手  --  装备信息
<!--                   <div class="logo-box">-->
<!--                <img src="../userInfo/assets/pangxie.png" />-->
<!--                			<span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>-->
<!--</div>-->
</div>
<div class="border-box">
<!--    个人信息-->
    <div class="user-info">
        <div class="position-box" class="user-name">{{userInfo?.name || '暂无数据'}}</div>
        <div class="position-box">服务器：{{userInfo?.server_name || '暂无数据'}}</div>
        <div class="position-box">势力：{{userInfo?.faction_name || '暂无数据'}}</div>
        <div class="position-box">职业：{{userInfo?.class_name || '暂无数据'}}</div>
        <div class="position-box">种族：{{userInfo?.race_name || '暂无数据'}}</div>
        <div class="position-box">门派：{{userInfo?.guild?.guild_name || '暂无数据'}}</div>
        <div class="position-box">等级：{{userInfo?.level || '暂无数据'}}级 {{userInfo?.mastery_level || '暂无数据'}}星</div>
        <div class="position-box">坐骑：{{weapenInfo?.vehicle?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.vehicle?.equip?.item?.icon" alt=""></div>
        <div class="position-box">对话框：{{weapenInfo?.speech_bubble_appearance?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.speech_bubble_appearance?.equip?.item?.icon" alt="">
        </div>
        <div class="position-box">铭牌：{{weapenInfo?.name_plate_appearance?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.name_plate_appearance?.equip?.item?.icon" alt="">
        </div>
        <div class="position-box">幻影石：{{weapenInfo?.pet_1_appearance?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.pet_1_appearance?.equip?.item?.icon" alt=""></div>
        <div class="position-box">武器幻影：{{weapenInfo?.hand_appearance?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.hand_appearance?.equip?.item?.icon" alt=""></div>
        <div class="position-box">头饰：{{weapenInfo?.head?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.head?.equip?.item?.icon" alt=""></div>
        <div class="position-box">面饰：{{weapenInfo?.eye?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.eye?.equip?.item?.icon" alt=""></div>
        <div class="position-box">背饰：{{weapenInfo?.body_accessory?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.body_accessory?.equip?.item?.icon" alt=""></div>
        <div class="position-box">服装：{{weapenInfo?.body?.detail?.item?.name || '暂无数据'}} <img
                style="width: 25px;height: 25px" :src="weapenInfo?.body?.equip?.item?.icon" alt=""></div>
 
    </div>
<!--        八卦牌-->
    <div class="bagua-box">
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_1?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_1?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_1?.detail?.item?.category_minor_name || '暂无数据'}}</div>
                   <div v-if="weapenInfo?.soulshield_1?.detail?.item?.sub_abilities">
                           <div v-for="(item,index) in weapenInfo?.soulshield_1?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
    </div>
        
               <div v-if="weapenInfo?.soulshield_1?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_1?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_2?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_2?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_2?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_2?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_2?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_2?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_3?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_3?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_3?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_3?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_3?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_3?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_4?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_4?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_4?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_4?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_4?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_4?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_5?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_5?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_5?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_5?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_5?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_5?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_6?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_6?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_6?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_6?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_6?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_6?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_7?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_7?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_7?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_7?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_7?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_7?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
           <div class="bagua-item">
               <div class="bagua-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                       :src="weapenInfo?.soulshield_8?.equip?.item?.icon" alt=""> {{weapenInfo?.soulshield_8?.detail?.item?.name ||
                   '暂无数据'}} {{weapenInfo?.soulshield_8?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soulshield_8?.detail?.item?.sub_abilities" v-key="index">
                   <div class="bagua-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.soulshield_8?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.soulshield_8?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="bagua-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
        <div class="mimi-box">
			<img src="../userInfo/assets/pangxie.png">
			<span class="mimi-text">推荐：五年剑灵底蕴，安全省心，认准螃蟹账号（pxb7.com）</span>
		</div>
    <div class="content">
<!--        武器-->
        <div class="weapen-box">
           <div class="weapen-item">
               <div class="weapen-title">
                   <img style="width: 25px;height: 25px;vertical-align:middle;" :src="weapenInfo?.hand?.equip?.item?.icon" alt="">
                   {{weapenInfo?.hand?.detail?.item?.name ||
                    '暂无数据'}}
                    <div></div>
                </div>

               <div v-for="(item,index) in weapenInfo?.hand?.detail?.item?.main_abilities" v-key="index">
                   <div class="weapen-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
                <div v-for="(item,index) in weapenInfo?.hand?.detail?.item?.sub_abilities" v-key="index">
                   <div class="weapen-list">
                        <span>
                           {{item?.name || '暂无数据'}}：
                        </span>
                        <span>
                           {{item?.value || '暂无数据'}}
                        </span>
                    </div>
                </div>
               <div v-if="weapenInfo?.hand?.detail?.item_spirit !== null">
                   <div v-for="(item1,index1) in weapenInfo?.hand?.detail?.item_spirit?.abilities" v-key="index1">
                       <div class="weapen-list">
                           <span>
                               {{item1?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                           </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        &lt;!&ndash;武器宝石&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"> 武器宝石</div>
        <div class="baoshi-box" v-if="weapenInfo?.hand?.detail?.added_enchant_gems !== null">
                       <span v-for="(item3, index3) in weapenInfo?.hand?.detail?.added_enchant_gems" v-key="index3">
                           <img style="width: 25px;height: 25px;vertical-align:middle;" :src="item3?.icon" alt="">
                           {{item3?.name}}
                        </span>
                    </div>
                   <div class="baoshi-box1" v-if="weapenInfo?.hand?.detail?.added_gems !== null">
                       <span v-for="(item3, index3) in weapenInfo?.hand?.detail?.added_gems" v-key="index3">
                           <img style="width: 25px;height: 25px;vertical-align:middle;" :src="item3?.icon" alt="">
                           {{item3?.name}}
                        </span>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;戒指&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.finger_left?.equip?.item?.icon" alt=""> {{weapenInfo?.finger_left?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.finger_left?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.finger_left?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.finger_left?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.finger_left?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.finger_left?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;耳环&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.ear_left?.equip?.item?.icon" alt=""> {{weapenInfo?.ear_left?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.ear_left?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.ear_left?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.ear_left?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.ear_left?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.ear_left?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;项链&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.neck?.equip?.item?.icon" alt=""> {{weapenInfo?.neck?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.neck?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.neck?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.neck?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.neck?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.neck?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;手镯&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.bracelet?.equip?.item?.icon" alt=""> {{weapenInfo?.bracelet?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.bracelet?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.bracelet?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.bracelet?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.bracelet?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.bracelet?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;腰带&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.belt?.equip?.item?.icon" alt=""> {{weapenInfo?.belt?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.belt?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.belt?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.belt?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.belt?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.belt?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;手套&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.gloves?.equip?.item?.icon" alt=""> {{weapenInfo?.gloves?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.gloves?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.gloves?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.gloves?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.gloves?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.gloves?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;秘功牌&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.swift_badge?.equip?.item?.icon" alt=""> {{weapenInfo?.swift_badge?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.swift_badge?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.swift_badge?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.swift_badge?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.swift_badge?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.swift_badge?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;神功牌&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.soul_badge?.equip?.item?.icon" alt=""> {{weapenInfo?.soul_badge?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.soul_badge?.detail?.item?.category_minor_name || '暂无数据'}}</div>
               <div v-for="(item,index) in weapenInfo?.soul_badge?.detail?.item?.main_abilities" v-key="index">
                  <div class="weapen-list">
                      <span>
                          {{item?.name || '暂无数据'}}：
                      </span>
                      <span>
                          {{item?.value || '暂无数据'}}
                      </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.soul_badge?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                        </div>
                    </div>
                   <div v-if="weapenInfo?.soul_badge?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.soul_badge?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
<!--        &lt;!&ndash;魂&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.soul?.equip?.item?.icon" alt=""> {{weapenInfo?.soul?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.soul?.detail?.item?.category_minor_name || '暂无数据'}}</div>
                <div v-for="(item,index) in weapenInfo?.soul?.detail?.item?.main_abilities" v-key="index">
                   <div class="weapen-list">
                       <span>
                           {{item?.name || '暂无数据'}}：
                       </span>
                       <span>
                           {{item?.value || '暂无数据'}}
                       </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.soul?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                       </div>
                   </div>
                   <div v-if="weapenInfo?.soul?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.soul?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
<!--        &lt;!&ndash;灵&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.soul_2?.equip?.item?.icon" alt=""> {{weapenInfo?.soul_2?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.soul_2?.detail?.item?.category_minor_name || '暂无数据'}}</div>
                <div v-for="(item,index) in weapenInfo?.soul_2?.detail?.item?.main_abilities" v-key="index">
                   <div class="weapen-list">
                       <span>
                           {{item?.name || '暂无数据'}}：
                       </span>
                       <span>
                           {{item?.value || '暂无数据'}}
                       </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.soul_2?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                       </div>
                   </div>
                   <div v-if="weapenInfo?.soul_2?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.soul_2?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
<!--        &lt;!&ndash;守护&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.pet?.equip?.item?.icon" alt=""> {{weapenInfo?.pet?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.pet?.detail?.item?.category_minor_name || '暂无数据'}}</div>
                <div v-for="(item,index) in weapenInfo?.pet?.detail?.item?.main_abilities" v-key="index">
                   <div class="weapen-list">
                       <span>
                           {{item?.name || '暂无数据'}}：
                       </span>
                       <span>
                           {{item?.value || '暂无数据'}}
                       </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.pet?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                       </div>
                   </div>
                   <div v-if="weapenInfo?.pet?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.pet?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
<!--         &lt;!&ndash;守护宝石&ndash;&gt; -->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"> 守护宝石</div>
        <div class="baoshi-box" v-if="weapenInfo?.pet?.detail?.added_enchant_gems !== null">
                       <span v-for="(item3, index3) in weapenInfo?.pet?.detail?.added_enchant_gems" v-key="index3">
                           <img style="width: 25px;height: 25px;vertical-align:middle;" :src="item3?.icon" alt="">
                           {{item3?.name}}
                       </span>
                   </div>
                   <div class="baoshi-box1" v-if="weapenInfo?.pet?.detail?.added_gems !== null">
                       <span v-for="(item3, index3) in weapenInfo?.pet?.detail?.added_gems" v-key="index3">
                           <img style="width: 25px;height: 25px;vertical-align:middle;" :src="item3?.icon" alt="">
                           {{item3?.name}}
                       </span>
                   </div>
               </div>
        </div>
<!--        &lt;!&ndash;星&ndash;&gt;-->
        <div class="finger-box">
        <div class="weapen-item">
                   <div class="weapen-title"><img style="width: 25px;height: 25px;vertical-align:middle;"
                           :src="weapenInfo?.nova?.equip?.item?.icon" alt=""> {{weapenInfo?.nova?.detail?.item?.name ||
                       '暂无数据'}} {{weapenInfo?.nova?.detail?.item?.category_minor_name || '暂无数据'}}</div>
                <div v-for="(item,index) in weapenInfo?.nova?.detail?.item?.main_abilities" v-key="index">
                   <div class="weapen-list">
                       <span>
                           {{item?.name || '暂无数据'}}：
                       </span>
                       <span>
                           {{item?.value || '暂无数据'}}
                       </span>
                   </div>
               </div>
                   <div v-for="(item,index) in weapenInfo?.nova?.detail?.item?.sub_abilities" v-key="index">
                       <div class="weapen-list">
                           <span>
                               {{item?.name || '暂无数据'}}：
                           </span>
                           <span>
                               {{item?.value || '暂无数据'}}
                           </span>
                       </div>
                   </div>
                   <div v-if="weapenInfo?.nova?.detail?.item_spirit !== null">
                       <div v-for="(item1,index1) in weapenInfo?.nova?.detail?.item_spirit?.abilities" v-key="index1">
                           <div class="weapen-list">
                               <span>
                                   {{item1?.name || '暂无数据'}}：
                               </span>
                               <span>
                                   {{item1?.name === '功力伤害率' ? item1?.value / 10 + '%' : item1?.value}}
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
<!--        作者留言 -->
        <div class="finger-box">
            <div class="weapen-item">
                <div class="weapen-title">作者留言</div>
                <div class="weapen-list" style="margin-bottom: 5px;margin-top: 10px">
                    <span>bot作者：</span>
                    <span>电二（南道拳豪）你算哪只傻兔兔灬</span>
                </div>
                <div class="weapen-list" style="margin-bottom: 5px">如果你在使用过程中有任何建议、意见、合作意向</div>
                <div class="weapen-list" style="margin-bottom: 5px">请联系bot作者，我将不胜感激 ╰(￣ω￣ｏ)</div>
                <div class="weapen-list">作者QQ：2787922490（柴柴）</div>

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
		const userInfo = ref( {} )
		const weapenInfo = ref( {} )
		const urlParams = urlParamsGet( location.href );
		 console.log(location.href,"urlParams.data")
		console.log( urlParams, "urlParams" )
		const userList = urlParams.data.split( ',' )
		console.log( userList, "userList" )
		
		
		 fetch( `/BNS/api/getUserInfo?id=${ userList[0] }&groupId=${ userList[1] }&zone=${ userList[2] }&userName=${ userList[3] }` ).then( ( response ) => {
			return response.json();
		} )
			.then( async ( e ) => {
				userInfo.value =  e.user
				weapenInfo.value = e.weapen
				console.log( userInfo.value.name, "userinfo" )
			} );
		
		return {
			userInfo,
			weapenInfo
		}
	}
} );
