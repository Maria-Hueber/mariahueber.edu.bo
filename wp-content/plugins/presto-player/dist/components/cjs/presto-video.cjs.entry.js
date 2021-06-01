'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b100c88a.js');

const prestoVideoCss = ":host{display:block}";

const PrestoVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("video", { class: "presto-player__player", part: "video", ref: this.getRef, autoplay: this.autoplay, preload: this.preload, "data-poster": this.poster, playsinline: this.playsinline }, index.h("source", { src: this.src }), !!this.tracks &&
      !!this.tracks.length &&
      this.tracks.map(track => index.h("track", { kind: "captions", label: (track === null || track === void 0 ? void 0 : track.label) ? track.label : 'Captions', src: track === null || track === void 0 ? void 0 : track.src, srclang: (track === null || track === void 0 ? void 0 : track.srcLang) ? track === null || track === void 0 ? void 0 : track.srcLang : 'en' }))));
  }
};
PrestoVideo.style = prestoVideoCss;

exports.presto_video = PrestoVideo;
