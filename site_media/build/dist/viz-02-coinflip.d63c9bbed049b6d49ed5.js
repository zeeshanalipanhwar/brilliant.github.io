(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{1002:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=o;var i=n(r(1001));function n(e){return e&&e.__esModule?e:{default:e}}var a=null;function o(){if(!a){var e=document.createElement("template");e.setAttribute("id","offScreenPaper");document.body.appendChild(e);var t=i.default._.wrap(e.content);a=new i.default(0,0);if(typeof t!=="undefined"){t.append(a);e.remove()}}return a}},1387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformScreenSpaceToPaperSpace=h;t.default=p;var i=n(r(1001));function n(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(i.get||i.set){Object.defineProperty(t,r,i)}else{t[r]=e[r]}}}}t.default=e;return t}}function a(e,t){return u(e)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var r=[];var i=true;var n=false;var a=undefined;try{for(var o=e[Symbol.iterator](),s;!(i=(s=o.next()).done);i=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){n=true;a=e}finally{try{if(!i&&o["return"]!=null)o["return"]()}finally{if(n)throw a}}return r}function u(e){if(Array.isArray(e))return e}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function f(e,t,r){if(t)d(e.prototype,t);if(r)d(e,r);return e}var c=function(){function e(t,r,n){l(this,e);this.paperWidth=r;this.paperHeight=n;var o=false;this.rootElement=document.querySelector(t);if(this.rootElement){if(this.rootElement.children.length){o=true;var s=a(this.rootElement.children,1);this.wrapperDiv=s[0]}else{this.wrapperDiv=document.createElement("div");this.wrapperDiv.classList.add("viz-content");this.rootElement.appendChild(this.wrapperDiv)}}else{throw new Error("Cannot find available root element")}this.wrapperDiv.style.width="".concat(Math.min(r,this.rootElement.offsetWidth),"px");this.wrapperDiv.style.maxWidth="100%";if(!o){this.rootPaper=(0,i.default)(r,n);(0,i.default)(this.wrapperDiv).append(this.rootPaper);this.rootPaper.addClass("viz-svg-root");this.rootPaper.node.style.maxWidth="100%"}else{this.rootPaper=(0,i.default)(this.wrapperDiv.children[0])}this.rootPaperGroup=this.rootPaper.g();this.updateScale(this.rootElement.offsetWidth);this.checkCompatibility()}f(e,[{key:"updateScale",value:function e(t){var r=Math.min(t,this.paperWidth);var n=r/this.paperWidth;var a=new i.Matrix;a.scale(n);this.rootPaperGroup.transform(a);this.rootPaper.node.setAttribute("width",this.paperWidth*n);this.rootPaper.node.setAttribute("height",this.paperHeight*n);this.wrapperDiv.style.width="".concat(r,"px")}},{key:"checkCompatibility",value:function e(){var t=this;var r=navigator.userAgent.indexOf("Android")>=0&&navigator.userAgent.indexOf("Chrome")<0;var i=navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident/")>=0;var n=null;if(r){var a=/Android ([\d.]*)/;var o=a.exec(navigator.userAgent);if(o.length&&o[1]<"4.4"){n=document.createElement("div");n.innerHTML="\n                    A visualization should appear here, but it requires Android OS v4.4 or greater.\n                    Your device is running Android OS v".concat(o[1],". If possible, please\n                    upgrade your device.")}}else if(i){n=document.createElement("div");n.innerHTML='\n                A visualization should appear here, but it can\'t work properly in Internet\n                Explorer. Please use a newer browser like\n                <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a> or\n                <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome</a>.\n            '}if(n!==null){n.classList.add("viz-error");this.rootElement.appendChild(n)}else{window.addEventListener("resize",(function(){if(t.rootPaperGroup){t.updateScale(t.rootElement.offsetWidth)}window.dispatchEvent(new CustomEvent("screenResized",{detail:{screenWidth:t.rootElement.offsetWidth}}))}))}}}]);return e}();function h(e,t){var r=e.rootPaper.node.getBoundingClientRect();var i=[t[0]-r.left,t[1]-r.top];var n=e.rootPaperGroup.transform().localMatrix.invert();return[n.x.apply(n,i),n.y.apply(n,i)]}function p(e,t,r){var i=new c(e,t,r);return{rootPaper:i.rootPaper,rootPaperGroup:i.rootPaperGroup}}},1388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=o(r(1001));var n=r(1986);var a=o(r(1002));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function l(e,t,r){if(t)u(e.prototype,t);if(r)u(e,r);return e}var d=function(){function e(t,r,i,o){s(this,e);this.side=r;this.x=i;this.y=o;this.sprite=null;this.g=(0,a.default)().g();this.intervalCount=0;this.canHandleImages=true;if(this.canHandleImages){(0,n.initializeSprite)();this.updateSprite(false)}else{this.updateSprite(false)}}l(e,[{key:"updateSprite",value:function t(){var r=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var o=this.sprite;if(this.canHandleImages){this.sprite=(0,n.instantiateSprite)(this.side,e.width,e.height);if(!this.sprite){if(this.intervalCount<e.intervalLimit){this.intervalCount++;setTimeout((function(){return r.updateSprite(a)}),100)}else{throw new Error('Cannot instantiate sprite: "'.concat(this.side,'"'))}return}this.intervalCount=0}else{var s=e.width/2;var u=s;var l=s;var d=s-2;this.sprite=(0,i.default)().circle(u,l,d);if(this.side==="silver"){this.sprite.attr({fill:"#F0F0F0",stroke:"#BBB"})}else{this.sprite.attr({fill:"#FFE143",stroke:"#CEBB00"})}}this.sprite.transform("t".concat(this.x,",").concat(this.y)).attr({opacity:0}).click((function(){return r.flip()}));this.g.append(this.sprite.node);var f=function e(){r.sprite.attr({opacity:1});if(o!==null){o.remove()}};if(a){this.sprite.animate({opacity:1},150,window.mina.easein,f)}else{f()}}},{key:"flip",value:function e(){this.side=this.side==="silver"?"gold":"silver";this.updateSprite()}}]);return e}();t.default=d;d.width=45;d.height=45;d.padding=3;d.intervalLimit=1200},1985:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=s(r(1002));var n=r(1387);var a=s(r(1388));var o=s(r(1987));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return f(e)||d(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function f(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function c(e,t){return v(e)||p(e,t)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,t){var r=[];var i=true;var n=false;var a=undefined;try{for(var o=e[Symbol.iterator](),s;!(i=(s=o.next()).done);i=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){n=true;a=e}finally{try{if(!i&&o["return"]!=null)o["return"]()}finally{if(n)throw a}}return r}function v(e){if(Array.isArray(e))return e}function g(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function m(e,t,r){if(t)y(e.prototype,t);if(r)y(e,r);return e}function w(e){return e*(2*a.default.padding+a.default.width)}var b=function(){function e(t,r,n){var s=this;var u=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var l=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;var d=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;g(this,e);this.rootpaperObject=r;this.initialSides=n;this.x=u;this.y=l;this.g=(0,i.default)().g().transform("t".concat(this.x,",").concat(this.y));this.subG=this.g.g();this.coinCount=n.length;this.g.attr({cursor:"pointer"});var f=e.sizeForNumCoins(n.length),h=c(f,2),p=h[0],v=h[1];this.background=this.g.rect(0,0,p,v);if(!d){this.background.attr({opacity:0})}this.subG.attr({pointerEvents:"none"});this.coins=[];for(var y=0;y<this.coinCount;y++){var m=y*2+2;var w=y;var b=this.initialSides[y];var P=m*a.default.padding+w*a.default.width;var S=2*a.default.padding;var x=new a.default(t,b,P,S);this.subG.append(x.g);this.coins.push(x)}this.selectionBorder=new o.default;this.subG.append(this.selectionBorder.g);this.g.hover((function(e){return s.onHover(e)}),(function(e){return s.onUnhover(e)}));this.g.mousemove((function(e){return s.onMousemove(e)}));this.g.mousedown((function(e){return s.onMousedown(e)}));this.g.touchstart((function(e){return s.onMousedown(e)}));this.selectedPairIndex=null}m(e,[{key:"transformGSpaceToPairIndexSpace",value:function e(t){var r=(t-2*a.default.padding-.5*a.default.width)/(2*a.default.padding+a.default.width);r=Math.max(0,r);r=Math.min(r,this.coinCount-2);r=Math.floor(r);return r}},{key:"transformPaperSpaceToGSpace",value:function e(t){var r=this.g.transform().localMatrix.invert();return[r.x.apply(r,u(t)),r.y.apply(r,u(t))]}},{key:"transformScreenSpaceToGSpace",value:function e(t){var r=(0,n.transformScreenSpaceToPaperSpace)(this.rootpaperObject,t);return this.transformPaperSpaceToGSpace(r)}},{key:"onHover",value:function e(t){var r=this.transformScreenSpaceToGSpace([t.clientX,t.clientY]),i=c(r,1),n=i[0];this.selectedPairIndex=this.transformGSpaceToPairIndexSpace(n);this.selectionBorder.setPositionAndShow(w(this.selectedPairIndex),0)}},{key:"onUnhover",value:function e(){this.selectionBorder.hide()}},{key:"onMousemove",value:function e(t){var r=this.transformScreenSpaceToGSpace([t.clientX,t.clientY]),i=c(r,1),n=i[0];this.selectedPairIndex=this.transformGSpaceToPairIndexSpace(n);this.selectionBorder.setPositionAndShow(w(this.selectedPairIndex),0);this.selectionBorder.show()}},{key:"onMousedown",value:function e(t){var r=this;clearTimeout(this.mousedownTimeout);this.mousedownTimeout=setTimeout((function(){var e=t.clientX,i=t.clientY;var n=t.type==="touchstart"||typeof t.originalEvent!=="undefined"&&t.originalEvent.type==="touchstart";if(n){t.stopPropagation();t.preventDefault();window.dispatchEvent(new Event("untrackedtouch"));if(Number.isNaN(e)||Number.isNaN(i)){var a=c(t.touches,1);var o=a[0];e=o.clientX;i=o.clientY}}var s=r.transformScreenSpaceToGSpace([e,i]),u=c(s,1),l=u[0];var d=r.transformGSpaceToPairIndexSpace(l);if(r.selectionBorder.isVisible&&r.selectedPairIndex===d){r.flipPair();r.selectionBorder.hide()}else{r.selectedPairIndex=d;r.selectionBorder.setPositionAndShow(w(r.selectedPairIndex),0)}}),1)}},{key:"flipPair",value:function e(){this.coins[this.selectedPairIndex].flip();this.coins[this.selectedPairIndex+1].flip()}}]);return e}();t.default=b;b.sizeForNumCoins=function(e){return[a.default.width*e+2*a.default.padding*(e+1),4*a.default.padding+a.default.height]}},1986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.initializeSprite=l;t.instantiateSprite=d;var i=o(r(1001));var n=o(r(1002));var a=r(829);function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.getImageUrl)("CoinFlip/gold.svg");var u=(0,a.getImageUrl)("CoinFlip/silver.svg");function l(){window.spritesheetCache=window.spritesheetCache||{};["gold","silver"].forEach((function(e){var t=(0,i.default)();t.node.style.display="none";var r=t.image(e==="gold"?s:u);r.node.setAttribute("data-name",e);window.spritesheetCache[e]=r}))}function d(e,t,r){var i=window.spritesheetCache[e].clone();var a=(0,n.default)().g(i);if(typeof t!=="undefined"&&typeof r!=="undefined"){i.attr({width:t,height:r});var o=i.node.querySelectorAll("use");for(var s=0;s<o.length;s++){o[s].style.fill=o[s].getAttribute("fill")||"transparent";o[s].style.stroke=o[s].getAttribute("stroke")||"transparent"}}return a}},1987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=a(r(1388));var n=a(r(1002));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function u(e,t,r){if(t)s(e.prototype,t);if(r)s(e,r);return e}var l=function(){function e(){o(this,e);this.x=0;this.y=0;this.g=(0,n.default)().g();this.sprite=this.g.rect(2*i.default.padding,2*i.default.padding,2*(i.default.width+i.default.padding),i.default.height,10,10);this.sprite.attr({opacity:0,fillOpacity:0,stroke:"#ccc",strokeWidth:3,strokeDasharray:12});this.sprite.remove();this.isVisible=false}u(e,[{key:"show",value:function e(){if(!this.isVisible){this.isVisible=true;this.g.append(this.sprite);this.sprite.animate({opacity:1},75,window.mina.easein)}}},{key:"hide",value:function e(){var t=this;if(this.isVisible){this.isVisible=false;this.sprite.animate({opacity:0},75,window.mina.easeout,(function(){return t.sprite.remove()}));this.selectedPairIndex=null}}},{key:"setPositionAndShow",value:function e(t,r){if(this.x!==t||this.y!==r){this.x=t;this.y=r;this.sprite.transform("t".concat(this.x,",").concat(this.y))}this.show()}}]);return e}();t.default=l},322:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=a(r(1387));var n=a(r(1985));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return l(e)||u(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var r=[];var i=true;var n=false;var a=undefined;try{for(var o=e[Symbol.iterator](),s;!(i=(s=o.next()).done);i=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){n=true;a=e}finally{try{if(!i&&o["return"]!=null)o["return"]()}finally{if(n)throw a}}return r}function l(e){if(Array.isArray(e))return e}function d(e,t){var r="#".concat(e);document.getElementById(e).innerHTML="";var a=n.default.sizeForNumCoins(t.length),s=o(a,2),u=s[0],l=s[1];var d=(0,i.default)(r,u,l);var f=new n.default(e,d,t);d.rootPaperGroup.append(f.g)}var f=null;function c(e){var t=[["gold","gold","gold"],["gold","gold","silver"],["gold","silver","gold"],["silver","gold","gold"],["silver","silver","silver"],["silver","silver","gold"],["silver","gold","silver"],["gold","silver","silver"]];var r="#".concat(e);var a=320;var s=null;var u=function u(l){var d=l>a;var c=s>a;var h=s!==null&&d===c;if(h){s=l;return}var p=n.default.sizeForNumCoins(3),v=o(p,2),g=v[0],y=v[1];var m=30;var w=null;if(f){f.remove()}var b;var P;if(d){b=g*4+m*3;P=y*2+m;w=4}else{b=g*2+m;P=y*4+m*3;w=2}var S=(0,i.default)(r,b,P);f=S.rootPaper;t.forEach((function(t,r){var i=Math.floor(r/w);var a=r%w;var o=new n.default(e,S,t,a*(g+m),i*(y+m));S.rootPaperGroup.append(o.g)}));s=l};document.getElementById(e).innerHTML="";window.addEventListener("screenResized",(function(e){return u(e.detail.screenWidth)}),false);u(document.body.offsetWidth)}var h={createInteractive:function e(t){if(t.authoredData.coins){return d(t.visualizationKey,t.authoredData.coins)}if(t.authoredData.special==="all-perms"){return c(t.visualizationKey)}return null},createInteractiveSolvable:function e(){throw new Error("Interactive solvables not supported for coin flip interactives")}};t.default=h},829:function(e,t,r){"use strict";r.r(t);r.d(t,"COLORS",(function(){return a}));r.d(t,"setSliderColor",(function(){return o}));r.d(t,"getAssetUrl",(function(){return l}));r.d(t,"getImageUrl",(function(){return d}));var i=r(933);var n=r.n(i);const a={red:"#e01f1f",orange:"#f59b0a",yellow:"#f5e10a",green:"#41d606",blue:"#0630d6",indigo:"#6e06d6",violet:"#cf06d6"};function o(e,t){const r=t[0]==="#"?t:a[t]||t;const i=e.querySelectorAll(".noUi-handle");i.forEach(e=>{e.style.backgroundColor=r});e.style.backgroundColor=r}const s=true?"https://ds055uzetaobb.cloudfront.net":undefined;function u(e){return e.startsWith("http")}function l(e){let t=e;if(!u(e)){t=s+t}if(false){}return t}function d(e){if(!u(e)){return l(`/site_media/version-1/images/visualizations/${e}`)}return l(e)}}}]);
//# sourceMappingURL=viz-02-coinflip.d63c9bbed049b6d49ed5.js.map