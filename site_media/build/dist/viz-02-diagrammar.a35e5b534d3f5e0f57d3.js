(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[208,28,62,63],{27:function(e,t,n){"use strict";e.exports=function(e){var t=[];t.toString=function t(){return this.map((function(t){var n=r(t,e);if(t[2]){return"@media ".concat(t[2],"{").concat(n,"}")}return n})).join("")};t.i=function(e,n){if(typeof e==="string"){e=[[null,e,""]]}var r={};for(var o=0;o<this.length;o++){var a=this[o][0];if(a!=null){r[a]=true}}for(var i=0;i<e.length;i++){var s=e[i];if(s[0]==null||!r[s[0]]){if(n&&!s[2]){s[2]=n}else if(n){s[2]="(".concat(s[2],") and (").concat(n,")")}t.push(s)}}};return t};function r(e,t){var n=e[1]||"";var r=e[3];if(!r){return n}if(t&&typeof btoa==="function"){var a=o(r);var i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e))));var n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}},28:function(e,t,n){"use strict";n.r(t);n.d(t,"default",(function(){return p}));function r(e,t){var n=[];var r={};for(var o=0;o<t.length;o++){var a=t[o];var i=a[0];var s=a[1];var c=a[2];var u=a[3];var l={id:e+":"+o,css:s,media:c,sourceMap:u};if(!r[i]){n.push(r[i]={id:i,parts:[l]})}else{r[i].parts.push(l)}}return n}var o=typeof document!=="undefined";if(typeof DEBUG!=="undefined"&&DEBUG){if(!o){throw new Error("vue-style-loader cannot be used in a non-browser environment. "+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")}}var a={};var i=o&&(document.head||document.getElementsByTagName("head")[0]);var s=null;var c=0;var u=false;var l=function(){};var d=null;var v="data-vue-ssr-id";var f=typeof navigator!=="undefined"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){u=n;d=o||{};var i=r(e,t);m(i);return function t(n){var o=[];for(var s=0;s<i.length;s++){var c=i[s];var u=a[c.id];u.refs--;o.push(u)}if(n){i=r(e,n);m(i)}else{i=[]}for(var s=0;s<o.length;s++){var u=o[s];if(u.refs===0){for(var l=0;l<u.parts.length;l++){u.parts[l]()}delete a[u.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t];var r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++){r.parts[o](n.parts[o])}for(;o<n.parts.length;o++){r.parts.push(g(n.parts[o]))}if(r.parts.length>n.parts.length){r.parts.length=n.parts.length}}else{var i=[];for(var o=0;o<n.parts.length;o++){i.push(g(n.parts[o]))}a[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");e.type="text/css";i.appendChild(e);return e}function g(e){var t,n;var r=document.querySelector("style["+v+'~="'+e.id+'"]');if(r){if(u){return l}else{r.parentNode.removeChild(r)}}if(f){var o=c++;r=s||(s=h());t=y.bind(null,r,o,false);n=y.bind(null,r,o,true)}else{r=h();t=E.bind(null,r);n=function(){r.parentNode.removeChild(r)}}t(e);return function r(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap){return}t(e=o)}else{n()}}}var b=function(){var e=[];return function(t,n){e[t]=n;return e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet){e.styleSheet.cssText=b(t,o)}else{var a=document.createTextNode(o);var i=e.childNodes;if(i[t])e.removeChild(i[t]);if(i.length){e.insertBefore(a,i[t])}else{e.appendChild(a)}}}function E(e,t){var n=t.css;var r=t.media;var o=t.sourceMap;if(r){e.setAttribute("media",r)}if(d.ssrId){e.setAttribute(v,t.id)}if(o){n+="\n/*# sourceURL="+o.sources[0]+" */";n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}if(e.styleSheet){e.styleSheet.cssText=n}else{while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(document.createTextNode(n))}}},306:function(e,t,n){"use strict";n.r(t);var r=n(756);var o=n(791);var a=n(758);t["default"]={createInteractive:e=>{var t;if(!((t=e.generatedData)===null||t===void 0?void 0:t.javascript)){throw new Error('This Diagrammar has not been properly compiled. Go to the editor and press "Preview" and "Save".')}Object(r["default"])();const n=document.getElementById(e.visualizationKey);if(!n){return}n.innerHTML="";n.style.display="flex";n.style.flexDirection="column";n.style.alignItems="center";const i=document.createElement("elm");n.appendChild(i);const s={containerWidth:n.getBoundingClientRect().width,windowWidth:window.innerWidth,interactiveKey:e.visualizationKey};const c={};new Function(e.generatedData.javascript).call(c);const u=c.Elm.Main.init({node:i,flags:s});Object(o["b"])(u,e.visualizationKey);const{addPointerListeners:l,removePointerListeners:d}=Object(a["setupDiagrammar"])(n,u);const v=e=>{if(u.ports.setStashed){u.ports.setStashed.send(e)}if(e){d()}else{l()}};const f=()=>v(true);const p=()=>v(false);document.addEventListener("switchedToCurrentPane",p);document.addEventListener("switchedAwayFromCurrentPane",f);const m=()=>{u.ports.kill.send(null);d();document.removeEventListener("switchedToCurrentPane",p);document.removeEventListener("switchedAwayFromCurrentPane",f)};return{kill:m,setStashed:v}},createInteractiveSolvable:()=>{throw new Error("Interactive solvables are not supported for Diagrammar")}}},755:function(e,t,n){"use strict";n.r(t);n.d(t,"default",(function(){return d}));var r=n(807);var o=n.n(r);const a="dandy-draggable";const i="dandy-dragging";const s=".dandy-base";const c=".dandyDropZone";const u=".dandyDropBeacon";const l={subtree:true,childList:true,attributes:true,attributeOldValue:true,attributeFilter:[a]};function d(e){if(!e.ports.dandyIn){return()=>{}}let t=null;function n(n){const r=n;if(!r.currentTarget||!r.isPrimary||r.button!==0){return}v(e,r,t);r.target.releasePointerCapture(r.pointerId);const i=r.currentTarget.getBoundingClientRect();let s=r.clientX-i.left;let c=r.clientY-i.top;const u=y(r.currentTarget);if(u){const e=u.getBoundingClientRect();s=s+e.left;c=c+e.top}const l=new CustomEvent("dandydown",{detail:{clientX:r.clientX,clientY:r.clientY,offsetX:s,offsetY:c}});r.currentTarget.dispatchEvent(l);r.stopPropagation();r.preventDefault();document.addEventListener("pointermove",o);document.addEventListener("pointerup",a);document.addEventListener("pointercancel",a)}const r=new MutationObserver(e=>f(e,n));r.observe(e.root,l);p(e.root,n);const o=n=>{if(n.isPrimary){t=v(e,n,t);e.ports.dandyIn.send(n)}};const a=t=>{if(t.isPrimary){e.ports.dandyIn.send(t);e.ports.dandyIn.send({type:"cleardropzonesandbeacons"});document.removeEventListener("pointermove",o);document.removeEventListener("pointerup",a);document.removeEventListener("pointercancel",a);const n=e=>{e.stopPropagation()};document.addEventListener("click",n,true);setTimeout(()=>document.removeEventListener("click",n,true))}};const i=()=>{document.removeEventListener("pointermove",o);document.removeEventListener("pointerup",a);document.removeEventListener("pointercancel",a)};return i}function v(e,t,n){const r=e.root.querySelectorAll(".dandyDropBeacon");let o=null;let a=null;for(let e=0;e<r.length;e++){const n=r[e];const{left:i,right:s,top:c,bottom:u}=n.getBoundingClientRect();const l=(i+s)/2;const d=(c+u)/2;const v=Math.pow(t.clientX-l,2)+Math.pow(t.clientY-d,2);if(!o||v<o){o=v;a=n}}if(a&&a!==n){a.dispatchEvent(new Event("closestbeacon"))}return a}function f(e,t){e.forEach(e=>{if(e.type==="childList"){e.addedNodes.forEach(e=>p(e,t))}else if(e.type==="attributes"&&e.attributeName===a){m(e.target,t)}})}function p(e,t){if(!(e instanceof Element)){return}const n=e=>{e.addEventListener("pointerdown",t);e.addEventListener("touchstart",h)};const r=e.querySelectorAll(`[${a}]`);if(e.hasAttribute(a)){n(e)}r.forEach(n)}function m(e,t){const n=e;if(n.getAttribute(a)==="true"){n.addEventListener("pointerdown",t);n.addEventListener("touchstart",h)}else{n.removeEventListener("pointerdown",t);n.removeEventListener("touchstart",h)}}function h(e){e.preventDefault()}function g(e){const t=getComputedStyle(e);const n=t.getPropertyValue("transform");const r=t.getPropertyValue("perspective");const o=t.getPropertyValue("will-change");const a=t.getPropertyValue("filter");const i=t.getPropertyValue("contain");return n!=="none"||r!=="none"||o==="transform"||o==="perspective"||a!=="none"||i==="paint"}function b(e){if(g(e)){return e}if(e.parentElement){return b(e.parentElement)}return null}function y(e){const t=e.closest(s);if(t){return b(t)}return null}},756:function(e,t,n){"use strict";n.r(t);n.d(t,"default",(function(){return g}));var r=n(44);var o=n.n(r);var a=n(179);var i=n.n(a);var s=n(180);var c=n.n(s);var u=n(181);var l=n.n(u);var d=n(183);var v=n.n(d);var f=n(182);var p=n.n(f);var m=n(1387);var h=n.n(m);function g(){if(customElements.get("katex-element")){return}customElements.define("katex-element",class e extends HTMLElement{constructor(){super();this.latexValue=""}connectedCallback(){this.renderMath()}get latex(){return this.latexValue}set latex(e){this.latexValue=p.a.replace(e);this.renderMath()}static get observedAttributes(){return["displayMode"]}attributeChangedCallback(){this.renderMath()}renderMath(){try{const e=this.getAttribute("displayMode")==="block"?v.a.block:v.a.inline;o.a.render(this.latexValue,this,e)}catch(e){console.error(e);this.innerHTML=`<span style="color:tomato" title="${e.message}">[math error]</span>`}}})}},758:function(e,t,n){"use strict";n.r(t);n.d(t,"setupDiagrammar",(function(){return a}));function r(e,t,n){const r=e.getBoundingClientRect();const o=e.getBBox();const a={x:t.clientX-r.x+o.x,y:t.clientY-r.y+o.y};const i=new CustomEvent(n,{bubbles:true,cancelable:true,detail:{position:a}});return i}function o(e,t,n){const o=o=>{const a=o;if(!a.isPrimary){return}let i=false;const s=a.target;if(s instanceof Element){const o=s.closest(".diagrammarRoot");if(o instanceof SVGGraphicsElement){const e=r(o,a,t);if(a.target){a.target.dispatchEvent(e)}i=i||e.defaultPrevented}const c=e.querySelectorAll(".diagrammarRoot");c.forEach(e=>{if(e instanceof SVGGraphicsElement){const t=r(e,a,n);e.dispatchEvent(t);i=i||t.defaultPrevented}});if(i){a.preventDefault()}}};return o}function a(e,t){const n=o(e,"diagrammarDown","diagrammarDownAnywhere");const r=o(e,"diagrammarMove","diagrammarMoveAnywhere");const a=o(e,"diagrammarUp","diagrammarUpAnywhere");const i=e=>{if(e.target&&e.target.closest(".android-draggable")!==null){e.preventDefault()}};const s=()=>{document.addEventListener("pointerdown",n);document.addEventListener("pointermove",r);document.addEventListener("pointerup",a);e.addEventListener("touchstart",i)};const c=()=>{document.removeEventListener("pointerdown",n);document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",a);e.removeEventListener("touchstart",i)};s();if(t.ports.setWindowFocus){window.addEventListener("blur",()=>{t.ports.setWindowFocus.send(false)});window.addEventListener("focus",()=>{t.ports.setWindowFocus.send(true)})}return{addPointerListeners:s,removePointerListeners:c}}},791:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n.d(t,"b",(function(){return b}));var r=n(755);var o=n(809);var a=n(12);var i=n.n(a);var s=n(3);var c=n.n(s);var u=n(821);var l=n.n(u);if(false){}function d(e){return e==="submittable"||e==="auto-check"?e:null}function v(e){const t=t=>f(t,e);if(Object.values(e.modes).some(g)){const n=(t,n)=>p(t,n,e);return{createInteractive:t,createInteractiveSolvable:n}}return{createInteractive:t}}function f(e,{modes:t}){const n=t[e.authoredData.mode||"default"];const[r,o]=h(n,e,"playground");return o}function p(e,t,{modes:n}){const r=n[e.authoredData.mode||"default"];if(!r){throw new Error(`${r} is not a valid mode for this type of interactive.`)}const o=r.validInteractiveTypes.reduce((e,t)=>{const n=d(t);if(n!==null){e.push(n)}return e},[]);let a;if(o.length===0){throw new Error("This is not a solvable interactive.")}else if(o.length===1){a=o[0]}else{const t=d(e.authoredData.solvableType);if(!e.authoredData.solvableType){throw new Error(`This interactive can be either Submittable or Auto-Checked.\n        Please select one in the configuration for this interactive.`)}else if(t===null){throw new Error(`${e.authoredData.solvableType} is not a valid type for an Interactive Solvable.\n        Please make sure that the 'solvableType' attribute is set to 'auto-check' or 'submittable'.`)}else{a=t}}const[i,s]=h(r,e,a,{hasBeenSolved:t.hasBeenSolved});i.ports.solvableOut.subscribe(e=>E(t,e));return Object.assign({solvableType:a,checkAnswerPressed:()=>i.ports.solvableIn.send("checkAnswerPressed"),resetPressed:()=>i.ports.solvableIn.send("resetPressed")},s)}const m=["Macintosh","MacIntel","MacPPC","Mac68K"];function h(e,t,n,a){const i=document.getElementById(t.visualizationKey);if(!i){throw new Error(`No element found at ${t.visualizationKey}`)}else{i.innerHTML="";i.classList.add("viz-elm");i.classList.add("notranslate");const s=document.createElement("div");i.append(s);const c=m.includes(window.navigator.platform)?"cmd":"ctrl";const u=Object.assign(Object.assign(Object.assign(Object.assign({},t),{interactiveType:n}),a),{mainModifierKey:c,initialWidth:Math.floor(s.getBoundingClientRect().width)});const l=Object.assign(Object.assign({},e.module.init({flags:u,node:s})),{root:i});Object(o["setupAnalytics"])(l,t.slug);b(l,t.visualizationKey);y(l,t.onError);if(e.usesDandy){Object(r["default"])(l)}let d=null;if(e.afterInitializing){d=e.afterInitializing(l)}const v=()=>{l.ports.kill.send(null);if(d){d()}};const f=e=>{return new Promise(t=>{if(l.ports.getConfigValue&&l.ports.sendConfigValue){function n(e){l.ports.sendConfigValue.unsubscribe(n);t(e)}l.ports.sendConfigValue.subscribe(n);l.ports.getConfigValue.send(e)}else{return null}})};return[l,{getConfigValue:f,kill:v}]}}function g(e){return e.validInteractiveTypes.includes("auto-check")||e.validInteractiveTypes.includes("submittable")}function b(e,t){if(!e.ports.problemContainerEvents){return}s["$window"].on(a["EVT_QUIZ_POSITION_WILL_CHANGE"],()=>{e.ports.problemContainerEvents.send({eventType:"quizPositionWillChange"})});s["$window"].on(a["EVT_DAILYPROBLEM_MAINBODY_EXPANDED"],()=>{e.ports.problemContainerEvents.send({eventType:"dailyChallengeMainBodyExpanded"})})}function y(e,t){e.ports.loadingFailed.subscribe(e=>{if(t){t(new Error(e))}else{throw new Error(e)}})}function E({callbacks:e},t){switch(t.type){case"setCaption":e.setCaption(t.caption);break;case"saveState":e.saveState(t.state,t.solved);break;case"setSubmitButtonEnabled":e.setSubmitButtonEnabled(t.enabled);break;case"setResetButtonEnabled":e.setResetButtonEnabled(t.enabled);break}}},809:function(e,t,n){"use strict";n.r(t);n.d(t,"setupAnalytics",(function(){return s}));var r=n(13);var o=n.n(r);let a=null;function i(){a=Date.now()}function s(e,t){if(!e.ports.analytics){return}e.ports.analytics.subscribe(e=>{Object(r["track"])("ui",Object.assign(Object.assign({},e),{visualization_name:t}))})}}}]);
//# sourceMappingURL=viz-02-diagrammar.a35e5b534d3f5e0f57d3.js.map