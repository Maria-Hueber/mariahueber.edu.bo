import { r as registerInstance, h, l as getElement, m as createEvent } from './index-bba610c1.js';

/**
 * Find out if time is passed.
 * @returns boolean
 */
function timePassed({ current, duration, showAfter }) {
  if (current === showAfter) {
    return true;
  }
  let percent = (current / duration) * 100;
  if (99.9 < percent) {
    percent = 100;
  }
  return percent >= showAfter;
}

const prestoActionBarCss = ":host{display:block}";

const PrestoActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.show = false;
    this.youtubeRenderKey = 1;
  }
  componentWillLoad() {
    this.handleDuration();
  }
  handleButtonCountChange(newVal, oldVal) {
    console.log(newVal);
    if ((newVal === null || newVal === void 0 ? void 0 : newVal.button_count) !== (oldVal === null || oldVal === void 0 ? void 0 : oldVal.button_count)) {
      this.youtubeRenderKey++;
    }
    if (newVal === null || newVal === void 0 ? void 0 : newVal.enabled) {
      this.handleDuration();
    }
  }
  /**
   * Wait for duration to start before checking time
   * @returns void
   */
  handleDuration() {
    var _a, _b;
    if ((_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.blocks) {
      this.show = true;
      return;
    }
    this.show = timePassed({
      current: this.currentTime,
      duration: this.duration,
      showAfter: ((_b = this.config) === null || _b === void 0 ? void 0 : _b.percentage_start) || 0,
    });
  }
  youtubeButton() {
    var _a, _b, _c, _d;
    if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.button_type) !== 'youtube' || !((_b = this.youtube) === null || _b === void 0 ? void 0 : _b.channelId)) {
      return;
    }
    return h("presto-youtube-subscribe-button", { key: this.youtubeRenderKey, channel: (_c = this.youtube) === null || _c === void 0 ? void 0 : _c.channelId, showCount: (_d = this.config) === null || _d === void 0 ? void 0 : _d.button_count });
  }
  customButton() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.button_type) !== 'custom') {
      return;
    }
    return (h("presto-player-button", { type: "primary", size: "small", href: (_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.button_link) === null || _c === void 0 ? void 0 : _c.url, target: ((_e = (_d = this.config) === null || _d === void 0 ? void 0 : _d.button_link) === null || _e === void 0 ? void 0 : _e.opensInNewTab) ? '_blank' : '_self', style: Object.assign({ '--presto-player-button-border-radius': `${(_f = this.config) === null || _f === void 0 ? void 0 : _f.button_radius}px` }, (((_g = this.config) === null || _g === void 0 ? void 0 : _g.button_color)
        ? {
          '--presto-player-button-color': `${(_h = this.config) === null || _h === void 0 ? void 0 : _h.button_color}`,
        }
        : {})) }, (_j = this.config) === null || _j === void 0 ? void 0 : _j.button_text));
  }
  render() {
    var _a, _b;
    return (h("presto-action-bar-ui", { open: this.show, style: {
        '--presto-action-bar-background': ((_a = this.config) === null || _a === void 0 ? void 0 : _a.background_color) || '#1d1d1d',
      } }, (_b = this.config) === null || _b === void 0 ? void 0 :
      _b.text, h("div", { slot: "button" }, this.youtubeButton(), this.customButton())));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "config": ["handleButtonCountChange"],
    "currentTime": ["handleDuration"],
    "duration": ["handleDuration"]
  }; }
};
PrestoActionBar.style = prestoActionBarCss;

const PrestoBunny = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.poster = this.poster || this.thumbnail; // maybe add bunny thumbnail
  }
  render() {
    return (h("presto-video", { getRef: this.getRef, player: this.player, autoplay: this.autoplay, preload: this.preload, poster: this.poster, playsinline: this.playsinline, src: this.src, tracks: this.tracks }));
  }
};

const prestoEmailOverlayCss = ":host{display:block}";

const PrestoEmailOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.playVideo = createEvent(this, "playVideo", 7);
  }
  /**
   * Set email collection in local storage
   * @param status string
   */
  setStorage(status) {
    window.localStorage.setItem('presto.videos.email_collection', JSON.stringify({ [this.videoId]: status }));
  }
  /**
   * Get email collection in local storage
   * @returns status string
   */
  getStorage() {
    return window.localStorage.getItem('presto.videos.email_collection');
  }
  componentWillLoad() {
    this.handleDuration();
  }
  /**
   * Find out if time is passed.
   * @returns boolean
   */
  timePassed({ current, duration, showAfter }) {
    if (current === showAfter) {
      return true;
    }
    let percent = (current / duration) * 100;
    if (99.9 < percent) {
      percent = 100;
    }
    return percent >= showAfter;
  }
  handlePlayerInit(_, old) {
    // only the first time
    if (old) {
      return;
    }
    // don't allow player to be played if email overlay is showing
    this.player.on('play playing timeupdate', () => {
      // skipped
      if (this.getStorage()) {
        return;
      }
      // pause if enabled
      if (this.show) {
        this.player.pause();
      }
    });
  }
  /**
   * Wait for duration to start before checking time
   * @returns void
   */
  handleDuration() {
    var _a, _b;
    this.enabled = this.getStorage() ? false : (_b = (_a = this.preset) === null || _a === void 0 ? void 0 : _a.email_collection) === null || _b === void 0 ? void 0 : _b.enabled;
    this.handleTime();
  }
  /**
   * When current time changes, check to see if we should
   * enable the overlay
   * @returns void
   */
  handleTime() {
    if (!this.enabled) {
      return;
    }
    if (this.getStorage()) {
      return;
    }
    this.checkTime();
  }
  /**
   * Set enabled/disabled based on time that has passed
   */
  checkTime() {
    var _a, _b;
    this.show = this.timePassed({
      current: this.currentTime,
      duration: this.duration,
      showAfter: ((_b = (_a = this.preset) === null || _a === void 0 ? void 0 : _a.email_collection) === null || _b === void 0 ? void 0 : _b.percentage) || 0,
    });
  }
  /**
   * Fetch updated nonce in case of caching
   * @returns Promise
   */
  async getNonce() {
    var _a;
    return fetch(`${(_a = window === null || window === void 0 ? void 0 : window.prestoPlayer) === null || _a === void 0 ? void 0 : _a.ajaxurl}?action=presto_refresh_progress_nonce`);
  }
  /**
   * Submit email collection
   * @param e Event
   */
  async submit(e) {
    var _a;
    this.loading = true;
    this.error = '';
    // get nonce refresh
    const response = await this.getNonce();
    const { data: nonce } = await response.json();
    // handle submit
    try {
      let response = await fetch((_a = window === null || window === void 0 ? void 0 : window.prestoPlayer) === null || _a === void 0 ? void 0 : _a.ajaxurl, {
        method: 'post',
        body: new URLSearchParams(Object.assign({ action: 'presto_player_email_submit', nonce, preset_id: this.preset.id, video_id: this.videoId }, ((e === null || e === void 0 ? void 0 : e.detail) || {}))),
      });
      const { success, data } = await response.json();
      if (success) {
        this.setStorage('collected');
        this.show = false;
        this.playVideo.emit();
      }
      else {
        throw data;
      }
    }
    catch (e) {
      const error = e === null || e === void 0 ? void 0 : e[0];
      if (error && typeof error === 'string') {
        this.error = error;
      }
    }
    finally {
      this.loading = false;
    }
  }
  /**
   * Skip email collection
   */
  skip() {
    this.setStorage('skipped');
    this.show = false;
    this.playVideo.emit();
  }
  /**
   * Maybe render
   * @returns JSX
   */
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!this.show) {
      return;
    }
    return (h("presto-email-overlay-ui", { direction: this.direction, class: "email-overlay", headline: (_b = (_a = this.preset) === null || _a === void 0 ? void 0 : _a.email_collection) === null || _b === void 0 ? void 0 : _b.headline, defaultHeadline: (_c = this === null || this === void 0 ? void 0 : this.i18n) === null || _c === void 0 ? void 0 : _c.emailDefaultHeadline, bottomText: (_e = (_d = this.preset) === null || _d === void 0 ? void 0 : _d.email_collection) === null || _e === void 0 ? void 0 : _e.bottom_text, allowSkip: (_g = (_f = this.preset) === null || _f === void 0 ? void 0 : _f.email_collection) === null || _g === void 0 ? void 0 : _g.allow_skip, skipText: (_h = this === null || this === void 0 ? void 0 : this.i18n) === null || _h === void 0 ? void 0 : _h.skip, buttonText: (_k = (_j = this.preset) === null || _j === void 0 ? void 0 : _j.email_collection) === null || _k === void 0 ? void 0 : _k.button_text, placeholder: (_l = this === null || this === void 0 ? void 0 : this.i18n) === null || _l === void 0 ? void 0 : _l.emailPlaceholder, isLoading: this.loading, errorMessage: this.error, onSubmitForm: e => this.submit(e), onSkip: () => this.skip() }));
  }
  static get watchers() { return {
    "player": ["handlePlayerInit"],
    "duration": ["handleDuration"],
    "currentTime": ["handleTime"]
  }; }
};
PrestoEmailOverlay.style = prestoEmailOverlayCss;

const prestoMutedOverlayCss = ":host{display:block}";

const PrestoMutedOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.playVideo = createEvent(this, "playVideo", 7);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h("div", { class: "presto-player__muted-overlay", onClick: () => {
        this.mutedPreview = false;
        this.playVideo.emit();
      } }, h("div", { class: "plyr__control plyr__control--overlaid", "data-plyr": "play", "aria-label": "Play", part: "muted-overlay-play" }, h("svg", { id: "plyr-play", viewBox: "0 0 18 18" }, h("path", { d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z" })), h("span", { class: "plyr__sr-only" }, "Play")), ((_a = this.mutedOverlay) === null || _a === void 0 ? void 0 : _a.enabled) && ((_b = this.mutedOverlay) === null || _b === void 0 ? void 0 : _b.src) ? (h("div", { class: "presto-player__overlay is-image", part: "muted-overlay-image", style: {
        width: `${((_c = this.mutedOverlay) === null || _c === void 0 ? void 0 : _c.width) || 50}%`,
        left: `${(((_e = (_d = this.mutedOverlay) === null || _d === void 0 ? void 0 : _d.focalPoint) === null || _e === void 0 ? void 0 : _e.x) || 0.5) * 100}%`,
        top: `${(((_g = (_f = this.mutedOverlay) === null || _f === void 0 ? void 0 : _f.focalPoint) === null || _g === void 0 ? void 0 : _g.y) || 0.5) * 100}%`,
      } }, h("img", { src: (_h = this.mutedOverlay) === null || _h === void 0 ? void 0 : _h.src, style: { transform: 'translateX(-50%) translateY(-50%)' } }))) : ('')));
  }
};
PrestoMutedOverlay.style = prestoMutedOverlayCss;

const prestoVimeoCss = ":host{display:block}";

const PrestoVimeo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getId(url) {
    const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    const parseUrl = regExp.exec(url || '');
    return (parseUrl === null || parseUrl === void 0 ? void 0 : parseUrl[5]) || '';
  }
  render() {
    if (!this.src) {
      return;
    }
    return (h("div", { class: "plyr__video-embed", part: "embed", ref: this.getRef }, h("iframe", { src: `https://player.vimeo.com/video/${this.getId(this.src)}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`, allowFullScreen: true, allowTransparency: true, allow: "autoplay" })));
  }
};
PrestoVimeo.style = prestoVimeoCss;

const prestoYoutubeCss = ":host{display:block}.fallback-container{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.fallback-container iframe,.fallback-container object,.fallback-container embed{position:absolute;top:0;left:0;width:100%;height:100%}";

const PrestoYoutube = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.reload = createEvent(this, "reload", 7);
  }
  /**
   * When player is set, do ratio and fixes
   * @returns
   */
  handlePlayerChange() {
    if (!this.player) {
      return;
    }
    // ratio
    this.player.ratio = '16:9';
    this.fixes();
  }
  // fixes issue where youtube can sometimes can be muted if played before load
  fixes() {
    this.player.on('statechange', e => {
      var _a, _b, _c, _d, _e;
      // only playing
      if (e.detail.code !== 1) {
        return;
      }
      // not autoplay
      if ((_e = (_d = (_c = (_b = (_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.plyr) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.blockAttributes) === null || _d === void 0 ? void 0 : _d.mutedPreview) === null || _e === void 0 ? void 0 : _e.enabled) {
        return;
      }
      // unmute
      this.player.muted = false;
    });
  }
  // get id from youtube url
  getId(url) {
    var _a;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = (url || '').match(regExp);
    return match && ((_a = match === null || match === void 0 ? void 0 : match[2]) === null || _a === void 0 ? void 0 : _a.length) === 11 ? match[2] : null;
  }
  // load player
  loadPlayer() {
    this.lazyLoad = false;
    this.reloadPlayer = true;
  }
  // wait for component to update before reloading
  componentDidRender() {
    if (this.reloadPlayer) {
      this.reloadPlayer = false;
      this.reload.emit('play');
    }
  }
  /**
   * detect if we're in a webview browser
   */
  setWebView() {
    var _a;
    // @ts-ignore
    let standalone = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone, userAgent = window.navigator.userAgent.toLowerCase(), safari = /safari/.test(userAgent), ios = /iphone|ipod|ipad/.test(userAgent);
    if (ios) {
      // ios webview
      this.isWebView = !standalone && !safari;
    }
    else {
      // android webview
      this.isWebView = userAgent.includes('wv');
    }
  }
  // don't lazy load on iOS
  componentWillLoad() {
    this.setWebView();
    // pull default Youtube poster if nothing set.
    if (!this.poster) {
      this.poster = `//img.youtube.com/vi/${this.getId(this.src)}/maxresdefault.jpg`;
    }
    if (this.lazyLoad) {
      var ua = window.navigator.userAgent;
      var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      if (iOS) {
        this.lazyLoad = false;
      }
    }
  }
  render() {
    if (this.isWebView) {
      return (h("div", { class: "fallback-container" }, h("iframe", { src: this.src, allowFullScreen: true, allowtransparency: true, allow: "autoplay" })));
    }
    if (this.lazyLoad) {
      return (h("div", null, h("presto-video", { part: "video", getRef: this.getRef, poster: this.poster, src: "" }), h("div", { class: "presto-player__play-cover", onClick: () => this.loadPlayer() })));
    }
    return h("div", { class: "plyr__video-embed", part: "embed", ref: this.getRef, "data-plyr-provider": "youtube", "data-plyr-embed-id": this.getId(this.src) });
  }
  static get watchers() { return {
    "player": ["handlePlayerChange"]
  }; }
};
PrestoYoutube.style = prestoYoutubeCss;

export { PrestoActionBar as presto_action_bar, PrestoBunny as presto_bunny, PrestoEmailOverlay as presto_email_overlay, PrestoMutedOverlay as presto_muted_overlay, PrestoVimeo as presto_vimeo, PrestoYoutube as presto_youtube };
