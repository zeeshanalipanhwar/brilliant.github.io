(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[237],{2531:function(t,e,i){(function(t){if(true)t(i(129));else{}})((function(t){"use strict";var e="CodeMirror-hint";var i="CodeMirror-hint-active";t.showHint=function(t,e,i){if(!e)return t.showHint(i);if(i&&i.async)e.async=true;var n={hint:e};if(i)for(var s in i)n[s]=i[s];return t.showHint(n)};t.defineExtension("showHint",(function(e){e=r(this,this.getCursor("start"),e);var i=this.listSelections();if(i.length>1)return;if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var s=0;s<i.length;s++)if(i[s].head.line!=i[s].anchor.line)return}if(this.state.completionActive)this.state.completionActive.close();var o=this.state.completionActive=new n(this,e);if(!o.options.hint)return;t.signal(this,"startCompletion",this);o.update(true)}));function n(t,e){this.cm=t;this.options=e;this.widget=null;this.debounce=0;this.tick=0;this.startPos=this.cm.getCursor("start");this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}var s=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)};var o=window.cancelAnimationFrame||clearTimeout;n.prototype={close:function(){if(!this.active())return;this.cm.state.completionActive=null;this.tick=null;this.cm.off("cursorActivity",this.activityFunc);if(this.widget&&this.data)t.signal(this.data,"close");if(this.widget)this.widget.close();t.signal(this.cm,"endCompletion",this.cm)},active:function(){return this.cm.state.completionActive==this},pick:function(e,i){var n=e.list[i];if(n.hint)n.hint(this.cm,e,n);else this.cm.replaceRange(c(n),n.from||e.from,n.to||e.to,"complete");t.signal(e,"pick",n);this.close()},cursorActivity:function(){if(this.debounce){o(this.debounce);this.debounce=0}var t=this.cm.getCursor(),e=this.cm.getLine(t.line);if(t.line!=this.startPos.line||e.length-t.ch!=this.startLen-this.startPos.ch||t.ch<this.startPos.ch||this.cm.somethingSelected()||t.ch&&this.options.closeCharacters.test(e.charAt(t.ch-1))){this.close()}else{var i=this;this.debounce=s((function(){i.update()}));if(this.widget)this.widget.disable()}},update:function(t){if(this.tick==null)return;var e=this,i=++this.tick;u(this.options.hint,this.cm,this.options,(function(n){if(e.tick==i)e.finishUpdate(n,t)}))},finishUpdate:function(e,i){if(this.data)t.signal(this.data,"update");var n=this.widget&&this.widget.picked||i&&this.options.completeSingle;if(this.widget)this.widget.close();this.data=e;if(e&&e.list.length){if(n&&e.list.length==1){this.pick(e,0)}else{this.widget=new a(this,e);t.signal(e,"shown")}}}};function r(t,e,i){var n=t.options.hintOptions;var s={};for(var o in p)s[o]=p[o];if(n)for(var o in n)if(n[o]!==undefined)s[o]=n[o];if(i)for(var o in i)if(i[o]!==undefined)s[o]=i[o];if(s.hint.resolve)s.hint=s.hint.resolve(t,e);return s}function c(t){if(typeof t=="string")return t;else return t.text}function l(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(-e.menuSize()+1,true)},PageDown:function(){e.moveFocus(e.menuSize()-1,true)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};var n=t.options.customKeys;var s=n?{}:i;function o(t,n){var o;if(typeof n!="string")o=function(t){return n(t,e)};else if(i.hasOwnProperty(n))o=i[n];else o=n;s[t]=o}if(n)for(var r in n)if(n.hasOwnProperty(r))o(r,n[r]);var c=t.options.extraKeys;if(c)for(var r in c)if(c.hasOwnProperty(r))o(r,c[r]);return s}function h(t,e){while(e&&e!=t){if(e.nodeName.toUpperCase()==="LI"&&e.parentNode==t)return e;e=e.parentNode}}function a(n,s){this.completion=n;this.data=s;this.picked=false;var o=this,r=n.cm;var a=this.hints=document.createElement("ul");a.className="CodeMirror-hints";this.selectedHint=s.selectedHint||0;var f=s.list;for(var u=0;u<f.length;++u){var d=a.appendChild(document.createElement("li")),p=f[u];var m=e+(u!=this.selectedHint?"":" "+i);if(p.className!=null)m=p.className+" "+m;d.className=m;if(p.render)p.render(d,s,p);else d.appendChild(document.createTextNode(p.displayText||c(p)));d.hintId=u}var g=r.cursorCoords(n.options.alignWithWord?s.from:null);var v=g.left,w=g.bottom,y=true;a.style.left=v+"px";a.style.top=w+"px";var H=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth);var k=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(n.options.container||document.body).appendChild(a);var C=a.getBoundingClientRect(),b=C.bottom-k;var x=a.scrollHeight>a.clientHeight+1;var A=r.getScrollInfo();if(b>0){var S=C.bottom-C.top,T=g.top-(g.bottom-C.top);if(T-S>0){a.style.top=(w=g.top-S)+"px";y=false}else if(S>k){a.style.height=k-5+"px";a.style.top=(w=g.bottom-C.top)+"px";var M=r.getCursor();if(s.from.ch!=M.ch){g=r.cursorCoords(M);a.style.left=(v=g.left)+"px";C=a.getBoundingClientRect()}}}var N=C.right-H;if(N>0){if(C.right-C.left>H){a.style.width=H-5+"px";N-=C.right-C.left-H}a.style.left=(v=g.left-N)+"px"}if(x)for(var F=a.firstChild;F;F=F.nextSibling)F.style.paddingRight=r.display.nativeBarWidth+"px";r.addKeyMap(this.keyMap=l(n,{moveFocus:function(t,e){o.changeActive(o.selectedHint+t,e)},setFocus:function(t){o.changeActive(t)},menuSize:function(){return o.screenAmount()},length:f.length,close:function(){n.close()},pick:function(){o.pick()},data:s}));if(n.options.closeOnUnfocus){var E;r.on("blur",this.onBlur=function(){E=setTimeout((function(){n.close()}),100)});r.on("focus",this.onFocus=function(){clearTimeout(E)})}r.on("scroll",this.onScroll=function(){var t=r.getScrollInfo(),e=r.getWrapperElement().getBoundingClientRect();var i=w+A.top-t.top;var s=i-(window.pageYOffset||(document.documentElement||document.body).scrollTop);if(!y)s+=a.offsetHeight;if(s<=e.top||s>=e.bottom)return n.close();a.style.top=i+"px";a.style.left=v+A.left-t.left+"px"});t.on(a,"dblclick",(function(t){var e=h(a,t.target||t.srcElement);if(e&&e.hintId!=null){o.changeActive(e.hintId);o.pick()}}));t.on(a,"click",(function(t){var e=h(a,t.target||t.srcElement);if(e&&e.hintId!=null){o.changeActive(e.hintId);if(n.options.completeOnSingleClick)o.pick()}}));t.on(a,"mousedown",(function(){setTimeout((function(){r.focus()}),20)}));t.signal(s,"select",f[this.selectedHint],a.childNodes[this.selectedHint]);return true}a.prototype={close:function(){if(this.completion.widget!=this)return;this.completion.widget=null;this.hints.parentNode.removeChild(this.hints);this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;if(this.completion.options.closeOnUnfocus){t.off("blur",this.onBlur);t.off("focus",this.onFocus)}t.off("scroll",this.onScroll)},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=true}};this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length)e=n?this.data.list.length-1:0;else if(e<0)e=n?0:this.data.list.length-1;if(this.selectedHint==e)return;var s=this.hints.childNodes[this.selectedHint];s.className=s.className.replace(" "+i,"");s=this.hints.childNodes[this.selectedHint=e];s.className+=" "+i;if(s.offsetTop<this.hints.scrollTop)this.hints.scrollTop=s.offsetTop-3;else if(s.offsetTop+s.offsetHeight>this.hints.scrollTop+this.hints.clientHeight)this.hints.scrollTop=s.offsetTop+s.offsetHeight-this.hints.clientHeight+3;t.signal(this.data,"select",this.data.list[this.selectedHint],s)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}};function f(t,e){if(!t.somethingSelected())return e;var i=[];for(var n=0;n<e.length;n++)if(e[n].supportsSelection)i.push(e[n]);return i}function u(t,e,i,n){if(t.async){t(e,n,i)}else{var s=t(e,i);if(s&&s.then)s.then(n);else n(s)}}function d(e,i){var n=e.getHelpers(i,"hint"),s;if(n.length){var o=function(t,e,i){var s=f(t,n);function o(n){if(n==s.length)return e(null);u(s[n],t,i,(function(t){if(t&&t.list.length>0)e(t);else o(n+1)}))}o(0)};o.async=true;o.supportsSelection=true;return o}else if(s=e.getHelper(e.getCursor(),"hintWords")){return function(e){return t.hint.fromList(e,{words:s})}}else if(t.hint.anyword){return function(e,i){return t.hint.anyword(e,i)}}else{return function(){}}}t.registerHelper("hint","auto",{resolve:d});t.registerHelper("hint","fromList",(function(e,i){var n=e.getCursor(),s=e.getTokenAt(n);var o=t.Pos(n.line,s.end);if(s.string&&/\w/.test(s.string[s.string.length-1])){var r=s.string,c=t.Pos(n.line,s.start)}else{var r="",c=o}var l=[];for(var h=0;h<i.words.length;h++){var a=i.words[h];if(a.slice(0,r.length)==r)l.push(a)}if(l.length)return{list:l,from:c,to:o}}));t.commands.autocomplete=t.showHint;var p={hint:t.hint.auto,completeSingle:true,alignWithWord:true,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:true,completeOnSingleClick:true,container:null,customKeys:null,extraKeys:null};t.defineOption("hintOptions",null)}))}}]);
//# sourceMappingURL=237.8a2b7cb5be6e965cd783.js.map