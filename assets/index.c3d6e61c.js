import{c as S,b as O,v as R,e as M,u as z,f as j,a as K}from"./use-translate.7b7055b3.js";import{t as y,n as P,c as L,w as $}from"./with-install.a0877b0b.js";import{b as Y}from"./constant.e12a51b9.js";import{c as Z}from"./interceptor.adacec7f.js";import{u as q}from"./use-placeholder.498a21fd.js";import{A,u as C,e as t,O as G,D as H,B as J,r as Q,o as W,a as X,w as a,C as e,h as u,t as n,d as T,F as ee}from"./vue-libs.d5ee895a.js";import{r as te,u as ae}from"./use-route.55b36618.js";import{I as oe}from"./index.bc61928d.js";import{B as ne}from"./index.16bdfc10.js";import{c as k}from"./index.e512b5a4.js";import{s as le}from"./index.81c7a5b9.js";import"./use-height.ccd4b436.js";import"./on-popup-reopen.5b484164.js";import"./index.e2854e14.js";import"./use-expose.77504c28.js";import"./use-touch.e8c4f7e8.js";import"./use-lazy-render.8319bb4a.js";import"./index.03cbc9c0.js";import"./index.d7a56972.js";import"./mount-component.01a10567.js";const[w,N]=S("tabbar"),ue={route:Boolean,fixed:y,border:y,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},U=Symbol(w),ie=A({name:w,props:ue,emits:["change","update:modelValue"],setup(r,{emit:o,slots:d}){const _=C(),{linkChildren:p}=O(U),v=q(_,N),g=()=>{var f;return(f=r.safeAreaInsetBottom)!=null?f:r.fixed},m=()=>{var s;const{fixed:f,zIndex:b,border:i}=r;return t("div",{ref:_,role:"tablist",style:R(b),class:[N({fixed:f}),{[Y]:i,"van-safe-area-bottom":g()}]},[(s=d.default)==null?void 0:s.call(d)])};return p({props:r,setActive:(f,b)=>{Z(r.beforeChange,{args:[f],done(){o("update:modelValue",f),o("change",f),b()}})}}),()=>r.fixed&&r.placeholder?v(m):m()}}),V=$(ie),[re,I]=S("tabbar-item"),ce=M({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String}),se=A({name:re,props:ce,emits:["click"],setup(r,{emit:o,slots:d}){const _=ae(),p=G().proxy,{parent:v,index:g}=z(U);if(!v)return;const m=H(()=>{var s;const{route:b,modelValue:i}=v.props;if(b&&"$route"in p){const{$route:c}=p,{to:x}=r,h=j(x)?x:{path:x};return!!c.matched.find(E=>{const D="path"in h&&h.path===E.path,F="name"in h&&h.name===E.name;return D||F})}return((s=r.name)!=null?s:g.value)===i}),B=b=>{var i;m.value||v.setActive((i=r.name)!=null?i:g.value,_),o("click",b)},f=()=>{if(d.icon)return d.icon({active:m.value});if(r.icon)return t(oe,{name:r.icon,classPrefix:r.iconPrefix},null)};return()=>{var h;const{dot:b,badge:i}=r,{activeColor:s,inactiveColor:c}=v.props,x=m.value?s:c;return t("div",{role:"tab",class:I({active:m.value}),style:{color:x},tabindex:0,"aria-selected":m.value,onClick:B},[t(ne,J({dot:b,class:I("icon"),content:i},r.badgeProps),{default:f}),t("div",{class:I("text")},[(h=d.default)==null?void 0:h.call(d,{active:m.value})])])}}}),l=$(se),de=["src"],Se=A({__name:"index",setup(r){const o=K({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=C(0),_=C(0),p=C(0),v=C(0),g=C(0),m=C("home"),B={active:k("user-active.png"),inactive:k("user-inactive.png")},f=b=>{le(`${o("tab")} ${b+1}`)};return(b,i)=>{const s=Q("demo-block");return W(),X(ee,null,[t(s,{title:e(o)("basicUsage")},{default:a(()=>[t(e(V),{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=c=>d.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("matchByName")},{default:a(()=>[t(e(V),{modelValue:m.value,"onUpdate:modelValue":i[1]||(i[1]=c=>m.value=c)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("badge")},{default:a(()=>[t(e(V),{modelValue:_.value,"onUpdate:modelValue":i[2]||(i[2]=c=>_.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customIcon")},{default:a(()=>[t(e(V),{modelValue:p.value,"onUpdate:modelValue":i[3]||(i[3]=c=>p.value=c)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(c=>[T("img",{src:c.active?B.active:B.inactive},null,8,de)]),default:a(()=>[T("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customColor")},{default:a(()=>[t(e(V),{modelValue:v.value,"onUpdate:modelValue":i[4]||(i[4]=c=>v.value=c),"active-color":"#ee0a24"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("switchEvent")},{default:a(()=>[t(e(V),{modelValue:g.value,"onUpdate:modelValue":i[5]||(i[5]=c=>g.value=c),onChange:f},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Se as default};
