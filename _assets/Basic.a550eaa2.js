import{a as e,r as i,i as t,o,j as r,k as s,w as d,p as a,n}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./index.0a1619d0.js";import"./index.e00b5824.js";import"./Trigger.d6b11091.js";import"./omit.d6d96393.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.0629dec0.js";import"./CheckOutlined.f824e206.js";import"./index.af08d434.js";import"./colors.862e21a0.js";import"./index.3b9b1bfd.js";import"./RightOutlined.db1f08eb.js";import"./index.e75dd547.js";import"./types.95acfcc2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.5c27b99c.js";import"./_baseFor.f4e5f03f.js";import"./index.ed40df68.js";import"./index.a172b251.js";import"./index.abbd4b6e.js";import"./index.57f035ac.js";import"./UpOutlined.f340cfe2.js";import"./LeftOutlined.e5a32001.js";import"./index.8755de1d.js";import"./index.cd92e16d.js";import"./index.d6a53ab6.js";import"./index.baa00882.js";import"./index.76293adc.js";import"./zh_CN.0242bd16.js";import"./TableAction.fdcfd8f1.js";import"./index.8ca82af0.js";import"./CaretDownFilled.f100d0c3.js";import"./CheckOutlined.df11ebaf.js";import"./CloseOutlined.c0022700.js";import{s as p}from"./EditTableHeaderIcon.3fa45cff.js";import"./DownOutlined.d4782c6f.js";import"./FullscreenOutlined.a8e2f04d.js";import"./LeftOutlined.11b1cc66.js";import"./functional.44913f31.js";import"./RedoOutlined.0e78e406.js";import"./RightOutlined.34287f23.js";import"./SettingOutlined.9c311242.js";import"./useTimeout.96c25433.js";import"./useDebounce.0224f5f7.js";import"./useEventListener.9721bdc6.js";import"./useBreakpoint.5c1ed0da.js";import"./index.11311f0f.js";import"./tsxHelper.98cdb59f.js";import"./index.e65e388a.js";import"./index.dd2b6cc2.js";import"./useForm.197ddde2.js";import"./index.949a94b4.js";import"./useModalContext.1b0bfcbf.js";import"./domUtils.1437ab67.js";import"./useFullScreen.6dc73f2e.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.70de1666.js";import"./useExpose.fcb4abd2.js";import"./index.e1c8c217.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.0f88a36b.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const j={class:"p-4"},u=a(" 开启loading ");c.render=function(e,i,p,m,l,c){const f=t("a-button"),b=t("BasicTable");return o(),r("div",j,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:d((()=>[s(f,{type:"primary",onClick:e.toggleCanResize},{default:d((()=>[a(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleBorder},{default:d((()=>[a(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleLoading},{default:d((()=>[u])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleStriped},{default:d((()=>[a(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default c;