(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.feedbackjs = {}));
}(this, (function (exports) { 'use strict';

    var pragmas = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get Feedback () { return Feedback; }
    });

    function e(t,e=null,n=["rerun the code 10 times"],i=null,r=!1){if(!M()&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function n(){if(!M())return null;console.log(...arguments);}function i(){if(!M())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class r{constructor(t){this.self=t,this.actions=new Map,this.delete=this.destroy;}addWithKey(t,e=null){return e=e||this.actions.size,this.actions.set(e,t),e}add(...t){let e=[];for(let n of t)e.push(this.addWithKey(n));return e.length>1?e:e[0]}forAction(t){for(let[e,n]of this.actions)t(e,n);}exec(...t){this.execAs(this.self,...t);}destroy(...t){t.forEach((t=>this.actions.delete(t)));}execAs(t,...e){this.forAction(((n,i)=>{let r=null;if(r="function"==typeof i.bind?i.bind(t)(...e):i(...e),"function"==typeof r){r({key:n,action:i,replaceWith:t=>{},selfDestruct:()=>{this.destroy(n);}});}}));}}function s(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function o(){return a(8)}function a(t=7){return t<5?s():(s()+a(t-5)).substring(0,t)}function l(t){return a(t)}function h(t,e){for(let[n,i]of Object.entries(e))t[n]=i;return t}const c=t=>t.replace(/([-_]\w)/g,(t=>t[1].toUpperCase()));function u(t,e){let n=`${t}Chain`,i=`on${t.capitalize()}`;return e[n]=new r(e),e[i]=function(t,i){e[n].addWithKey(t,i);},{chainName:n,eventName:i}}function f(t,...e){for(let n of e)u(n,t);}function d(t,e){let n=u(t,e),i=`is${t.capitalize()}ed`;e[n.chainName].add((()=>{e[i]=!0;})),e[n.eventName]=function(t){if(e[i])return t(e);e[n.chainName].add(t);};}function p(t,...e){for(let n of e)d(n,t);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const g=t=>t.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),p(globalThis.pragmaSpace,"docLoad");const m=globalThis.pragmaSpace.onDocLoad;function y(){globalThis.pragmaSpace.isDocLoaded||(i("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}"complete"===document.readyState?y():(document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&y();})),document.addEventListener("turbolinks:load",(()=>{i("🚀 TURBOLINKS loaded"),y();})));var v=/[#.]/g;function x(t,e="div"){var n=t||"",i={tag:e},r=0;let s,o,a;for(;r<n.length;)v.lastIndex=r,a=v.exec(n),s=n.slice(r,a?a.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),a&&(o=a[0],r++);return i}function b(t,n,i){if(!Array.isArray(t))return e(`Could not ${i} class [${t}] -> [${n}]`);for(let e of t){let t=e.split(" ");t.length>1?b(t,n,i):n.classList[i](e);}}function _(t,e){b(t,e,"add");}function $(t,e){b(t,e,"remove");}function C(t,e){b(t,e,"toggle");}function E(t){t=t.trim();try{let e=document.querySelector(t);if(e)return e}catch{}let e=x(t),n=document.createElement(e.tag||"div");return e.id&&(n.id=e.id),e.class&&_(e.class,n),n}function T(t){return document.createRange().createContextualFragment(t)}function w(t){return t instanceof Element?t:"string"==typeof t?"<"===t[0]?T(t):E(t):e(`Could not find/create element from [${t}]`)}const A={html:(t,e)=>{e.innerHTML=t;},pcss:(t,e)=>{for(let[n,i]of S.cssToDict(t))e.style[c(n)]=i;}},S={cssToDict:t=>{t=t.replace(/\n/g,";").replace(/:/g," ");let n=new Map;for(let e of t.split(";")){if(e.replace(/\s/g,"").length<2)continue;e=e.trim().split(" ");let t=e[0];e.shift(),n.set(t.trim(),e.join(" ").trim());}let i=[];for(const[t,e]of n.entries())CSS.supports(t,e)||i.push(`${t.trim()}: ${e.trim()}`);return i.length>0&&e("CSS syntax error","typos",i),n},css:t=>{let e="";for(let[n,i]of S.cssToDict(t))e+=`${n}:${i};`;return e},html:t=>t};function M(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV;var O=Object.freeze({__proto__:null,_deving:M,throwSoft:e,log:n,suc:i,whenDOM:m,parseQuery:x,addClassAryTo:_,removeClassAryFrom:$,toggleClassAryOf:C,selectOrCreateDOM:E,elementFrom:w,toHTMLAttr:g,fragmentFromString:T,fillSVG:function(t,e){j(t).findAll("path").forEach((t=>{const n=t.attr("fill");"none"!=n&&"transparent"!=n&&t.attr("fill",e);}));},generateRandomKey:l,objDiff:h,aryDiff:function(t,e){return t.filter((t=>e.indexOf(t)<0))},_extend:function(t,e){Object.setPrototypeOf(t,h(Object.getPrototypeOf(t),e));},overwrite:function(t,e,n){let i=t[e];t[`_${e}`]=i.bind(t),t[e]=n;},createEventChains:p,createChains:f,snake2camel:c,mimic:function(t,e,n){for(let i of n||Object.keys(e)){let n=Object.getOwnPropertyDescriptor(e,i);if(!n)break;Object.defineProperty(t,i,n);}},bench:function(t,e){console.time(e),t(),console.timeEnd(e);},addStyles:function(t,e="injected-pragma-style"){j(`style#${e}-${s()}`,t).appendTo("head");},rk:a,rk5:s,rk8:o,parse:S,apply:A,createTemplate:t=>(new q).run((function(){f(this,"config"),this.config=function(t){return this.configChain.exec(t),this},this.onConfig(((t={})=>{["events","chains","exports","persistentExports"].forEach((e=>{t[e]&&(this[`_${e}`]=t[e],delete t[e]);})),this._events&&p(this,...this._events),this._chains&&f(this,...this._chains);for(let[e,n]of Object.entries(t))this[e]=n,this.export(e);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof t&&this.config(t);}))});function k(t){if(null==t||null==t)return e(`Could not find a DOM element for ${t}`);if(t.element)return k(t.element);return w(t)}function j(t,e){let n=k(t);var i,r;return n.constructor===DocumentFragment&&(i=n,(r=document.createElement("template")).appendChild(i.cloneNode(!0)),n=r.firstChild),n instanceof Element&&(n.init(),n._render()),"string"==typeof e&&n.html(e),n}const L={init:function(){this.isPragmaElement=!0,p(this,"docLoad","render"),m((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.prepend(this),this._render();})),this},append:function(...t){return this.onRender((()=>{for(let e of t){let t=k(e);this.appendChild(t);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(t){return this.onRender((()=>{A.pcss(t,this);})),this},setText:function(t){return t?(this.onRender((()=>{this.textContent=t;})),this):this.text},html:function(t){return t?(this.onRender((()=>{A.html(t,this);})),this):this.innerHTML},setId:function(t){return this.id=t,this},setData:function(t){for(let[e,n]of Object.entries(t))this.dataset[e]=n;return this},getData:function(t){return this.dataset[t]},addClass:function(...t){return _(t,this),this},removeClass:function(...t){return $(t,this),this},toggleClass:function(...t){return C(t,this),this},listenTo:function(...t){return this.onRender((()=>{this.addEventListener(...t);})),this},attr:function(t,e){if("string"==typeof t){if(void 0===e)return this.getAttribute(t);const n=t;(t={})[n]=e;}for(let[e,n]of Object.entries(t))this.setAttribute(e,n);return this},find:function(){return j(this.query(...arguments))},findAll:function(t){return Array.from(this.queryAll(t)).map((t=>j(t)))},query:function(){return this.querySelector(...arguments)},queryAll:function(t){return this.querySelectorAll(t)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(t){let e=Array.from(this.queryAll(t));for(let n of this.children)e=e.concat(n.deepQueryAll(t));return e},deepFindAll:function(t){return this.deepQueryAll(t).map((t=>j(t)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(t){if(t){["width","height","left","right","top","bottom"].forEach((e=>{e in t&&(this.style[e]=t[e]+"px");}));}var e=this.rect();return {top:e.top+window.scrollY,left:e.left+window.scrollX}},x:function(t){return this.left+this.width/2-t/2}},D={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[t,e]of Object.entries(L))Element.prototype[t]=e;for(let[t,e]of Object.entries(D))Object.defineProperty(Element.prototype,t,{get:e,configurable:!0});class P{constructor(t){this._childMap=new Map,this.key="string"==typeof t?t:o(),this.containsKey=this.childMap.has;}set childMap(t){for(let[e,n]of t)n instanceof P&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let n=e.allChildren;n&&(t=t.concat(n));}return t}get(t){return this.childMap.get(t)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let e of this.childMap.values()){let n;try{n=e.find(t);}catch{}if(n)return n}}adopt(...t){for(let e of t)this.add(e);return this}add(t,n=!1){return t?!n&&this.childMap.has(t.key)?(t.key=`${t.key}<${s()}`,this.add(t)):(t.parent=this,void this.childMap.set(t.key,t)):e(`Could not add [${t}] to [${this.id}]`)}delete(t){return this.remove(t)}remove(t){this.childMap.get(t)&&this.childMap.delete(t);}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let n of this.children)e+=n.shapePrefix(t);}return e}}const R={parent:(t,e)=>{t.parent=e;},value:(t,e)=>{t.value=e;},key:(t,e)=>{t.key=e;},class:(t,e)=>{t._class=e;},element:(t,n)=>{if(!(n instanceof Element))return e(`Could not add ${n} as the element of [${t}]`);t.element=n;},children:(t,e)=>{if(e.constructor==Array)return t.buildAry(e);t.build(e);},childTemplate:(t,e)=>{}};function z(t,e){return {val:t,set:e}}function N(t,e){return t=e.min?Math.max(e.min,t):t,t=e.max?Math.min(e.max,t):t}function K(t,n){return function(t){return t&&null!=t.min&&null!=t.max}(n)?(null==t&&(t=n.min),t=(t=t>n.max?n.min:t)<n.min?n.max:t):e(`Could not loop value, since range (${JSON.stringify(n)}) is unbounded`)}class q extends P{constructor(t,e){super(),p(this,"export"),this.actionChain=new r,this._events=new Map,"object"==typeof t?function(t,e){let n=new Map;for(let[i,r]of Object.entries(t))R.hasOwnProperty(i)?R[i](e,r):n.set(i,r);e.element&&e.element.whenInDOM((t=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();t.listenTo(n,(()=>{e.action(r);}));}}));}(t,this):this.key=t,this.element||this.as();}listenTo(t,e){return this.element.listenTo(t,e.bind(this)),this}_addToEventChain(t,...e){let n=this._events.get(t);if(n){let i=n.add(...e);return this._events.set(t,n),i}return null}createEvent(t,...e){let n=new r(this);return this._events.set(t,n),e.length>0&&this.on(t,e),this}createEvents(...t){return t.forEach((t=>{this.createEvent(t);})),this}triggerEvents(t,...e){return t.forEach((t=>{this.triggerEvent(t,...e);})),this}triggerEvent(e,...n){return this._events.has(e)?(this._events.get(e).execAs(this,...n),this):O.throwSoft(`pragma doesnt have ${event} - cannot .triggerEvent("${event}")]`,this)}_on(e,...n){let i=this._addToEventChain(e,...n);return null===i?O.throwSoft(`pragma doesnt have ${e} - cannot .on("${e}")`,this):i}on(){return this._on(...arguments),this}_onNext(t,e){this._on(t,(function(){return e(...arguments),t=>{t.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...t){return t.forEach((t=>this.createWire(t))),this}createWire(t){let e={change:`${t}Change`,set:`${t}Set`};return this.createEvents(e.change,e.set),Object.defineProperty(this,t,{set:n=>{let i=function(t,e,n){if(n)return z(K(t,n),!0);if(e){let n=N(t,e);return z(n,n===t)}return z(t,!0)}(n,this[`_${t}Range`],this[`_${t}Loop`]);const r=this[`_${t}`];i.set&&i.val!==r&&(this[`_${t}`]=i.val,this.triggerEvent(e.change,i.val,r)),this.triggerEvent(e.set,n,r);},get:()=>this[`_${t}`]}),this[`set${t.capitalize()}`]=e=>(this[`${t}`]=e,this),this[`set${t.capitalize()}Silently`]=e=>(this[`_${t}`]=e,this),this[`set${t.capitalize()}Loop`]=(e,n)=>(this[`_${t}Loop`]={min:e,max:n},this),this[`set${t.capitalize()}Range`]=(e,n)=>(this[`_${t}Range`]={min:e,max:n},this),this}get _e(){return this.element}setElement(t,e=!0){return this.elementDOM=t,e&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(t){this.setElement(t);}setRange(t=null,e=null){return this.range=this.range||{},this.range.min=null===t?this.range.min:t,this.range.max=null===e?this.range.max:e,this}breakLoop(){return this._loopVal=!1,this}setLoop(t,e){return this.setRange(t,e),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(t){return this.value=t,this}set value(t){let e=function(t,e,n){if(!e)return z(t,!0);if(n)return z(K(t,e),!0);let i=N(t,e);return z(i,i==t)}(t,this.range,this._loopVal);e.set&&(this._lv=this.v,this.v=e.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(t){return this.key=t,this}set key(t){this._KEY=null==t?l():t;}get key(){return this._KEY}set id(t){this.element&&(this.element.id=this.id);}get id(){return g(this.key)}buildAry(t){for(let e of t)this.add(new q(e,this));return this}build(...t){return this.buildAry(t)}as(t=null,e){return t=t||`div#${this.id}.pragma`,this.setElement(j(t,e),!1),this}addExport(t){this.exports=this.exports||new Set,this.exports.add(t);}export(...t){for(let e of t)this.addExport(e);}import(...e){let n=new r;for(let i of e)"function"==typeof i&&(i=i()),i.exports&&O.mimic(this,i,i.exports),i.exportChain&&n.add((t=>{i.exportChain.exec(this);}));return n.exec(),this}from(e){return e.exports&&O.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(t){let e=this;return t.do((function(){e.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,n){return O.overwrite(this,e,n),this}run(...t){let n=t[0];return "function"==typeof n?this._runAry(t):"object"==typeof n?this._runAry(Object.values(n)):e(`Could not run [${t}] as [${this}]`),this}_runAry(t){for(let e of t)this.runAs(e);}runAs(t){return t.bind(this)()}containAry(t,n="append"){for(let i of t)super.add(i),i.isRendered?e(`[${i}] is already appended`):this.element[n](i);return this}contain(...t){return this.containAry(t)}containFirst(...t){return this.containAry(t.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(t){return this.element.appendTo(t),this}addListeners(t){for(let[e,n]of Object.entries(t))this.on(e).do(n);return this}}const W=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let t of W)q.prototype[t]=function(){return this.element[t](...arguments),this};const F=["getData"];for(let t of F)q.prototype[t]=function(){return this.element[t](...arguments)};const I=["offset","text","top","left","width","height","x","classArray"];for(let t of I)Object.defineProperty(q.prototype,t,{get:function(){return this.element[t]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(t){"function"==typeof t&&(q.prototype.bind=function(e,n,i){let r=this;return t.bind(e,(function(){return r.runAs(n)}),i),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(t){n("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class V extends q{static load(t,e=o()){return console.time(`${e} load`),new Promise((n=>{j(`script#${e}-loader crossorigin`).appendTo("head").listenTo("load",(function(){n(),console.timeEnd(`${e} load`);})).attr("src",t);}))}}function U(t){let e=`\n    onmessage = e => postMessage(JSON.stringify((${t.toString()})(e.data))) \n  `;var n=new Blob([e],{type:"application/javascript"}),i=new Worker(URL.createObjectURL(n));return function(){return i.postMessage(arguments),new Promise((t=>{i.addEventListener("message",(e=>t(JSON.parse(e.data))));}))}}function B(t){return new Promise((e=>e(t())))}function Q(...t){return B((()=>{for(let e of t)B(e);}))}const H=(t,e)=>new q(t,e),J=H,Y=["_e","_p","Pragma","util","_thread"];function G(){let t=(globalThis||window).pragma;if("undefined"!==t&&t.__esModule)for(let e of Y)globalThis[e]=t[e];else console.error("Could not globalify [pragma]");}function X(t,...e){return j(e.reduce(((e,n,i)=>`${e}${n}${t[i+1]}`),t[0]).trim())}function Z(t){window.location.href=t;}

    var pragmajs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ActionChain: r,
        Pragma: q,
        Script: V,
        _e: j,
        _p: J,
        _runAsync: B,
        _thread: U,
        globalify: G,
        html: X,
        render: Z,
        runAsync: Q,
        util: O,
        π: H
    });

    var main = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500;600&family=IBM+Plex+Sans&display=swap);body{background-color:#161616;color:whitesmoke}body h1,body h2,body h3,body h4,body h5,body h6{font-family:'IBM Plex Mono',monospace}body h1{font-size:18px}body p{font-family:'IBM Plex Sans',sans-serif}.feedback-form{position:absolute;z-index:456785437895435895435895746344890778574689;bottom:80px;right:20px;width:300px;background-color:#393939;padding:20px;box-sizing:border-box;border-radius:5px}.feedback-form .stars{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center;margin:30px auto}.feedback-form .stars .star{position:relative;width:30px;height:28px;margin:0 5px;cursor:pointer;z-index:98765678745678764567876546}.feedback-form .stars .star [data-name='star-empty']{transition:all .2s ease;opacity:1}.feedback-form .stars .star [data-name='star-full']{transition:all .2s ease;position:absolute;opacity:0;top:0;left:0;opacity:0;z-index:-98765444}.feedback-form .stars .star.filled [data-name='star-empty']{opacity:0}.feedback-form .stars .star.filled [data-name='star-full']{opacity:1}.opacity{opacity:1}.page-container{height:100vh}.flex-center{display:flex;align-items:center;justify-content:center;flex-direction:column}.fade-onload,.feedback-form .stars .star,.opacity{-webkit-animation:fadein .5s;-moz-animation:fadein .5s;-ms-animation:fadein .5s;-o-animation:fadein .5s;animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from,.feedback-form .stars .star from,.opacity from{opacity:0}.fade-onload to,.feedback-form .stars .star to,.opacity to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}";
    var styles = {
    	main: main
    };

    var icons = {
    	"star-full": "<svg width=\"30\" height=\"28\" viewBox=\"0 0 30 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.72 0L10.17 9.22L0 10.69L7.36 17.87L5.62 28L14.72 23.22L23.82 28L22.08 17.87L29.44 10.7L19.27 9.22L14.72 0Z\" fill=\"white\"/>\n</svg>\n",
    	"star-empty": "<svg width=\"30\" height=\"28\" viewBox=\"0 0 30 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.72 4.52L17.48 10.1L17.94 11.1L18.94 11.25L25.1 12.14L20.72 16.44L19.97 17.17L20.15 18.17L21.2 24.3L15.69 21.41L14.72 21L13.79 21.49L8.28 24.34L9.28 18.21L9.46 17.21L8.72 16.44L4.3 12.09L10.46 11.2L11.46 11.05L11.92 10.05L14.72 4.52ZM14.72 0L10.17 9.22L0 10.69L7.36 17.87L5.62 28L14.72 23.22L23.82 28L22.08 17.87L29.44 10.7L19.27 9.22L14.72 0Z\" fill=\"white\"/>\n</svg>\n"
    };

    //import * as pragmajs from "pragmajs"

    const global = {
        injectStyle,
        SVG,
        compose,
        pragmas
    };

    function injectStyle(name) {
        if (!name in styles) return console.error(`could not find ${name}.scss in docs/src/styles`)
        O.addStyles(styles[name]);
    }

    function SVG(name, fill) {
        if (!name in icons) return console.error(`could not find ${name}.svg in docs/src/icons`)
        let i = _e(icons[name]).setData({name}).outerHTML;
        if (fill) return j(i).css(`fill ${fill}`).html()
        return i
    }


    function compose() {
        let loader = _e("body").query('[loader]');
        if (loader) {
            loader = _e(loader);
            let transitionTime = parseFloat(loader.getData("transition")) || 0.2;

            loader.css(`
            transition all ${transitionTime}s ease
        `);

            pragmaSpace.onDocLoad(() => {
                loader.css('opacity 0');
                setTimeout(() => {
                    loader.hide();
                }, transitionTime * 1000);
            });
        }
        let _page = _p().as('body');
        console.time("load time");
        _page.element.findAll("[pragma]").forEach(element => {
            let pragmas = new Map;

            Object.keys(element.attributes).filter(v => {
                return element.attributes[v].name[0] == "#"
            }).forEach(v => pragmas.set(element.attributes[v].name.slice(1), element));

            for (let [key, element] of pragmas) {
                _page.adopt(
                    _p(key)
                        .as(element)
                        .run(function () {
                            key = util.snake2camel(key);
                            if (key in _page) {
                                console.log(key);
                                if (Array.isArray(_page[key])) return _page[key] = _page[key].push(this)
                                _page[key] = [_page[key], this];
                                return
                            }

                            _page[key] = this;
                        })
                );
            }

        });

        _page.element.findAll("[element]").forEach(element => {
            let elements = new Map;

            Object.keys(element.attributes).filter(v => {
                return element.attributes[v].name[0] == "#"
            }).forEach(v => elements.set(element.attributes[v].name.slice(1), element));

            for (let [key, element] of elements) {
                _page.adopt(
                    _e(element)
                        .setId(key)
                );
            }
        });

        console.timeEnd("load time");
        window._page = _page;
    }

    // globalifying pragma, and functions
    for (let [key, val] of Object.entries({ ...pragmajs, ...global })) {
        window[key] = val;
    }

    console.log('TIIIITS');


    const Template = (title) => X`
<div class='feedback-form'>
    <h1 class='question-uno'>${title}</h1>
   <div class="stars"></div> 

</div>
`; 

    const StarTemplate = ()=> {
        return X`
    <div class='star'>
               ${SVG('star-empty')}
               ${SVG('star-full')}
    </div>
   `
    };

    class Feedback extends q{
        constructor(questionUno){
            super();
            this.questionUno = questionUno;

            this.visualise();
        }

        visualise(){

            this.element = Template(this.questionUno).appendTo('body');


            _p('starsPragma')
                            .as(this.element.find('.stars'))
                            .run(function(){

                                let i = 0;
                                while (i<5) {
                                    i++;
                                    this.contain(StarTemplate().appendTo(this));
                                    // this.append(StarTemplate())
                                }


                            })
                            .run(function() { 
                                this.createWire('stars');
                                this.on('starsChange', (v, lv) => {
                                    this.fillStars(v);
                                });

                                this.fillStars = (i) => {
                                    this.children.forEach((e,index) => {
                                        if (index <= i){
                                            return e.addClass('filled')
                                        }
                                        e.removeClass('filled');
                                    });
                                };

                                this.hover = function(i) {
                                    this.setStars(i);
                                };

                                this.unhover = function(i) {
                                    if (i === 0) this.setStars(-1);
                                };

                            })
                            .run(function(){
                                console.log(this.children);
                                this.children.forEach((element,i) => {
                                    element.listenTo('mouseenter', () => {
                                        this.hover(i);
                                    });

                                    element.listenTo('mouseleave', () => {
                                        this.unhover(i);
                                    });
                                });
                            });

        }
    }

    function _feedback(){
        return new Feedback(...arguments)
    }

    exports.SVG = SVG;
    exports._feedback = _feedback;
    exports.compose = compose;
    exports.icons = icons;
    exports.injectStyle = injectStyle;
    exports.pragmajs = pragmajs;
    exports.pragmas = pragmas;
    exports.styles = styles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
