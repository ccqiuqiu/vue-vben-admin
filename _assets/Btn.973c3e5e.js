let e=document.createElement("style");e.innerHTML=".demo[data-v-ab2568ac]{background:#fff}",document.head.appendChild(e);import{a as s,as as a,b1 as o,dk as r,dl as t,cT as c,cU as i,i as d,aU as l,o as n,j as m,k as u,n as f,m as p,aH as _,aQ as y,p as x}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import{A as h}from"./index.f83683e5.js";import{D as P}from"./index.d6a53ab6.js";import v from"./CurrentPermissionMode.9a5fc873.js";import{A as C}from"./index.3b5c522e.js";var b=s({components:{Alert:h,CurrentPermissionMode:v,Divider:P,Authority:C},setup(){const{hasPermission:e}=r();async function s(e){const s=await t({userId:e});a.commitPermCodeListState(s)}return s("1"),{hasPermission:e,permissionStore:a,changePermissionCode:s,PermissionModeEnum:o}}});const k=y("data-v-ab2568ac");c("data-v-ab2568ac");const g={class:"p-4 m-4 demo"},j=x(" 当前拥有的code列表: "),A=x(" 点击切换按钮权限(用户id为2) "),M=x(" 点击切换按钮权限(用户id为1,默认) "),S=x("组件方式判断权限"),w=x("拥有code ['1000']权限可见"),D=x("拥有code ['2000']权限可见"),L=x("拥有code ['1000','2000']角色权限可见"),E=x("函数方式方式判断权限"),H=x(" 拥有code ['1000']权限可见 "),I=x(" 拥有code ['2000']权限可见 "),T=x(" 拥有code ['1000','2000']角色权限可见 "),U=x("指令方式方式判断权限(该方式不能动态修改权限.)"),Q=x(" 拥有code ['1000']权限可见 "),q=x(" 拥有code ['2000']权限可见 "),z=x(" 拥有code ['1000','2000']角色权限可见 ");i();const B=k(((e,s,a,o,r,t)=>{const c=d("Alert"),i=d("CurrentPermissionMode"),y=d("Divider"),x=d("a-button"),h=d("Authority"),P=l("auth");return n(),m("div",g,[u(c,{message:"刷新后会还原","show-icon":""}),u(i),u("p",null,[j,u("a",null,f(e.permissionStore.getPermCodeListState),1)]),u(y),u(c,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(y),u(x,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:k((()=>[A])),_:1}),u(x,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:k((()=>[M])),_:1}),u(y,null,{default:k((()=>[S])),_:1}),u(h,{value:"1000"},{default:k((()=>[u(x,{type:"primary",class:"mx-4"},{default:k((()=>[w])),_:1})])),_:1}),u(h,{value:"2000"},{default:k((()=>[u(x,{color:"success",class:"mx-4"},{default:k((()=>[D])),_:1})])),_:1}),u(h,{value:["1000","2000"]},{default:k((()=>[u(x,{color:"error",class:"mx-4"},{default:k((()=>[L])),_:1})])),_:1}),u(y,null,{default:k((()=>[E])),_:1}),e.hasPermission("1000")?(n(),m(x,{key:0,type:"primary",class:"mx-4"},{default:k((()=>[H])),_:1})):p("",!0),e.hasPermission("2000")?(n(),m(x,{key:1,color:"success",class:"mx-4"},{default:k((()=>[I])),_:1})):p("",!0),e.hasPermission(["1000","2000"])?(n(),m(x,{key:2,color:"error",class:"mx-4"},{default:k((()=>[T])),_:1})):p("",!0),u(y,null,{default:k((()=>[U])),_:1}),_(u(x,{type:"primary",class:"mx-4"},{default:k((()=>[Q])),_:1},512),[[P,"1000"]]),_(u(x,{color:"success",class:"mx-4"},{default:k((()=>[q])),_:1},512),[[P,"2000"]]),_(u(x,{color:"error",class:"mx-4"},{default:k((()=>[z])),_:1},512),[[P,["1000","2000"]]])])}));b.render=B,b.__scopeId="data-v-ab2568ac";export default b;