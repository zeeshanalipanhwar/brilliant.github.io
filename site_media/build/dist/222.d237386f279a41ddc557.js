(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[222],{1004:function(e,t){var n=null;var o=null;if(!("PointerEvent"in window)){i();if(!("TouchEvent"in window)){r(document,"mousedown","pointerdown");r(document,"mousemove","pointermove");r(document,"mouseup","pointerup")}u(document,"touchstart","pointerdown");u(document,"touchmove","pointermove");u(document,"touchend","pointerup")}function i(){Element.prototype.setPointerCapture=Element.prototype.setCapture;Element.prototype.releasePointerCapture=Element.prototype.releaseCapture}function r(e,t,n){e.addEventListener(t,(function(e){var i=new MouseEvent(n,e);i.pointerId=1;i.isPrimary=true;i.pointerType="mouse";i.width=1;i.height=1;i.tiltX=0;i.tiltY=0;"buttons"in e&&e.buttons!==0?i.pressure=.5:i.pressure=0;var r=e.target;if(o!==null){r=o;if(t==="mouseup"){o=null}}r.dispatchEvent(i);if(i.defaultPrevented){e.preventDefault()}}))}function u(e,t,o){e.addEventListener(t,(function(e){var i=e.changedTouches;var r=i.length;for(var u=0;u<r;u++){var c=new CustomEvent(o,{bubbles:true,cancelable:true});c.ctrlKey=e.ctrlKey;c.shiftKey=e.shiftKey;c.altKey=e.altKey;c.metaKey=e.metaKey;var s=i.item(u);c.clientX=s.clientX;c.clientY=s.clientY;c.screenX=s.screenX;c.screenY=s.screenY;c.pageX=s.pageX;c.pageY=s.pageY;var l=s.target.getBoundingClientRect();c.offsetX=s.clientX-l.left;c.offsetY=s.clientY-l.top;c.pointerId=1+s.identifier;c.button=0;c.buttons=1;c.movementX=0;c.movementY=0;c.region=null;c.relatedTarget=null;c.x=c.clientX;c.y=c.clientY;c.pointerType="touch";c.width=1;c.height=1;c.tiltX=0;c.tiltY=0;c.pressure=1;if(t==="touchstart"&&n===null){n=s.identifier}c.isPrimary=s.identifier===n;if(t==="touchend"&&c.isPrimary){n=null}e.target.dispatchEvent(c);if(c.defaultPrevented){e.preventDefault()}}}))}},799:function(e,t,n){"use strict";n.r(t);n.d(t,"setupNeuralNetworkPointerEvents",(function(){return r}));var o=n(1004);var i=n.n(o);function r(e){const t=t=>{const n=t.clientX;const o=t.clientY;const i=e.root.getBoundingClientRect();const r=i.left<n&&n<i.right;const u=i.top<o&&o<i.bottom;const c=r&&u;if(!c){e.ports.clickOutside.send({})}};const n=t=>{e.ports.pointerUp.send({})};const o=t=>{e.ports.pointerCancel.send({})};document.addEventListener("click",t);document.addEventListener("pointerup",n);document.addEventListener("pointercancel",o);const i=()=>{document.addEventListener("click",t);document.removeEventListener("pointerup",n);document.removeEventListener("pointercancel",o)};return i}}}]);
//# sourceMappingURL=222.d237386f279a41ddc557.js.map