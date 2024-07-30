(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[195,248],{304:function(e,t,n){"use strict";n.r(t);var o=n(789);var r=n(817);var s=n.n(r);t["default"]=Object(o["a"])({modes:{puzzle:{module:r["Elm"].ToggleTags.PuzzleMode,validInteractiveTypes:["auto-check","submittable"]},solution:{module:r["Elm"].ToggleTags.SolutionMode,validInteractiveTypes:["playground"]}}})},754:function(e,t,n){"use strict";n.r(t);n.d(t,"default",(function(){return d}));var o=n(804);var r=n.n(o);const s="dandy-draggable";const i="dandy-dragging";const a=".dandy-base";const c=".dandyDropZone";const l=".dandyDropBeacon";const u={subtree:true,childList:true,attributes:true,attributeOldValue:true,attributeFilter:[s]};function d(e){if(!e.ports.dandyIn){return()=>{}}let t=null;function n(n){const o=n;if(!o.currentTarget||!o.isPrimary||o.button!==0){return}p(e,o,t);o.target.releasePointerCapture(o.pointerId);const i=o.currentTarget.getBoundingClientRect();let a=o.clientX-i.left;let c=o.clientY-i.top;const l=E(o.currentTarget);if(l){const e=l.getBoundingClientRect();a=a+e.left;c=c+e.top}const u=new CustomEvent("dandydown",{detail:{clientX:o.clientX,clientY:o.clientY,offsetX:a,offsetY:c}});o.currentTarget.dispatchEvent(u);o.stopPropagation();o.preventDefault();document.addEventListener("pointermove",r);document.addEventListener("pointerup",s);document.addEventListener("pointercancel",s)}const o=new MutationObserver(e=>v(e,n));o.observe(e.root,u);f(e.root,n);const r=n=>{if(n.isPrimary){t=p(e,n,t);e.ports.dandyIn.send(n)}};const s=t=>{if(t.isPrimary){e.ports.dandyIn.send(t);e.ports.dandyIn.send({type:"cleardropzonesandbeacons"});document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",s);document.removeEventListener("pointercancel",s);const n=e=>{e.stopPropagation()};document.addEventListener("click",n,true);setTimeout(()=>document.removeEventListener("click",n,true))}};const i=()=>{document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",s);document.removeEventListener("pointercancel",s)};return i}function p(e,t,n){const o=e.root.querySelectorAll(".dandyDropBeacon");let r=null;let s=null;for(let e=0;e<o.length;e++){const n=o[e];const{left:i,right:a,top:c,bottom:l}=n.getBoundingClientRect();const u=(i+a)/2;const d=(c+l)/2;const p=Math.pow(t.clientX-u,2)+Math.pow(t.clientY-d,2);if(!r||p<r){r=p;s=n}}if(s&&s!==n){s.dispatchEvent(new Event("closestbeacon"))}return s}function v(e,t){e.forEach(e=>{if(e.type==="childList"){e.addedNodes.forEach(e=>f(e,t))}else if(e.type==="attributes"&&e.attributeName===s){b(e.target,t)}})}function f(e,t){if(!(e instanceof Element)){return}const n=e=>{e.addEventListener("pointerdown",t);e.addEventListener("touchstart",m)};const o=e.querySelectorAll(`[${s}]`);if(e.hasAttribute(s)){n(e)}o.forEach(n)}function b(e,t){const n=e;if(n.getAttribute(s)==="true"){n.addEventListener("pointerdown",t);n.addEventListener("touchstart",m)}else{n.removeEventListener("pointerdown",t);n.removeEventListener("touchstart",m)}}function m(e){e.preventDefault()}function g(e){const t=getComputedStyle(e);const n=t.getPropertyValue("transform");const o=t.getPropertyValue("perspective");const r=t.getPropertyValue("will-change");const s=t.getPropertyValue("filter");const i=t.getPropertyValue("contain");return n!=="none"||o!=="none"||r==="transform"||r==="perspective"||s!=="none"||i==="paint"}function h(e){if(g(e)){return e}if(e.parentElement){return h(e.parentElement)}return null}function E(e){const t=e.closest(a);if(t){return h(t)}return null}},789:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n.d(t,"b",(function(){return h}));var o=n(754);var r=n(806);var s=n(12);var i=n.n(s);var a=n(2);var c=n.n(a);var l=n(818);var u=n.n(l);if(false){}function d(e){return e==="submittable"||e==="auto-check"?e:null}function p(e){const t=t=>v(t,e);if(Object.values(e.modes).some(g)){const n=(t,n)=>f(t,n,e);return{createInteractive:t,createInteractiveSolvable:n}}return{createInteractive:t}}function v(e,{modes:t}){const n=t[e.authoredData.mode||"default"];const[o,r]=m(n,e,"playground");return r}function f(e,t,{modes:n}){const o=n[e.authoredData.mode||"default"];if(!o){throw new Error(`${o} is not a valid mode for this type of interactive.`)}const r=o.validInteractiveTypes.reduce((e,t)=>{const n=d(t);if(n!==null){e.push(n)}return e},[]);let s;if(r.length===0){throw new Error("This is not a solvable interactive.")}else if(r.length===1){s=r[0]}else{const t=d(e.authoredData.solvableType);if(!e.authoredData.solvableType){throw new Error(`This interactive can be either Submittable or Auto-Checked.\n        Please select one in the configuration for this interactive.`)}else if(t===null){throw new Error(`${e.authoredData.solvableType} is not a valid type for an Interactive Solvable.\n        Please make sure that the 'solvableType' attribute is set to 'auto-check' or 'submittable'.`)}else{s=t}}const[i,a]=m(o,e,s,{hasBeenSolved:t.hasBeenSolved});i.ports.solvableOut.subscribe(e=>y(t,e));return Object.assign({solvableType:s,checkAnswerPressed:()=>i.ports.solvableIn.send("checkAnswerPressed"),resetPressed:()=>i.ports.solvableIn.send("resetPressed")},a)}const b=["Macintosh","MacIntel","MacPPC","Mac68K"];function m(e,t,n,s){const i=document.getElementById(t.visualizationKey);if(!i){throw new Error(`No element found at ${t.visualizationKey}`)}else{i.innerHTML="";i.classList.add("viz-elm");i.classList.add("notranslate");const a=document.createElement("div");i.append(a);const c=b.includes(window.navigator.platform)?"cmd":"ctrl";const l=Object.assign(Object.assign(Object.assign(Object.assign({},t),{interactiveType:n}),s),{mainModifierKey:c,initialWidth:Math.floor(a.getBoundingClientRect().width)});const u=Object.assign(Object.assign({},e.module.init({flags:l,node:a})),{root:i});Object(r["setupAnalytics"])(u,t.slug);h(u,t.visualizationKey);E(u,t.onError);if(e.usesDandy){Object(o["default"])(u)}let d=null;if(e.afterInitializing){d=e.afterInitializing(u)}const p=()=>{u.ports.kill.send(null);if(d){d()}};const v=e=>{return new Promise(t=>{if(u.ports.getConfigValue&&u.ports.sendConfigValue){function n(e){u.ports.sendConfigValue.unsubscribe(n);t(e)}u.ports.sendConfigValue.subscribe(n);u.ports.getConfigValue.send(e)}else{return null}})};return[u,{getConfigValue:v,kill:p}]}}function g(e){return e.validInteractiveTypes.includes("auto-check")||e.validInteractiveTypes.includes("submittable")}function h(e,t){if(!e.ports.problemContainerEvents){return}a["$window"].on(s["EVT_QUIZ_POSITION_WILL_CHANGE"],()=>{e.ports.problemContainerEvents.send({eventType:"quizPositionWillChange"})});a["$window"].on(s["EVT_DAILYPROBLEM_MAINBODY_EXPANDED"],()=>{e.ports.problemContainerEvents.send({eventType:"dailyChallengeMainBodyExpanded"})})}function E(e,t){e.ports.loadingFailed.subscribe(e=>{if(t){t(new Error(e))}else{throw new Error(e)}})}function y({callbacks:e},t){switch(t.type){case"setCaption":e.setCaption(t.caption);break;case"saveState":e.saveState(t.state,t.solved);break;case"setSubmitButtonEnabled":e.setSubmitButtonEnabled(t.enabled);break;case"setResetButtonEnabled":e.setResetButtonEnabled(t.enabled);break}}}}]);
//# sourceMappingURL=viz-02-toggle-tags.65482f8f7a5520543e37.js.map