(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[88],{1257:function(n,e,t){var o=t(2474);if(typeof o==="string")o=[[n.i,o,""]];if(o.locals)n.exports=o.locals;var r=t(28).default;var a=r("99f3cbaa",o,false,{});if(false){}},2473:function(n,e,t){"use strict";var o=t(1257);var r=t.n(o);var a=r.a},2474:function(n,e,t){e=n.exports=t(27)(false);e.push([n.i,"@use \"sass:map\";\n.no-scroll[data-v-fc3cb128] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.nux-recs[data-v-fc3cb128] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 24px;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 300;\n}\n.nux-recs.mobile[data-v-fc3cb128] {\n  top: 0;\n  padding: 0;\n}\n.intro[data-v-fc3cb128] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 245px;\n  margin-left: -600px;\n  padding: 40px 24px;\n  background: #FFFFFF;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.intro[data-v-fc3cb128] {\n      margin-left: -480px;\n}\n}\n.intro[data-v-fc3cb128]:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 100%;\n    width: 50vw;\n    height: 100%;\n    background: #FFFFFF;\n}\n.intro .img[data-v-fc3cb128] {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 40px;\n}\n.intro h3[data-v-fc3cb128] {\n    margin-bottom: 12px;\n    font-size: 20px;\n    line-height: 1.3em;\n    color: #000000;\n}\n.intro p[data-v-fc3cb128] {\n    margin-bottom: 20px;\n    font-size: 18px;\n    line-height: 1.33em;\n    color: #000000;\n}\n.intro .btn[data-v-fc3cb128] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 56px;\n    padding: 0 12px;\n    border: 1px solid #D8D8D8;\n    border-radius: 8px;\n    background: transparent;\n    text-align: left;\n    font-size: 16px;\n    line-height: 1.25em;\n    color: #000000;\n    transition: border-color 100ms linear;\n    box-shadow: none;\n}\n.intro .btn + .btn[data-v-fc3cb128] {\n      margin-top: 12px;\n}\n.intro .btn[data-v-fc3cb128]:hover {\n      border-color: #000000;\n}\n.intro .explore[data-v-fc3cb128] {\n    display: flex;\n    justify-content: center;\n    margin: 16px 0 0;\n}\n.intro .btn-link[data-v-fc3cb128] {\n    font-size: 15px;\n    line-height: 1.33em;\n    text-align: center;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n    color: #000000;\n}\n.intro .btn-link[data-v-fc3cb128]:hover {\n      opacity: 0.7;\n}\n.nux-recs.mobile .intro[data-v-fc3cb128] {\n  left: 0;\n  bottom: auto;\n  width: 100%;\n  margin: 0;\n  padding: 32px;\n}\n.nux-recs.mobile .intro h3[data-v-fc3cb128] {\n    font-size: 18px;\n}\n.nux-recs.mobile .intro p[data-v-fc3cb128] {\n    font-size: 16px;\n}\n.nux-recs.mobile .intro .btn[data-v-fc3cb128] {\n    height: auto;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.keywords-modal[data-v-fc3cb128] {\n  width: 960px;\n  padding: 70px 98px 34px 98px;\n  background: #FFFFFF;\n}\n.keywords-modal h3[data-v-fc3cb128] {\n    margin-bottom: 44px;\n    font-size: 30px;\n    line-height: 1.17em;\n    text-align: center;\n    letter-spacing: 0.005em;\n    color: #000000;\n}\n.keywords-modal .keywords[data-v-fc3cb128] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 35px 30px;\n    margin-bottom: 34px;\n}\n.keywords-modal .keywords .btn[data-v-fc3cb128] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 90px;\n      padding: 0 8px;\n      border: 1px solid #DADADA;\n      border-radius: 4px;\n      font-size: 16px;\n      line-height: 1.5em;\n      letter-spacing: 0.005em;\n      color: rgba(0, 0, 0, 0.7);\n      background: transparent;\n      box-shadow: none;\n      transition: border-color 100ms linear, opacity 100ms linear;\n}\n.keywords-modal .keywords .btn[data-v-fc3cb128]:hover {\n        border-color: #000000;\n}\n.keywords-modal .keywords .btn[data-v-fc3cb128]:focus:after {\n        display: none;\n}\n.keywords-modal .keywords .btn[data-v-fc3cb128]:disabled {\n        opacity: 0.6;\n        cursor: default;\n}\n.keywords-modal .keywords .btn[data-v-fc3cb128]:disabled:hover {\n          border-color: #DADADA;\n}\n.keywords-modal .keywords .btn.active[data-v-fc3cb128] {\n        border-color: #FFA52E;\n}\n.keywords-modal .keywords .btn.active[data-v-fc3cb128]:hover {\n          border-color: #c77100;\n}\n.keywords-modal footer[data-v-fc3cb128] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n}\n.keywords-modal footer .btn-link[data-v-fc3cb128] {\n      font-size: 15px;\n      line-height: 2.33em;\n      letter-spacing: 0.005em;\n      -webkit-text-decoration-line: underline;\n              text-decoration-line: underline;\n      color: rgba(0, 0, 0, 0.45);\n}\n.keywords-modal footer .btn-link[data-v-fc3cb128]:hover {\n        color: rgba(0, 0, 0, 0.7);\n}\n.keywords-modal footer .btn[data-v-fc3cb128] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 217px;\n      height: 100%;\n      padding: 0;\n      border-radius: 6px;\n      background: #000000;\n      color: #FFFFFF;\n      font-size: 16px;\n      font-weight: 600;\n}\n.nux-recs.mobile[data-v-fc3cb128] {\n  justify-content: flex-start;\n}\n.nux-recs.mobile .keywords-modal[data-v-fc3cb128] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 624px;\n    padding: 24px 0;\n}\n@media (max-height: 624px) {\n.nux-recs.mobile .keywords-modal[data-v-fc3cb128] {\n        height: 540px;\n}\n}\n.nux-recs.mobile .keywords-modal h3[data-v-fc3cb128] {\n      margin-bottom: 16px;\n      padding: 0 24px;\n      font-size: 22px;\n      text-align: left;\n}\n.nux-recs.mobile .keywords-modal .keywords[data-v-fc3cb128] {\n      flex: 1;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: repeat(10, 1fr);\n      gap: 12px;\n      margin-bottom: 16px;\n      padding: 0 24px;\n      overflow: auto;\n}\n.nux-recs.mobile .keywords-modal .keywords.scrollable[data-v-fc3cb128] {\n        padding: 12px 24px;\n        border: 1px solid #d4d4d4;\n        border-width: 1px 0;\n}\n.nux-recs.mobile .keywords-modal .keywords.scrollable[data-v-fc3cb128]::-webkit-scrollbar {\n          width: 8px;\n}\n.nux-recs.mobile .keywords-modal .keywords.scrollable[data-v-fc3cb128]::-webkit-scrollbar-track {\n          background: #f0f0f0;\n          border-radius: 4px;\n}\n.nux-recs.mobile .keywords-modal .keywords.scrollable[data-v-fc3cb128]::-webkit-scrollbar-thumb {\n          background: #D8D8D8;\n          border-radius: 4px;\n}\n.nux-recs.mobile .keywords-modal .keywords.scrollable[data-v-fc3cb128]:after {\n          content: '';\n          display: block;\n          height: 1px;\n}\n.nux-recs.mobile .keywords-modal .keywords .btn[data-v-fc3cb128] {\n        height: 70px;\n}\n@media (max-height: 624px) {\n.nux-recs.mobile .keywords-modal[data-v-fc3cb128] {\n      height: 540px;\n      padding: 16px 0;\n}\n.nux-recs.mobile .keywords-modal h3[data-v-fc3cb128] {\n        font-size: 18px;\n}\n.nux-recs.mobile .keywords-modal footer[data-v-fc3cb128] {\n        height: 36px;\n}\n}\n",""])},2568:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this;var e=n.$createElement;var t=n._self._c||e;return t("transition",{attrs:{name:"fade-fast",appear:""}},[t("div",{class:{"nux-recs":true,mobile:n.isMobile(n.$mq)}},[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[n.view==="intro"?t("div",{key:"intro",staticClass:"intro"},[t("div",{staticClass:"img"},[t("span",{staticClass:"b-sprite-nux-clipboard-person"})]),n._v(" "),t("h3",[n._v("Welcome to Brilliant")]),n._v(" "),t("p",[n._v("Let's get you started. It'll only take a minute.")]),n._v(" "),t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_nux_onboarding_recommend_courses"},expression:"{ axId: 'clicked_nux_onboarding_recommend_courses' }",arg:"click"}],staticClass:"btn",on:{click:function(e){n.view="keywords"}}},[n._v("\n          Recommend some courses for me\n        ")]),n._v(" "),t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_nux_onboarding_search_topics"},expression:"{ axId: 'clicked_nux_onboarding_search_topics' }",arg:"click"}],staticClass:"btn",on:{click:n.handleSearch}},[n._v("\n          Search for a topic I'm interested in\n        ")]),n._v(" "),t("p",{staticClass:"explore"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_nux_onboarding_explore_myself"},expression:"{ axId: 'clicked_nux_onboarding_explore_myself' }",arg:"click"}],staticClass:"btn-link",on:{click:function(e){return n.$emit("close")}}},[n._v("\n            Explore on my own\n          ")])])]):n._e(),n._v(" "),n.view==="keywords"?t("div",{key:"keywords",staticClass:"keywords-modal"},[t("h3",[n._v(n._s(n.user.first_name)+", choose 3 topics you’re interested in")]),n._v(" "),t("div",{class:{keywords:true,scrollable:n.isMobile(n.$mq)&&n.recommendedCourseKeywords.length>10}},n._l(n.recommendedCourseKeywords,(function(e){return t("button",{key:e.keyword_id,class:{btn:true,active:n.isActive(e)},attrs:{disabled:n.disableInactiveKeywords&&!n.isActive(e)},on:{click:function(t){return n.toggleKeyword(e)}}},[n._v("\n            "+n._s(e.keyword)+"\n          ")])})),0),n._v(" "),t("footer",[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[!n.enableSubmitKeywords?t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_nux_onboarding_recommendation_dont_see_topic"},expression:"{ axId: 'clicked_nux_onboarding_recommendation_dont_see_topic' }",arg:"click"}],key:"gotosearch",staticClass:"btn-link",on:{click:n.handleSearch}},[n._v("\n              Don't see what you're looking for?\n            ")]):t("button",{key:"finish",staticClass:"btn",attrs:{disabled:n.isSendingKeywords},on:{click:n.handleSendKeywords}},[n.isSendingKeywords?t("LoadingAnimation",{attrs:{type:"dots",size:"small",color:"light"}}):t("span",[n._v("Finish")])],1)])],1)]):n._e()])],1)])};var r=[];o._withStripped=true;var a=t(1);var i=t(5);var d=t(9);var s=t(773);var c=t(259);var l=t(50);const b=3;let m=class n extends i["e"]{constructor(){super(...arguments);this.view="intro";this.activeKeywords={};this.isSendingKeywords=false}get activeKeywordIds(){return Object.entries(this.activeKeywords).filter(([n,e])=>e).map(([n,e])=>parseInt(n,10))}get numActiveKeywords(){return this.activeKeywordIds.length}get enableSubmitKeywords(){return this.numActiveKeywords>0}get disableInactiveKeywords(){return this.numActiveKeywords===b}toggleKeyword(n){const e=this.activeKeywords[n.keyword_id]?false:true;this.$set(this.activeKeywords,n.keyword_id,e);Object(l["e"])("ui",{element_id:"clicked_nux_onboarding_recommendation_topic",recommendation_topic:n.keyword,recommendation_topic_id:n.keyword_id,recommendation_topic_active:e})}isActive(n){return this.activeKeywords[n.keyword_id]===true}handleSearch(){this.$emit("close");this.$store.dispatch("recommendedCourseKeywords/highlightSearch",true)}handleSendKeywords(){return Object(a["a"])(this,void 0,void 0,(function*(){this.isSendingKeywords=true;const n=yield this.$store.dispatch("recommendedCourseKeywords/sendKeywords",this.activeKeywordIds);this.isSendingKeywords=false;if(n){this.$emit("close");this.$store.dispatch("recommendedCourseKeywords/highlightRecentCourses")}else{this.$store.dispatch("errorModal/showMessage")}}))}mounted(){Object(s["a"])(true);this.$store.dispatch("recommendedCourseKeywords/viewedKeywordsIntro")}destroyed(){Object(s["a"])(false)}};m=Object(a["b"])([Object(i["a"])({components:{LoadingAnimation:c["a"]},computed:Object.assign(Object.assign(Object.assign({},Object(d["mapState"])("globals",["user"])),Object(d["mapGetters"])("pageHeader",["isMobile"])),Object(d["mapGetters"])("recommendedCourseKeywords",["recommendedCourseKeywords"]))})],m);var p=m;var f=p;var x=t(2473);var u=t(10);var v=Object(u["a"])(f,o,r,false,null,"fc3cb128",null);if(false){var w}v.options.__file="frontend/views/courses/components/NuxRecommendedCourses.vue";var h=e["default"]=v.exports}}]);
//# sourceMappingURL=NuxRecommendedCourses.16b714cbb1300b8275be.js.map