import{r as t,h as o}from"./p-bd04895d.js";const s=class{constructor(o){t(this,o),this.layout="default"}waitForApi(t){var o=setInterval((function(){var s;(null===(s=null===window||void 0===window?void 0:window.gapi)||void 0===s?void 0:s.ytsubscribe)&&(clearInterval(o),t())}),50)}componentDidLoad(){const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.src="https://apis.google.com/js/platform.js";const o=document.getElementsByTagName("script")[0];o&&o.parentNode.insertBefore(t,o),this.waitForApi((()=>{window.gapi.ytsubscribe.render(this.textInput,{channelId:this.channel,layout:this.layout,count:this.showCount?"default":"hidden"})}))}render(){return o("div",{class:"g-ytsubscribe",ref:t=>this.textInput=t})}};s.style=":host{display:block}";export{s as presto_youtube_subscribe_button}