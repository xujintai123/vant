import{s as u,D as a}from"./vue-libs.4d090e76.js";import{e as r}from"./use-translate.a8ac0154.js";import{u as p}from"./use-expose.7071738f.js";function d(){const o=a({show:!1}),e=n=>{o.show=n},t=n=>{r(o,n,{transitionAppear:!0}),e(!0)},s=()=>e(!1);return p({open:t,close:s,toggle:e}),{open:t,close:s,state:o,toggle:e}}function l(o){const e=u(o),t=document.createElement("div");return document.body.appendChild(t),{instance:e.mount(t),unmount(){e.unmount(),document.body.removeChild(t)}}}export{l as m,d as u};
