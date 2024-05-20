import{d as Q,s as B,t as r,c as l,j as m,e as h,h as p,f as e,i as o,y as S,F as L,D as H,x as T,v as J,k as b,Y as j,n as I,U as W,p as Y,q as K,_ as $,m as X,r as Z,o as ee,V as te,Q as ae,W as se}from"./index-689ac86d.js";import{N as ne,p as oe}from"./format-d9dc1b5e.js";const z=v=>(Y("data-v-65654e09"),v=v(),K(),v),le={class:"dialog-body send-message"},ce={class:"section-info"},ie=z(()=>p("p",{class:"title"},"消息内容",-1)),re={class:"user-content"},ue={style:{color:"#be750c"}},de={key:0},pe={class:"section-info"},_e=z(()=>p("p",{class:"title"},"发送消息",-1)),ge=Q({__name:"send-message",props:{messageInfo:{default:null}},emits:["reloadData","closeDialog"],setup(v,{emit:w}){const x=v,C=B(()=>{var c;const u=(c=x.messageInfo)==null?void 0:c.content;if(!u)return[];const a=/\[CQ:image,.*?url=((?:(?:ht|f)tps?):\/\/[\w\-]+(?:\.[\w\-]+)+(?:[\w\-.@?^=%&:/~+*#]*[\w\-@?^=%&/~+#])?).*?]/ig,d=[];return u.split(a).map(i=>j(i)?(d.push(i),{type:"image",src:i,index:d.length-1,imgList:d}):{type:"text",message:i})}),_=r("");async function k(){await I.MESSAGE_SEND.post({...x.messageInfo,message:_.value}),w("reloadData"),w("closeDialog"),W.success("发送消息成功")}return(u,a)=>{const d=l("el-image"),c=l("el-scrollbar"),i=l("el-input"),y=l("el-button");return m(),h("div",le,[p("div",ce,[ie,e(c,{class:"message-box","wrap-class":"scrollbar-wrapper"},{default:o(()=>[p("p",re,[p("span",ue,"来自用户「"+S(u.messageInfo&&u.messageInfo.user)+"」：",1),(m(!0),h(L,null,H(C.value,(t,D)=>(m(),h(L,{key:D},[t.type==="text"?(m(),h("span",de,S(t.message),1)):t.type==="image"?(m(),T(d,{key:1,src:t.src,"preview-src-list":t.imgList,"initial-index":t.index,referrerPolicy:"no-referrer",fit:"contain",alt:"ERROR"},null,8,["src","preview-src-list","initial-index"])):J("",!0)],64))),128))])]),_:1})]),p("div",pe,[_e,e(i,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=t=>_.value=t),type:"textarea",maxlength:"120",resize:"none",rows:"4","show-word-limit":""},null,8,["modelValue"]),e(y,{class:"save",onClick:k,round:""},{default:o(()=>[b("回复")]),_:1})])])}}});const me=$(ge,[["__scopeId","data-v-65654e09"]]),ve={class:"table-container message-page"},fe={class:"nav-btn-box"},he={class:"table-view"},be=Q({__name:"index",setup(v){const w=r([{id:"userId",name:"用户QQ",type:"input"}]),x=s=>oe(s);function C(s){const g=/\[CQ:image,.*url=(.+?)]/ig;return s.replace(g,"[图片]")}const _=X(),k=B(()=>`${_.deviceHeight-(_.device==="mobile",240)-(_.showTab?40:0)}px`),u=r([]),a=r(!1),d=r(0),c=r(1),i=r(15),y=Z({userId:""});async function t(){a.value=!0;try{const s=await I.MESSAGE_LIST.get({page:c.value,length:i.value,sort:"desc",...y});u.value=s.data,d.value=s.total||0}catch{}a.value=!1}async function D(){c.value=1,await t()}async function R(s){try{await se.confirm("忽略后此消息将不再可见，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0})}catch{return}a.value=!0;try{await I.MESSAGE_REMOVE.post(s),await t()}catch{a.value=!1}}ee(()=>{t()});const M=r(!1),E=r(null);function U(s){M.value=!0,E.value=JSON.parse(JSON.stringify(s))}function V(){M.value=!1,E.value=null}return(s,g)=>{const A=l("el-scrollbar"),f=l("el-table-column"),N=l("el-button"),O=l("el-table"),F=l("el-pagination"),G=l("el-dialog"),P=te("loading");return m(),h("div",ve,[p("div",fe,[e(A,{class:"horizontal-wrap"},{default:o(()=>[e(ne,{searchList:w.value,searchData:y,showNum:1,disabled:a.value,onChange:D},null,8,["searchList","searchData","disabled"])]),_:1})]),p("div",he,[ae((m(),T(O,{data:u.value,"header-row-class-name":"table-header",height:k.value,stripe:""},{default:o(()=>[e(f,{fixed:"left",type:"selection",width:"50",align:"center",prop:"selection",label:"筛选"}),e(f,{prop:"user",label:"QQ",align:"center",width:"120px"}),e(f,{prop:"content",label:"内容",align:"center","min-width":"120px","show-overflow-tooltip":""},{default:o(({row:n})=>[b(S(C(n.content)),1)]),_:1}),e(f,{prop:"date",label:"日期",align:"center",width:"180px"},{default:o(({row:n})=>[b(S(x(n.date)),1)]),_:1}),e(f,{prop:"setting",label:"操作",align:"center",width:"100px"},{default:o(({row:n})=>[e(N,{onClick:q=>U(n),link:""},{default:o(()=>[b("处理")]),_:2},1032,["onClick"]),e(N,{onClick:q=>R(n),link:""},{default:o(()=>[b("忽略")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[P,a.value]]),e(F,{"current-page":c.value,"onUpdate:currentPage":g[0]||(g[0]=n=>c.value=n),layout:"prev, pager, next","page-size":i.value,"pager-count":7,total:d.value,onCurrentChange:t},null,8,["current-page","page-size","total"])]),e(G,{modelValue:M.value,"onUpdate:modelValue":g[1]||(g[1]=n=>M.value=n),class:"no-header",onClosed:V,draggable:""},{default:o(()=>[e(me,{"message-info":E.value,onCloseDialog:V,onReloadData:t},null,8,["message-info"])]),_:1},8,["modelValue"])])}}});const ye=$(be,[["__scopeId","data-v-9e18aa40"]]);export{ye as default};