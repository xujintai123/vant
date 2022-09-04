import{V as x,a as D}from"./index.8fcb4d84.js";import{N as p,c as k,Y as v,a as w}from"./use-translate.c56bc05e.js";import{c as H,m as B,t as E,w as A}from"./with-install.2d06a5b3.js";import{u as b}from"./use-expose.2dad0d8e.js";import{A as y,D as g,y as N,e as o,x as F,r as V,o as P,a as W,w as r,C as t,d as h,t as f,F as G}from"./vue-libs.a3cd7f61.js";import{s as I}from"./index.650d8a76.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./index.e7e14384.js";import"./index.fd46e6ae.js";import"./interceptor.7caa5e9a.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./index.1fe53b6c.js";import"./mount-component.2ea251e1.js";function M(e,s){const{days:a}=s;let{hours:l,minutes:i,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",p(a)):l+=a*24,e.includes("HH")?e=e.replace("HH",p(l)):i+=l*60,e.includes("mm")?e=e.replace("mm",p(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",p(u)):c+=u*1e3,e.includes("S")){const m=p(c,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const[U,z]=k("count-down"),R={time:H(0),format:B("HH:mm:ss"),autoStart:E,millisecond:Boolean},T=y({name:U,props:R,emits:["change","finish"],setup(e,{emit:s,slots:a}){const{start:l,pause:i,reset:u,current:c}=v({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),m=g(()=>M(e.format,c.value)),n=()=>{u(+e.time),e.autoStart&&l()};return N(()=>e.time,n,{immediate:!0}),b({start:l,pause:i,reset:n}),()=>o("div",{role:"timer",class:z()},[a.default?a.default(c.value):m.value])}}),Y=A(T),_=Y,Z={class:"block"},j=h("span",{class:"colon"},":",-1),q={class:"block"},J=h("span",{class:"colon"},":",-1),K={class:"block"},de=y({__name:"index",setup(e){const s=w({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),a=F(30*60*60*1e3),l=F(),i=()=>{var n;(n=l.value)==null||n.start()},u=()=>{var n;(n=l.value)==null||n.pause()},c=()=>{var n;(n=l.value)==null||n.reset()},m=()=>I(s("finished"));return(n,C)=>{const d=V("demo-block");return P(),W(G,null,[o(d,{title:t(s)("basicUsage")},{default:r(()=>[o(t(_),{time:a.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:r(()=>[o(t(_),{time:a.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:r(()=>[o(t(_),{millisecond:"",time:a.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:r(()=>[o(t(_),{time:a.value},{default:r(S=>[h("span",Z,f(S.hours),1),j,h("span",q,f(S.minutes),1),J,h("span",K,f(S.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:r(()=>[o(t(_),{ref_key:"countDown",ref:l,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m},null,512),o(t(x),{clickable:"","column-num":3},{default:r(()=>[o(t(D),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),o(t(D),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),o(t(D),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{de as default};