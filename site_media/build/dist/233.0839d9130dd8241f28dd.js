(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[233],{1399:function(n,e,o){(function(n){if(true)n(o(129));else{}})((function(n){"use strict";function e(e,r,i,l){if(i&&i.call){var f=i;i=null}else{var f=t(e,i,"rangeFinder")}if(typeof r=="number")r=n.Pos(r,0);var d=t(e,i,"minFoldSize");function u(n){var o=f(e,r);if(!o||o.to.line-o.from.line<d)return null;var t=e.findMarksAt(o.from);for(var i=0;i<t.length;++i){if(t[i].__isFold&&l!=="fold"){if(!n)return null;o.cleared=true;t[i].clear()}}return o}var a=u(true);if(t(e,i,"scanUp"))while(!a&&r.line>e.firstLine()){r=n.Pos(r.line-1,0);a=u(false)}if(!a||a.cleared||l==="unfold")return;var s=o(e,i);n.on(s,"mousedown",(function(e){c.clear();n.e_preventDefault(e)}));var c=e.markText(a.from,a.to,{replacedWith:s,clearOnEnter:t(e,i,"clearOnEnter"),__isFold:true});c.on("clear",(function(o,r){n.signal(e,"unfold",e,o,r)}));n.signal(e,"fold",e,a.from,a.to)}function o(n,e){var o=t(n,e,"widget");if(typeof o=="string"){var r=document.createTextNode(o);o=document.createElement("span");o.appendChild(r);o.className="CodeMirror-foldmarker"}else if(o){o=o.cloneNode(true)}return o}n.newFoldFunction=function(n,o){return function(r,t){e(r,t,{rangeFinder:n,widget:o})}};n.defineExtension("foldCode",(function(n,o,r){e(this,n,o,r)}));n.defineExtension("isFolded",(function(n){var e=this.findMarksAt(n);for(var o=0;o<e.length;++o)if(e[o].__isFold)return true}));n.commands.toggleFold=function(n){n.foldCode(n.getCursor())};n.commands.fold=function(n){n.foldCode(n.getCursor(),null,"fold")};n.commands.unfold=function(n){n.foldCode(n.getCursor(),null,"unfold")};n.commands.foldAll=function(e){e.operation((function(){for(var o=e.firstLine(),r=e.lastLine();o<=r;o++)e.foldCode(n.Pos(o,0),null,"fold")}))};n.commands.unfoldAll=function(e){e.operation((function(){for(var o=e.firstLine(),r=e.lastLine();o<=r;o++)e.foldCode(n.Pos(o,0),null,"unfold")}))};n.registerHelper("fold","combine",(function(){var n=Array.prototype.slice.call(arguments,0);return function(e,o){for(var r=0;r<n.length;++r){var t=n[r](e,o);if(t)return t}}}));n.registerHelper("fold","auto",(function(n,e){var o=n.getHelpers(e,"fold");for(var r=0;r<o.length;r++){var t=o[r](n,e);if(t)return t}}));var r={rangeFinder:n.fold.auto,widget:"↔",minFoldSize:0,scanUp:false,clearOnEnter:true};n.defineOption("foldOptions",null);function t(n,e,o){if(e&&e[o]!==undefined)return e[o];var t=n.options.foldOptions;if(t&&t[o]!==undefined)return t[o];return r[o]}n.defineExtension("foldOption",(function(n,e){return t(this,n,e)}))}))}}]);
//# sourceMappingURL=233.0839d9130dd8241f28dd.js.map