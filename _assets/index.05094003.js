let e=document.createElement("style");e.innerHTML=".form-wrap[data-v-46649975]{padding:24px;background:#fff}",document.head.appendChild(e);import{a as o,h as t,cT as s,cU as r,i,o as a,j as n,k as l,aQ as p,p as d}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./index.e00b5824.js";import"./Trigger.d6b11091.js";import"./omit.d6d96393.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.0629dec0.js";import"./CheckOutlined.f824e206.js";import{s as c}from"./index.af08d434.js";import"./colors.862e21a0.js";import"./RightOutlined.db1f08eb.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.5c27b99c.js";import"./index.ed40df68.js";import"./index.a172b251.js";import"./index.57f035ac.js";import"./UpOutlined.f340cfe2.js";import"./index.8755de1d.js";import"./index.cd92e16d.js";import"./index.baa00882.js";import"./index.8ca82af0.js";import"./useDebounce.0224f5f7.js";import"./useEventListener.9721bdc6.js";import"./useBreakpoint.5c1ed0da.js";import"./index.11311f0f.js";import"./tsxHelper.98cdb59f.js";import"./index.e65e388a.js";import"./index.dd2b6cc2.js";import{u as m}from"./useForm.197ddde2.js";const u=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var b=o({components:{BasicForm:c},setup(){const{createMessage:e}=t(),[o,{validate:s,setProps:r}]=m({labelCol:{span:7},wrapperCol:{span:10},schemas:u,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await s(),r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(e){}}});return{register:o}}});const f=p("data-v-46649975");s("data-v-46649975");const j=d(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。 "),x={class:"m-5 form-wrap"};r();const g=f(((e,o,t,s,r,p)=>{const d=i("a-page-header"),c=i("BasicForm");return a(),n("div",null,[l(d,{title:"基础表单",ghost:!1},{default:f((()=>[j])),_:1}),l("div",x,[l(c,{onRegister:e.register},null,8,["onRegister"])])])}));b.render=g,b.__scopeId="data-v-46649975";export default b;