/*!
 * 
 * Presto Player
 * 
 * @author Presto Made, Inc
 * @version 0.1.0
 * @link undefined
 * @license GPL
 * 
 * Copyright (c) 2021 Presto Made, Inc
 * 
 * This software is released under the GPL License
 * https://opensource.org/licenses/GPL
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackioprestoPlayerblocksJsonp=window.wpackioprestoPlayerblocksJsonp||[]).push([[6],{79:function(e,n,t){"use strict";t.r(n);var o=t(17);n.default=function(e){var n=e.config,t=e.selector,r=e.src,a=e.preload;return new Promise((function(e,i){if(window.Hls){if(window.Hls.isSupported()){var l,s=!["metadata","none"].includes(a);null!==(l=wp)&&void 0!==l&&l.blocks&&(s=!0);var u=new window.Hls({autoStartLoad:s});return u.loadSource(r),u.on(window.Hls.Events.LEVEL_SWITCHED,(function(e,n){var o=t.closest(".presto-player__wrapper").querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");u.autoLevelEnabled?o.innerHTML="AUTO (".concat(u.levels[n.level].height,"p)"):o.innerHTML="AUTO"})),void u.on(window.Hls.Events.MANIFEST_PARSED,(function(r,a){var i=u.levels.map((function(e){return e.height}));i.unshift(0);var l=i.findIndex((function(e){var n;return e===parseInt(null===(n=prestoPlayer)||void 0===n?void 0:n.hls_start_level)}));u.startLevel=l?l-1:2,n.quality={default:0,options:i,forced:!0,onChange:function(e){0===e?prestoHLS.currentLevel=-1:prestoHLS.levels.forEach((function(n,t){n.height===e&&(console.log("Found quality match with "+e),prestoHLS.currentLevel=t)}))}},u.attachMedia(t),window.prestoHLS=u;var s=new o.a(t,Object(o.n)({},n));s.hls=u;return s.on("waiting",(function e(){u.startLoad(-1),s.off("waiting",e)})),s.on("languagechange",(function(){setTimeout((function(){return u.subtitleTrack=s.currentTrack}),50)})),e(s)}))}return e(new o.a(t,Object(o.n)({},n)))}}))}}}]);
//# sourceMappingURL=6-ab53567d.js.map