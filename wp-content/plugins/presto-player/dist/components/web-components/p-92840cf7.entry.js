import{r as s,h as t}from"./p-bd04895d.js";const i=class{constructor(t){s(this,t)}render(){return t("video",{class:"presto-player__player",part:"video",ref:this.getRef,autoplay:this.autoplay,preload:this.preload,"data-poster":this.poster,playsinline:this.playsinline},t("source",{src:this.src}),!!this.tracks&&!!this.tracks.length&&this.tracks.map((s=>t("track",{kind:"captions",label:(null==s?void 0:s.label)?s.label:"Captions",src:null==s?void 0:s.src,srclang:(null==s?void 0:s.srcLang)?null==s?void 0:s.srcLang:"en"}))))}};i.style=":host{display:block}";export{i as presto_video}