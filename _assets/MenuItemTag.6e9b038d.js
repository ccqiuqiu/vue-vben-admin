import{a as t,at as e,s,o as r,j as n,n as a,m as o}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import{c as i}from"./props.d22b70fc.js";var g=t({name:"MenuItemTag",props:i,setup(t){const{prefixCls:r}=e("basic-menu-item-tag"),n=s((()=>{const{item:e,showTitle:s,isHorizontal:r}=t;if(!e||s||r)return!1;const{tag:n}=e;if(!n)return!1;const{dot:a,content:o}=n;return!(!a&&!o)})),a=s((()=>{if(!n.value)return"";const{item:e}=t,{tag:s}=e,{dot:r,content:a}=s;return r?"":a})),o=s((()=>{const{item:e}=t,{tag:s={}}=e||{},{dot:n,type:a="error"}=s;return[r,[`${r}--${a}`],{[`${r}--dot`]:n}]}));return{prefixCls:r,getTagClass:o,getShowTag:n,getContent:a}}});g.render=function(t,e,s,i,g,c){return t.getShowTag?(r(),n("span",{key:0,class:t.getTagClass},a(t.getContent),3)):o("",!0)};export default g;