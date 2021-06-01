import { p as promiseResolve, b as bootstrapLazy } from './index-bba610c1.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = function patchBrowser() {
  var importMeta = import.meta.url;
  var opts = {};

  if (importMeta !== '') {
    opts.resourcesUrl = new URL('.', importMeta).href;
  }

  return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["presto-player-skeleton",[[1,"presto-player-skeleton",{"effect":[1]}]]],["presto-youtube-subscribe-button",[[0,"presto-youtube-subscribe-button",{"channel":[1],"layout":[1],"showCount":[4,"show-count"]}]]],["presto-video",[[0,"presto-video",{"getRef":[1040],"autoplay":[4],"src":[1],"preload":[1],"poster":[1],"player":[8],"tracks":[16],"playsinline":[4],"provider":[1]}]]],["presto-action-bar-ui_2",[[1,"presto-action-bar-ui",{"open":[4]}],[1,"presto-player-button",{"type":[513],"size":[513],"full":[516],"disabled":[516],"submit":[516],"name":[1],"value":[1],"href":[1],"target":[1],"download":[1],"hasFocus":[32],"hasLabel":[32],"hasPrefix":[32],"hasSuffix":[32]}]]],["presto-email-overlay-ui_2",[[1,"presto-email-overlay-ui",{"headline":[1],"defaultHeadline":[1,"default-headline"],"bottomText":[1,"bottom-text"],"buttonText":[1,"button-text"],"placeholder":[1],"allowSkip":[4,"allow-skip"],"borderRadius":[2,"border-radius"],"skipText":[1,"skip-text"],"isLoading":[4,"is-loading"],"errorMessage":[1,"error-message"],"direction":[1],"email":[32]}],[1,"presto-player-spinner"]]],["presto-action-bar_6",[[1,"presto-action-bar",{"config":[16],"currentTime":[2,"current-time"],"duration":[2],"direction":[1],"youtube":[16],"show":[32],"youtubeRenderKey":[32]}],[0,"presto-email-overlay",{"player":[8],"preset":[16],"videoId":[2,"video-id"],"i18n":[16],"currentTime":[2,"current-time"],"duration":[2],"direction":[1],"enabled":[32],"show":[32],"loading":[32],"error":[32]}],[0,"presto-bunny",{"getRef":[1040],"autoplay":[4],"src":[1],"preload":[1],"poster":[1025],"player":[8],"tracks":[16],"playsinline":[4],"provider":[1],"thumbnail":[1],"previewUrl":[1,"preview-url"]}],[0,"presto-youtube",{"src":[1],"poster":[1025],"lazyLoad":[1028,"lazy-load"],"player":[8],"getRef":[1040],"reloadPlayer":[32],"isWebView":[32]}],[0,"presto-muted-overlay",{"mutedPreview":[4,"muted-preview"],"mutedOverlay":[16]}],[0,"presto-vimeo",{"src":[1],"poster":[1],"player":[8],"getRef":[1040]}]]],["presto-player",[[1,"presto-player",{"video_id":[2],"iconUrl":[1,"icon-url"],"src":[1],"bunny":[16],"branding":[16],"config":[16],"preset":[16],"chapters":[16],"blockAttributes":[16],"tracks":[16],"analytics":[4],"provider":[1],"provider_video_id":[1],"actionBar":[16],"youtube":[16],"type":[1],"autoplay":[4],"preload":[1],"poster":[1],"playsinline":[4],"isAdmin":[4,"is-admin"],"direction":[1],"player":[32],"playerEl":[32],"shouldLazyLoad":[32],"mutedPreview":[32],"currentTime":[32],"duration":[32],"isSticky":[32],"videoHeight":[32],"playClass":[32],"play":[64],"pause":[64],"stop":[64],"fullscreenToggle":[64],"on":[64],"off":[64]},[[9,"scroll","stickyClass"]]]]]], options);
});