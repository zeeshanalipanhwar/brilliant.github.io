(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[207],{1083:function(t,e,n){var a=n(2129);if(typeof a==="string")a=[[t.i,a,""]];if(a.locals)t.exports=a.locals;var r=n(15).default;var i=r("75121a8a",a,false,{});if(false){}},1084:function(t,e,n){var a=n(2131);if(typeof a==="string")a=[[t.i,a,""]];if(a.locals)t.exports=a.locals;var r=n(15).default;var i=r("7d493e88",a,false,{});if(false){}},130:function(t,e){function n(t,e,n){var a,r,i,o,s;if(null==e)e=100;function l(){var d=Date.now()-o;if(d<e&&d>=0){a=setTimeout(l,e-d)}else{a=null;if(!n){s=t.apply(i,r);i=r=null}}}var d=function(){i=this;r=arguments;o=Date.now();var d=n&&!a;if(!a)a=setTimeout(l,e);if(d){s=t.apply(i,r);i=r=null}return s};d.clear=function(){if(a){clearTimeout(a);a=null}};d.flush=function(){if(a){s=t.apply(i,r);i=r=null;clearTimeout(a);a=null}};return d}n.debounce=n;t.exports=n},2128:function(t,e,n){"use strict";var a=n(1083);var r=n.n(a);var i=r.a},2129:function(t,e,n){e=t.exports=n(14)(false);e.push([t.i,"html.locked,\nbody.locked {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n",""])},2130:function(t,e,n){"use strict";var a=n(1084);var r=n.n(a);var i=r.a},2131:function(t,e,n){e=t.exports=n(14)(false);e.push([t.i,'@use "sass:map";\n.no-scroll[data-v-d6840f30] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.fade-fast-enter-active[data-v-d6840f30],\n.fade-fast-leave-active[data-v-d6840f30] {\n  transition: opacity 100ms linear;\n}\n.fade-fast-enter[data-v-d6840f30],\n.fade-fast-leave-to[data-v-d6840f30] {\n  opacity: 0;\n}\n.fade-slide-left-medium-enter-active[data-v-d6840f30],\n.fade-slide-left-medium-leave-active[data-v-d6840f30] {\n  transition: opacity 200ms linear, -webkit-transform 200ms ease-out;\n  transition: opacity 200ms linear, transform 200ms ease-out;\n  transition: opacity 200ms linear, transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.fade-slide-left-medium-enter[data-v-d6840f30] {\n  opacity: 0;\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.fade-slide-left-medium-leave-to[data-v-d6840f30] {\n  opacity: 0;\n  -webkit-transform: translateX(-20px);\n          transform: translateX(-20px);\n}\n.slide-left-enter[data-v-d6840f30] {\n  -webkit-transform: translateX(300px);\n          transform: translateX(300px);\n}\n.slide-left-leave-to[data-v-d6840f30] {\n  -webkit-transform: translateX(-300px);\n          transform: translateX(-300px);\n}\n.slide-left-enter-active[data-v-d6840f30],\n.slide-left-leave-active[data-v-d6840f30] {\n  transition: -webkit-transform 200ms linear;\n  transition: transform 200ms linear;\n  transition: transform 200ms linear, -webkit-transform 200ms linear;\n}\n.flip-medium-enter-active[data-v-d6840f30],\n.flip-medium-leave-active[data-v-d6840f30] {\n  transition: -webkit-transform 200ms linear;\n  transition: transform 200ms linear;\n  transition: transform 200ms linear, -webkit-transform 200ms linear;\n}\n.flip-medium-enter[data-v-d6840f30],\n.flip-medium-leave-to[data-v-d6840f30] {\n  -webkit-transform: rotateY(90deg);\n          transform: rotateY(90deg);\n}\n.streak-modal[data-v-d6840f30] .b-modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 400px;\n  padding: 48px 48px 40px;\n  text-align: center;\n  border-radius: 0;\n}\n.streak-modal .close[data-v-d6840f30] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  opacity: 0.3;\n}\n.streak-modal .close[data-v-d6840f30]:hover {\n    opacity: 1;\n}\n.streak-modal .streak-icon-wrapper[data-v-d6840f30] {\n  position: relative;\n  margin-bottom: 24px;\n}\n.streak-modal .streak-icon-mask[data-v-d6840f30] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n}\n.streak-modal h2[data-v-d6840f30] {\n  margin-bottom: 16px;\n  font-size: 30px;\n  font-weight: 600;\n  line-height: 1.17em;\n  color: #000000;\n}\n.streak-modal .text[data-v-d6840f30] {\n  font-size: 18px;\n  line-height: 1.33em;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.7);\n}\n.streak-modal .text div[data-v-d6840f30] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 24px;\n}\n.streak-modal .text .continue[data-v-d6840f30] {\n    margin-top: 24px;\n}\n.streak-modal label[data-v-d6840f30] {\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.55);\n}\n.streak-modal select[data-v-d6840f30] {\n  height: 40px;\n  margin-bottom: 24px;\n  border: 1px solid rgba(31, 31, 31, 0.2);\n  border-radius: 5px;\n  box-shadow: none;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.36em;\n  color: #000000;\n}\n.streak-modal select[data-v-d6840f30]:hover {\n    border-color: rgba(31, 31, 31, 0.5);\n}\n.streak-modal p[data-v-d6840f30] {\n  margin: 0;\n}\n.streak-modal .btn[data-v-d6840f30] {\n  width: 148px;\n  height: 48px;\n  border: 0;\n  background: #000000;\n}\n.streak-modal .btn[data-v-d6840f30]:hover {\n    opacity: 0.9;\n}\n.streak-icon-enter-active[data-v-d6840f30],\n.streak-icon-leave-active[data-v-d6840f30] {\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.streak-icon-enter[data-v-d6840f30] {\n  -webkit-transform: translate(0, 100);\n          transform: translate(0, 100);\n}\n.streak-icon-leave-to[data-v-d6840f30] {\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%);\n}\n',""])},25:function(t,e,n){"use strict";n.d(e,"c",(function(){return a}));n.d(e,"a",(function(){return r}));n.d(e,"b",(function(){return i}));function a(t){return Object.entries(t).map(([t,e])=>`${t}=${e.toString()}`).join("&")}function r(t,e){const[n,r]=t.split("#");const i=n.includes("?")?"&":"?";const o=r?`#${r}`:"";return`${n}${i}${a(e)}${o}`}function i(t=window.location.search){const e=t.replace("?","").split("&");const n={};e.forEach(t=>{if(t.length>0){const[e,a]=t.split("=");n[e]=a}});return n}},300:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(56);function r(){let t="";if(typeof document!=="undefined"){document.cookie.split(";").forEach(e=>{if(e.indexOf("csrftoken")>=0){t=e.split("=")[1].trim()}})}else{t=Object(a["a"])().backend.server_side_rendering_data.cookies.csrftoken}return t}},524:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this;var e=t.$createElement;var n=t._self._c||e;return n("transition",{attrs:{name:"fade-fast"}},[t.showModal?n("Modal",{staticClass:"streak-modal",on:{close:function(e){t.showModal=false}}},[n("button",{staticClass:"close btn-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.showModal=false}}},[t._v("×")]),t._v(" "),n("span",{staticClass:"streak-icon-wrapper streak-icon"},[n("span",{staticClass:"streak-icon css-sprite-global"}),t._v(" "),n("transition",{attrs:{name:"streak-icon"}},[!t.showIcon?n("span",{staticClass:"streak-icon-mask"}):t._e()])],1),t._v(" "),t.numStreakDays===1?n("h2",[t._v("\n      You started a\n      "),n("br"),t._v("\n      "+t._s(t.numStreakDays)+"-day streak!\n    ")]):n("h2",[t._v("\n      You're on a\n      "),n("br"),t._v("\n      "+t._s(t.numStreakDays)+"-day streak!\n    ")]),t._v(" "),n("div",{staticClass:"text"},[t.tzList.length?[n("p",[t._v("Set your timezone to make sure your streaks are calculated properly.")]),t._v(" "),n("div",[n("label",{attrs:{for:"tz"}},[t._v("Current time: "+t._s(t.currentTime))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentTzName,expression:"currentTzName"}],attrs:{id:"tz"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentTzName=e.target.multiple?n:n[0]}}},t._l(t.tzList,(function(e){return n("option",{key:e.tz_name,domProps:{value:e.tz_name}},[t._v("\n              "+t._s(e.tz_text)+"\n            ")])})),0),t._v(" "),n("button",{staticClass:"btn btn-accent",attrs:{disabled:t.isSaving},on:{click:function(e){e.preventDefault();return t.handleSaveTz(e)}}},[t._v("\n            Save\n          ")])])]:[n("p",[t._v("\n          Solve more problems tomorrow\n          "),n("br"),t._v("\n          and extend your streak.\n        ")]),t._v(" "),n("div",{staticClass:"continue"},[n("button",{staticClass:"btn btn-accent",on:{click:function(e){e.preventDefault();return t.handleContinue(e)}}},[t._v("\n            Continue\n          ")])])]],2)]):t._e()],1)};var r=[];a._withStripped=true;var i=n(0);var o=n(1);var s=n(1082);var l=n(819);var d=n(8);var c=n(25);var f=n(60);const u="US/Pacific";let m=class t extends o["e"]{constructor(){super(...arguments);this.showModal=true;this.showIcon=false;this.tzList=window.__tzlist;this.currentTzName=u;this.currentDateTime=s["DateTime"].local();this.dateTimeInterval=0;this.isSaving=false}get currentTime(){return this.currentDateTime.setZone(this.currentTzName).toFormat("d LLLL yyyy, hh:mma")}handleSaveTz(){return Object(i["a"])(this,void 0,void 0,(function*(){this.isSaving=true;try{yield Object(d["c"])("/api/v1/stats/timezone/",Object(c["c"])({tz_name:this.currentTzName}))}catch(t){}this.showModal=false}))}handleContinue(){if(!document.querySelector("#wiki-main")){const t=document.querySelector(".esr-problem");if(t){t.click()}}this.showModal=false}mounted(){if(this.estimatedTz==="None"){this.currentTzName=s["DateTime"].local().zoneName}else{this.currentTzName=this.estimatedTz}this.dateTimeInterval=window.setInterval(()=>this.currentDateTime=s["DateTime"].local(),5e3);Object(f["d"])(()=>this.showIcon=true)}destroyed(){clearInterval(this.dateTimeInterval)}};Object(i["b"])([Object(o["c"])(Number)],m.prototype,"numStreakDays",void 0);Object(i["b"])([Object(o["c"])(String)],m.prototype,"estimatedTz",void 0);m=Object(i["b"])([Object(o["a"])({components:{Modal:l["a"]}})],m);var v=m;var p=v;var h=n(2128);var b=n(2130);var w=n(5);var g=Object(w["a"])(p,a,r,false,null,"d6840f30",null);if(false){var k}g.options.__file="frontend/legacy/StreakModal.vue";var x=e["default"]=g.exports},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));let a=null;function r(){return a}function i(t){a=t}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n.d(e,"c",(function(){return c}));n.d(e,"b",(function(){return f}));var a=n(134);var r=n.n(a);var i=n(300);var o=n(25);var s=n(56);const l=()=>({"X-CSRFToken":Object(i["a"])(),"X-Requested-With":"XMLHttpRequest"});function d(t=""){const e={method:"GET",headers:l()};return r.a.get(t,e).then(t=>t.data).catch(t=>{console.log(t);throw t})}function c(t="",e={}){const n={method:"POST",headers:l()};return r.a.post(t,e,n).then(t=>t.data).catch(t=>{console.log(t);throw t})}function f(t){let e=Object(o["a"])(t,{ajax:true});const n=t.startsWith("http://")||t.startsWith("https://");const a=Object(s["a"])();const i={"X-Requested-With":"XMLHttpRequest"};if(a!=null&&!n){i.Cookie=u(a.backend.server_side_rendering_data.cookies);e=a.backend.response.base_url+t}e=e.split("#")[0];return r.a.get(e,{headers:i}).then(t=>{if(t.data.redirect_to){window.location=t.data.redirect_to;return{}}if(t.headers["content-type"].includes("text/html")){if(e!==t.request.responseURL){window.location=t.request.responseURL;return{}}}if(t.data.response&&e!==t.data.response.request_path){return Object.assign(Object.assign({},t.data),{$redirected:{to:t.data.response.request_path,from:e}})}return t.data}).catch(t=>{console.log(t);throw t})}function u(t){return Object.keys(t).map(e=>`${e}=${t[e]}`).join("; ")}},816:function(t,e,n){"use strict";(function(t){var a=n(0);var r=n(3);var i=n(1);var o=n(130);var s=n.n(o);var l=n(29);var d=n(98);let c=class e extends r["default"]{constructor(){super(...arguments);this.initialModalTop=null;this.SCROLL_TO_ELEMENTS=["INPUT","SELECT"]}scrollToFormElement(t){if(!this.needsPreciseScrollHandling||!this.modalIsOverflowing()||!this.modal){return}const e=t.getBoundingClientRect().top;const n=t.clientHeight;const a=window.innerHeight;const r=a/2-n/2;const i=parseInt(this.modal.style.top||"0",10);const o=i+(r-e);this.modal.style.top=`${o}px`}isMobile(){try{return this.$store.getters["pageHeader/isMobile"](this.$mq)}catch(e){if(t.env.VUE_ENV==="server"){return false}return Boolean(document.body.dataset.isMobile)}}onClick(t){const e=t.target;const n=this.$refs.container;if(e===n){this.$emit("close")}}handleKeyDown(t){if(t.which===27){this.$emit("close")}}get needsPreciseScrollHandling(){return navigator.userAgent.toLowerCase().includes("android")}modalIsOverflowing(){if(!this.modal){return false}return this.modal.clientHeight>window.innerHeight}windowResizeHandler(){if(!this.needsPreciseScrollHandling||!this.modal||t.env.VUE_ENV==="server"){return}if(this.modalIsOverflowing()){const t=document.activeElement;if(t&&this.SCROLL_TO_ELEMENTS.includes(t.tagName)){this.scrollToFormElement(t)}}else if(this.initialModalTop){this.modal.style.top=this.initialModalTop}}updated(){this.$nextTick(()=>{if(this.needsPreciseScrollHandling&&this.modal){this.modal.querySelectorAll(this.SCROLL_TO_ELEMENTS.join(",")).forEach(t=>{t.addEventListener("focus",()=>{this.scrollToFormElement(t)})})}})}mounted(){return Object(a["a"])(this,void 0,void 0,(function*(){if(this.axId){Object(l["e"])("ui",{action:"modal",element_type:"modal",element_id:this.axId})}Object(d["a"])(true);window.addEventListener("keydown",this.handleKeyDown);if(this.needsPreciseScrollHandling){this.modal=this.$refs.modal;this.initialModalTop=this.modal.style.top;window.addEventListener("resize",Object(o["debounce"])(this.windowResizeHandler,50))}}))}destroyed(){return Object(a["a"])(this,void 0,void 0,(function*(){Object(d["a"])(false);window.removeEventListener("keydown",this.handleKeyDown);if(this.needsPreciseScrollHandling){window.removeEventListener("resize",Object(o["debounce"])(this.windowResizeHandler,50))}}))}};Object(a["b"])([Object(i["c"])(String)],c.prototype,"axId",void 0);Object(a["b"])([Object(i["c"])({type:Boolean,default:false})],c.prototype,"scrollable",void 0);c=Object(a["b"])([i["a"]],c);e["a"]=c}).call(this,n(19))},817:function(t,e,n){var a=n(835);if(typeof a==="string")a=[[t.i,a,""]];if(a.locals)t.exports=a.locals;var r=n(15).default;var i=r("6b6735ae",a,false,{});if(false){}},819:function(t,e,n){"use strict";var a=function(){var t=this;var e=t.$createElement;var n=t._self._c||e;return n("transition",{attrs:{name:"fade-fast",appear:""}},[n("div",{ref:"container",class:{"b-modal":true,mobile:t.isMobile(),scrollable:t.scrollable},on:{click:t.onClick}},[n("div",{ref:"modal",staticClass:"b-modal-content"},[t._t("default")],2)])])};var r=[];a._withStripped=true;var i=n(816);var o=i["a"];var s=n(834);var l=n(5);var d=Object(l["a"])(o,a,r,false,null,"2f703693",null);if(false){var c}d.options.__file="frontend/components/Modal.vue";var f=e["a"]=d.exports},834:function(t,e,n){"use strict";var a=n(817);var r=n.n(a);var i=r.a},835:function(t,e,n){e=t.exports=n(14)(false);e.push([t.i,'@use "sass:map";\n.no-scroll[data-v-2f703693] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.b-modal[data-v-2f703693] {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 700;\n}\n.b-modal .b-modal-content[data-v-2f703693] {\n    position: relative;\n    width: 500px;\n    padding: 24px 24px;\n    border-radius: 10px;\n    background: #FFFFFF;\n    overflow: hidden;\n    top: 0;\n    transition: top 200ms linear;\n}\n.b-modal.mobile .b-modal-content[data-v-2f703693] {\n  border-radius: 4px;\n}\n.b-modal.scrollable[data-v-2f703693] {\n  padding: 5% 24px;\n  align-items: flex-start;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.b-modal.scrollable.mobile[data-v-2f703693] {\n    padding: 8px 8px;\n}\n',""])}}]);
//# sourceMappingURL=207.de6f128186cc983ea25f.js.map