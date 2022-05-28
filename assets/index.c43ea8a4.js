import{c as K,e as S,p as j,V as f,D as E,I as N}from"./use-translate.fbf36f21.js";import{c as I,m as te,w as ae}from"./with-install.251697cd.js";import{u as q}from"./use-expose.8d47dba2.js";import{s as Q,t as R,p as U,a as W,g as J,b as ne}from"./utils.80a3127e.js";import{P as X}from"./index.699103d4.js";import{z,D as w,C,N as A,q as g,x as y,e as B,A as Z}from"./vue-libs.bf80eadf.js";const[ue]=K("time-picker");var _=z({name:ue,props:S({},Q,{minHour:I(0),maxHour:I(23),minMinute:I(0),maxMinute:I(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=u=>{const{minHour:e,maxHour:a,maxMinute:n,minMinute:r}=t;u||(u=`${f(e)}:${f(r)}`);let[i,l]=u.split(":");return i=f(E(+i,+e,+a)),l=f(E(+l,+r,+n)),`${i}:${l}`},m=w(),o=w(d(t.modelValue)),V=C(()=>[{type:"hour",range:[+t.minHour,+t.maxHour]},{type:"minute",range:[+t.minMinute,+t.maxMinute]}]),Y=C(()=>V.value.map(({type:u,range:e})=>{let a=R(e[1]-e[0]+1,n=>f(e[0]+n));return t.filter&&(a=t.filter(u,a)),{type:u,values:a}})),x=C(()=>Y.value.map(u=>({values:u.values.map(e=>t.formatter(u.type,e))}))),k=()=>{const u=o.value.split(":"),e=[t.formatter("hour",u[0]),t.formatter("minute",u[1])];g(()=>{var a;(a=m.value)==null||a.setValues(e)})},D=()=>{const[u,e]=m.value.getIndexes(),[a,n]=Y.value,r=a.values[u]||a.values[0],i=n.values[e]||n.values[0];o.value=d(`${r}:${i}`),k()},M=()=>s("confirm",o.value),O=()=>s("cancel"),T=()=>{D(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{k(),g(D)}),y(x,k),y(()=>[t.filter,t.maxHour,t.minMinute,t.maxMinute],D),y(()=>t.minHour,()=>{g(D)}),y(o,u=>s("update:modelValue",u)),y(()=>t.modelValue,u=>{u=d(u),u!==o.value&&(o.value=u,k())}),q({getPicker:()=>m.value&&W(m.value,D)}),()=>B(X,Z({ref:m,columns:x.value,onChange:T,onCancel:O,onConfirm:M},j(t,U)),$)}});const L=new Date().getFullYear(),[oe]=K("date-picker");var G=z({name:oe,props:S({},Q,{type:te("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(L-10,0,1),validator:N},maxDate:{type:Date,default:()=>new Date(L+10,11,31),validator:N}}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=e=>{if(N(e)){const a=E(e.getTime(),t.minDate.getTime(),t.maxDate.getTime());return new Date(a)}},m=w(),o=w(d(t.modelValue)),V=(e,a)=>{const n=t[`${e}Date`],r=n.getFullYear();let i=1,l=1,h=0,v=0;return e==="max"&&(i=12,l=J(a.getFullYear(),a.getMonth()+1),h=23,v=59),a.getFullYear()===r&&(i=n.getMonth()+1,a.getMonth()+1===i&&(l=n.getDate(),a.getDate()===l&&(h=n.getHours(),a.getHours()===h&&(v=n.getMinutes())))),{[`${e}Year`]:r,[`${e}Month`]:i,[`${e}Date`]:l,[`${e}Hour`]:h,[`${e}Minute`]:v}},Y=C(()=>{const{maxYear:e,maxDate:a,maxMonth:n,maxHour:r,maxMinute:i}=V("max",o.value||t.minDate),{minYear:l,minDate:h,minMonth:v,minHour:b,minMinute:p}=V("min",o.value||t.minDate);let c=[{type:"year",range:[l,e]},{type:"month",range:[v,n]},{type:"day",range:[h,a]},{type:"hour",range:[b,r]},{type:"minute",range:[p,i]}];switch(t.type){case"date":c=c.slice(0,3);break;case"year-month":c=c.slice(0,2);break;case"month-day":c=c.slice(1,3);break;case"datehour":c=c.slice(0,4);break}if(t.columnsOrder){const P=t.columnsOrder.concat(c.map(H=>H.type));c.sort((H,F)=>P.indexOf(H.type)-P.indexOf(F.type))}return c}),x=C(()=>Y.value.map(({type:e,range:a})=>{let n=R(a[1]-a[0]+1,r=>f(a[0]+r));return t.filter&&(n=t.filter(e,n)),{type:e,values:n}})),k=C(()=>x.value.map(e=>({values:e.values.map(a=>t.formatter(e.type,a))}))),D=()=>{const e=o.value||t.minDate,{formatter:a}=t,n=x.value.map(r=>{switch(r.type){case"year":return a("year",`${e.getFullYear()}`);case"month":return a("month",f(e.getMonth()+1));case"day":return a("day",f(e.getDate()));case"hour":return a("hour",f(e.getHours()));case"minute":return a("minute",f(e.getMinutes()));default:return""}});g(()=>{var r;(r=m.value)==null||r.setValues(n)})},M=()=>{const{type:e}=t,a=m.value.getIndexes(),n=c=>{let P=0;x.value.forEach((F,ee)=>{c===F.type&&(P=ee)});const{values:H}=x.value[P];return ne(H[a[P]])};let r,i,l;e==="month-day"?(r=(o.value||t.minDate).getFullYear(),i=n("month"),l=n("day")):(r=n("year"),i=n("month"),l=e==="year-month"?1:n("day"));const h=J(r,i);l=l>h?h:l;let v=0,b=0;e==="datehour"&&(v=n("hour")),e==="datetime"&&(v=n("hour"),b=n("minute"));const p=new Date(r,i-1,l,v,b);o.value=d(p)},O=()=>{s("update:modelValue",o.value),s("confirm",o.value)},T=()=>s("cancel"),u=()=>{M(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{D(),g(M)}),y(k,D),y(o,(e,a)=>s("update:modelValue",a?e:null)),y(()=>[t.filter,t.minDate,t.maxDate],()=>{g(M)}),y(()=>t.modelValue,e=>{var a;e=d(e),e&&e.valueOf()!==((a=o.value)==null?void 0:a.valueOf())&&(o.value=e)}),q({getPicker:()=>m.value&&W(m.value,M)}),()=>B(X,Z({ref:m,columns:k.value,onChange:u,onCancel:T,onConfirm:O},j(t,U)),$)}});const[re,me]=K("datetime-picker"),ie=Object.keys(_.props),le=Object.keys(G.props),ce=S({},_.props,G.props,{modelValue:[String,Date]});var se=z({name:re,props:ce,setup(t,{attrs:s,slots:$}){const d=w();return q({getPicker:()=>{var m;return(m=d.value)==null?void 0:m.getPicker()}}),()=>{const m=t.type==="time",o=m?_:G,V=j(t,m?ie:le);return B(o,Z({ref:d,class:me()},V,s),$)}}});const De=ae(se);export{De as D};