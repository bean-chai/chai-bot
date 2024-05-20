import{d as S,t as r,j as s,x as v,i as h,h as $,K as j,H as A,e as m,y as V,v as F,z as U,L as G,_ as T,w as I,s as K,c as C,F as z,D as H,k as B,g as R,N as P,G as x,O,f as M,I as L,P as q}from"./index-3b510d65.js";const J={key:0,class:"form-item-desc"},Q=S({__name:"index",props:{label:{default:""},desc:{default:""},disabled:{type:Boolean,default:!1}},setup(k,{expose:u}){const t=r(!0);function l(i){t.value=i}return u({changeDescDisplay:l}),(i,p)=>(s(),v(U(G),{class:"form-item",label:i.label},{default:h(()=>[$("div",{class:A(["form-item-content",{"no-desc":!i.desc||!t.value}])},[j(i.$slots,"default",{},void 0,!0)],2),i.desc&&t.value?(s(),m("span",J,V(i.desc),1)):F("",!0)]),_:3},8,["label"]))}});const W=T(Q,[["__scopeId","data-v-ee18112e"]]),X={class:"tags"},Y=S({__name:"index",props:{modelValue:{default:()=>[]},disabled:{type:Boolean,default:!1},limit:{default:0},type:{default:"list"}},emits:["update:modelValue","change"],setup(k,{emit:u}){const t=k,l=r([]);I(()=>t.modelValue,n=>{l.value=n},{immediate:!0});const i=K(()=>!t.disabled&&l.value.length>t.limit);function p(n){t.limit&&t.limit===l.value.length||(l.value.splice(n,1),u("update:modelValue",l.value),u("change",l.value))}const d=r(""),c=r(!1);function _(){if(!d.value||l.value.includes(d.value)){c.value=!1,d.value="";return}c.value&&l.value.push(d.value),u("update:modelValue",l.value),u("change",l.value),c.value=!1,d.value=""}const f=r(null);function a(){c.value=!0,x(()=>{if(f.value){const n=t.type==="number"?f.value:f.value.input;n==null||n.focus()}})}return(n,b)=>{const y=C("el-tag"),w=C("el-input-number"),D=C("el-button");return s(),m("div",X,[(s(!0),m(z,null,H(l.value,(e,o)=>(s(),v(y,{key:o,effect:"plain",closable:i.value,"disable-transitions":!1,onClose:E=>p(o),round:""},{default:h(()=>[B(V(e),1)]),_:2},1032,["closable","onClose"]))),128)),c.value?(s(),m(z,{key:0},[n.type==="number"?(s(),v(w,{key:0,ref_key:"inputRef",ref:f,class:"new-tag-input",modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=e=>d.value=e),size:"small",min:0,controls:!1,disabled:n.disabled,onKeyup:R(_,["enter"]),onBlur:_},null,8,["modelValue","disabled","onKeyup"])):(s(),v(U(P),{key:1,ref_key:"inputRef",ref:f,class:"new-tag-input",modelValue:d.value,"onUpdate:modelValue":b[1]||(b[1]=e=>d.value=e),size:"small",disabled:n.disabled||!1,onKeyup:R(_,["enter"]),onBlur:_},null,8,["modelValue","disabled","onKeyup"]))],64)):(s(),v(D,{key:1,class:"add-tag-btn",size:"small",disabled:n.disabled,onClick:a,round:""},{default:h(()=>[B("+ 新增 ")]),_:1},8,["disabled"]))])}}});const Z=T(Y,[["__scopeId","data-v-0b1c1407"]]),ee={class:"input-content"},le={key:3,class:"spread-warn-msg"},ae={class:"btn-list"},se=S({inheritAttrs:!1,__name:"index",props:{modelValue:{default:""},activeSpread:{default:null},label:{default:""},placeholder:{default:""},type:{default:"normal"},desc:{default:""},rows:{default:6},hideContent:{type:Boolean,default:!1},verifyReg:{type:[Function,String],default:""},verifyMsg:{default:"请检查填写内容"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close"],setup(k,{expose:u,emit:t}){const l=k,i=O().uid;I(()=>l.activeSpread,e=>{e!==i&&f()});const p=r(!1),d=r(null);I(()=>p.value,e=>{D(),d.value&&d.value.changeDescDisplay(!e)});const c=r(null);function _(){p.value||l.disabled||(t("open",i),p.value=!0,x(()=>{var e;(e=c.value)==null||e.focus()}))}function f(){t("close"),p.value=!1}const a=r("");I(()=>l.modelValue,e=>{a.value=e},{immediate:!0});const n=K(()=>l.hideContent||l.type==="password"||!a.value),b=K(()=>n.value?"点击设置":a.value instanceof Array?a.value.join("、"):a.value),y=r(!1);function w(){if(l.type==="number"&&!a.value){y.value=!0;return}const e=l.verifyReg;if(e&&typeof a.value=="string"){if(typeof e=="string"){const o=new RegExp(`^${e}$`);if(o&&!o.test(a.value)){y.value=!0;return}}else if(!e(a.value)){y.value=!0;return}}a.value!==l.modelValue&&(t("update:modelValue",a.value),t("change",a.value)),f()}function D(){y.value=!1,a.value=l.type==="password"?"":l.modelValue}return u({spreadItem:_}),(e,o)=>{const E=C("el-input-number"),N=C("el-button");return s(),v(W,q({ref_key:"spreadRef",ref:d,class:["spread-form-item",{open:p.value,disabled:e.disabled}],label:e.label,desc:e.desc,onClick:_},e.$attrs),{default:h(()=>[p.value?(s(),m(z,{key:1},[$("div",ee,[e.type==="number"?(s(),v(E,{key:0,ref_key:"inputRef",ref:c,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=g=>a.value=g),min:0,controls:!1,placeholder:e.placeholder,disabled:e.disabled,onKeyup:R(w,["enter"])},null,8,["modelValue","placeholder","disabled","onKeyup"])):e.type==="list"?(s(),v(Z,{key:1,modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=g=>a.value=g),type:e.type,disabled:e.disabled,limit:1},null,8,["modelValue","type","disabled"])):(s(),v(U(P),{key:2,ref_key:"inputRef",ref:c,modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=g=>a.value=g),type:e.type==="textarea"?"textarea":"text",rows:e.rows,placeholder:e.placeholder||"",disabled:e.disabled||!1,"show-password":e.type==="password",onKeyup:o[3]||(o[3]=R(g=>e.type==="textarea"?"":w(),["enter"])),clearable:""},null,8,["modelValue","type","rows","placeholder","disabled","show-password"])),y.value?(s(),m("span",le,V(e.verifyMsg),1)):F("",!0)]),$("div",ae,[M(N,{type:"primary",size:"small",onClick:L(w,["stop"])},{default:h(()=>[B("确认")]),_:1},8,["onClick"]),M(N,{size:"small",onClick:L(f,["stop"])},{default:h(()=>[B("取消")]),_:1},8,["onClick"])])],64)):(s(),m("span",{key:0,class:A([{password:n.value},"spread-show-text"])},V(b.value),3))]),_:1},16,["class","label","desc"])}}});const ie=T(se,[["__scopeId","data-v-35cc4560"]]),te={class:"section-title"},ne={key:0,class:"desc"},oe={class:"append"},ue=S({__name:"index",props:{title:{default:""},desc:{default:""}},setup(k){return(u,t)=>(s(),m("div",te,[$("h3",null,V(u.title),1),u.desc?(s(),m("span",ne,V(u.desc),1)):F("",!0),$("div",oe,[j(u.$slots,"default",{},void 0,!0)])]))}});const re=T(ue,[["__scopeId","data-v-57710ec7"]]);export{W as F,re as S,Z as T,ie as a};
