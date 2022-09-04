import{c as O,l as D,F as T,P as Q,S as G,p as J,r as ee,d as oe,e as te}from"./use-translate.8036e41d.js";import{m as ae,u as se}from"./mount-component.5abe2a8c.js";import{A as E,H as _,D as Y,y as b,e as r,x as ne,N as ie,q as ce,Q as le,B as F}from"./vue-libs.a040eeb8.js";import{d as H,n as M,t as Z,b as re,c as z,u as k,m as A,w as me}from"./with-install.6887218d.js";import{H as ue}from"./constant.80c6de18.js";import{c as de}from"./interceptor.66b82326.js";import{u as ve}from"./use-expose.1f17c8d6.js";import{I as fe}from"./index.bbaa83e9.js";import{a as ge,S as he}from"./index.867f8025.js";import{P as we}from"./index.04b3d3c6.js";import{u as Pe}from"./use-touch.ee9512d6.js";import{I as pe}from"./index.e25bda63.js";import{L as Ie}from"./index.e68b0dfb.js";const $=o=>Math.sqrt((o[0].clientX-o[1].clientX)**2+(o[0].clientY-o[1].clientY)**2),B=O("image-preview")[1],xe=E({props:{src:String,show:Boolean,active:Number,minZoom:H(M),maxZoom:H(M),rootWidth:H(Number),rootHeight:H(Number)},emits:["scale","close"],setup(o,{emit:c}){const e=_({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=Pe(),i=Y(()=>{const{rootWidth:t,rootHeight:s}=o,n=s/t;return e.imageRatio>n}),y=Y(()=>{const{scale:t,moveX:s,moveY:n,moving:u,zooming:I}=e,X={transitionDuration:I||u?"0s":".3s"};if(t!==1){const V=s/t,K=n/t;X.transform=`scale(${t}, ${t}) translate(${V}px, ${K}px)`}return X}),g=Y(()=>{if(e.imageRatio){const{rootWidth:t,rootHeight:s}=o,n=i.value?s/e.imageRatio:t;return Math.max(0,(e.scale*n-t)/2)}return 0}),d=Y(()=>{if(e.imageRatio){const{rootWidth:t,rootHeight:s}=o,n=i.value?s:t*e.imageRatio;return Math.max(0,(e.scale*n-s)/2)}return 0}),h=t=>{t=T(t,+o.minZoom,+o.maxZoom+1),t!==e.scale&&(e.scale=t,c("scale",{scale:t,index:o.active}))},v=()=>{h(1),e.moveX=0,e.moveY=0},R=()=>{const t=e.scale>1?1:2;h(t),e.moveX=0,e.moveY=0};let w,P,p,S,C,a,m;const f=t=>{const{touches:s}=t,{offsetX:n}=l;l.start(t),w=s.length,P=e.moveX,p=e.moveY,m=Date.now(),e.moving=w===1&&e.scale!==1,e.zooming=w===2&&!n.value,e.zooming&&(S=e.scale,C=$(t.touches))},L=t=>{const{touches:s}=t;if(l.move(t),(e.moving||e.zooming)&&D(t,!0),e.moving){const{deltaX:n,deltaY:u}=l,I=n.value+P,X=u.value+p;e.moveX=T(I,-g.value,g.value),e.moveY=T(X,-d.value,d.value)}if(e.zooming&&s.length===2){const n=$(s),u=S*n/C;h(u)}},q=()=>{if(w>1)return;const{offsetX:t,offsetY:s}=l,n=Date.now()-m,u=250,I=5;t.value<I&&s.value<I&&n<u&&(a?(clearTimeout(a),a=null,R()):a=setTimeout(()=>{c("close"),a=null},u))},W=t=>{let s=!1;(e.moving||e.zooming)&&(s=!0,e.moving&&P===e.moveX&&p===e.moveY&&(s=!1),t.touches.length||(e.zooming&&(e.moveX=T(e.moveX,-g.value,g.value),e.moveY=T(e.moveY,-d.value,d.value),e.zooming=!1),e.moving=!1,P=0,p=0,S=1,e.scale<1&&v(),e.scale>o.maxZoom&&(e.scale=+o.maxZoom))),D(t,s),q(),l.reset()},U=t=>{const{naturalWidth:s,naturalHeight:n}=t.target;e.imageRatio=n/s};return b(()=>o.active,v),b(()=>o.show,t=>{t||v()}),()=>{const t={loading:()=>r(Ie,{type:"spinner"},null)};return r(ge,{class:B("swipe-item"),onTouchstartPassive:f,onTouchmove:L,onTouchend:W,onTouchcancel:W},{default:()=>[r(pe,{src:o.src,fit:"contain",class:B("image",{vertical:i.value}),style:y.value,onLoad:U},t)]})}}});function ye(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!le(o)}const[Se,x]=O("image-preview"),Ce=["show","transition","overlayStyle","closeOnPopstate"],Te={show:Boolean,loop:Z,images:re(),minZoom:z(1/3),maxZoom:z(3),overlay:Z,closeable:Boolean,showIndex:Z,className:k,closeIcon:A("clear"),transition:String,beforeClose:Function,overlayClass:k,overlayStyle:Object,swipeDuration:z(300),startPosition:z(0),showIndicators:Boolean,closeOnPopstate:Z,closeIconPosition:A("top-right")},j=E({name:Se,props:Te,emits:["scale","close","closed","change","update:show"],setup(o,{emit:c,slots:e}){const l=ne(),i=_({active:0,rootWidth:0,rootHeight:0}),y=()=>{if(l.value){const a=ee(l.value.$el);i.rootWidth=a.width,i.rootHeight=a.height,l.value.resize()}},g=a=>c("scale",a),d=a=>c("update:show",a),h=()=>{de(o.beforeClose,{args:[i.active],done:()=>d(!1)})},v=a=>{a!==i.active&&(i.active=a,c("change",a))},R=()=>{if(o.showIndex)return r("div",{class:x("index")},[e.index?e.index({index:i.active}):`${i.active+1} / ${o.images.length}`])},w=()=>{if(e.cover)return r("div",{class:x("cover")},[e.cover()])},P=()=>{let a;return r(he,{ref:l,lazyRender:!0,loop:o.loop,class:x("swipe"),duration:o.swipeDuration,initialSwipe:o.startPosition,showIndicators:o.showIndicators,indicatorColor:"white",onChange:v},ye(a=o.images.map(m=>r(xe,{src:m,show:o.show,active:i.active,maxZoom:o.maxZoom,minZoom:o.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:g,onClose:h},null)))?a:{default:()=>[a]})},p=()=>{if(o.closeable)return r(fe,{role:"button",name:o.closeIcon,class:[x("close-icon",o.closeIconPosition),ue],onClick:h},null)},S=()=>c("closed"),C=(a,m)=>{var f;return(f=l.value)==null?void 0:f.swipeTo(a,m)};return ve({swipeTo:C}),ie(y),b([Q,G],y),b(()=>o.startPosition,a=>v(+a)),b(()=>o.show,a=>{const{images:m,startPosition:f}=o;a?(v(+f),ce(()=>{y(),C(+f,{immediate:!0})})):c("close",{index:i.active,url:m[i.active]})}),()=>r(we,F({class:[x(),o.className],overlayClass:[x("overlay"),o.overlayClass],onClosed:S,"onUpdate:show":d},J(o,Ce)),{default:()=>[p(),P(),R(),w()]})}});let N;const be={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Xe(){({instance:N}=ae({setup(){const{state:o,toggle:c}=se(),e=()=>{o.images=[]};return()=>r(j,F(o,{onClosed:e,"onUpdate:show":c}),null)}}))}const Oe=(o,c=0)=>{if(!!oe)return N||Xe(),o=Array.isArray(o)?{images:o,startPosition:c}:o,N.open(te({},be,o)),N},Ee=me(j);export{Ee as I,Oe as s};