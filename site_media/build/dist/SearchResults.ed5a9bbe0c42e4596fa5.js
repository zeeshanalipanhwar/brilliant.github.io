(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[130],{122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=l;t.renderExpressionIntoElement=o;var r=c(a(44));a(179);a(180);a(181);var n=c(a(182));var s=c(a(183));var i=c(a(185));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=s.default.inline;Object.assign(t,{delimiters:[{left:"\\(",right:"\\)",display:false},{left:"\\[",right:"\\]",display:true}],ignoredTags:["script","noscript","style","textarea","pre","code"],ignoredClasses:[],preProcess:n.default.replace,errorCallback:console.error});(0,i.default)(e,t)}function o(e,t){r.default.render(n.default.replace(e),t,s.default.inline)}},1268:function(e,t,a){var r=a(2509);if(typeof r==="string")r=[[e.i,r,""]];if(r.locals)e.exports=r.locals;var n=a(28).default;var s=n("5114d700",r,false,{});if(false){}},185:function(e,t,a){(function t(r,n){if(true)e.exports=n(a(44));else{}})(typeof self!=="undefined"?self:this,(function(e){return function(e){var t={};function a(r){if(t[r]){return t[r].exports}var n=t[r]={i:r,l:false,exports:{}};e[r].call(n.exports,n,n.exports,a);n.l=true;return n.exports}a.m=e;a.c=t;a.d=function(e,t,r){if(!a.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(e,t){if(t&1)e=a(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);a.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r};a.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};a.d(t,"a",t);return t};a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};a.p="";return a(a.s=1)}([function(t,a){t.exports=e},function(e,t,a){"use strict";a.r(t);var r=a(0);var n=a.n(r);var s=function e(t,a,r){var n=r;var s=0;var i=t.length;while(n<a.length){var c=a[n];if(s<=0&&a.slice(n,n+i)===t){return n}else if(c==="\\"){n++}else if(c==="{"){s++}else if(c==="}"){s--}n++}return-1};var i=function e(t,a,r,n){var i=[];for(var c=0;c<t.length;c++){if(t[c].type==="text"){var l=t[c].data;var o=true;var d=0;var p=void 0;p=l.indexOf(a);if(p!==-1){d=p;i.push({type:"text",data:l.slice(0,d)});o=false}while(true){if(o){p=l.indexOf(a,d);if(p===-1){break}i.push({type:"text",data:l.slice(d,p)});d=p}else{p=s(r,l,d+a.length);if(p===-1){break}i.push({type:"math",data:l.slice(d+a.length,p),rawData:l.slice(d,p+r.length),display:n});d=p+r.length}o=!o}i.push({type:"text",data:l.slice(d)})}else{i.push(t[c])}}return i};var c=i;var l=function e(t,a){var r=[{type:"text",data:t}];for(var n=0;n<a.length;n++){var s=a[n];r=c(r,s.left,s.right,s.display||false)}return r};var o=function e(t,a){var r=l(t,a.delimiters);var s=document.createDocumentFragment();for(var i=0;i<r.length;i++){if(r[i].type==="text"){s.appendChild(document.createTextNode(r[i].data))}else{var c=document.createElement("span");var o=r[i].data;a.displayMode=r[i].display;try{if(a.preProcess){o=a.preProcess(o)}n.a.render(o,c,a)}catch(e){if(!(e instanceof n.a.ParseError)){throw e}a.errorCallback("KaTeX auto-render: Failed to parse `"+r[i].data+"` with ",e);s.appendChild(document.createTextNode(r[i].rawData));continue}s.appendChild(c)}}return s};var d=function e(t,a){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===3){var s=o(n.textContent,a);r+=s.childNodes.length-1;t.replaceChild(s,n)}else if(n.nodeType===1){(function(){var t=" "+n.className+" ";var r=a.ignoredTags.indexOf(n.nodeName.toLowerCase())===-1&&a.ignoredClasses.every((function(e){return t.indexOf(" "+e+" ")===-1}));if(r){e(n,a)}})()}}};var p=function e(t,a){if(!t){throw new Error("No element provided to render")}var r={};for(var n in a){if(a.hasOwnProperty(n)){r[n]=a[n]}}r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:true},{left:"\\(",right:"\\)",display:false},{left:"\\[",right:"\\]",display:true}];r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code"];r.ignoredClasses=r.ignoredClasses||[];r.errorCallback=r.errorCallback||console.error;r.macros=r.macros||{};d(t,r)};var u=t["default"]=p}])["default"]}))},2508:function(e,t,a){"use strict";var r=a(1268);var n=a.n(r);var s=n.a},2509:function(e,t,a){t=e.exports=a(27)(false);t.push([e.i,"@use \"sass:map\";\n.no-scroll[data-v-3cfcf014] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.search-header[data-v-3cfcf014] {\n  padding: 16px 16px 8px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-header[data-v-3cfcf014] {\n      padding: 8px 8px 4px;\n}\n}\n.search-type .btn[data-v-3cfcf014] {\n  width: 20%;\n  padding-left: 0;\n  padding-right: 0;\n  background: #F7F7F8;\n  font-size: 16px;\n}\n.search-type .btn.active[data-v-3cfcf014] {\n    font-weight: normal;\n}\n.search-problem-filters[data-v-3cfcf014] {\n  padding: 16px 0 0;\n  display: flex;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-problem-filters[data-v-3cfcf014] {\n      padding: 8px 8px 0 8px;\n      flex-wrap: wrap;\n}\n}\n.search-problem-filters .btn[data-v-3cfcf014] {\n    font-size: 13px;\n    line-height: 1.7em;\n}\n.search-topics select[data-v-3cfcf014] {\n  width: 100%;\n  background: #FFFFFF;\n  border-color: #d4d4d4;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-topics[data-v-3cfcf014] {\n    width: 100%;\n}\n}\n.search-levels[data-v-3cfcf014] {\n  flex-grow: 2;\n  padding-left: 16px;\n  overflow: hidden;\n  box-shadow: none;\n  border-radius: 3px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-levels[data-v-3cfcf014] {\n      width: 100%;\n      padding-left: 0;\n}\n}\n.search-levels .btn[data-v-3cfcf014] {\n    width: 33.33%;\n    margin: 0;\n    border-left-width: 0;\n    background: #FFFFFF;\n}\n.search-levels .btn.active[data-v-3cfcf014] {\n      background: #ECEDEF;\n}\n.search-levels .btn[data-v-3cfcf014]:first-child {\n      border-left-width: 1px;\n      border-radius: 3px 0 0 3px;\n}\n.search-levels .btn[data-v-3cfcf014]:last-child {\n      border-radius: 0 3px 3px 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card {\n  padding: 16px 24px;\n  border-bottom: 1px solid #d4d4d4;\n  background: #FFFFFF;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .mini-course {\n    display: block;\n    position: relative;\n    width: 88px;\n    height: 118px;\n    padding: 4px;\n    border-radius: 4px;\n    transition: opacity 100ms linear;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .mini-course:hover {\n      opacity: 0.8;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .mini-course .text {\n      display: block;\n      position: relative;\n      font-size: 12px;\n      font-weight: 500;\n      line-height: 1.2em;\n      color: #FFFFFF;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .mini-course .img {\n      display: block;\n      position: absolute;\n      top: 50%;\n      right: 8px;\n      bottom: 8px;\n      left: 8px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header {\n    display: block;\n    position: relative;\n    min-height: 64px;\n    padding-left: 80px;\n    transition: opacity 100ms linear;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header:hover {\n      opacity: 0.8;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header.no-icon {\n      padding-left: 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header .icon {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 64px;\n      height: 64px;\n      border-radius: 4px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header .img {\n      position: absolute;\n      top: 8px;\n      right: 8px;\n      bottom: 8px;\n      left: 8px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header h3 {\n      margin: 0;\n      font-size: 22px;\n      font-weight: bold;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card .card-header p {\n      margin: 0;\n      line-height: 1.4em;\n      color: #899098;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card a.card-header h3 {\n    color: #005FFA;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special h4 {\n  font-size: 15px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .courses {\n  margin-top: 8px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .mini-course {\n  float: left;\n  margin: 0 8px 8px 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topics {\n  clear: left;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topics:last-child .topic-item:last-child {\n    border: 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topics ul {\n    margin-bottom: 8px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topic-item {\n  display: block;\n  border-bottom: 1px solid #ECEDEF;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topic-item a {\n    display: block;\n    position: relative;\n    padding: 20px 0 20px 60px;\n    font-size: 14px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topic-item a:hover .icon {\n      opacity: 0.8;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .topic-item .icon {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 44px;\n    height: 44px;\n    margin-top: -22px;\n    border-radius: 10px;\n    transition: opacity 100ms linear;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .wikis ul {\n  margin: 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .wikis h4 {\n  margin: 0;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .wikis li {\n  padding: 8px 0;\n  border-bottom: 1px solid #ECEDEF;\n  font-size: 14px;\n}\n#site-search-custom-result[data-v-3cfcf014] .search-card-special .wikis li:last-child {\n    padding-bottom: 0;\n    border: 0;\n}\n.search-results[data-v-3cfcf014] {\n  position: fixed;\n  top: 59px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 399;\n}\n.search-results.active[data-v-3cfcf014] {\n    display: block;\n}\n.search-results .container[data-v-3cfcf014] {\n    height: 100%;\n}\n.search-results[data-v-3cfcf014]:before {\n    content: '';\n    position: relative;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #FFFFFF;\n    opacity: 0.5;\n    z-index: 398;\n}\n.search-results-wrapper[data-v-3cfcf014] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  bottom: 84px;\n  margin-left: 12px;\n  border: 1px solid #ECEDEF;\n  border-radius: 0 0 10px 10px;\n  background: #F7F7F8;\n  overflow: auto;\n  box-shadow: 0 4px 16px rgba(31, 31, 31, 0.25);\n  width: 576px;\n  z-index: 399;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-results-wrapper[data-v-3cfcf014] {\n      width: 464px;\n}\n}\n.search-results-wrapper .search-list[data-v-3cfcf014] {\n    padding: 16px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-results-wrapper .search-list[data-v-3cfcf014] {\n        padding: 8px;\n}\n}\n.search-results-wrapper .search-item[data-v-3cfcf014] {\n    position: relative;\n    display: block;\n    margin-bottom: 16px;\n    padding: 16px 14px;\n    border: 1px solid #FFFFFF;\n    border-radius: 10px;\n    background: #FFFFFF;\n    color: #1F1F1F;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.search-results-wrapper .search-item[data-v-3cfcf014] {\n        margin-bottom: 8px;\n}\n}\n.search-results-wrapper .search-item[data-v-3cfcf014]:hover {\n      border-color: #039BE5;\n      color: #1F1F1F;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.search-results-wrapper .search-item h3[data-v-3cfcf014] {\n      margin-bottom: 8px;\n      font-size: 22px;\n      font-weight: bold;\n      line-height: 1.25em;\n      overflow: hidden;\n}\n.search-results-wrapper .search-item h3[data-v-3cfcf014]:last-child {\n        margin: 0;\n}\n.search-results-wrapper .search-item h4[data-v-3cfcf014] {\n      margin: -2px 0 5px 0;\n      font-size: 13px;\n      font-weight: normal;\n      color: #899098;\n}\n.search-results-wrapper .search-item h4[data-v-3cfcf014]:last-child {\n        margin-bottom: 0;\n}\n.search-results-wrapper .search-item p[data-v-3cfcf014],\n    .search-results-wrapper .search-item ul[data-v-3cfcf014],\n    .search-results-wrapper .search-item ol[data-v-3cfcf014] {\n      margin-bottom: 0;\n      color: #899098;\n      font-size: 15px;\n      line-height: 1.25em;\n}\n.search-results-wrapper .search-item blockquote[data-v-3cfcf014] {\n      margin: 8px 0;\n}\n.search-results-wrapper .search-item svg g[data-v-3cfcf014] {\n      fill: #899098;\n}\n.search-results-wrapper .search-item .internal-link[data-v-3cfcf014] {\n      text-decoration: underline;\n}\n.search-results-wrapper .search-item .internal-link[data-v-3cfcf014]:hover {\n        text-decoration: none;\n        color: #1F1F1F;\n}\n.search-results-wrapper .search-wiki[data-v-3cfcf014] {\n    padding-right: 16px;\n}\n.search-results-wrapper .search-wiki.low-quality[data-v-3cfcf014] {\n      opacity: 0.5;\n}\n.search-results-wrapper .search-wiki .image-caption[data-v-3cfcf014] {\n      display: none;\n}\n.search-results-wrapper .search-problem .stats[data-v-3cfcf014] {\n    margin-top: 6px;\n    font-size: 12px;\n    color: #B6BEC7;\n}\n.search-results-wrapper .search-problem .stats a[data-v-3cfcf014] {\n      margin-right: 6px;\n}\n.search-results-wrapper .search-problem .stats span[data-v-3cfcf014] {\n      margin-right: 6px;\n}\n.search-results-wrapper .search-quiz[data-v-3cfcf014] {\n    overflow: hidden;\n}\n.search-results-wrapper .search-quiz.premium h3[data-v-3cfcf014] {\n      padding-right: 36px;\n}\n.search-results-wrapper .search-quiz .b2[data-v-3cfcf014] {\n      position: absolute;\n      display: block;\n      top: 0;\n      right: 0;\n      padding: 4px;\n      background: #00BC8E;\n}\n.search-results-wrapper .search-quiz .b2 span[data-v-3cfcf014] {\n        display: inline-block;\n}\n.search-results-wrapper .search-quiz .topic[data-v-3cfcf014] {\n      margin-right: 10px;\n}\n",""])},2616:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"search-results",attrs:{id:"site-search-results"}},[a("div",{ref:"searchResultsWrapper",staticClass:"search-results-wrapper",on:{scroll:e.infiniteScroll}},[e.customSearchCardHTML!=null?a("div",{attrs:{id:"site-search-custom-result"},domProps:{innerHTML:e._s(e.customSearchCardHTML)}}):e.userData&&e.userData.length>0?a("div",{attrs:{id:"site-search-custom-result"}},[a("div",{staticClass:"search-card search-card-special ax-click",attrs:{"data-ax-id":"clicked_search_result_custom"}},[a("div",{staticClass:"card-header",class:e.userData[0].color==="#000000"?" no-icon":""},[e.userData[0].color!=="#000000"?a("div",{staticClass:"icon",style:{backgroundColor:e.userData[0].color}},[e.userData[0].image?a("span",{staticClass:"img",style:{backgroundImage:"url("+e.userData[0].image+")"}}):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"text"},[a("h3",[e._v(e._s(e.userData[0].title))]),e._v(" "),a("p",[e._v("...")])])])])]):e._e(),e._v(" "),a("div",{staticClass:"search-header-wrapper"},[a("div",{staticClass:"search-header row",attrs:{id:"site-search-header"}},[a("div",{staticClass:"search-type always section btn-tabs clearfix",attrs:{id:"search-type"}},[a("button",{staticClass:"btn",class:{active:e.documentType==="wikis"},domProps:{innerHTML:e._s(e.clientType.is_mobile?"Wikis":"Wiki pages")},on:{click:function(t){e.documentType="wikis"}}}),e._v(" "),a("button",{staticClass:"btn",class:{active:e.documentType==="problems"},on:{click:function(t){e.documentType="problems"}}},[e._v("\n              Problems\n          ")]),e._v(" "),a("button",{staticClass:"btn",class:{active:e.documentType==="quizzes"},on:{click:function(t){e.documentType="quizzes"}}},[e._v("\n              Quizzes\n          ")])]),e._v(" "),e.documentType!=="wikis"?a("div",{staticClass:"search-problem-filters"},[a("div",{staticClass:"dropdown search-topics"},[a("select",{directives:[{name:"track",rawName:"v-track:change",value:{axId:"filter_[[value]]_search_dropdown"},expression:"{ axId: `filter_[[value]]_search_dropdown` }",arg:"change"}],attrs:{id:"search-topics-list"},on:{change:e.changeTopic}},e._l(e.topicOptions,(function(t){return a("option",{key:t.slug,domProps:{value:t.slug,selected:t.name===e.topicName}},[e._v(e._s(t.name))])})),0)]),e._v(" "),e.documentType==="problems"?a("div",{staticClass:"search-levels btn-group",attrs:{id:"search-level-list"}},e._l(e.numericItems,(function(t){return a("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"filter_search_result_by_level_"+t.label.toLowerCase(),axType:"button"},expression:"{\n                axId: `filter_search_result_by_level_${ item.label.toLowerCase() }`,\n                axType: 'button'\n              }",arg:"click"}],key:t.label,staticClass:"btn",class:{active:t.label===e.level},on:{click:function(a){e.level=t.label}}},[e._v(e._s(t.label))])})),0):e._e()]):e._e()])]),e._v(" "),a("div",{staticClass:"search-list",attrs:{id:"site-search-result-list"}},[e._l(e.preprocessItems(e.hits),(function(t){return a("div",{key:t.objectID},[a("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_search_result"},expression:"{ axId: 'clicked_search_result' }",arg:"click"}],staticClass:"search-item",class:{"low-quality":t.is_low_quality,premium:t.paid_quiz,"search-wiki":t.document_type==="wikis","search-problem":t.document_type==="problems","search-quiz":t.document_type==="quizzes"},attrs:{href:e.searchUrl(t),"ax-id":"clicked_search_result"}},[t.paid_quiz?a("span",{staticClass:"b2"},[a("span",{staticClass:"b-sprite-search-brilliant-logo-white-small"})]):e._e(),e._v(" "),a("h3",{style:{border:t.level!=0?"1px":"0"},domProps:{innerHTML:e._s(e.preprocessTitle(t))}}),e._v(" "),e.documentType==="problems"&&(t.topic_name||t.level)?a("h4",[t.topic_name?a("strong",[e._v(e._s(t.topic_name))]):e._e(),e._v(" "),t.level?a("span",[e._v(" Level "+e._s(t.level))]):e._e()]):e.documentType==="quizzes"?a("h4",[t.topic_name?a("span",{staticClass:"topic"},[e._v(e._s(t.topic_name))]):e._e(),e._v(" "),t.quiz_type==="challenge_quiz"?a("span",[a("span",{staticClass:"b-sprite-search-challenge-quiz inline"}),e._v("\n              Challenge quiz\n            ")]):a("span",[a("span",{staticClass:"b-sprite-search-concept-quiz inline"}),e._v("\n              Concept quiz\n            ")])]):e._e(),e._v(" "),t.document_type!=="quizzes"&&!t.is_low_quality&&e.preprocessBlurb(t)?a("p",{domProps:{innerHTML:e._s(e.preprocessBlurb(t))}}):e._e(),e._v(" "),e.documentType==="problems"&&e.user.is_staff?a("p",{staticClass:"stats"},[t.concept_quiz_slug?a("span",{staticClass:"internal-link",attrs:{href:"/practice/"+t.concept_quiz_slug+"/"}},[e._v("\n              "+e._s(t.concept_quiz_title)+"\n            ")]):e._e(),e._v(" "),e.documentType==="problems"?a("span",[e._v(e._s(t.percent_solved||0)+"% of members solved this problem")]):e._e()]):e._e()])])})),e._v(" "),e.hits.length===0?a("div",{staticClass:"search-item search-empty"},[a("h2",[e._v('No matches for "'+e._s(e.query)+'"')])]):e._e()],2)])])};var n=[];r._withStripped=true;var s=a(1);var i=a(1389);var c=a.n(i);var l=a(2);var o=a(5);var d=a(9);var p=a(6);var u=a(45);var h=a(259);const f=e=>{return e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")};const m=100;const v=300;const g=200;const b=[];let x=class e extends l["default"]{constructor(){super(...arguments);this.documentType="wikis";this.topicName="";this.level="Easy";this.customSearchCardHTML=null;this.userData=[];this.hits=[];this.page=0;this.totalPages=0;this.searching=false}mounted(){if(this.query!==""){this.searchAlgolia()}}changeTopic(e){const t=e.target;if(t){this.topicName=this.topicOptions[t.selectedIndex].value}}searchAlgolia(){if(this.searching===false){this.$emit("start-searching");this.searching=true;const e={query:this.query,filters:this.searchFilter,page:this.page};if(this.index){this.index.search(e).then(e=>{if(this.page===0){this.hits=e.hits}else{const t=e.hits.filter(e=>{return this.hits.slice(this.hits.length-3).find(t=>t.objectID===e.objectID)===undefined});this.hits=this.hits.concat(t)}this.totalPages=e.nbPages;this.searching=false;this.$emit("done-searching");if("userData"in e){this.userData=e.userData;Object(p["b"])(`/api/v1/search/grab_custom_search_card/${this.userData[0].card_id}/`).then(e=>{b[this.userData[0].card_id]=e.rendered_html;this.customSearchCardHTML=e.rendered_html})}else{this.userData=[];this.customSearchCardHTML=null}}).catch(e=>{this.searching=false;this.$emit("done-searching");console.log(e);console.log(e.debugData)})}}}get topicOptions(){return[{name:"All topics",value:""}].concat(this.topics.map(e=>{return{name:e.name,value:e.name}}))}get numericItems(){return[{label:"Easy",facetValue:"rating:0 TO 1400"},{label:"Medium",facetValue:"rating:1400 TO 1800 OR rating<0"},{label:"Hard",facetValue:"rating>1800"}]}get index(){if(this.context.search_settings){const e=c()(this.context.search_settings.application_id,this.context.search_settings.readonly_api_key);return e.initIndex(this.context.search_settings.problems.index_name)}}get searchFilter(){let e=`document_type:${this.documentType}`;if(this.documentType==="wikis"){if(!this.user.is_staff&&!this.user.is_discussions_moderator){e=`${e} AND quality_score>=${g}`}}else{let t=this.topicName;if(t.indexOf(" ")>=0){t=`"${t}"`}const a=this.topicName!==""?` AND topic_name:${t}`:"";e=`${e}${a}`;if(this.documentType==="problems"){const t=this.numericItems.find(e=>e.label===this.level);if(t){e=`${e} AND (${t.facetValue})`}}}return e}get infiniteScroll(){return Object(h["e"])(()=>{if(this.page<this.totalPages){const e=this.$refs.searchResultsWrapper;if(e.scrollTop+e.offsetHeight+v>e.scrollHeight){this.page+=1}}},m)}onQueryChange(){if(this.page===0){this.searchAlgolia()}else{this.page=0}}onDocumentTypeChange(){if(this.page===0){this.searchAlgolia()}else{this.page=0}}onTopicNameChange(){if(this.page===0){this.searchAlgolia()}else{this.page=0}}onLevelChange(){if(this.page===0){this.searchAlgolia()}else{this.page=0}}onPageChange(){console.log("onPageChange");this.searchAlgolia()}searchUrl(e){if(this.documentType==="quizzes"&&!this.user.has_brilliant_premium&&e.paid_quiz){const e={name:"payment_brilliant_square_plans"};if(this.clientType.is_native){e.query={newwindow:"true"}}return this.$router.resolve(e).href}return`${e.url}${this.clientType.is_native?"?newwindow=true":""}`}preprocess_wikis(e){e.processed_title=this.preprocessTitle(e);e.processed_blurb=this.preprocessBlurb(e);e.is_low_quality=(e.quality_score||0)<g;return e}preprocess_problems(e){e.level=e.level>0&&e.level!=="None"?e.level:0;e.concept_quiz_slug=e.concept_quiz_slug||false;e.num_likes=e.num_likes||0;e.num_shares=e.num_shares||0;e.percent_solved=e.percent_solved||0;e.processed_title=this.preprocessTitle(e);e.processed_blurb=this.preprocessBlurb(e);e.topic_name=e.topic_name==="Unknown"?null:e.topic_name;return e}preprocess_quizzes(e){e.topic_name=e.topic_name||null;e.quiz_type=e.quiz_type||null;e.paid_quiz=e.paid_quiz&&e.paid_quiz===true;return e}updateMathjax(){this.$nextTick(()=>{u["loadForElement"]([this.$refs.searchResultsWrapper])})}preprocessItems(e){const t=e.map(e=>{switch(e.document_type){case"wikis":return this.preprocess_wikis(e);case"problems":return this.preprocess_problems(e);case"quizzes":return this.preprocess_quizzes(e);default:return e}});this.updateMathjax();return t}preprocessTitle(e){if(e.rendered_title){return e.rendered_title}if(e.title){return f(e.title)}return null}preprocessBlurb(e,t){const a=t!==false;let r;if(e.rendered_blurb){r=e.rendered_blurb}else if(e.blurb){if(a){r=f(e.blurb)}else{r=e.blurb}}else{return null}return r.replace(/<a\ /g,"<span ").replace(/<\/a>/g,"</span>")}};Object(s["b"])([Object(o["c"])(String)],x.prototype,"query",void 0);Object(s["b"])([Object(o["f"])("query")],x.prototype,"onQueryChange",null);Object(s["b"])([Object(o["f"])("documentType")],x.prototype,"onDocumentTypeChange",null);Object(s["b"])([Object(o["f"])("topicName")],x.prototype,"onTopicNameChange",null);Object(s["b"])([Object(o["f"])("level")],x.prototype,"onLevelChange",null);Object(s["b"])([Object(o["f"])("page")],x.prototype,"onPageChange",null);x=Object(s["b"])([Object(o["a"])({computed:Object.assign(Object.assign(Object.assign({},Object(d["mapGetters"])("pageHeader",["clientType"])),Object(d["mapState"])("pageHeader",["context","topics"])),Object(d["mapState"])("globals",["user"]))})],x);var _=x;var w=_;var y=a(2508);var F=a(10);var k=Object(F["a"])(w,r,n,false,null,"3cfcf014",null);if(false){var C}k.options.__file="frontend/components/header/SearchResults.vue";var B=t["default"]=k.exports},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.textContainsUnrenderedMath=h;t.useKatex=v;t.formPreloader=w;t.loadForElement=y;t.onLoad=F;t.loadForElementAsync=k;t.redrawExpression=C;t.controller=B;var r=n(a(122));function n(e){return e&&e.__esModule?e:{default:e}}var s={BrilliantLightBlue:"#95D3FE",BrilliantBlue:"#3D99F6",BrilliantDarkBlue:"#0C6AC7",BrilliantSeaGreen:"#1E93A5",BrilliantAqua:"#27D2E7",BrilliantLightGreen:"#67D94C",BrilliantGreen:"#20A900",BrilliantDarkGreen:"#456461",BrilliantYellow:"#CEBB00",BrilliantLightYellow:"#FEDF53",BrilliantYellowOrange:"#FCA04A",BrilliantOrange:"#EC7300",BrilliantRedOrange:"#FF664D",BrilliantRed:"#D61F06",BrilliantPink:"#E81990",BrilliantRosePink:"#F970BF",BrilliantViolet:"#BA33D6",BrilliantAmethyst:"#625CDB",BrilliantIndigo:"#302B94",BrilliantPurple:"#69047E",BrilliantPaleYellow:"#FFF7E6",BrilliantBeige:"#FBE6B8",BrilliantSandyBrown:"#FEDABE",BrilliantPeachy:"#FCC9A1",BrilliantTan:"#DBA97F",BrilliantLightBrown:"#B4825D",BrilliantMediumLightBrown:"#AA7956",BrilliantBronze:"#815331",BrilliantBrown:"#624F41",BrilliantWhite:"#FFFFFF",BrilliantLightGray:"#FBFBFB",BrilliantMediumLightGray:"#F0F0F0",BrilliantMediumGray:"#D8D8D8",BrilliantGray:"#BBBBBB",BrilliantMediumDarkGray:"#919191",BrilliantDarkGray:"#777777",BrilliantBlack:"#333333",BrilliantDarkBlack:"#161616"};var i=false;var c=false;var l=[];var o=[];var d=/\\\(.*?\\\)/;var p=/\\\[.*?\\\]/;var u=[/<script[\s\S]*?<\/script>/gm,/title=".*?"/g,/data-answers-list=".*?"/g,/data-registered-choice=".*?"/g,/<textarea[\s\S]*?<\/textarea>/gm,/<span>\\(\(|\)|\[|\])<\/span>/g];function h(e){var t=e;for(var a=0;a<u.length;a+=1){t=t.replace(u[a],"")}return d.test(t)||p.test(t)}function f(e){return h(e.innerHTML)}function m(){return window.location.pathname==="/latex-image-export/"}function v(){return document.body.classList.contains("use_katex")&&!m()}function g(e){if(v()){(0,r.default)(e);return}try{window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e])}catch(e){}}function b(){l.forEach(g);l=[]}function x(){if(c||i){return}if(v()){c=true;return}i=true;var e=document.createElement("script");var t=m()?"TeX-AMS_SVG":"TeX-AMS_HTML";e.type="text/javascript";e.src="".concat(document.body.dataset.mediaHost,"/site_media/version-99mq9F5EZ8d8/js/mathjax/MathJax.js?config=").concat(t);e.addEventListener("load",(function(){if(!c){i=false;c=true;window.MathJax.Hub.Config({messageStyle:"none",jax:["input/TeX","output/HTML-CSS"],tex2jax:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]],processEnvironments:false,ignoreClass:"mentions-input-box"},TeX:{extensions:["color.js","mhchem.js","siunitx.js"],Macros:{bra:["{\\mathinner{\\langle{#1}|}}",1],ket:["{\\mathinner{|{#1}\\rangle}}",1],braket:["{\\mathinner{\\langle{#1}\\rangle}}",1],Bra:["{\\left\\langle#1\\right|}",1],Ket:["{\\left|#1\\right\\rangle}",1],ketbra:["{\\ket{#1}\\bra{#2}}",2]},Augment:{Definitions:{macros:{overparen:["UnderOver","23DC"],underparen:["UnderOver","23DD"]}}}},"HTML-CSS":{imageFont:null},showMathMenu:false,positionToHash:false});window.MathJax.Hub.processSectionDelay=0;window.MathJax.Hub.Register.StartupHook("TeX color Ready",(function(){Object.assign(window.MathJax.Extension["TeX/color"].colors,s)}));o.forEach((function(e){return e()}));b()}}));setTimeout((function(){var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}),0)}function _(e){if(v()){setTimeout((function(){return(0,r.default)(e)}))}else if(c){g(e)}else{l.push(e);if(!i){x()}}}function w(e){var t=e.find("input[type=text], textarea");var a="keydown.mjxpreload";t.on(a,(function(){t.off(a);x()}))}function y(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(typeof e.each==="function"){e.each((function(e,a){if(t||f(a)){_(a)}}))}else{var a=Array.isArray(e)?e:[e];a.forEach((function(e){if(t||f(e)){_(e)}}))}}function F(e){if(c){e()}else{o.push(e)}}function k(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return new Promise((function(a){if(v()){y(e,t);a()}else{F((function(){setTimeout((function(){y(e,t);window.MathJax.Hub.Queue((function(){return a()}))}))}))}}))}function C(e,t,a,r){if(v()){return a(e,t)}return new Promise((function(n){try{var s=window.MathJax.Hub.getAllJax(e)[0];if(!s){e.classList.add(r);a(e,t).then(n)}else{window.MathJax.Hub.Queue(["Text",s,t]);window.MathJax.Hub.Queue((function(){n()}))}}catch(e){n()}}))}function B(){var e=function e(){return _(document.body)};if(window.isLoaded){e()}else{window.addEventListener("load",e)}}}}]);
//# sourceMappingURL=SearchResults.ed5a9bbe0c42e4596fa5.js.map