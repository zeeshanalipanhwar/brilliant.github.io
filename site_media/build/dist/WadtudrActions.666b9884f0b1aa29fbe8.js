(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[109],{1191:function(e,n,t){var s=t(2320);if(typeof s==="string")s=[[e.i,s,""]];if(s.locals)e.exports=s.locals;var i=t(15).default;var a=i("beecc730",s,false,{});if(false){}},1192:function(e,n,t){var s=t(2322);if(typeof s==="string")s=[[e.i,s,""]];if(s.locals)e.exports=s.locals;var i=t(15).default;var a=i("1220f738",s,false,{});if(false){}},1193:function(e,n,t){var s=t(2324);if(typeof s==="string")s=[[e.i,s,""]];if(s.locals)e.exports=s.locals;var i=t(15).default;var a=i("e8f454d4",s,false,{});if(false){}},2319:function(e,n,t){"use strict";var s=t(1191);var i=t.n(s);var a=i.a},2320:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-f120488e] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.subscription-container[data-v-f120488e] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: #ECEDEF;\n  margin: 24px;\n}\n.subscription-info[data-v-f120488e], .refund-form[data-v-f120488e] {\n  padding: 8px;\n}\n.refund-form[data-v-f120488e] {\n  padding-top: 24px;\n}\n.no-refund[data-v-f120488e],\n.existing-refund-reason[data-v-f120488e],\n.dispute[data-v-f120488e] {\n  font-style: italic;\n}\n.failure-reason[data-v-f120488e] {\n  color: tomato;\n}\n',""])},2321:function(e,n,t){"use strict";var s=t(1192);var i=t.n(s);var a=i.a},2322:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-161c57eb] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.subscription-container[data-v-161c57eb] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: #ECEDEF;\n  margin: 24px;\n}\n.subscription-info[data-v-161c57eb], .refund-form[data-v-161c57eb] {\n  padding: 8px;\n}\n.refund-form[data-v-161c57eb] {\n  padding-top: 24px;\n}\n.no-revoke[data-v-161c57eb], .existing-refund-reason[data-v-161c57eb] {\n  font-style: italic;\n}\n',""])},2323:function(e,n,t){"use strict";var s=t(1193);var i=t.n(s);var a=i.a},2324:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-74e8a218] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.wadtudr-action[data-v-74e8a218] {\n  padding: 8px;\n}\n.no-subscriptions[data-v-74e8a218],\n.inactive[data-v-74e8a218] {\n  padding: 16px;\n  font-size: 22px;\n}\n',""])},2542:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("AdminBase",[t("div",{staticClass:"wadtudr-action"},[t("h3",[e._v("\n      Subscriptions & Trials\n    ")]),e._v(" "),t("div",[e._v("\n      "+e._s(e.user.first_name)+" "+e._s(e.user.last_name)+" (ID: "+e._s(e.user.user_id)+")\n    ")]),e._v(" "),e.user.is_active?t("div",[this.subscriptions.length?t("div",e._l(this.subscriptions,(function(e){return t("div",{key:e.id},[e.is_free_trial?t("RevokeButtons",{attrs:{subscription:e}}):t("RefundButtons",{attrs:{subscription:e}})],1)})),0):t("div",{staticClass:"no-subscriptions"},[e._v("\n        No subscriptions or trials were found.\n      ")])]):t("div",{staticClass:"inactive"},[e._v("\n      Subscription and trial details are not available because this user is inactive.\n    ")])])])};var i=[];s._withStripped=true;var a=t(0);var r=t(3);var o=t(1);var u=t(9);var v=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{staticClass:"admin"},[e._t("default")],2)};var l=[];v._withStripped=true;let d=class e extends r["default"]{};Object(a["b"])([Object(o["c"])({default:"Admin"})],d.prototype,"title",void 0);d=Object(a["b"])([o["a"]],d);var c=d;var f=c;var p=t(5);var _=Object(p["a"])(f,v,l,false,null,null,null);if(false){var b}_.options.__file="frontend/views/admin/AdminBase.vue";var m=_.exports;var h=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{staticClass:"subscription-container"},[t("div",{staticClass:"subscription-info"},[t("h4",[e._v("\n      Subscription ID "+e._s(e.subscription.id)+"\n      "),e.subscription.gateway_profile_url?t("a",{attrs:{href:e.subscription.gateway_profile_url}},[e._v("\n      [Gateway Profile Link]\n      ")]):e._e()]),e._v(" "),t("div",[t("span",[e._v(" "+e._s(e.subscription.start_time)+" - ")]),e._v(" "),e.subscription.end_time?t("span",[e._v("\n        "+e._s(e.subscription.end_time)+"\n      ")]):t("span",[e._v("\n        Present\n      ")])]),e._v(" "),t("div",[e._v("\n      "+e._s(e.subscription.plan_details)+"\n    ")])]),e._v(" "),t("div",{staticClass:"refund-form"},[!e.subscription.is_refundable?t("div",{staticClass:"no-refund"},[e._v("\n      Plan does not support refunds.\n    ")]):e.subscription.refund_or_revoke_reason?t("div",{staticClass:"existing-refund-reason"},[e._v("\n      Refunded for reason: "+e._s(e.subscription.refund_or_revoke_reason)+"\n    ")]):e.subscription.total_refunded_to_date>0?t("div",[e._v("\n      Refunded\n    ")]):e.failed?t("div",{staticClass:"failure-reason"},[e._v("\n      Refund failed: "+e._s(e.failureReason)+"\n    ")]):e.submitted?t("div",{staticClass:"existing-refund-reason"},[e._v("\n      Refund initiated for reason: "+e._s(e.refundReason)+"\n    ")]):e.subscription.has_ongoing_dispute?t("div",{staticClass:"dispute"},[e._v("\n      Cannot be refunded due to an ongoing dispute\n    ")]):t("div",[e.subscription.is_refundable?t("div",[!e.showRefundForm?t("button",{staticClass:"btn",on:{click:e.toggleShowRefundForm}},[e._v("\n          Grant Refund\n        ")]):t("form",{on:{submit:function(n){n.preventDefault();return e.grantRefund(n)}}},[e._v("\n          Reason: "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.refundReason,expression:"refundReason"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.refundReason=n.target.multiple?t:t[0]}}},[t("option",[e._v("\n              Fraud\n            ")]),e._v(" "),t("option",[e._v("\n              Missed Trial Cancellation\n            ")]),e._v(" "),t("option",[e._v("\n              Unexpected Renewal\n            ")]),e._v(" "),t("option",[e._v("\n              Buyer's Remorse\n            ")]),e._v(" "),t("option",[e._v("\n              Other\n            ")])]),e._v(" "),e.refundReason==="Other"?t("input",{directives:[{name:"model",rawName:"v-model",value:e.refundDetails,expression:"refundDetails"}],attrs:{type:"text",name:"reason_details",maxlength:"255"},domProps:{value:e.refundDetails},on:{input:function(n){if(n.target.composing){return}e.refundDetails=n.target.value}}}):e._e(),e._v(" "),t("div",[e.refundReason?t("button",{staticClass:"btn"},[e._v("\n              Grant Refund\n            ")]):e._e()])])]):e._e()])])])};var g=[];h._withStripped=true;var R=t(8);var k=t(25);let x=class e extends r["default"]{constructor(){super(...arguments);this.showRefundForm=false;this.reasonSelected=false;this.displayInput=false;this.refundReason=null;this.refundDetails=null;this.submitted=false;this.failed=false;this.failureReason=null}toggleShowRefundForm(){this.showRefundForm=true}grantRefund(){const e=this.$route.params.userID;let n=this.refundReason;if(n==="Other"&&this.refundDetails!=null){n=this.refundDetails}const t=Object(k["c"])({reason:n,user_id:e,subscription_id:this.subscription.id});const s="/payment_processor/wadtudr-actions/refund-or-revoke/";Object(R["c"])(s,t).then(e=>{if(!e.results.refund_result.success){this.failureReason=e.results.refund_result.reason;this.failed=true}});this.submitted=true}};Object(a["b"])([Object(o["c"])(Object)],x.prototype,"subscription",void 0);x=Object(a["b"])([o["a"]],x);var w=x;var O=w;var y=t(2319);var C=Object(p["a"])(O,h,g,false,null,"f120488e",null);if(false){var D}C.options.__file="frontend/views/admin/RefundButtons.vue";var j=C.exports;var S=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{staticClass:"subscription-container"},[t("div",{staticClass:"subscription-info"},[t("h4",[e._v("\n      Subscription ID "+e._s(e.subscription.id)+"\n    ")]),e._v(" "),t("div",[t("span",[e._v(" "+e._s(e.subscription.start_time)+" - ")]),e._v(" "),e.subscription.end_time?t("span",[e._v("\n        "+e._s(e.subscription.end_time)+"\n      ")]):t("span",[e._v("\n        "+e._s(e.subscription.trial_end_time)+" (Active)\n      ")])]),e._v(" "),t("div",[e._v("\n      Free Trial\n    ")])]),e._v(" "),t("div",{staticClass:"refund-form"},[!e.subscription.is_refundable?t("div",{staticClass:"no-revoke"},[e._v("\n      Cannot revoke trial for this user. User may need to cancel directly with gateway.\n    ")]):e.subscription.refund_or_revoke_reason?t("div",{staticClass:"existing-revoke-reason"},[e._v("\n      Revoked for reason: "+e._s(e.subscription.refund_or_revoke_reason)+"\n    ")]):e.submitted?t("div",{staticClass:"existing-revoke-reason"},[e._v("\n      Revoked for reason: "+e._s(e.revokeReason)+"\n    ")]):e.subscription.end_time?t("div",{staticClass:"no-revoke"},[e._v("\n      Trial ended\n    ")]):t("div",[!e.revokingTrial?t("button",{staticClass:"btn",on:{click:e.showRefundForm}},[e._v("\n        Revoke Trial\n      ")]):t("form",{on:{submit:function(n){n.preventDefault();return e.revokeTrial(n)}}},[e._v("\n        Reason: "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.revokeReason,expression:"revokeReason"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.revokeReason=n.target.multiple?t:t[0]}}},[t("option",[e._v("\n            Fraud\n          ")]),e._v(" "),t("option",[e._v("\n            User Request\n          ")]),e._v(" "),t("option",[e._v("\n            Other\n          ")])]),e._v(" "),e.revokeReason==="Other"?t("input",{directives:[{name:"model",rawName:"v-model",value:e.revokeDetails,expression:"revokeDetails"}],attrs:{type:"text",name:"reason_details",maxlength:"255"},domProps:{value:e.revokeDetails},on:{input:function(n){if(n.target.composing){return}e.revokeDetails=n.target.value}}}):e._e(),e._v(" "),t("div",[e.revokeReason?t("button",{staticClass:"btn"},[e._v("\n            Revoke Trial\n          ")]):e._e()])])])])])};var A=[];S._withStripped=true;let T=class e extends r["default"]{constructor(){super(...arguments);this.revokingTrial=false;this.reasonSelected=false;this.displayInput=false;this.revokeReason=null;this.revokeDetails=null;this.submitted=false}showRefundForm(){this.revokingTrial=true}revokeTrial(){const e=this.$route.params.userID;let n=this.revokeReason;if(n==="Other"&&this.revokeDetails!=null){n=this.revokeDetails}const t=Object(k["c"])({reason:n,user_id:e,subscription_id:this.subscription.id});const s="/payment_processor/wadtudr-actions/refund-or-revoke/";Object(R["c"])(s,t);this.submitted=true}};Object(a["b"])([Object(o["c"])(Object)],T.prototype,"subscription",void 0);T=Object(a["b"])([o["a"]],T);var F=T;var B=F;var E=t(2321);var I=Object(p["a"])(B,S,A,false,null,"161c57eb",null);if(false){var $}I.options.__file="frontend/views/admin/RevokeButtons.vue";var N=I.exports;let P=class e extends r["default"]{};Object(a["b"])([Object(o["c"])({type:String,default:"WADTUDR Actions"})],P.prototype,"title",void 0);P=Object(a["b"])([Object(o["a"])({metaInfo(){return{title:"WADTUDR Actions"}},components:{AdminBase:m,RefundButtons:j,RevokeButtons:N},computed:Object.assign({},Object(u["mapState"])("wadtudrActions",["subscriptions","user"]))})],P);var U=P;var z=U;var G=t(2323);var W=Object(p["a"])(z,s,i,false,null,"74e8a218",null);if(false){var J}W.options.__file="frontend/views/admin/WadtudrActions.vue";var q=n["default"]=W.exports}}]);
//# sourceMappingURL=WadtudrActions.666b9884f0b1aa29fbe8.js.map