import { r as registerInstance, h } from './index-bba610c1.js';

const prestoVideoCss = ":host{display:block}";

const PrestoVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("video", { class: "presto-player__player", part: "video", ref: this.getRef, autoplay: this.autoplay, preload: this.preload, "data-poster": this.poster, playsinline: this.playsinline }, h("source", { src: this.src }), !!this.tracks &&
      !!this.tracks.length &&
      this.tracks.map(track => h("track", { kind: "captions", label: (track === null || track === void 0 ? void 0 : track.label) ? track.label : 'Captions', src: track === null || track === void 0 ? void 0 : track.src, srclang: (track === null || track === void 0 ? void 0 : track.srcLang) ? track === null || track === void 0 ? void 0 : track.srcLang : 'en' }))));
  }
};
PrestoVideo.style = prestoVideoCss;

export { PrestoVideo as presto_video };
