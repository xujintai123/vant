import{u as e,t,p as o,e as n,a as r}from"./use-translate.bf1abf23.js";import{c as a,w as i}from"./with-install.af140ae3.js";import{f as s}from"./constant.4d85ecb9.js";import{I as c}from"./index.5afcfd01.js";import{P as l}from"./index.02c1c9ae.js";import{B as p,G as f,I as u,Q as d,z as m,f as h,L as v,F as b,s as w,r as y,a as x,w as g,D as O,o as j,i as k,t as C,e as S,b as P}from"./vendor.09b5b9a9.js";import{u as A}from"./index.7d098fe9.js";import{V as T}from"./index.700b8aa4.js";import{F as E}from"./index.ce9148c1.js";import{P as D}from"./index.5c6c3b01.js";import{V as L,G as _}from"./index.d5ee8a42.js";import{T as M}from"./function-call.2f25783d.js";import"./unit.36efb2dd.js";import"./interceptor.9b43abfe.js";import"./use-expose.028ef04d.js";import"./use-touch.871001cd.js";import"./event.7d40caae.js";import"./index.2baefb73.js";import"./utils.fd06bcd3.js";import"./index.e4b17f1e.js";import"./use-lazy-render.bae5ade9.js";import"./on-popup-reopen.d2d6f1c6.js";import"./index.bb1b1d01.js";import"./use-route.bc60204d.js";import"./index.4893bdc2.js";import"./number.b01aa591.js";import"./index.8591e547.js";import"./index.e6355079.js";import"./useParent.60a302fe.js";import"./Picker.6e96f292.js";import"./deep-clone.be617e0e.js";import"./useChildren.692bc2bf.js";import"./mount-component.14353bf5.js";function U(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function I(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function R(e){var t=I(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function W(e){return e instanceof I(e).Element||e instanceof Element}function z(e){return e instanceof I(e).HTMLElement||e instanceof HTMLElement}function N(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){return((W(e)?e.ownerDocument:e.document)||window.document).documentElement}function q(e){return I(e).getComputedStyle(e)}function H(e){var t=q(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function F(e,t,o){void 0===o&&(o=!1);var n,r,a=B(t),i=U(e),s=z(t),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!o)&&(("body"!==N(t)||H(a))&&(c=(n=t)!==I(n)&&z(n)?{scrollLeft:(r=n).scrollLeft,scrollTop:r.scrollTop}:R(n)),z(t)?((l=U(t)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=function(e){return U(B(e)).left+R(e).scrollLeft}(a))),{x:i.left+c.scrollLeft-l.x,y:i.top+c.scrollTop-l.y,width:i.width,height:i.height}}function V(e){return"html"===N(e)?e:e.assignedSlot||e.parentNode||(t=e,"undefined"!=typeof ShadowRoot&&(t instanceof I(t).ShadowRoot||t instanceof ShadowRoot)?e.host:null)||B(e);var t}function G(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:z(e)&&H(e)?e:G(V(e))}function X(e,t){var o;void 0===t&&(t=[]);var n=G(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=I(n),i=r?[a].concat(a.visualViewport||[],H(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(X(V(i)))}function Y(e){return["table","td","th"].indexOf(N(e))>=0}function Q(e){return z(e)&&"fixed"!==q(e).position?e.offsetParent:null}function J(e){for(var t=I(e),o=Q(e);o&&Y(o)&&"static"===q(o).position;)o=Q(o);return o&&("html"===N(o)||"body"===N(o)&&"static"===q(o).position)?t:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&z(e)&&"fixed"===q(e).position)return null;for(var o=V(e);z(o)&&["html","body"].indexOf(N(o))<0;){var n=q(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var K="top",Z="right",$="left",ee=[].concat([K,"bottom",Z,$],["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),te=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function oe(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function ne(e){return e.split("-")[0]}var re=Math.round;var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,a=void 0===r?ae:r;return function(e,t,o){void 0===o&&(o=a);var r,i,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,p={state:s,setOptions:function(o){f(),s.options=Object.assign({},a,s.options,o),s.scrollParents={reference:W(e)?X(e):e.contextElement?X(e.contextElement):[],popper:X(t)};var r,i,l=function(e){var t=oe(e);return te.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((r=[].concat(n,s.options.modifiers),i=r.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(i).map((function(e){return i[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,r=e.effect;if("function"==typeof r){var a=r({state:s,name:t,instance:p,options:n}),i=function(){};c.push(a||i)}})),p.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,o=e.popper;if(ie(t,o)){var n,r,a,i;s.rects={reference:F(t,J(o),"fixed"===s.options.strategy),popper:(n=o,r=U(n),a=n.offsetWidth,i=n.offsetHeight,Math.abs(r.width-a)<=1&&(a=r.width),Math.abs(r.height-i)<=1&&(i=r.height),{x:n.offsetLeft,y:n.offsetTop,width:a,height:i})},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var c=0;c<s.orderedModifiers.length;c++)if(!0!==s.reset){var f=s.orderedModifiers[c],u=f.fn,d=f.options,m=void 0===d?{}:d,h=f.name;"function"==typeof u&&(s=u({state:s,options:m,name:h,instance:p})||s)}else s.reset=!1,c=-1}}},update:(r=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return i||(i=new Promise((function(e){Promise.resolve().then((function(){i=void 0,e(r())}))}))),i}),destroy:function(){f(),l=!0}};if(!ie(e,t))return p;function f(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(o).then((function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var ce={passive:!0};var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pe(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.offsets,i=e.position,s=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=!0===l?function(e){var t=e.x,o=e.y,n=window.devicePixelRatio||1;return{x:re(re(t*n)/n)||0,y:re(re(o*n)/n)||0}}(a):"function"==typeof l?l(a):a,f=p.x,u=void 0===f?0:f,d=p.y,m=void 0===d?0:d,h=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),b=$,w=K,y=window;if(c){var x=J(o),g="clientHeight",O="clientWidth";x===I(o)&&"static"!==q(x=B(o)).position&&(g="scrollHeight",O="scrollWidth"),x=x,r===K&&(w="bottom",m-=x[g]-n.height,m*=s?1:-1),r===$&&(b=Z,u-=x[O]-n.width,u*=s?1:-1)}var j,k=Object.assign({position:i},c&&le);return s?Object.assign({},k,((j={})[w]=v?"0":"",j[b]=h?"0":"",j.transform=(y.devicePixelRatio||1)<2?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",j)):Object.assign({},k,((t={})[w]=v?m+"px":"",t[b]=h?u+"px":"",t.transform="",t))}var fe=se({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=void 0===r||r,i=n.resize,s=void 0===i||i,c=I(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",o.update,ce)})),s&&c.addEventListener("resize",o.update,ce),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",o.update,ce)})),s&&c.removeEventListener("resize",o.update,ce)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=function(e){var t,o=e.reference,n=e.element,r=e.placement,a=r?ne(r):null,i=r?function(e){return e.split("-")[1]}(r):null,s=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2;switch(a){case K:t={x:s,y:o.y-n.height};break;case"bottom":t={x:s,y:o.y+o.height};break;case Z:t={x:o.x+o.width,y:c};break;case $:t={x:o.x-n.width,y:c};break;default:t={x:o.x,y:o.y}}var l=a?function(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}(a):null;if(null!=l){var p="y"===l?"height":"width";switch(i){case"start":t[l]=t[l]-(o[p]/2-n[p]/2);break;case"end":t[l]=t[l]+(o[p]/2-n[p]/2)}}return t}({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,a=o.adaptive,i=void 0===a||a,s=o.roundOffsets,c=void 0===s||s,l={placement:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,pe(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,pe(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];z(r)&&N(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});z(n)&&N(n)&&(Object.assign(n.style,a),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}]});var ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=void 0===r?[0,0]:r,i=ee.reduce((function(e,o){return e[o]=function(e,t,o){var n=ne(e),r=[$,K].indexOf(n)>=0?-1:1,a="function"==typeof o?o(Object.assign({},t,{placement:e})):o,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[$,Z].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}(o,t.rects,a),e}),{}),s=i[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}};const[de,me]=a("popover"),he=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"];const ve=i(p({name:de,props:{show:Boolean,overlay:Boolean,duration:[Number,String],iconPrefix:String,overlayClass:e,overlayStyle:Object,closeOnClickAction:t,closeOnClickOverlay:t,closeOnClickOutside:t,offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},trigger:{type:String,default:"click"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},teleport:{type:[String,Object],default:"body"},showArrow:{type:Boolean,default:!0}},emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:r,attrs:a}){let i;const p=f(),y=f(),x=()=>{w((()=>{e.show&&(i?i.setOptions({placement:e.placement}):i=p.value&&y.value?fe(p.value,y.value.popupRef.value,{placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},n({},ue,{options:{offset:e.offset}})]}):null)}))},g=e=>t("update:show",e),O=()=>{"click"===e.trigger&&g(!e.show)},j=e=>{e.stopPropagation(),t("touchstart",e)},k=(o,n)=>{const{icon:r,text:a,color:i,disabled:l,className:p}=o;return h("div",{role:"menuitem",class:[me("action",{disabled:l,"with-icon":r}),p],style:{color:i},onClick:()=>((o,n)=>{o.disabled||(t("select",o,n),e.closeOnClickAction&&g(!1))})(o,n)},[r&&h(c,{name:r,classPrefix:e.iconPrefix,class:me("action-icon")},null),h("div",{class:[me("action-text"),s]},[a])])};return u(x),d((()=>{i&&(i.destroy(),i=null)})),m((()=>[e.show,e.placement]),x),A(p,(()=>{!e.closeOnClickOutside||e.overlay&&!e.closeOnClickOverlay||g(!1)}),{eventName:"touchstart"}),()=>{var t;return h(b,null,[h("span",{ref:p,class:me("wrapper"),onClick:O},[null==(t=r.reference)?void 0:t.call(r)]),h(l,v({ref:y,class:me([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,onTouchstart:j},a,o(e,he),{"onUpdate:show":g}),{default:()=>[e.showArrow&&h("div",{class:me("arrow")},null),h("div",{role:"menu",class:me("content")},[r.default?r.default():e.actions.map(k)])]})])}}})),be={class:"demo-popover-box"},we=S("div",{class:"demo-popover-refer"},null,-1);var ye=p({setup(e){const t=r({"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=f({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),a=f(!1),i=f("top"),s=e=>{setTimeout((()=>{n.value.placement=!0,i.value=e}))},c=e=>M(e.text);return(e,r)=>{const p=y("demo-block");return j(),x(b,null,[h(p,{title:O(t)("basicUsage")},{default:g((()=>[h(O(ve),{show:n.value.lightTheme,"onUpdate:show":r[0]||(r[0]=e=>n.value.lightTheme=e),actions:O(t)("actions"),placement:"bottom-start",onSelect:c},{reference:g((()=>[h(O(T),{type:"primary"},{default:g((()=>[k(C(O(t)("lightTheme")),1)])),_:1})])),_:1},8,["show","actions"]),h(O(ve),{show:n.value.darkTheme,"onUpdate:show":r[1]||(r[1]=e=>n.value.darkTheme=e),theme:"dark",actions:O(t)("actions"),onSelect:c},{reference:g((()=>[h(O(T),{type:"primary"},{default:g((()=>[k(C(O(t)("darkTheme")),1)])),_:1})])),_:1},8,["show","actions"])])),_:1},8,["title"]),h(p,{title:O(t)("placement")},{default:g((()=>[h(O(E),{"is-link":"",readonly:"",name:"picker",label:O(t)("choosePlacement"),onClick:r[2]||(r[2]=e=>a.value=!0)},null,8,["label"]),h(O(l),{show:a.value,"onUpdate:show":r[4]||(r[4]=e=>a.value=e),round:"",position:"bottom","get-container":"body"},{default:g((()=>[S("div",be,[h(O(ve),{show:n.value.placement,"onUpdate:show":r[3]||(r[3]=e=>n.value.placement=e),theme:"dark",actions:O(t)("shortActions"),placement:i.value,onSelect:c},{reference:g((()=>[we])),_:1},8,["show","actions","placement"])]),h(O(D),{columns:o,"show-toolbar":!1,onChange:s})])),_:1},8,["show"])])),_:1},8,["title"]),h(p,{title:O(t)("actionOptions")},{default:g((()=>[h(O(ve),{show:n.value.showIcon,"onUpdate:show":r[5]||(r[5]=e=>n.value.showIcon=e),actions:O(t)("actionsWithIcon"),placement:"bottom-start",onSelect:c},{reference:g((()=>[h(O(T),{type:"primary"},{default:g((()=>[k(C(O(t)("showIcon")),1)])),_:1})])),_:1},8,["show","actions"]),h(O(ve),{show:n.value.disableAction,"onUpdate:show":r[6]||(r[6]=e=>n.value.disableAction=e),actions:O(t)("actionsDisabled"),onSelect:c},{reference:g((()=>[h(O(T),{type:"primary"},{default:g((()=>[k(C(O(t)("disableAction")),1)])),_:1})])),_:1},8,["show","actions"])])),_:1},8,["title"]),h(p,{title:O(t)("customContent")},{default:g((()=>[h(O(ve),{show:n.value.customContent,"onUpdate:show":r[8]||(r[8]=e=>n.value.customContent=e),placement:"top-start",onSelect:c},{reference:g((()=>[h(O(T),{type:"primary"},{default:g((()=>[k(C(O(t)("customContent")),1)])),_:1})])),default:g((()=>[h(O(L),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:g((()=>[(j(),x(b,null,P(6,(e=>h(O(_),{key:e,icon:"photo-o",text:O(t)("option"),onClick:r[7]||(r[7]=e=>n.value.customContent=!1)},null,8,["text"]))),64))])),_:1})])),_:1},8,["show"])])),_:1},8,["title"])],64)}}});export{ye as default};