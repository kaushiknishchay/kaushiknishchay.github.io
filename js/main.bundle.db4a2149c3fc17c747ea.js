!function(c){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],i=0,u=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t]);for(p&&p(e);u.length;)u.shift()();return f.push.apply(f,o||[]),l()}function l(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(f.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},s={0:0},f=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=c,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var p=r;f.push([7,2,1]),l()}([,function(e,t,n){"use strict";var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return}}()?Object.assign:function(e,t){for(var n,r,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var i in n=Object(arguments[o]))l.call(n,i)&&(a[i]=n[i]);if(c){r=c(n);for(var u=0;u<r.length;u++)s.call(n,r[u])&&(a[r[u]]=n[r[u]])}}return a}},,,,function(e,t,n){"use strict";e.exports=n(6)},function(e,o,t){"use strict";var i,u,c,n,r,a,l,s,f,p,b,h,d,m,y,v,w,g,_,k;function O(e,t){var n=e.length;e.push(t);e:for(;;){var r=Math.floor((n-1)/2),a=e[r];if(!(void 0!==a&&0<E(a,t)))break e;e[r]=t,e[n]=a,n=r}}function j(e){return void 0===(e=e[0])?null:e}function P(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,i=e[o],u=1+o,c=e[u];if(void 0!==i&&E(i,n)<0)r=void 0!==c&&E(c,i)<0?(e[r]=c,e[u]=n,u):(e[r]=i,e[o]=n,o);else{if(!(void 0!==c&&E(c,n)<0))break e;e[r]=c,e[u]=n,r=u}}}return t}}function E(e,t){var n=e.sortIndex-t.sortIndex;return 0!=n?n:e.id-t.id}Object.defineProperty(o,"__esModule",{value:!0}),"undefined"==typeof window||"function"!=typeof MessageChannel?(r=n=null,a=function(){if(null!==n)try{var e=o.unstable_now();n(!0,e),n=null}catch(e){throw setTimeout(a,0),e}},l=Date.now(),o.unstable_now=function(){return Date.now()-l},i=function(e){null!==n?setTimeout(i,0,e):(n=e,setTimeout(a,0))},u=function(e,t){r=setTimeout(e,t)},c=function(){clearTimeout(r)},g=function(){return!1},F=o.unstable_forceFrameRate=function(){}):(s=window.performance,f=window.Date,p=window.setTimeout,b=window.clearTimeout,"undefined"!=typeof console&&(_=window.cancelAnimationFrame),"object"==typeof s&&"function"==typeof s.now?o.unstable_now=function(){return s.now()}:(h=f.now(),o.unstable_now=function(){return f.now()-h}),d=!1,m=null,y=-1,v=5,w=0,g=function(){return o.unstable_now()>=w},F=function(){},o.unstable_forceFrameRate=function(e){e<0||125<e||(v=0<e?Math.floor(1e3/e):5)},_=new MessageChannel,k=_.port2,_.port1.onmessage=function(){if(null!==m){var e=o.unstable_now();w=e+v;try{m(!0,e)?k.postMessage(null):(d=!1,m=null)}catch(e){throw k.postMessage(null),e}}else d=!1},i=function(e){m=e,d||(d=!0,k.postMessage(null))},u=function(e,t){y=p(function(){e(o.unstable_now())},t)},c=function(){b(y),y=-1});var x=[],T=[],N=1,S=null,I=3,M=!1,C=!1,R=!1;function D(e){for(var t=j(T);null!==t;){if(null===t.callback)P(T);else{if(!(t.startTime<=e))break;P(T),t.sortIndex=t.expirationTime,O(x,t)}t=j(T)}}function J(e){var t;R=!1,D(e),C||(null!==j(x)?(C=!0,i(L)):null!==(t=j(T))&&u(J,t.startTime-e))}function L(e,t){C=!1,R&&(R=!1,c()),M=!0;var n=I;try{for(D(t),S=j(x);null!==S&&(!(S.expirationTime>t)||e&&!g());){var r=S.callback;null!==r?(S.callback=null,I=S.priorityLevel,r=r(S.expirationTime<=t),t=o.unstable_now(),"function"==typeof r?S.callback=r:S===j(x)&&P(x),D(t)):P(x),S=j(x)}var a=null!==S||(null!==(a=j(T))&&u(J,a.startTime-t),!1);return a}finally{S=null,I=n,M=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var F=F;o.unstable_ImmediatePriority=1,o.unstable_UserBlockingPriority=2,o.unstable_NormalPriority=3,o.unstable_IdlePriority=5,o.unstable_LowPriority=4,o.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=I;I=e;try{return t()}finally{I=n}},o.unstable_next=function(e){switch(I){case 1:case 2:case 3:var t=3;break;default:t=I}var n=I;I=t;try{return e()}finally{I=n}},o.unstable_scheduleCallback=function(e,t,n){var r,a=o.unstable_now();return"object"==typeof n&&null!==n?(r="number"==typeof(r=n.delay)&&0<r?a+r:a,n="number"==typeof n.timeout?n.timeout:U(e)):(n=U(e),r=a),e={id:N++,callback:t,priorityLevel:e,startTime:r,expirationTime:n=r+n,sortIndex:-1},a<r?(e.sortIndex=r,O(T,e),null===j(x)&&e===j(T)&&(R?c():R=!0,u(J,r-a))):(e.sortIndex=n,O(x,e),C||M||(C=!0,i(L))),e},o.unstable_cancelCallback=function(e){e.callback=null},o.unstable_wrapCallback=function(t){var n=I;return function(){var e=I;I=n;try{return t.apply(this,arguments)}finally{I=e}}},o.unstable_getCurrentPriorityLevel=function(){return I},o.unstable_shouldYield=function(){var e=o.unstable_now();D(e);var t=j(x);return t!==S&&null!==S&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<S.expirationTime||g()},o.unstable_requestPaint=F,o.unstable_continueExecution=function(){C||M||(C=!0,i(L))},o.unstable_pauseExecution=function(){},o.unstable_getFirstCallbackNode=function(){return j(x)},o.unstable_Profiling=null},function(e,t,n){"use strict";function r(){return o.a.createElement("div",{className:"header-bar",role:"navigation"},o.a.createElement("div",{className:"header-bar--links"}),o.a.createElement("div",{className:"social--icons"},i.map(function(e){return o.a.createElement("div",{key:e.icon,className:"social--icon__item"},o.a.createElement("a",{href:e.url,title:"".concat(e.icon)},o.a.createElement("i",{className:"".concat(e.icon)})))})))}n.r(t);var a=n(0),o=n.n(a),t=n(2),i=[{name:"kaushiknishchay",icon:"linkedin",url:"https://linkedin.com/in/kaushiknishchay"},{name:"kaushik.nishchay",icon:"instagram",url:"https://instagram.com/kaushik.nishchay"},{name:"kaushiknishchay",icon:"github",url:"https://github.com/kaushiknishchay"}];function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,a.Component);var t=function(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e=s(n),t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this;return!t||"object"!==u(t)&&"function"!=typeof t?function(){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():t}}(n);function n(e){return function(e){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),(e=t.call(this,e)).state={introText:"\n        I'm a Bengaluru (India) based developer.\n        I work on JavaScript, React.JS, React Native, Node.JS, Python.\n      ",lastUpdated:null},e}return c(n.prototype,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.github.com/repos/kaushiknishchay/kaushiknishchay.github.io").then(function(e){return e.json()}).then(function(e){e=e.updated_at,t.setState({lastUpdated:new Date(e).toDateString()})}).catch(function(){})}},{key:"render",value:function(){var e=(t=this.state).introText,t=t.lastUpdated;return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"header-wrap",role:"main","aria-label":"Nishchay Kaushik introduction."},o.a.createElement(r,null),o.a.createElement("div",{className:"heading--title"},o.a.createElement("h1",{className:"main--heading"},"Nishchay Kaushik"),o.a.createElement("h2",{className:"sub--heading"},"Software Development Engineer - II"),o.a.createElement("div",{className:"description"},e,o.a.createElement("p",{style:{marginTop:"3em"}},o.a.createElement("a",{href:"/resume/NishchayKaushik_Resume.pdf",className:"download_cv",onClick:"ga('send', 'event', 'Download', 'resume', 'version 1');"},"Resume")))),t&&o.a.createElement("span",{className:"last--updated"},"Last Updated at: ".concat(t||""))))}}]),n}(),Object(t.render)(o.a.createElement(n,null),document.getElementById("app"))}]);