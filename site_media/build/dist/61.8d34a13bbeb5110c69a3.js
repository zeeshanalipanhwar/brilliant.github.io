(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{760:function(t,e,i){"use strict";i.r(e);i.d(e,"default",(function(){return n}));var s=i(1);function o(t,e){return Object(s["a"])(this,void 0,void 0,(function*(){const e=document.createElement("script");e.src=t;e.async=true;document.body.appendChild(e)}))}function n(){return Object(s["a"])(this,void 0,void 0,(function*(){yield o("//fast.wistia.com/assets/external/E-v1.js",document.body);if(customElements.get("wistia-element")){return}customElements.define("wistia-element",class t extends HTMLElement{constructor(){super(...arguments);this.loadedVideo=false}connectedCallback(){this.loadVideo()}loadVideo(){return Object(s["a"])(this,void 0,void 0,(function*(){if(this.loadedVideo){return Promise.resolve()}try{this.loadedVideo=true;const t=this.getAttribute("slug");const e=this.getAttribute("video-width");const i=this.getAttribute("video-height");const s=document.createElement("div");const o=document.createElement("div");s.classList.add("wistia_embed");s.classList.add(`wistia_async_${t}`);s.classList.add("videoFoam=true");s.style.width="100%";s.style.height="100%";o.style.width=this.style.width;o.style.height=this.style.height;o.appendChild(s);this.appendChild(o)}catch(t){console.error(t);this.innerHTML=`<span style="color:tomato" title="${t.message}">[video error]</span>`}}))}})}))}}}]);
//# sourceMappingURL=61.8d34a13bbeb5110c69a3.js.map