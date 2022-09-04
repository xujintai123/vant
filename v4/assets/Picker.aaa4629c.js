import{c as V,e as x,F as L,i as he,u as te,n as ne,l as oe,b as ae,G as be,H as z,p as Q}from"./use-translate.c7ada534.js";import{n as F,d as N,b as B,c as j,t as ge,m as pe}from"./with-install.fe59c8e0.js";import{H as J,a as Oe}from"./constant.80c6de18.js";import{u as le}from"./use-expose.582395af.js";import{L as Te}from"./index.17a6cccd.js";import{u as Ce}from"./use-touch.d7fba47b.js";import{A as _,x as k,R as ye,e as m,B as ce,Q as ke,D as y,y as K}from"./vue-libs.34a885a4.js";import{T as xe,a as Pe}from"./index.6bd558e8.js";const[Ee,g,W]=V("picker"),ie=e=>e.find(o=>!o.disabled)||e[0];function we(e,o){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(o.children in n)return"cascade"}return"default"}function G(e,o){o=L(o,0,e.length);for(let n=o;n<e.length;n++)if(!e[n].disabled)return n;for(let n=o-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const X=(e,o,n)=>o!==void 0&&!!e.find(r=>r[n.value]===o);function q(e,o,n){const r=e.findIndex(f=>f[n.value]===o),l=G(e,r);return e[l]}function Se(e,o,n){const r=[];let l={[o.children]:e},f=0;for(;l&&l[o.children];){const v=l[o.children],u=n.value[f];if(l=he(u)?q(v,u,o):void 0,!l&&v.length){const s=ie(v)[o.value];l=q(v,s,o)}f++,r.push(v)}return r}function He(e){const{transform:o}=window.getComputedStyle(e),n=o.slice(7,o.length-1).split(", ")[5];return Number(n)}function De(e){return x({text:"text",value:"value",children:"children"},e)}const Z=200,ee=300,Me=15,[se,U]=V("picker-column"),re=Symbol(se),Ne=_({name:se,props:{value:F,fields:N(Object),options:B(),readonly:Boolean,allowHtml:Boolean,optionHeight:N(Number),swipeDuration:N(F),visibleOptionNum:N(F)},emits:["change","clickOption"],setup(e,{emit:o,slots:n}){let r,l,f,v,u;const s=k(),b=k(),d=k(0),h=k(0),T=Ce(),P=()=>e.options.length,C=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,p=c=>{const t=G(e.options,c),a=-t*e.optionHeight,i=()=>{const O=e.options[t][e.fields.value];O!==e.value&&o("change",O)};r&&a!==d.value?u=i:i(),d.value=a},$=c=>{r||e.readonly||(u=null,h.value=Z,p(c),o("clickOption",e.options[c]))},w=c=>L(Math.round(-c/e.optionHeight),0,P()-1),S=(c,t)=>{const a=Math.abs(c/t);c=d.value+a/.003*(c<0?-1:1);const i=w(c);h.value=+e.swipeDuration,p(i)},H=()=>{r=!1,h.value=0,u&&(u(),u=null)},A=c=>{if(!e.readonly){if(T.start(c),r){const t=He(b.value);d.value=Math.min(0,t-C())}h.value=0,l=d.value,f=Date.now(),v=l,u=null}},R=c=>{if(e.readonly)return;T.move(c),T.isVertical()&&(r=!0,oe(c,!0)),d.value=L(l+T.deltaY.value,-(P()*e.optionHeight),e.optionHeight);const t=Date.now();t-f>ee&&(f=t,v=d.value)},D=()=>{if(e.readonly)return;const c=d.value-v,t=Date.now()-f;if(t<ee&&Math.abs(c)>Me){S(c,t);return}const i=w(d.value);h.value=Z,p(i),setTimeout(()=>{r=!1},0)},M=()=>{const c={height:`${e.optionHeight}px`};return e.options.map((t,a)=>{const i=t[e.fields.text],{disabled:O}=t,E=t[e.fields.value],fe={role:"button",style:c,tabindex:O?-1:0,class:[U("item",{disabled:O,selected:E===e.value}),t.className],onClick:()=>$(a)},ve={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:i};return m("li",fe,[n.option?n.option(t):m("div",ve,null)])})};return te(re),le({stopMomentum:H}),ye(()=>{const c=e.options.findIndex(i=>i[e.fields.value]===e.value),a=-G(e.options,c)*e.optionHeight;d.value=a}),ne("touchmove",R,{target:s}),()=>m("div",{ref:s,class:U(),onTouchstartPassive:A,onTouchend:D,onTouchcancel:D},[m("ul",{ref:b,style:{transform:`translate3d(0, ${d.value+C()}px, 0)`,transitionDuration:`${h.value}ms`,transitionProperty:h.value?"all":"none"},class:U("wrapper"),onTransitionend:H},[M()])])}}),[Be]=V("picker-toolbar"),I={title:String,cancelButtonText:String,confirmButtonText:String},Ve=["cancel","confirm","title","toolbar"],_e=Object.keys(I),ue=_({name:Be,props:I,emits:["confirm","cancel"],setup(e,{emit:o,slots:n}){const r=()=>{if(n.title)return n.title();if(e.title)return m("div",{class:[g("title"),"van-ellipsis"]},[e.title])},l=()=>o("cancel"),f=()=>o("confirm"),v=()=>{const s=e.cancelButtonText||W("cancel");return m("button",{type:"button",class:[g("cancel"),J],onClick:l},[n.cancel?n.cancel():s])},u=()=>{const s=e.confirmButtonText||W("confirm");return m("button",{type:"button",class:[g("confirm"),J],onClick:f},[n.confirm?n.confirm():s])};return()=>m("div",{class:g("toolbar")},[n.toolbar?n.toolbar():[v(),r(),u()]])}});function Ie(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ke(e)}const[me,Y]=V("picker-group"),de=Symbol(me),$e=x({tabs:B()},I),ze=_({name:me,props:$e,emits:["confirm","cancel"],setup(e,{emit:o,slots:n}){const{children:r,linkChildren:l}=ae(de);l();const f=()=>{o("confirm",r.map(u=>u.confirm()))},v=()=>o("cancel");return()=>{var b;let u;const s=(b=n.default)==null?void 0:b.call(n);return m("div",{class:Y()},[m(ue,ce(e,{onConfirm:f,onCancel:v}),null),m(xe,{shrink:!0,class:Y("tabs"),animated:!0},Ie(u=e.tabs.map((d,h)=>m(Pe,{title:d,titleClass:Y("tab-title")},{default:()=>[s==null?void 0:s[h]]})))?u:{default:()=>[u]})])}}}),Ae=x({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:j(44),showToolbar:ge,swipeDuration:j(1e3),visibleOptionNum:j(6)},I),Re=x({},Ae,{columns:B(),modelValue:B(),toolbarPosition:pe("top"),columnsFieldNames:Object}),Qe=_({name:Ee,props:Re,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const r=k(),l=k(e.modelValue.slice(0)),{parent:f}=te(de),{children:v,linkChildren:u}=ae(re);u();const s=y(()=>De(e.columnsFieldNames)),b=y(()=>be(e.optionHeight)),d=y(()=>we(e.columns,s.value)),h=y(()=>{const{columns:t}=e;switch(d.value){case"multiple":return t;case"cascade":return Se(t,s.value,l);default:return[t]}}),T=y(()=>h.value.some(t=>t.length)),P=y(()=>h.value.map((t,a)=>q(t,l.value[a],s.value))),C=(t,a)=>{if(l.value[t]!==a){const i=l.value.slice(0);i[t]=a,l.value=i}},p=()=>({selectedValues:l.value.slice(0),selectedOptions:P.value}),$=(t,a)=>{C(a,t),d.value==="cascade"&&l.value.forEach((i,O)=>{const E=h.value[O];X(E,i,s.value)||C(O,E.length?E[0][s.value.value]:void 0)}),o("change",x({columnIndex:a},p()))},w=(t,a)=>o("clickOption",x({columnIndex:a,currentOption:t},p())),S=()=>{v.forEach(a=>a.stopMomentum());const t=p();return o("confirm",t),t},H=()=>o("cancel",p()),A=()=>h.value.map((t,a)=>m(Ne,{value:l.value[a],fields:s.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:b.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:i=>$(i,a),onClickOption:i=>w(i,a)},{option:n.option})),R=t=>{if(T.value){const a={height:`${b.value}px`},i={backgroundSize:`100% ${(t-b.value)/2}px`};return[m("div",{class:g("mask"),style:i},null),m("div",{class:[Oe,g("frame")],style:a},null)]}},D=()=>{const t=b.value*+e.visibleOptionNum,a={height:`${t}px`};return m("div",{ref:r,class:g("columns"),style:a},[A(),R(t)])},M=()=>{if(e.showToolbar&&!f)return m(ue,ce(Q(e,_e),{onConfirm:S,onCancel:H}),Q(n,Ve))};return K(h,t=>{t.forEach((a,i)=>{a.length&&!X(a,l.value[i],s.value)&&C(i,ie(a)[s.value.value])})},{immediate:!0}),K(()=>e.modelValue,t=>{z(t,l.value)||(l.value=t.slice(0))},{deep:!0}),K(l,t=>{z(t,e.modelValue)||o("update:modelValue",t.slice(0))},{immediate:!0}),ne("touchmove",oe,{target:r}),le({confirm:S,getSelectedOptions:()=>P.value}),()=>{var t,a;return m("div",{class:g()},[e.toolbarPosition==="top"?M():null,e.loading?m(Te,{class:g("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),D(),(a=n["columns-bottom"])==null?void 0:a.call(n),e.toolbarPosition==="bottom"?M():null])}}});export{Qe as _,ze as a,Ae as p};