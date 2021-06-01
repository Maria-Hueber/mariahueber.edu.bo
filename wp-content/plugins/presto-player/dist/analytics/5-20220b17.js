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
(window.wpackioprestoPlayeranalyticsJsonp=window.wpackioprestoPlayeranalyticsJsonp||[]).push([[5],{58:function(e,a,o){"use strict";o.r(a);var d=o(33);a.default=function(e){var a,o,s,i,_,r,t,l,n,v,p;if("undefined"!=typeof learndash_video_data&&"presto"===(null===(a=learndash_video_data)||void 0===a?void 0:a.videos_found_provider)){if(Object(d.d)(e),window.learndash_video_data.videos_auto_complete="on"===(null===(o=prestoPlayer)||void 0===o||null===(s=o.learndash)||void 0===s?void 0:s.lesson_video_auto_complete),window.learndash_video_data.videos_hide_complete_button="AFTER"===(null===(i=learndash_video_data)||void 0===i?void 0:i.videos_shown)&&"on"===(null===(_=prestoPlayer)||void 0===_||null===(r=_.learndash)||void 0===r?void 0:r.lesson_video_hide_complete_button),window.learndash_video_data.videos_auto_complete_delay=null===(t=prestoPlayer)||void 0===t||null===(l=t.learndash)||void 0===l?void 0:l.lesson_video_auto_complete_delay,window.learndash_video_data.videos_auto_complete_delay_message=null===(n=prestoPlayer)||void 0===n||null===(v=n.learndash)||void 0===v?void 0:v.videos_auto_complete_delay_message,window.learndash_video_data.video_track_path="/","BEFORE"===(null===(p=learndash_video_data)||void 0===p?void 0:p.videos_shown))return learndash_video_data.videos_auto_complete=!1,jQuery(document).trigger("learndash_video_disable_assets",[!0]),void jQuery((function(){"1"===learndash_video_data.video_debug&&console.log("PRESTO: init"),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').length&&("1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(true)"),LearnDash_disable_assets(!0),LearnDash_watchPlayers(),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').forEach((function(e,a){var o="presto-player__wrapper-player-"+a,d=e.getAttribute("id");void 0!==d&&""!=d||(d=o,e.setAttribute("id",d)),ld_video_players[o]={},ld_video_players[o].player_key=o,ld_video_players[o].player_type=learndash_video_data.videos_found_provider,ld_video_players[o].player_id=d,ld_video_players[o].player_wrapper=e.closest("presto-player"),void 0!==ld_video_players[o].player_wrapper?ld_video_players[o].player_cookie_key=ld_video_players[o].player_wrapper.getAttribute("data-video-cookie-key"):ld_video_players[o].player_cookie_key="",ld_video_players[o].player_cookie_values=LearnDash_Video_Progress_initSettings(ld_video_players[o]),"complete"===LearnDash_Video_Progress_getSetting(ld_video_players[o],"video_state")?(LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()):(wp.hooks.addAction("presto.playerTimeUpdate","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),e.duration&&e.duration===e.currentTime&&(LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd())})),wp.hooks.addAction("presto.playerPlaying","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","play")})),wp.hooks.addAction("presto.playerPause","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is paused"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),console.log(e.duration),console.log(e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","pause")})),wp.hooks.addAction("presto.playerEnded","presto-player",(function(e){"1"===learndash_video_data.video_debug&&console.log("PRESTO: video ended"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: setting 'video_state' to 'complete'"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()})))})))}));window.LearnDash_disable_assets(!0),wp.hooks.addAction("presto.playerEnded","presto-player",(function(){window.LearnDash_disable_assets(!1)}))}}}}]);
//# sourceMappingURL=5-20220b17.js.map