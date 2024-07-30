(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{1212:function(n,e,t){"use strict";var a=t(911);var s=t.n(a);var o=s.a},1213:function(n,e,t){e=n.exports=t(14)(false);e.push([n.i,'@use "sass:map";\n.no-scroll[data-v-3e356f2e] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.student-header[data-v-3e356f2e] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.student-header .student-name h2[data-v-3e356f2e] {\n    margin: 0px;\n}\n.content-links[data-v-3e356f2e] {\n  display: flex;\n  flex-direction: row;\n  margin: 8px;\n}\n.content-links .content-link[data-v-3e356f2e] {\n    display: flex;\n    color: lightgrey;\n    margin-right: 48px;\n}\n.content-links .content-link[data-v-3e356f2e]:hover {\n      font-weight: bold;\n}\n.content-links .selected[data-v-3e356f2e] {\n    color: black;\n    font-weight: 600;\n}\nhr[data-v-3e356f2e] {\n  color: lightgrey;\n  opacity: 0.5;\n  margin: 8px;\n}\n',""])},1229:function(n,e,t){var a=t(2382);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var s=t(15).default;var o=s("7d5645e8",a,false,{});if(false){}},1294:function(n,e,t){"use strict";var a=function(){var n=this;var e=n.$createElement;var t=n._self._c||e;return t("div",[t("span",{staticClass:"student-header"},[t("ClassroomDot",{key:n.classroomId,attrs:{color:n.color}}),n._v(" "),t("div",{staticClass:"student-name"},[t("h2",[n._v(n._s(n.studentName))])])],1),n._v(" "),t("span",{staticClass:"content-links"},[t("router-link",{key:"classroom_by_student_"+n.classroomId+"_"+n.studentId,class:{selected:n.showingCourses,"content-link":true},attrs:{to:{name:"classroom_by_student",params:{classroomId:n.classroomId,studentId:n.studentId}}}},[n._v("\n      Courses\n    ")]),n._v(" "),t("router-link",{key:"classroom_dc_by_student_"+n.classroomId+"_"+n.studentId,class:{selected:!n.showingCourses,"content-link":true},attrs:{to:{name:"classroom_dc_by_student",params:{classroomId:n.classroomId,studentId:n.studentId}}}},[n._v("\n      Daily Challenges\n    ")])],1),n._v(" "),t("hr")])};var s=[];a._withStripped=true;var o=t(0);var r=t(3);var i=t(1);var l=t(9);var d=t(919);let c=class n extends r["default"]{};Object(o["b"])([Object(i["c"])(Number)],c.prototype,"studentId",void 0);Object(o["b"])([Object(i["c"])(String)],c.prototype,"studentName",void 0);Object(o["b"])([Object(i["c"])(String)],c.prototype,"color",void 0);Object(o["b"])([Object(i["c"])(Number)],c.prototype,"classroomId",void 0);Object(o["b"])([Object(i["c"])(Boolean)],c.prototype,"showingCourses",void 0);c=Object(o["b"])([Object(i["a"])({components:{ClassroomDot:d["a"]},computed:Object.assign({},Object(l["mapState"])("globals",["user"]))})],c);var v=c;var p=v;var m=t(1212);var u=t(5);var f=Object(u["a"])(p,a,s,false,null,"3e356f2e",null);if(false){var b}f.options.__file="frontend/views/classrooms/components/StudentHeader.vue";var g=e["a"]=f.exports},2381:function(n,e,t){"use strict";var a=t(1229);var s=t.n(a);var o=s.a},2382:function(n,e,t){e=n.exports=t(14)(false);e.push([n.i,'@use "sass:map";\n.no-scroll[data-v-0113ec7a] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.no-progress[data-v-0113ec7a] {\n  padding: 16px 0 48px 8px;\n  font-style: italic;\n}\n.back-to-students-link[data-v-0113ec7a] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: grey;\n  font-size: 16px;\n}\n.back-to-students-link .b-sprite-paywall-chevron[data-v-0113ec7a] {\n    margin-right: 8px;\n}\nmain[data-v-0113ec7a] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain > div[data-v-0113ec7a] {\n    margin-bottom: 64px;\n}\nmain > div[data-v-0113ec7a]:last-child {\n      margin-bottom: 0;\n}\nmain[data-v-0113ec7a] .btn {\n    font-family: "Soleil", Arial, sans-serif;\n}\nmain.mobile.nux[data-v-0113ec7a] {\n  margin-top: -45px;\n}\nmain.mobile .cover[data-v-0113ec7a] {\n  padding: 32px 0;\n}\nmain.mobile .nux-header[data-v-0113ec7a] {\n  margin-top: 0;\n  margin-bottom: 40px;\n  padding: 0 24px;\n}\n.cover[data-v-0113ec7a] {\n  padding: 60px 0 84px;\n  background: #F8F8F8;\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n.cover[data-v-0113ec7a] {\n      background: #F8F8F8;\n}\n}\n.nux-header[data-v-0113ec7a] {\n  margin-top: 20px;\n  margin-bottom: 64px;\n  font-size: 30px;\n  line-height: 1em;\n  color: #000000;\n}\n.classrooms-container[data-v-0113ec7a] {\n  width: 1200px;\n  background-color: #F7F7F8;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 400px;\n}\n.classrooms[data-v-0113ec7a] {\n  padding: 48px 4px 48px 4px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 30%;\n}\n.daily-challenges[data-v-0113ec7a] {\n  background-color: white;\n  padding: 48px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 1200px;\n  width: 70%;\n}\n.new-classroom-button[data-v-0113ec7a] {\n  width: 400px;\n  height: 100px;\n  border: 1px dashed rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  display: flex;\n}\n.courses-list-container[data-v-0113ec7a] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\nh3[data-v-0113ec7a] {\n  margin: 0 16px 0 0;\n  font-size: 24px;\n}\n.details[data-v-0113ec7a] {\n  font-size: 16px;\n  line-height: 30px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.classroom[data-v-0113ec7a] {\n  display: flex;\n  flex-direction: row;\n  background-color: #F7F7F8;\n  border: none;\n  width: 100%;\n  align-items: center;\n}\n.classroom-name[data-v-0113ec7a] {\n  display: flex;\n  padding: 8px;\n  flex-direction: column;\n  font-size: 18px;\n  text-align: left;\n}\ntable[data-v-0113ec7a] {\n  border-collapse: collapse;\n  border-spacing: 0px;\n  border-bottom: solid;\n  border-width: 1px;\n  border-color: #E6E6E6;\n}\ntable th[data-v-0113ec7a] {\n    background-color: #F8F8F8;\n    height: 65px;\n    border: solid;\n    border-width: 1px;\n    margin: none;\n    font-size: 10px;\n    text-transform: uppercase;\n    font-weight: normal;\n    color: #727272;\n    border-color: #E6E6E6;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n}\ntable th .superheading[data-v-0113ec7a] {\n      border: none;\n}\ntable th .subheading[data-v-0113ec7a] {\n      border: none;\n}\ntable td[data-v-0113ec7a] {\n    font-size: 14px;\n    border-left: solid;\n    border-right: solid;\n    border-width: 1px;\n    border-color: #E6E6E6;\n}\ntable th[data-v-0113ec7a], table td[data-v-0113ec7a] {\n    padding: 4px;\n    text-align: center;\n    max-width: 260px;\n}\n',""])},2555:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this;var e=n.$createElement;var t=n._self._c||e;return t("ClassroomBase",{key:n.$route.path},[t("div",{staticClass:"daily-challenges"},[t("router-link",{key:"classroom_student_list_"+n.selected_classroom.id,attrs:{to:{name:"classroom_student_list",params:{classroomId:n.selected_classroom.id}}}},[t("div",{staticClass:"back-to-students-link"},[t("div",{staticClass:"b-sprite-paywall-chevron"}),n._v(" "),t("div",[n._v("Back")])])]),n._v(" "),t("div",[n.student?t("StudentHeader",{key:n.$route.path,attrs:{color:"grey","student-id":n.student.student_id,"student-name":n.student.name,"classroom-id":n.selected_classroom.id,"showing-courses":false}}):n._e()],1),n._v(" "),n.student_daily_challenge_progress?t("div",[t("table",[t("thead",[t("tr",[t("th",[n._v("\n              Daily Challenges\n            ")]),n._v(" "),t("th",[n._v("\n              Last Active Timestamp\n            ")]),n._v(" "),t("th",[n._v("\n              Attempted?\n            ")]),n._v(" "),t("th",[n._v("\n              Viewed Solution?\n            ")]),n._v(" "),t("th",[n._v("\n              Correct?\n            ")])])]),n._v(" "),t("tbody",n._l(n.student_daily_challenge_progress.student_dc_progress,(function(e){return t("tr",{key:e.dc_title},[t("td",[n._v("\n              "+n._s(e.dc_title)+"\n            ")]),n._v(" "),t("td",[e.last_active_timestamp?t("span",[n._v("\n                "+n._s(e.last_active_timestamp)+"\n              ")]):t("span",[n._v("\n                N/A\n              ")])]),n._v(" "),t("td",[n._v("\n              "+n._s(e.attempted?"YES":"NO")+"\n            ")]),n._v(" "),t("td",[n._v("\n              "+n._s(e.viewed_solution?"YES":"NO")+"\n            ")]),n._v(" "),t("td",[n._v("\n              "+n._s(e.correct?"YES":"NO")+"\n            ")])])})),0)])]):t("div",{staticClass:"no-progress"},[t("p",[n._v("No daily challenges have been added to "+n._s(n.selected_classroom.name)+" yet.")])])],1)])};var s=[];a._withStripped=true;var o=t(0);var r=t(3);var i=t(1);var l=t(9);var d=t(954);var c=t(1294);var v=t(1006);let p=class n extends r["default"]{};p=Object(o["b"])([Object(i["a"])({components:{ClassroomBase:d["a"],StudentHeader:c["a"],DailyChallengeCard:v["a"]},computed:Object.assign(Object.assign({},Object(l["mapState"])("globals",["user"])),Object(l["mapState"])("classrooms",["classrooms","student_daily_challenge_progress","selected_classroom","student"])),metaInfo(){return{title:"Student Daily Challenge Progress"}}})],p);var m=p;var u=m;var f=t(2381);var b=t(5);var g=Object(b["a"])(u,a,s,false,null,"0113ec7a",null);if(false){var _}g.options.__file="frontend/views/classrooms/StudentDailyChallengeProgress.vue";var x=e["default"]=g.exports},911:function(n,e,t){var a=t(1213);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var s=t(15).default;var o=s("629646aa",a,false,{});if(false){}}}]);
//# sourceMappingURL=ClassroomsDCsStudent.37e88886ba9205995d5b.js.map