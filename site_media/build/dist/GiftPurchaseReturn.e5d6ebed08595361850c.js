(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{1098:function(e,n,t){var a=t(2160);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var s=t(15).default;var i=s("606a137c",a,false,{});if(false){}},128:function(e,n,t){var a=t(434);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var s=t(15).default;var i=s("6163b12e",a,false,{});if(false){}},2159:function(e,n,t){"use strict";var a=t(1098);var s=t.n(a);var i=s.a},2160:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-79a5a583] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.gift-purchase-success header[data-v-79a5a583] {\n  position: relative;\n  height: 150px;\n  overflow: hidden;\n  margin-bottom: 48px;\n  background: url(/site_media/version-7d46f253ff/images/gifting/desktop/bg-swirl.svg) no-repeat center/cover #3A7CC0;\n}\n.gift-purchase-success header .container[data-v-79a5a583] {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n.gift-purchase-success .wrapper[data-v-79a5a583] {\n  display: flex;\n  justify-content: center;\n}\n.gift-purchase-success .content[data-v-79a5a583] {\n  width: 430px;\n  margin-bottom: 96px;\n  padding: 40px 40px;\n  background: #FFFFFF;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);\n}\n.gift-purchase-success .content.loading[data-v-79a5a583] {\n    text-align: center;\n}\n.gift-purchase-success .content.loading[data-v-79a5a583] .b-loader {\n      margin: 0 auto;\n}\n.gift-purchase-success .status[data-v-79a5a583] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  line-height: 25px;\n}\n.gift-purchase-success .status h1[data-v-79a5a583] {\n    font-weight: bold;\n    font-size: 28px;\n    line-height: 25px;\n    color: #000000;\n}\n.gift-purchase-success .status .img[data-v-79a5a583] {\n    flex: none;\n    margin-left: 24px;\n}\n.gift-purchase-success .opt-in[data-v-79a5a583] {\n  margin-bottom: 40px;\n  padding: 16px 16px;\n  border: 1px solid #eaeaea;\n  background: #fbfbfb;\n}\n.gift-purchase-success .opt-in h4[data-v-79a5a583] {\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 24px;\n    color: #000000;\n}\n.gift-purchase-success .opt-in p[data-v-79a5a583] {\n    font-size: 16px;\n    line-height: 22px;\n    color: #000000;\n    opacity: 0.55;\n}\n.gift-purchase-success .opt-in .checkbox[data-v-79a5a583] {\n    display: inline-flex;\n    align-items: center;\n    padding: 0;\n    font-size: 16px;\n    cursor: pointer;\n}\n.gift-purchase-success .opt-in .checkbox input[data-v-79a5a583] {\n      display: none;\n}\n.gift-purchase-success .opt-in .checkbox input:checked + span[data-v-79a5a583] {\n        border-color: #000000;\n        background: #000000;\n}\n.gift-purchase-success .opt-in .checkbox span[data-v-79a5a583] {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      background: #FFFFFF;\n      border: 1px solid #bbb;\n      transition: background-color 100ms linear;\n}\n.gift-purchase-success footer[data-v-79a5a583] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.gift-purchase-success .btn-continue[data-v-79a5a583] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 48px;\n  margin-bottom: 24px;\n  background: #000000;\n  border: 0;\n  font-weight: 600;\n  font-size: 16px;\n}\n.gift-purchase-success .give-another-gift[data-v-79a5a583] {\n  color: #000000;\n  text-decoration: underline;\n}\n.gift-purchase-success .give-another-gift[data-v-79a5a583]:hover {\n    opacity: 0.8;\n    text-decoration: none;\n}\n.gift-purchase-success.mobile .gift-success[data-v-79a5a583] {\n  width: 100%;\n  padding: 0 24px;\n  box-shadow: none;\n}\n',""])},2572:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{staticClass:"gift-purchase-success",class:{mobile:e.isMobile(e.$mq)}},[e._m(0),e._v(" "),t("div",{staticClass:"wrapper"},[e.succeeded?t("div",{staticClass:"content"},[t("div",{staticClass:"status"},[t("div",[t("h1",[e._v("Success!")]),e._v(" "),t("p",[e._v("\n            Your gift is confirmed. We'll send an email to\n            "),t("b",[e._v(e._s(e.gifteeEmail))]),e.deliveryDateIsFuture?t("span",[e._v(" on "),t("b",[e._v(e._s(e.deliveryDateFormatted))])]):e._e(),e._v(".\n          ")])]),e._v(" "),t("span",{staticClass:"img b-sprite-paywall-jumper"})]),e._v(" "),e.signedUpToday?t("div",{staticClass:"opt-in"},[t("h4",[e._v("Are you using Brilliant too?")]),e._v(" "),t("p",[e._v("Get fun problems and news about content releases from Brilliant in your email.")]),e._v(" "),t("label",{staticClass:"checkbox"},[t("input",{attrs:{type:"checkbox"},domProps:{checked:e.subscribedToExtraEmails},on:{change:e.giftSubscribeOptIn}}),e._v(" "),t("span"),e._v("\n          Yes, I'd like to opt in!\n        ")])]):e._e(),e._v(" "),t("footer",{staticClass:"row"},[t("router-link",{staticClass:"btn btn-accent btn-continue",attrs:{to:{name:"explorations_menu"}}},[e._v("Continue")]),e._v(" "),t("router-link",{staticClass:"give-another-gift",attrs:{to:{name:"gift_purchase_plans"}}},[e._v("Give another gift")])],1)]):t("div",{staticClass:"content loading"},[t("h2",[e._v("Processing, please wait...")]),e._v(" "),t("LoadingAnimation",{attrs:{type:"dots",color:"dark",size:"small"}})],1)])])};var s=[function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("header",[t("div",{staticClass:"container"},[t("span",{staticClass:"gift-box b-sprite-paywall-gift-box"})])])}];a._withStripped=true;var i=t(0);var m=t(1);var c=t(9);var o=t(297);var r=t(8);let d=class e extends m["e"]{mounted(){if(!this.succeeded){this.checkPurchaseStatus()}}checkPurchaseStatus(){return Object(i["a"])(this,void 0,void 0,(function*(){const e=this.$router.resolve({name:"gift_purchase_success",query:{gift_message_id:this.giftMessageId.toString()}}).href;const n=yield Object(r["b"])(e);const t=n.results.gift_purchase_success;this.$store.commit("giftPurchaseSuccess/setValue",t);if(!t.succeeded){setTimeout(()=>this.checkPurchaseStatus(),2e3)}}))}giftSubscribeOptIn(e){return Object(i["a"])(this,void 0,void 0,(function*(){const n=e.target;const t=`/profile/extra-emails-preference-change/${this.subscribedToExtraEmails?"unchecked":"checked"}/`;if(n.disabled){return}n.disabled=true;try{const e=yield Object(r["c"])(t);if(e.success){this.$store.commit("giftPurchaseSuccess/toggleSubscriptionStatus")}else{yield this.$store.dispatch("errorModal/showMessage")}}catch(e){n.checked=!n.checked;yield this.$store.dispatch("errorModal/showMessage")}finally{n.disabled=false}}))}};d=Object(i["b"])([Object(m["a"])({components:{LoadingAnimation:o["a"]},metaInfo:{title:"Gift Purchase Success!"},computed:Object.assign(Object.assign({},Object(c["mapGetters"])("giftPurchaseSuccess",["deliveryDateFormatted","deliveryDateIsFuture","gifteeEmail","giftMessageId","signedUpToday","subscribedToExtraEmails","succeeded"])),Object(c["mapGetters"])("pageHeader",["isMobile"]))})],d);var b=d;var l=b;var p=t(2159);var u=t(5);var f=Object(u["a"])(l,a,s,false,null,"79a5a583",null);if(false){var v}f.options.__file="frontend/views/premium/gifts/ReturnPage.vue";var h=n["default"]=f.exports},297:function(e,n,t){"use strict";var a=function(){var e;var n=this;var t=n.$createElement;var a=n._self._c||t;return a("span",{class:(e={"b-loader":true},e["b-"+n.type]=true,e["b-"+n.color]=true,e["b-"+n.size]=true,e)},[a("span")])};var s=[];a._withStripped=true;var i=t(0);var m=t(1);const c="light";const o="dark";const r="small";const d="medium";const b="large";const l="spinner";const p="dots";let u=class e extends m["e"]{};Object(i["b"])([Object(m["c"])({type:String,default:l})],u.prototype,"type",void 0);Object(i["b"])([Object(m["c"])({type:String,default:o})],u.prototype,"color",void 0);Object(i["b"])([Object(m["c"])({type:String,default:d})],u.prototype,"size",void 0);u=Object(i["b"])([m["a"]],u);var f=u;var v=f;var h=t(433);var g=t(5);var x=Object(g["a"])(v,a,s,false,null,"c230b09c",null);if(false){var w}x.options.__file="frontend/components/LoadingAnimation.vue";var y=n["a"]=x.exports},433:function(e,n,t){"use strict";var a=t(128);var s=t.n(a);var i=s.a},434:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,".b-loader[data-v-c230b09c] {\n  display: block;\n}\n.b-dots[data-v-c230b09c] {\n  position: relative;\n  width: 8px;\n  height: 8px;\n}\n.b-dots span[data-v-c230b09c], .b-dots[data-v-c230b09c]:before, .b-dots[data-v-c230b09c]:after {\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.5);\n}\n.b-dots[data-v-c230b09c]:before, .b-dots[data-v-c230b09c]:after {\n    content: '';\n}\n.b-dots span[data-v-c230b09c] {\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.4s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.4s infinite linear;\n}\n.b-dots[data-v-c230b09c]:before {\n    left: -16px;\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.2s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.2s infinite linear;\n}\n.b-dots[data-v-c230b09c]:after {\n    right: -16px;\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.6s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.6s infinite linear;\n}\n.b-dots.b-light span[data-v-c230b09c], .b-dots.b-light[data-v-c230b09c]:before, .b-dots.b-light[data-v-c230b09c]:after {\n    background: rgba(255, 255, 255, 0.6);\n}\n.b-dots.b-medium[data-v-c230b09c] {\n    width: 12px;\n    height: 12px;\n}\n.b-dots.b-medium[data-v-c230b09c]:before {\n      left: -22px;\n}\n.b-dots.b-medium[data-v-c230b09c]:after {\n      right: -22px;\n}\n.b-dots.b-large[data-v-c230b09c] {\n    width: 18px;\n    height: 18px;\n}\n.b-dots.b-large[data-v-c230b09c]:before {\n      left: -32px;\n}\n.b-dots.b-large[data-v-c230b09c]:after {\n      right: -32px;\n}\n@-webkit-keyframes bdots-data-v-c230b09c {\n0%, 80% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.2;\n}\n}\n@keyframes bdots-data-v-c230b09c {\n0%, 80% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.2;\n}\n}\n.b-spinner[data-v-c230b09c] {\n  font-size: 20px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: bspinner-data-v-c230b09c 1.3s infinite linear;\n          animation: bspinner-data-v-c230b09c 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.b-spinner.b-small[data-v-c230b09c] {\n    font-size: 4px;\n}\n.b-spinner.b-medium[data-v-c230b09c] {\n    font-size: 6px;\n}\n.b-spinner.b-large[data-v-c230b09c] {\n    font-size: 10px;\n}\n.b-spinner.b-light[data-v-c230b09c] {\n    color: rgba(255, 255, 255, 0.6);\n}\n.b-spinner.b-dark[data-v-c230b09c] {\n    color: rgba(0, 0, 0, 0.5);\n}\n@-webkit-keyframes bspinner-data-v-c230b09c {\n0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n@keyframes bspinner-data-v-c230b09c {\n0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n",""])}}]);
//# sourceMappingURL=GiftPurchaseReturn.e5d6ebed08595361850c.js.map