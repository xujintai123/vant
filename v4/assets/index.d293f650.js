import{c as l,b as x,e as P,u as C}from"./use-translate.85b7fc27.js";import{t as S,w as d}from"./with-install.d26e13af.js";import{u as y}from"./use-placeholder.4a0001c7.js";import{A as p,x as I,e as m,D as c}from"./vue-libs.a3cd7f61.js";import{u as _}from"./use-expose.b85ae184.js";import{r as N,u as k}from"./use-route.7a9317f3.js";import{B as w}from"./index.b8ee6b0a.js";const[f,u]=l("action-bar"),B=Symbol(f),E={placeholder:Boolean,safeAreaInsetBottom:S};var R=p({name:f,props:E,setup(r,{slots:e}){const n=I(),o=y(n,u),{linkChildren:a}=x(B);a();const s=()=>{var i;return m("div",{ref:n,class:[u(),{"van-safe-area-bottom":r.safeAreaInsetBottom}]},[(i=e.default)==null?void 0:i.call(e)])};return()=>r.placeholder?o(s):s()}});const q=d(R),[$,z]=l("action-bar-button"),D=P({},N,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var F=p({name:$,props:D,setup(r,{slots:e}){const n=k(),{parent:o,index:a}=C(B),s=c(()=>{if(o){const t=o.children[a.value-1];return!(t&&"isButton"in t)}}),i=c(()=>{if(o){const t=o.children[a.value+1];return!(t&&"isButton"in t)}});return _({isButton:!0}),()=>{const{type:t,icon:b,text:A,color:h,loading:v,disabled:g}=r;return m(w,{class:z([t,{last:i.value,first:s.value}]),size:"large",type:t,icon:b,color:h,loading:v,disabled:g,onClick:n},{default:()=>[e.default?e.default():A]})}}});const G=d(F);export{B as A,q as a,G as b};