import{c as q,E as x,l as J,h as K,r as _}from"./use-translate.8036e41d.js";import{n as A,m as B,c as L,t as O,a as Q,w as W}from"./with-install.6887218d.js";import{u as Z}from"./use-refs.91bd8378.js";import{u as $}from"./use-touch.ee9512d6.js";import{I as F}from"./index.bbaa83e9.js";import{A as ee,x as te,D as oe,e as f}from"./vue-libs.a040eeb8.js";const[ae,m]=q("rate");function le(t,s,n,r){return t>=s?{status:"full",value:1}:t+.5>=s&&n&&!r?{status:"half",value:.5}:t+1>=s&&n&&r?{status:"half",value:Math.round((t-s+1)*1e10)/1e10}:{status:"void",value:0}}const se={size:A,icon:B("star"),color:String,count:L(5),gutter:A,readonly:Boolean,disabled:Boolean,voidIcon:B("star-o"),allowHalf:Boolean,voidColor:String,touchable:O,iconPrefix:String,modelValue:Q(0),disabledColor:String},ne=ee({name:ae,props:se,emits:["change","update:modelValue"],setup(t,{emit:s}){const n=$(),[r,v]=Z(),p=te(),P=()=>t.readonly||t.disabled||!t.touchable,X=oe(()=>Array(+t.count).fill("").map((o,e)=>le(t.modelValue,e+1,t.allowHalf,t.readonly)));let l,c,h=Number.MAX_SAFE_INTEGER,g=Number.MIN_SAFE_INTEGER;const S=()=>{c=_(p);const o=r.value.map(_);l=[],o.forEach((e,a)=>{h=Math.min(e.top,h),g=Math.max(e.top,g),t.allowHalf?l.push({score:a+.5,left:e.left,top:e.top,height:e.height},{score:a+1,left:e.left+e.width/2,top:e.top,height:e.height}):l.push({score:a+1,left:e.left,top:e.top,height:e.height})})},V=(o,e)=>{for(let a=l.length-1;a>0;a--)if(e>=c.top&&e<=c.bottom){if(o>l[a].left&&e>=l[a].top&&e<=l[a].top+l[a].height)return l[a].score}else{const u=e<c.top?h:g;if(o>l[a].left&&l[a].top===u)return l[a].score}return t.allowHalf?.5:1},I=o=>{!t.disabled&&!t.readonly&&o!==t.modelValue&&(s("update:modelValue",o),s("change",o))},D=o=>{P()||(n.start(o),S())},G=o=>{if(!P()&&(n.move(o),n.isHorizontal())){const{clientX:e,clientY:a}=o.touches[0];J(o),I(V(e,a))}},Y=(o,e)=>{const{icon:a,size:u,color:T,count:y,gutter:N,voidIcon:w,disabled:i,voidColor:C,allowHalf:E,iconPrefix:k,disabledColor:z}=t,b=e+1,R=o.status==="full",d=o.status==="void",U=E&&o.value>0&&o.value<1;let H;N&&b!==+y&&(H={paddingRight:K(N)});const j=M=>{S(),I(E?V(M.clientX,M.clientY):b)};return f("div",{key:e,ref:v(e),role:"radio",style:H,class:m("item"),tabindex:i?void 0:0,"aria-setsize":y,"aria-posinset":b,"aria-checked":!d,onClick:j},[f(F,{size:u,name:R?a:w,class:m("icon",{disabled:i,full:R}),color:i?z:R?T:C,classPrefix:k},null),U&&f(F,{size:u,style:{width:o.value+"em"},name:d?w:a,class:m("icon",["half",{disabled:i,full:!d}]),color:i?z:d?C:T,classPrefix:k},null)])};return x(()=>t.modelValue),()=>f("div",{ref:p,role:"radiogroup",class:m({readonly:t.readonly,disabled:t.disabled}),tabindex:t.disabled?void 0:0,"aria-disabled":t.disabled,"aria-readonly":t.readonly,onTouchstartPassive:D,onTouchmove:G},[X.value.map(Y)])}}),ie=W(ne),he=ie;export{he as V};
