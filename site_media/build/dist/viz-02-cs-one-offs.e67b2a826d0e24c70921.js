(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[176],{1057:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=y;var n=o(r(819));function o(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function i(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){i=function e(t){return typeof t}}else{i=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return i(e)}function a(){a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return a.apply(this,arguments)}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)u(e.prototype,t);if(r)u(e,r);return e}function c(e,t){if(t&&(i(t)==="object"||typeof t==="function")){return t}return f(e)}function f(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return p(e)}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)h(e,t)}function h(e,t){h=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return h(e,t)}function y(e){return function(t){d(r,t);function r(e){var t;s(this,r);t=c(this,p(r).call(this,e));t.state={width:e.minWidth};return t}l(r,[{key:"getWidth",value:function e(){var t=this.ref.offsetWidth;if(this.props.percentage!==undefined){t=t*this.props.percentage/100}if(this.props.minWidth!==undefined){t=Math.max(this.props.minWidth,t)}if(this.props.maxWidth!==undefined){t=Math.min(this.props.maxWidth,t)}return t||1}},{key:"componentDidMount",value:function e(){var t=this;this.setState({width:this.getWidth()});try{this.observer=new ResizeObserver((function(){t.setState({width:t.getWidth()})}));this.observer.observe(this.ref)}catch(e){}}},{key:"render",value:function t(){var r=this;return n.createElement("div",{ref:function e(t){r.ref=t},style:{width:"100%"}},n.createElement("div",{style:{margin:"auto",width:this.state.width}},n.createElement(e,a({width:this.state.width},this.props))))}}]);return r}(n.Component)}},1058:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.TOTAL_RANDOM=t.COLOR_FALSE=t.COLOR_TRUE=t.CIRC_SIZE=t.SLICE_WIDTH=t.SCROLLBOX_HEIGHT=t.SHOWBAR_HEIGHT=t.HEADER_HEIGHT=void 0;var n=80;t.HEADER_HEIGHT=n;var o=60;t.SHOWBAR_HEIGHT=o;var i=340;t.SCROLLBOX_HEIGHT=i;var a=5;t.SLICE_WIDTH=a;var s=15;t.CIRC_SIZE=s;var u="#005FFA";t.COLOR_TRUE=u;var l="#92AFFD";t.COLOR_FALSE=l;var c=2e5;t.TOTAL_RANDOM=c},1396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(819));var o=i(r(2019));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function s(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function e(t){return typeof t}}else{s=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return s(e)}function u(){u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return u.apply(this,arguments)}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function f(e,t,r){if(t)c(e.prototype,t);if(r)c(e,r);return e}function p(e,t){if(t&&(s(t)==="object"||typeof t==="function")){return t}return h(e)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function h(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)m(e,t)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return m(e,t)}var b=75;var v=function(e){y(t,e);function t(e){var r;l(this,t);r=p(this,d(t).call(this,e));r.onClick=r.onClick.bind(h(r));r.tick=r.tick.bind(h(r));r.toggleRunAnimation=r.toggleRunAnimation.bind(h(r));r.state={runAnimation:false,selected:null,lastAdvance:null};return r}f(t,[{key:"onClick",value:function e(t){this.setState({runAnimation:false,selected:t,lastAdvance:null})}},{key:"toggleRunAnimation",value:function e(){this.setState((function(e){var t=e.runAnimation,r=e.selected;return{runAnimation:!t,selected:r===null?0:r,lastAdvance:null}}))}},{key:"componentDidMount",value:function e(){this.animationFrameId=requestAnimationFrame(this.tick);this.setState()}},{key:"componentDidUnmount",value:function e(){cancelAnimationFrame(this.animationFrameId)}},{key:"tick",value:function e(t){this.animationFrameId=requestAnimationFrame(this.tick);if(!this.state.runAnimation)return;if(this.state.lastAdvance===null){this.setState({lastAdvance:t})}else if(t-this.state.lastAdvance>this.props.delay){this.setState({selected:(this.state.selected+1)%(this.props.script.length+1),lastAdvance:t})}}},{key:"render",value:function e(){var t=this.state.runAnimation?"Pause":"Play";return n.createElement("div",{style:{position:"relative"}},n.createElement(o.default,u({},this.props,{scrollBox:true,onClick:this.onClick,selected:this.state.selected})),n.createElement("div",{style:{position:"absolute",width:b,top:10,left:0}},n.createElement("div",{class:"btn btn-accent row",onClick:this.toggleRunAnimation},t)))}}]);return t}(n.Component);t.default=v},1397:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=i(r(819));var o=r(1058);function i(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function a(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){a=function e(t){return typeof t}}else{a=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return a(e)}function s(e,t){return c(e)||l(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(e,t){var r=[];var n=true;var o=false;var i=undefined;try{for(var a=e[Symbol.iterator](),s;!(n=(s=a.next()).done);n=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){o=true;i=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw i}}return r}function c(e){if(Array.isArray(e))return e}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function d(e,t,r){if(t)p(e.prototype,t);if(r)p(e,r);return e}function h(e,t){if(t&&(a(t)==="object"||typeof t==="function")){return t}return y(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return m(e)}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)v(e,t)}function v(e,t){v=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return v(e,t)}function O(e,t,r,i,a){var s=Math.floor(e/o.SLICE_WIDTH);var u=s*o.SLICE_WIDTH*t;var l=(e*t-u)/t;var c=[];var f=Math.ceil(r/(o.SLICE_WIDTH*t));var p=Math.floor(i/(o.SLICE_WIDTH*t));if(f>p){var d=r%(t*o.SLICE_WIDTH);var h=i-r;var y=i<=u?o.SLICE_WIDTH:l;return n.createElement("rect",{x:p*y,y:d/y,width:y,height:h/y,style:"fill:".concat(a)})}if(f<p){var m=i===e*t?e:p*o.SLICE_WIDTH;c.push(n.createElement("rect",{x:f*o.SLICE_WIDTH,y:0,width:m-f*o.SLICE_WIDTH,height:t,style:"fill:".concat(a)}))}if(r%(o.SLICE_WIDTH*t)!==0){var b=r%(o.SLICE_WIDTH*t)/o.SLICE_WIDTH;c.push(n.createElement("rect",{x:Math.floor(r/(o.SLICE_WIDTH*t))*o.SLICE_WIDTH,y:b,width:o.SLICE_WIDTH,height:t-b,style:"fill:".concat(a)}))}if(i>u){c.push(n.createElement("rect",{x:s*o.SLICE_WIDTH,y:0,width:l,height:i%(o.SLICE_WIDTH*t)/l,style:"fill:".concat(a)}))}else if(i%(o.SLICE_WIDTH*t)!==0){c.push(n.createElement("rect",{x:Math.floor(i/(o.SLICE_WIDTH*t))*o.SLICE_WIDTH,y:0,width:o.SLICE_WIDTH,height:i%(o.SLICE_WIDTH*t)/o.SLICE_WIDTH,style:"fill:".concat(a)}))}return c}var _=function(e){b(t,e);function t(){f(this,t);return h(this,m(t).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t=this.props.width;var r=Math.ceil(this.props.total/t/o.SHOWBAR_HEIGHT);var i=o.SHOWBAR_HEIGHT*r;var a=Math.floor(t/o.SLICE_WIDTH);var u=t%o.SLICE_WIDTH;var l=Math.floor(this.props.target/(o.SLICE_WIDTH*i));var c=this.props.target%(o.SLICE_WIDTH*i);var f=l<a?o.SLICE_WIDTH:u;var p=Math.floor(c/f)+.5;var d=p/r;var h=l*o.SLICE_WIDTH+c%f+.5;var y=this.props.mid===false||this.props.target<this.props.mid?[o.COLOR_TRUE,o.COLOR_FALSE]:[o.COLOR_FALSE,o.COLOR_TRUE],m=s(y,2),b=m[0],v=m[1];var _=this.props.mid===false?this.props.max:this.props.mid;return n.createElement("div",null,n.createElement("div",{style:{position:"absolute",width:this.props.width,textAlign:"center",left:0,top:10,fontSize:13}},"Mystery person is 1 of ".concat(this.props.max-this.props.min)),n.createElement("div",{style:{position:"absolute",width:this.props.width,textAlign:"center",left:0,top:30,fontSize:13}},n.createElement("div",{style:{width:10,height:10,background:"#005FFA",display:"inline-block"}})," = ","".concat(100*r," actors")),n.createElement("div",{style:{position:"absolute",width:this.props.width,textAlign:"center",left:0,top:50,fontSize:13}},this.props.steps?"".concat(this.props.steps," questions needed to solve"):"Groups have size ".concat(this.props.mid," and ").concat(this.props.max-this.props.mid," ")),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",background:"#FFFFFF",top:o.HEADER_HEIGHT,left:0},width:t,height:o.SHOWBAR_HEIGHT,preserveAspectRatio:"none",viewBox:"0 0 ".concat(t," ").concat(i)},O(t,i,0,this.props.total,"#D8D8D8"),O(t,i,this.props.min,_,b),_!==this.props.max&&O(t,i,_,this.props.max,v)),!this.props.hideTarget&&n.createElement("div",{style:{position:"absolute",width:o.CIRC_SIZE,height:o.CIRC_SIZE,left:h-o.CIRC_SIZE/2,top:o.HEADER_HEIGHT+d-o.CIRC_SIZE/2,background:"#005FFA",border:"2px solid #FFFFFF",borderRadius:o.CIRC_SIZE/2}}))}}]);return t}(n.Component);t.default=_},2018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(819));var o=i(r(1396));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function s(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function e(t){return typeof t}}else{s=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return s(e)}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)l(e.prototype,t);if(r)l(e,r);return e}function f(e,t){if(t&&(s(t)==="object"||typeof t==="function")){return t}return p(e)}function p(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)y(e,t)}function y(e,t){y=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return y(e,t)}var m=[{q:"Are they a man?",a:false,eliminates:109966},{q:"Are they an EU citizen?",a:false,eliminates:26671},{q:"Were they born after 1960?",a:true,eliminates:32909},{q:"Does Wikipedia list them as a cast member of any production?",a:true,eliminates:18849},{q:"Are they listed as a television actor?",a:false,eliminates:5485},{q:"Do they speak English?",a:true,eliminates:3870},{q:"Did they appear in any films before 2006?",a:false,eliminates:932},{q:"Are they a United States citizen?",a:true,eliminates:671},{q:"Did they appear in a film between 2012-2016?",a:true,eliminates:185},{q:"Were they born after 1985?",a:false,eliminates:111},{q:"Have they appeared in a comedy film?",a:false,eliminates:33},{q:"Have they appeared in a thriller film?",a:false,eliminates:15},{q:"Have they appeared in a romantic comedy?",a:false,eliminates:8},{q:"Have they appeared in a documentary film?",a:false,eliminates:12},{q:"Have they appeared in a drama film?",a:true,eliminates:26},{q:"Were they born after 1980?",a:true,eliminates:8},{q:"Were they born after 1983?",a:true,eliminates:5},{q:"Does their first name start with A-F?",a:true,eliminates:2},{q:"Also a singer-songwriter?",a:true,eliminates:2}];var b=function(e){h(t,e);function t(){u(this,t);return f(this,d(t).apply(this,arguments))}c(t,[{key:"render",value:function e(){return n.createElement(o.default,{delay:this.props.delay,width:this.props.width,script:m,final:"They are Janelle Monae."})}}]);return t}(n.Component);t.default=b},2019:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=s(r(819));var o=a(r(1397));var i=r(1058);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function u(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){u=function e(t){return typeof t}}else{u=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return u(e)}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function f(e,t,r){if(t)c(e.prototype,t);if(r)c(e,r);return e}function p(e,t){if(t&&(u(t)==="object"||typeof t==="function")){return t}return d(e)}function d(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return h(e)}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)m(e,t)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return m(e,t)}var b=function(e){y(t,e);function t(){l(this,t);return p(this,h(t).apply(this,arguments))}f(t,[{key:"numberOfCandidates",value:function e(t,r){if(r===t.length)return 1;return this.numberOfCandidates(t,r+1)+t[r].eliminates}},{key:"startOfCandidates",value:function e(t,r){if(r===0)return 0;if(t[r-1].a)return this.startOfCandidates(t,r-1);return this.startOfCandidates(t,r-1)+t[r-1].eliminates}},{key:"render",value:function e(){var t=this;var r=this.props.script.map((function(e){return n.createElement("span",null,e.q," ",n.createElement("span",{style:{fontWeight:"bold",color:e.a?i.COLOR_TRUE:i.COLOR_FALSE}},e.a?"Yes.":"No."))})).concat([n.createElement("span",{style:{fontWeight:"bold",color:i.COLOR_TRUE}},this.props.final)]);return n.createElement("div",{style:{width:this.props.width,height:i.HEADER_HEIGHT+i.SHOWBAR_HEIGHT+i.SCROLLBOX_HEIGHT,position:"relative"}},this.props.scrollBox&&n.createElement("div",{style:{position:"absolute",overflow:"auto",width:this.props.width,height:i.SCROLLBOX_HEIGHT,top:i.HEADER_HEIGHT+i.SHOWBAR_HEIGHT,left:0,color:"#5D7E8E",lineHeight:1.1}},r.map((function(e,r){return n.createElement("div",{onClick:function e(){return t.props.onClick&&t.props.onClick(r)},style:{background:r===t.props.selected?"#FEC42D2A":"#FFFFFF",paddingLeft:16,paddingRight:16,paddingTop:8,paddingBottom:8}},n.createElement("div",null,e))}))),n.createElement(o.default,{steps:this.props.script.length,total:this.numberOfCandidates(this.props.script,0),min:this.startOfCandidates(this.props.script,this.props.selected||0),mid:typeof this.props.selected==="number"&&this.props.selected<this.props.script.length&&(this.props.script[this.props.selected].a?this.startOfCandidates(this.props.script,this.props.selected)+this.numberOfCandidates(this.props.script,this.props.selected)-this.props.script[this.props.selected].eliminates:this.startOfCandidates(this.props.script,this.props.selected)+this.props.script[this.props.selected].eliminates),max:this.startOfCandidates(this.props.script,this.props.selected||0)+this.numberOfCandidates(this.props.script,this.props.selected||0),target:this.startOfCandidates(this.props.script,this.props.script.length),width:this.props.width}))}}]);return t}(n.Component);t.default=b},2020:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=u(r(819));var o=s(r(2021));var i=s(r(1396));var a=r(1058);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function l(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){l=function e(t){return typeof t}}else{l=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return l(e)}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function p(e,t,r){if(t)f(e.prototype,t);if(r)f(e,r);return e}function d(e,t){if(t&&(l(t)==="object"||typeof t==="function")){return t}return y(e)}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return h(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return b(e,t)}function v(e,t,r){var n=0;var o=e;var i=[];while(n+1!==o){var a=Math.ceil(n+(o-n)*t);var s="In the first ".concat(a-n," of ").concat(o-n," actors?");if(r<a){var u=true;var l=o-a;i.push({q:s,a:u,eliminates:l});o=a}else{var c=false;var f=a-n;i.push({q:s,a:c,eliminates:f});n=a}}return i}var O=function(e){m(t,e);function t(e){var r;c(this,t);r=d(this,h(t).call(this,e));r.onClick=r.onClick.bind(y(r));var n=r.props.target===undefined?Math.floor(Math.random()*a.TOTAL_RANDOM):r.props.target;r.state={script:v(a.TOTAL_RANDOM,.25,n),target:n,mode:"uneven"};return r}p(t,[{key:"onClick",value:function e(){var t=Math.floor(Math.random()*a.TOTAL_RANDOM);var r=this.state.mode==="even"?.5:.25;this.setState({script:v(a.TOTAL_RANDOM,r,t),target:t})}},{key:"render",value:function e(){return n.createElement("div",{style:{width:this.props.width}},this.props.target===undefined&&n.createElement("div",null,n.createElement("div",null,"Ask 25/75 questions? ",n.createElement("input",{type:"radio",name:"fraction",value:"uneven",checked:this.state.mode==="uneven",onChange:(0,o.default)(this,"mode","target.value")})),n.createElement("div",null,"Ask 50/50 questions? ",n.createElement("input",{type:"radio",name:"fraction",value:"even",checked:this.state.mode==="even",onChange:(0,o.default)(this,"mode","target.value")})),n.createElement("div",{style:{width:100,height:32}},n.createElement("div",{class:"btn btn-accent row",onClick:this.onClick},"Simulate!"))),this.props.target===undefined&&n.createElement("hr",null),n.createElement(i.default,{delay:this.props.delay,width:this.props.width,key:this.state.target,script:this.state.script,final:"Located actor number ".concat(this.state.target+1,".")}))}}]);return t}(n.Component);t.default=O},2021:function(e,t,r){"use strict";r.r(t);function n(e,t,r,n){n=0;t=t.split?t.split("."):t;while(e&&n<t.length){e=e[t[n++]]}return e===undefined?r:e}function o(e,t,r){var o=t.split("."),i=e.__lsc||(e.__lsc={});return i[t+r]||(i[t+r]=function(t){var i=t&&t.target||this,a={},s=a,u=typeof r==="string"?n(t,r):i.nodeName?i.type.match(/^che|rad/)?i.checked:i.value:t,l=0;for(;l<o.length-1;l++){s=s[o[l]]||(s[o[l]]=!l&&e.state[o[l]]||{})}s[o[l]]=u;e.setState(a)})}t["default"]=o},2022:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(819));var o=i(r(1397));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function s(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function e(t){return typeof t}}else{s=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return s(e)}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)l(e.prototype,t);if(r)l(e,r);return e}function f(e,t){if(t&&(s(t)==="object"||typeof t==="function")){return t}return p(e)}function p(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)y(e,t)}function y(e,t){y=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return y(e,t)}var m=function(e){h(t,e);function t(){u(this,t);return f(this,d(t).apply(this,arguments))}c(t,[{key:"render",value:function e(){return n.createElement("div",{style:{position:"relative",width:this.props.width,height:600}},n.createElement(o.default,{steps:this.props.steps,total:this.props.total,min:this.props.min,mid:this.props.mid,max:this.props.max,target:this.props.target,width:this.props.width,hideTarget:true}))}}]);return t}(n.Component);t.default=m},328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=t.MAX_WIDTH=t.MIN_WIDTH=void 0;var n=l(r(819));var o=u(r(1057));var i=u(r(2018));var a=u(r(2020));var s=u(r(2022));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}var c=288;t.MIN_WIDTH=c;var f=500;t.MAX_WIDTH=f;var p=(0,o.default)(i.default);var d=(0,o.default)(a.default);var h=(0,o.default)(s.default);var y={createInteractive:function e(t){var r=document.getElementById(t.visualizationKey);r.innerHTML="";switch(t.authoredData.special){case"monae":n.render(n.createElement(p,{minWidth:c,maxWidth:f,delay:1500}),r);break;case"monae1":n.render(n.createElement(h,{steps:null,total:199761,target:0,min:0,mid:109966,max:199761}),r);break;case"monae2":n.render(n.createElement(h,{steps:null,total:199761,target:0,min:0,mid:5556,max:199761}),r);break;case"monae3":n.render(n.createElement(h,{steps:null,total:199761,target:0,min:0,mid:6,max:199761}),r);break;case"random":n.render(n.createElement(d,{minWidth:c,maxWidth:f,delay:500}),r);break;case"random1":n.render(n.createElement(d,{minWidth:c,maxWidth:f,delay:500,target:0}),r);break;case"random2":n.render(n.createElement(d,{minWidth:c,maxWidth:f,delay:500,target:199999}),r);break;default:r.innerHTML="Unknown spec ".concat(t.authoredData.special);break}},createInteractiveSolvable:function e(){throw new Error("Interactive solvables not supported for CS on-offs")}};t.default=y}}]);
//# sourceMappingURL=viz-02-cs-one-offs.e67b2a826d0e24c70921.js.map