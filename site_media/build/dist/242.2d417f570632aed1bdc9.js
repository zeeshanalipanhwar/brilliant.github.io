(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[242],{2508:function(e,t,r){(function(e){if(true)e(r(128));else{}})((function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,r){t(r);return r(e,t)}var t=/[a-z_]/;var r=/[A-Z]/;var n=/[0-9]/;var i=/[0-9A-Fa-f]/;var a=/[0-7]/;var u=/[a-z_A-Z0-9\']/;var f=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/;var o=/[(),;[\]`{}]/;var l=/[ \t\v\f]/;function c(){return function(c,h){if(c.eatWhile(l)){return null}var p=c.next();if(o.test(p)){if(p=="{"&&c.eat("-")){var m="comment";if(c.eat("#"))m="meta";return e(c,h,s(m,1))}return null}if(p=="'"){if(c.eat("\\"))c.next();else c.next();if(c.eat("'"))return"string";return"error"}if(p=='"'){return e(c,h,v)}if(r.test(p)){c.eatWhile(u);if(c.eat("."))return"qualifier";return"variable-2"}if(t.test(p)){var x=c.pos===1;c.eatWhile(u);return x?"type":"variable"}if(n.test(p)){if(p=="0"){if(c.eat(/[xX]/)){c.eatWhile(i);return"integer"}if(c.eat(/[oO]/)){c.eatWhile(a);return"number"}}c.eatWhile(n);var m="number";if(c.eat(".")){m="number";c.eatWhile(n)}if(c.eat(/[eE]/)){m="number";c.eat(/[-+]/);c.eatWhile(n)}return m}if(f.test(p)){if(p=="-"&&c.eat(/-/)){c.eatWhile(/-/);if(!c.eat(f)){c.skipToEnd();return"comment"}}c.eatWhile(f);return"builtin"}return"error"}}function s(e,t){if(t==0){return c()}return function(r,n){var i=t;while(!r.eol()){var a=r.next();if(a=="{"&&r.eat("-")){++i}else if(a=="-"&&r.eat("}")){--i;if(i==0){n(c());return e}}}n(s(e,i));return e}}function v(e,t){while(!e.eol()){var r=e.next();if(r=='"'){t(c());return"string"}if(r=="\\"){if(e.eol()||e.eat(l)){t(h);return"string"}if(!e.eat("&"))e.next()}}t(c());return"error"}function h(t,r){if(t.eat("\\")){return e(t,r,v)}t.next();r(c());return"error"}var p=function(){var e={};var t=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"];for(var r=t.length;r--;)e[t[r]]="keyword";return e}();return{startState:function(){return{f:c()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e}));var n=e.current();return p.hasOwnProperty(n)?p[n]:r}}}));e.defineMIME("text/x-elm","elm")}))}}]);
//# sourceMappingURL=242.2d417f570632aed1bdc9.js.map