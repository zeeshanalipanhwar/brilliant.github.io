(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{1260:function(e,t,n){var r=n(2434);if(typeof r==="string")r=[[e.i,r,""]];if(r.locals)e.exports=r.locals;var a=n(15).default;var i=a("75ca9b9c",r,false,{});if(false){}},2433:function(e,t,n){"use strict";var r=n(1260);var a=n.n(r);var i=a.a},2434:function(e,t,n){t=e.exports=n(14)(false);t.push([e.i,".nux-welcome-academic[data-v-6fda9844] .nux-step .step-content ul.choices {\n  max-width: 700px;\n  margin: 0 auto;\n}\n",""])},2566:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("SegmentationQuestionNuxStep",{attrs:{"current-step-content":e.currentStepContent,"current-step":e.stepData.currentStep,"step-count":e.stepData.stepsCount,choice:e.choice,loading:e.loading},on:{next:e.next,"nav-back":function(t){return e.navBack(t)},chosen:function(t){return e.selectChoice(t)}}})};var a=[];r._withStripped=true;var i=n(0);var s=n(35);var o=n.n(s);var c=n(932);var u=n(1011);var l=n(889);var h=n(9);let v=class e extends(Object(s["mixins"])(c["a"])){constructor(){super(...arguments);this.answeredTrackId="clicked_nux_school_continue";this.questionClass="nux-welcome-academic";this.nextRoute="nux_welcome_where_to_start";this.nextRouteQuery={tour:"true"};this.goalSlug="goal"}get isParentOrTeacher(){var e;return((e=this.getAnswerToQuestion(this.goalSlug))===null||e===void 0?void 0:e.answer_slug)==="parent-or-teacher"}get questionText(){return this.isParentOrTeacher?"What does your child or student want to accomplish?":this.segmentationQuestion.text}get choices(){if(!this.isParentOrTeacher){return this.originalChoices}const e={"learn-above-level":"Learn above their grade level","refresh-knowledge":"Refresh on what they learned in school"};return this.originalChoices.map(t=>{if(t.identifier in e){t.text=e[t.identifier]}return t})}get stepData(){return Object(l["a"])(this.inExperiment,this.$route.name)}};v=Object(i["b"])([o()({components:{SegmentationQuestionNuxStep:u["a"]},computed:Object.assign({},Object(h["mapGetters"])("globals",["inExperiment"]))})],v);var p=v;var d=p;var f=n(2433);var x=n(5);var g=Object(x["a"])(d,r,a,false,null,"6fda9844",null);if(false){var m}g.options.__file="frontend/views/nux/NuxAcademicSurvey.vue";var w=t["default"]=g.exports}}]);
//# sourceMappingURL=NuxAcademicSurvey.e85fb561bd2c55fe48a4.js.map