import{c as T}from"./use-translate.a8ac0154.js";import{t as h,m as k,w as p}from"./with-install.6409cc32.js";import{z as w,e as t,T as x}from"./vue-libs.4d090e76.js";import{I as S}from"./index.fc97feb1.js";const[j,s]=T("tag"),y={size:String,mark:Boolean,show:h,type:k("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var B=w({name:j,props:y,emits:["close"],setup(o,{slots:a,emit:c}){const i=e=>{e.stopPropagation(),c("close",e)},m=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},u=()=>{var l;const{type:e,mark:d,plain:f,round:g,size:n,closeable:b}=o,r={mark:d,plain:f,round:g};n&&(r[n]=n);const C=b&&t(S,{name:"cross",class:s("close"),onClick:i},null);return t("span",{style:m(),class:s([r,e])},[(l=a.default)==null?void 0:l.call(a),C])};return()=>t(x,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?u():null]})}});const N=p(B);export{N as T};
