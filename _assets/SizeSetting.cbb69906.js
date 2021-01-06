import{k as e,J as t,aR as i,a as n,u as o,r as s,cS as r,i as a,o as l,j as c,w as d,n as p}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import{u as m}from"./index.5edef697.js";import"./index.278c333c.js";import"./colors.eda34fc4.js";import{D as u,M as f}from"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import{T as j}from"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var x=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};x.displayName="ColumnHeightOutlined",x.inheritAttrs=!1;var y=n({name:"SizeSetting",components:{ColumnHeightOutlined:x,Tooltip:j,Dropdown:u,Menu:f,MenuItem:f.Item},setup(){const e=m(),{t:t}=o(),i=s([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:r,t:t}}});y.render=function(t,i,n,o,s,r){const m=a("ColumnHeightOutlined"),u=a("MenuItem"),f=a("Menu"),j=a("Dropdown"),b=a("Tooltip");return l(),c(b,{placement:"top"},{title:d((()=>[e("span",null,p(t.t("component.table.settingDens")),1)])),default:d((()=>[e(j,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:d((()=>[e(f,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:d((()=>[e(u,{key:"default"},{default:d((()=>[e("span",null,p(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:d((()=>[e("span",null,p(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:d((()=>[e("span",null,p(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:d((()=>[e(m)])),_:1},8,["getPopupContainer"])])),_:1})};export default y;