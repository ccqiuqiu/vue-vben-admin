let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{db as t,a as s,B as a,Q as o,h as i,cT as r,cU as d,i as n,o as c,j as m,aQ as p,k as l,p as u}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./index.e00b5824.js";import"./Trigger.d6b11091.js";import"./omit.d6d96393.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.0629dec0.js";import"./CheckOutlined.f824e206.js";import{s as f}from"./index.af08d434.js";import"./colors.862e21a0.js";import"./RightOutlined.db1f08eb.js";import"./types.95acfcc2.js";import{U as j}from"./index.6a820c87.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.5c27b99c.js";import"./_baseFor.f4e5f03f.js";import"./index.ed40df68.js";import"./index.a172b251.js";import"./index.abbd4b6e.js";import"./index.57f035ac.js";import"./UpOutlined.f340cfe2.js";import"./index.8755de1d.js";import"./index.cd92e16d.js";import"./index.baa00882.js";import"./index.f59d2713.js";import"./index.8ca82af0.js";import"./FileOutlined.a3e72020.js";import"./useDebounce.0224f5f7.js";import"./useEventListener.9721bdc6.js";import"./useBreakpoint.5c1ed0da.js";import{C as b}from"./index.bcb6dbba.js";import{_ as x}from"./header.0299ae16.js";import"./index.11311f0f.js";import"./tsxHelper.98cdb59f.js";import{I as h}from"./index.e65e388a.js";import"./index.dd2b6cc2.js";import{u as g}from"./useForm.197ddde2.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=s({components:{BasicForm:f,CollapseContainer:b,Button:a,Upload:j,Icon:h},setup(){const{createMessage:e}=i(),[s,{setFieldsValue:a}]=g({labelWidth:120,schemas:_,showActionButtonGroup:!1});return o((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});a(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const F=p("data-v-c0c2b920");r("data-v-c0c2b920");const I={class:"change-avatar"},O=l("div",{class:"mb-2"},"头像",-1),y=u("更换头像 "),U=u("更新基本信息");d();const B=F(((e,t,s,a,o,i)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),u=n("Button"),f=n("Upload"),j=n("a-row"),b=n("CollapseContainer");return c(),m(b,{title:"基本设置",canExpan:!1},{default:F((()=>[l(j,{gutter:24},{default:F((()=>[l(d,{span:14},{default:F((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:F((()=>[l("div",I,[O,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(f,{showUploadList:!1},{default:F((()=>[l(u,{type:"ghost",class:"ml-5"},{default:F((()=>[l(p,{icon:"feather:upload"}),y])),_:1})])),_:1})])])),_:1})])),_:1}),l(u,{type:"primary",onClick:e.handleSubmit},{default:F((()=>[U])),_:1},8,["onClick"])])),_:1})}));v.render=B,v.__scopeId="data-v-c0c2b920";export default v;