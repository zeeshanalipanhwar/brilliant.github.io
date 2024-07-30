(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{1091:function(t,n,a){"use strict";var e=a(901);var s=a.n(e);var i=s.a},1092:function(t,n,a){n=t.exports=a(14)(false);n.push([t.i,'@use "sass:map";\n.no-scroll[data-v-1d8651cc] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.section-header[data-v-1d8651cc] {\n  border-bottom: 1px solid #899098;\n  padding-bottom: 5px;\n  margin-bottom: 16px;\n}\n.section-header h1[data-v-1d8651cc] {\n    font-size: 22px;\n    line-height: 1.4em;\n    font-weight: 500;\n    margin-bottom: 16px;\n}\n.acct-settings[data-v-1d8651cc] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n.acct-settings .col-9[data-v-1d8651cc] {\n    width: 876px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.acct-settings .col-9[data-v-1d8651cc] {\n        width: 704px;\n}\n}\n.acct-settings .sidebar[data-v-1d8651cc] {\n    padding: 8px 0;\n    margin-top: 50px;\n    border: 1px solid #B6BEC7;\n    border-width: 1px 0;\n    width: 276px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.acct-settings .sidebar[data-v-1d8651cc] {\n        width: 224px;\n}\n}\n.acct-settings .sidebar ul[data-v-1d8651cc] {\n      margin: 0;\n}\n.acct-settings .sidebar ul a[data-v-1d8651cc] {\n        display: block;\n        color: #5D7E8E;\n        font-size: 13px;\n        line-height: 32px;\n}\n.acct-settings .sidebar ul a[data-v-1d8651cc]:focus, .acct-settings .sidebar ul a[data-v-1d8651cc]:hover {\n          color: #0277BD;\n}\n.acct-settings .sidebar ul a.active[data-v-1d8651cc] {\n          color: #1F1F1F;\n          font-weight: bold;\n}\n.acct-settings #already-logged-in[data-v-1d8651cc] {\n    padding: 0 0 15px 0;\n    margin: 0 0 15px 0;\n    border-bottom: 1px solid #B6BEC7;\n}\n.acct-settings #already-logged-in p[data-v-1d8651cc] {\n      margin: 0;\n}\n.acct-settings .back-buttons[data-v-1d8651cc] {\n    margin-bottom: 24px;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 1.2em;\n    color: #0277BD;\n    text-align: right;\n    position: relative;\n}\n.acct-settings .back-buttons .chevron[data-v-1d8651cc] {\n      position: absolute;\n      left: 0;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n',""])},1094:function(t,n,a){var e=a(2152);if(typeof e==="string")e=[[t.i,e,""]];if(e.locals)t.exports=e.locals;var s=a(15).default;var i=s("448dd819",e,false,{});if(false){}},1309:function(t,n,a){"use strict";var e=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("div",{staticClass:"container clearfix",attrs:{id:"wrapper"}},[a("div",{staticClass:"acct-settings"},[a("div",{staticClass:"col-9"},[t.isMobile(t.$mq)?a("div",{staticClass:"back-buttons"},[a("router-link",{attrs:{to:{name:"accountsettings_nav"}}},[a("span",{staticClass:"b-sprite-account-chevron-right-dark-blue-bold inline chevron"}),t._v(" "),a("span",{staticClass:"done"},[t._v("Done")])])],1):t._e(),t._v(" "),a("div",{staticClass:"section-header"},[a("h1",[t._v(t._s(t.title))])]),t._v(" "),t._t("default")],2),t._v(" "),!t.isMobile(t.$mq)?a("div",{staticClass:"sidebar col-3"},[a("ul",{staticClass:"unstyled"},t._l(t.links,(function(n){return a("li",{key:n.name},[n.name!=="user_content_download"||t.featureSwitches.enable_user_content_download_page?a("router-link",{class:{active:t.$route.name===n.name},attrs:{to:{name:n.name}}},[t._v("\n            "+t._s(n.title)+"\n          ")]):t._e()],1)})),0)]):t._e()])])};var s=[];e._withStripped=true;var i=a(0);var o=a(3);var c=a(1);var r=a(9);let l=class t extends o["default"]{constructor(){super(...arguments);this.links=[{name:"avatar_change",title:"Avatar"},{name:"account_personalinfo",title:"Personal info"},{name:"socialaccount_connections",title:"Account"},{name:"account_change_password",title:"Password"},{name:"account_email",title:"Email address"},{name:"account_emailpreferences",title:"Email & notifications"},{name:"account_selecttimezone",title:"Timezone"},{name:"user_content_download",title:"Download your content"},{name:"payment_subscription_settings",title:"Subscription"},{name:"personal_data_export_page",title:"Export your data"}]}};Object(i["b"])([Object(c["c"])({default:"Account Settings"})],l.prototype,"title",void 0);l=Object(i["b"])([Object(c["a"])({computed:Object.assign(Object.assign({},Object(r["mapGetters"])("pageHeader",["isMobile"])),Object(r["mapGetters"])("globals",["featureSwitches"]))})],l);var d=l;var v=d;var u=a(1091);var p=a(5);var f=Object(p["a"])(v,e,s,false,null,"1d8651cc",null);if(false){var b}f.options.__file="frontend/views/account/AccountBase.vue";var m=n["a"]=f.exports},2151:function(t,n,a){"use strict";var e=a(1094);var s=a.n(e);var i=s.a},2152:function(t,n,a){n=t.exports=a(14)(false);n.push([t.i,'@use "sass:map";\n.no-scroll[data-v-2dfae3f8] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n',""])},2583:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("AccountBase",{attrs:{title:"Download your content"}},[t.state==="ready"?a("div",[a("p",[t._v("\n      Your content has been bundled into a zip file.\n      Press the button below to download it.\n    ")]),t._v(" "),a("a",{staticClass:"btn",attrs:{href:t.url}},[t._v("Download my content")])]):t.state==="failed"?a("div",[a("p",[t._v("\n      The preparation work failed.\n      Please "),a("a",{attrs:{href:"mailto:support@brilliant.org"}},[t._v("Contact support")]),t._v(".\n    ")])]):t.started?a("div",[a("p",[t._v("\n      Bundling your content into a zip file.\n    ")]),t._v(" "),a("p",{staticClass:"spinner"})]):a("div",[a("p",[t._v("\n      Download a zip file of all content you've created on Brilliant.\n      This file may take some time to bundle.\n    ")]),t._v(" "),a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(n){n.preventDefault();return t.start(n)}}},[t._v("Bundle content")])])])};var s=[];e._withStripped=true;var i=a(0);var o=a(3);var c=a(1);var r=a(9);var l=a(1309);let d=class t extends o["default"]{constructor(){super(...arguments);this.started=false}start(){this.started=true;this.$store.dispatch("downloadUserContentBundle/startUserContentBundle")}};d=Object(i["b"])([Object(c["a"])({components:{AccountBase:l["a"]},computed:Object.assign({},Object(r["mapState"])("downloadUserContentBundle",["state","url"])),metaInfo(){return{title:"Download your content | Account Settings"}}})],d);var v=d;var u=v;var p=a(2151);var f=a(5);var b=Object(f["a"])(u,e,s,false,null,"2dfae3f8",null);if(false){var m}b.options.__file="frontend/views/account/UserContentDownload.vue";var g=n["default"]=b.exports},901:function(t,n,a){var e=a(1092);if(typeof e==="string")e=[[t.i,e,""]];if(e.locals)t.exports=e.locals;var s=a(15).default;var i=s("b03b730e",e,false,{});if(false){}}}]);
//# sourceMappingURL=UserContentDownload.b410767fc2bbebbebddf.js.map