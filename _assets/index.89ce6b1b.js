import{a as t,bj as e,cT as o,ay as a,o as s,j as n,c$ as l,bo as r,K as i,aT as d}from"./index.c5d8d2c2.js";import{b as p,r as f}from"./domUtils.f8f6dc33.js";import{g as y}from"./tsxHelper.87c58488.js";function g(s,n="top center 0",l){return t({name:s,props:{group:{type:Boolean,default:!1},mode:{type:String,default:l},origin:{type:String,default:n}},setup(t,{slots:n,attrs:l}){const r=e=>{e.style.transformOrigin=t.origin};return()=>{const i=t.group?o:e;return a(i,{name:s,mode:t.mode,...l,onBeforeEnter:r},(()=>y(n)))}}})}var c=t({name:"CollapseTransition",setup:()=>({on:{beforeEnter(t){p(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(p(t,"collapse-transition"),t.style.transitionProperty="height",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}})});const v=r("data-v-5edc2f91"),m=v(((t,o,a,r,d,p)=>(s(),n(e,l(t.on),{default:v((()=>[i(t.$slots,"default")])),_:3},16))));c.render=m,c.__scopeId="data-v-5edc2f91";var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c}),u=t({name:"CollapseTransition",setup:(t,{slots:e})=>()=>a(c,null,(()=>y(e)))});const w=g("fade-transition"),_=g("scale-transition"),T=g("slide-y-transition"),B=g("scroll-y-transition"),P=g("slide-y-reverse-transition"),x=g("scroll-y-reverse-transition"),S=g("slide-x-transition"),b=g("scroll-x-transition"),L=g("slide-x-reverse-transition"),E=g("scroll-x-reverse-transition"),j=g("scale-rotate-transition"),C=function(o,s,n="in-out"){return t({name:o,props:{mode:{type:String,default:n}},setup:(t,{attrs:n,slots:l})=>()=>a(e,{name:o,mode:t.mode,...n,onBeforeEnter:s.beforeEnter,onEnter:s.enter,onLeave:s.leave,onAfterLeave:s.afterLeave,onLeaveCancelled:s.afterLeave},(()=>y(l)))})}("expand-x-transition",function(t="",e=!1){const o=e?"width":"height",a=`offset${s=o,s.charAt(0).toUpperCase()+s.slice(1)}`;var s;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[o]:t.style[o]}},enter(e){const o=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden",e.offsetHeight,e.style.transition=o.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{}))},afterEnter:l,enterCancelled:l,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[o]:t.style[o]},t.style.overflow="hidden",t.style[o]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[o]="0"))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){const e=t._initialStyle[o];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[o]=e),Reflect.deleteProperty(t,"_initialStyle")}}("",!0)),H=d((()=>Promise.resolve().then((function(){return h}))));export{u as C,C as E,w as F,_ as S,T as a,B as b,P as c,x as d,S as e,b as f,L as g,E as h,j as i,H as j};