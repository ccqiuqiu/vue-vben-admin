import{r as e,f as l}from"./index.a952a825.js";function n(n=e(document.documentElement),u){const t=e(!1),r=document.documentElement;let s="requestFullscreen",c="exitFullscreen",i="fullscreenElement";if("webkitRequestFullScreen"in r)s="webkitRequestFullScreen",c="webkitExitFullscreen",i="webkitFullscreenElement";else if("msRequestFullscreen"in r)s="msRequestFullscreen",c="msExitFullscreen",i="msFullscreenElement";else if("mozRequestFullScreen"in r)s="mozRequestFullScreen",c="mozCancelFullScreen",i="mozFullScreenElement";else if(!("requestFullscreen"in r))throw new Error("当前浏览器不支持Fullscreen API !");function m(){return t.value=!0,n.value[s](u)}function o(){return t.value=!1,document[c]()}function F(){return l(n)===document[i]}return{toggleFullscreen:function(){return F()?o():m()},exitFullscreen:o,isFullscreen:F,enterFullscreen:m,isFullscreenRef:t}}export{n as u};