let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as t,u as o,ap as i,at as r,s,aw as a,f as d,az as n,cT as p,cU as m,i as l,o as j,j as c,k as b,n as f,m as u,aQ as x}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./index.0a1619d0.js";import"./index.e00b5824.js";import"./Trigger.d6b11091.js";import"./omit.d6d96393.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.0629dec0.js";import"./CheckOutlined.f824e206.js";import"./index.f83683e5.js";import"./index.d24eb9f1.js";import"./index.c37d53ba.js";import"./colors.862e21a0.js";import"./index.3b9b1bfd.js";import"./RightOutlined.db1f08eb.js";import{L as _}from"./index.7fd05d2c.js";import"./index.e75dd547.js";import"./types.95acfcc2.js";import"./index.6a820c87.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.5c27b99c.js";import"./_baseFor.f4e5f03f.js";import"./index.ed40df68.js";import"./index.a172b251.js";import"./index.abbd4b6e.js";import"./index.57f035ac.js";import"./index.357a7015.js";import"./UpOutlined.f340cfe2.js";import"./LeftOutlined.e5a32001.js";import"./index.8755de1d.js";import"./index.51d7393e.js";import"./index.cd92e16d.js";import"./index.d6a53ab6.js";import"./index.76293adc.js";import"./zh_CN.0242bd16.js";import"./index.c174e772.js";import"./index.f59d2713.js";import"./index.4baab3e8.js";import"./index.8ca82af0.js";import"./CaretDownFilled.f100d0c3.js";import"./FileOutlined.a3e72020.js";import"./index.f50281b1.js";import"./index.59d073b5.js";import"./index.bce88b9d.js";import"./index.a089915c.js";import{G as v}from"./GithubFilled.fe15112d.js";import"./RightOutlined.34287f23.js";import"./useDebounce.0224f5f7.js";import"./index.bcb6dbba.js";import"./tsxHelper.98cdb59f.js";import"./index.e65e388a.js";import"./index.dd2b6cc2.js";import"./domUtils.1437ab67.js";import"./useWindowSizeFn.70de1666.js";import"./index.ef31d4bd.js";import"./useMenuSetting.9ec6b716.js";import"./useHeaderSetting.51416401.js";import"./index.e09758e9.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var F=t({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=o(),{getShowFooter:t}=n(),{currentRoute:p}=i(),{prefixCls:m}=r("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return d(t)&&!(null==(e=d(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:a}}});const C=x("data-v-6da14420");p("data-v-6da14420");const w=b("div",null,"Copyright ©2020 Vben Admin",-1);m();const L=C(((e,t,o,i,r,s)=>{const a=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(j(),c(d,{key:0,class:e.prefixCls},{default:C((()=>[b("div",{class:`${e.prefixCls}__links`},[b("a",{onClick:t[1]||(t[1]=t=>e.openWindow(e.SITE_URL))},f(e.t("layout.footer.onlinePreview")),1),b(a,{onClick:t[2]||(t[2]=t=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),b("a",{onClick:t[3]||(t[3]=t=>e.openWindow(e.DOC_URL))},f(e.t("layout.footer.onlineDocument")),1)],2),w])),_:1},8,["class"])):u("",!0)}));F.render=L,F.__scopeId="data-v-6da14420";export default F;