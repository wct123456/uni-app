/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r}var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function r(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}for(var o=[],u=0;u<256;++u)o[u]=(u+256).toString(16).substr(1);function i(e,t,n){var u=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[u+c]=i[c];return t||function(e,t){var n=t||0,r=o;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}(i)}var c=Object.prototype.hasOwnProperty,a=Array.isArray,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;function l(e,t){if(a(e))return e;if(t&&(n=t,r=e,c.call(n,r)))return[e];var n,r,o=[];return e.replace(s,(function(e,t,n,r){return o.push(n?r.replace(/\\(\\)?/g,"$1"):t||e),r})),o}function f(e,t){var n,r=l(t,e);for(n=r.shift();null!=n;){if(null==(e=e[n]))return;n=r.shift()}return e}var d=new Map;function m(e){var t=d.get(e);if(!t)throw Error("element destroyed");return t.element}function p(e){if(!function(e){if(e){var t=e.tagName;return 0===t.indexOf("UNI-")||"BODY"===t}return!1}(e))throw Error("no such element");var t,n,r={elementId:(t=e,n=t._id,n||(n=i(),t._id=n,d.set(n,{id:n,element:t})),n),tagName:e.tagName.toLocaleLowerCase().replace("uni-","")},o=e.__vue__;return o&&!o.$options.isReserved&&(r.nodeId=function(e){if(e._$id)return e._$id;var t=function(e){for(var t=e.$parent;t;){if(t._$id)return t;t=t.$parent}}(e);if(!e.$parent)return"-1";var n=e.$vnode,r=n.context;return r&&r!==t&&r._$id?r._$id+";"+t._$id+","+n.data.attrs._i:t._$id+","+n.data.attrs._i}(o)),"video"===r.tagName&&(r.videoId=r.nodeId),r}function v(e,t){return Promise.resolve(p(e.querySelector(t)))}function g(e,t){var n=[];return document.querySelectorAll(t).forEach((function(e){try{n.push(p(e))}catch(e){}})),Promise.resolve({elements:n})}function _(e,t){return Promise.resolve({properties:t.map((function(t){var n=f(e,t);return"document.documentElement.scrollTop"===t&&0===n&&(n=f(e,"document.body.scrollTop")),n}))})}function h(e,t,n){n||(n={}),n.touches||(n.touches=[]),n.changedTouches||(n.changedTouches=[]),n.touches.length||n.touches.push({identifier:Date.now(),target:e});var r=n.touches.map((function(e){return new Touch(e)})),o=n.changedTouches.map((function(e){return new Touch(e)}));return e.dispatchEvent(new TouchEvent(t,{cancelable:!0,bubbles:!0,touches:r,targetTouches:[],changedTouches:o})),Promise.resolve()}var y={input:{input:function(e,t){var n=e.__vue__;n.inputValue=t,n._onInput({target:{value:t}})}},textarea:{input:function(e,t){e.__vue__.valueSync=t}},"scroll-view":{scrollTo:function(e,t,n){var r=e.__vue__.$refs.main;r.scrollLeft=t,r.scrollTop=n},scrollTop:function(e){return e.__vue__.$refs.main.scrollTop},scrollLeft:function(e){return e.__vue__.$refs.main.scrollLeft},scrollWidth:function(e){return e.__vue__.$refs.main.scrollWidth},scrollHeight:function(e){return e.__vue__.$refs.main.scrollHeight}},swiper:{swipeTo:function(e,t){e.__vue__.current=t}},"movable-view":{moveTo:function(e,t,n){e.__vue__._animationTo(t,n)}},switch:{tap:function(e){e.click()}},slider:{slideTo:function(e,t){var n=e.__vue__,r=n.$refs["uni-slider"],o=r.offsetWidth,u=r.getBoundingClientRect().left;n.value=t,n._onClick({x:(t-n.min)*o/(n.max-n.min)+u})}}};var w={getElement:function(e){return v(document,e.selector)},getElements:function(e){return g(document,e.selector)},getWindowProperties:function(e){return _(window,e.names)}},$={getElement:function(e){return v(m(e.elementId),e.selector)},getElements:function(e){return g(m(e.elementId),e.selector)},getDOMProperties:function(e){return _(m(e.elementId),e.names)},getProperties:function(e){return _(m(e.elementId).__vue__,e.names)},getOffset:function(e){var t=m(e.elementId).getBoundingClientRect();return Promise.resolve({left:t.left+window.pageXOffset,top:t.top+window.pageYOffset})},getAttributes:function(e){return t=m(e.elementId),n=e.names,Promise.resolve({attributes:n.map((function(e){return String(t.getAttribute(e))}))});var t,n},getStyles:function(e){return t=m(e.elementId),n=e.names,r=getComputedStyle(t),Promise.resolve({styles:n.map((function(e){return r[e]}))});var t,n,r},getHTML:function(e){return t=m(e.elementId),n=e.type,Promise.resolve({html:(r="outer"===n?t.outerHTML:t.innerHTML,r.replace(/\n/g,"").replace(/(<uni-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/uni-text>)/g,"$1$3").replace(/<\/?[^>]*>/g,(function(e){return-1<e.indexOf("<body")?"<page>":"</body>"===e?"</page>":0!==e.indexOf("<uni-")&&0!==e.indexOf("</uni-")?"":e.replace(/uni-/g,"").replace(/ role=""/g,"").replace(/ aria-label=""/g,"")})))});var t,n,r},tap:function(e){return m(e.elementId).click(),Promise.resolve()},touchstart:function(e){return h(m(e.elementId),"touchstart",e)},touchmove:function(e){return h(m(e.elementId),"touchmove",e)},touchend:function(e){return h(m(e.elementId),"touchend",e)},callFunction:function(t){return n=m(t.elementId),r=t.functionName,o=t.args,(u=f(y,r))?Promise.resolve({result:u.apply(null,e([n],o))}):Promise.reject(Error(r+" not exists"));var n,r,o,u},triggerEvent:function(e){return t=m(e.elementId),n=e.type,r=e.detail,(o=t.__vue__).$trigger&&o.$trigger(n,{},r),Promise.resolve();var t,n,r,o}},b={};function T(e){return UniViewJSBridge.publishHandler("onAutoMessageReceive",e)}Object.keys(w).forEach((function(e){b["Page."+e]=w[e]})),Object.keys($).forEach((function(e){b["Element."+e]=$[e]})),UniViewJSBridge.subscribe("sendAutoMessage",(function(e){var t=e.id,n=e.method,r=e.params,o={id:t},u=b[n];if(!u)return o.error={message:n+" unimplemented"},T(o);try{u(r).then((function(e){e&&(o.result=e)})).catch((function(e){o.error={message:e.message}})).finally((function(){T(o)}))}catch(e){o.error={message:e.message},T(o)}}));