/// <reference types="resize-observer-browser" />
import { Component, Element, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import createPlayer from './player/create';
import mutedAutoplay from './player/functions/muted-autoplay';
import transform from './transform-data';
import { getParents } from './util';
export class PrestoPlayer {
  /**
   * Play video
   * @returns Plyr
   */
  async play() {
    this.shouldLazyLoad = false;
    return this.player.play();
  }
  /**
   * Pause video
   * @returns Plyr
   */
  async pause() {
    return this.player.pause();
  }
  /**
   * Pause video
   * @returns Plyr
   */
  async stop() {
    return this.player.stop();
  }
  /**
   * Toggle Fullscreen
   * @returns Plyr
   */
  async fullscreenToggle(open) {
    return this.player.fullscreen.toggle(open);
  }
  /**
   * Add an event listener for the specified event.
   * @param event String
   * @param func Function
   * @returns Plyr
   */
  async on(event, func) {
    return this.player.on(event, func);
  }
  /**
   * Remove an event listener for the specified event.
   * @param event String
   * @param func Function
   * @returns Plyr
   */
  async off(event, func) {
    return this.player.off(event, func);
  }
  /**
   * Sticky scroll handler
   * @returns void
   */
  stickyClass() {
    var _a, _b;
    if (!((_a = this.preset) === null || _a === void 0 ? void 0 : _a.sticky_scroll)) {
      return;
    }
    // not in admin, muted preview or if not playing
    if (this.isAdmin || this.mutedPreview || !((_b = this.player) === null || _b === void 0 ? void 0 : _b.playing)) {
      this.isSticky = false;
      return;
    }
    let rect = this.el.getBoundingClientRect();
    this.isSticky = rect.height < -rect.top;
  }
  /**
   * Handle sticky change
   */
  handleStickyChange() {
    const parents = getParents(this.el);
    parents.forEach(parent => {
      parent.classList.toggle('presto-sticky-parent', this.isSticky);
    });
  }
  /**
   * Get player config
   * @returns object
   */
  getConfig() {
    return Object.assign(Object.assign({}, transform({
      preset: this.preset,
      chapters: this.chapters,
      branding: this.branding,
      analytics: !!this.analytics,
      blockAttributes: this.blockAttributes,
      provider: this.provider,
      youtube: this.youtube,
      provider_video_id: this.provider_video_id,
      i18n: this.i18n,
    })), (this.iconUrl
      ? {
        iconUrl: this.iconUrl,
      }
      : {}));
  }
  /**
   * Get player data
   * @returns object
   */
  getPlayerData() {
    return {
      selector: this.playerEl,
      src: this.src || '',
      preload: this.preload,
      provider: this.provider,
      config: this.getConfig(),
      isAdmin: this.isAdmin,
    };
  }
  /**
   * Create the video player
   * @returns void
   */
  async createPlayer() {
    const player = await createPlayer(this.getPlayerData());
    // cache original config
    if (!this.originalConfig) {
      this.originalConfig = this.getConfig();
    }
    return player;
  }
  /**
   * Handle muted preview change
   * @returns void
   */
  handleMutedPreview(val) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!this.player || this.isAdmin) {
      return;
    }
    // maybe enable/disable captions
    if (!val && this.preset.captions_enabled) {
      setTimeout(() => {
        var _a;
        this.player.toggleCaptions((_a = this === null || this === void 0 ? void 0 : this.preset) === null || _a === void 0 ? void 0 : _a.captions_enabled);
      }, 0);
    }
    if (!((_c = (_b = (_a = this.originalConfig) === null || _a === void 0 ? void 0 : _a.blockAttributes) === null || _b === void 0 ? void 0 : _b.mutedPreview) === null || _c === void 0 ? void 0 : _c.enabled)) {
      return;
    }
    mutedAutoplay({
      player: this.player,
      mutedPreview: this.mutedPreview,
      captions: !!((_e = (_d = this.blockAttributes) === null || _d === void 0 ? void 0 : _d.mutedPreview) === null || _e === void 0 ? void 0 : _e.captions),
      progress: (_f = this.originalConfig) === null || _f === void 0 ? void 0 : _f.ajaxProgress,
      savePosition: (_g = this.originalConfig) === null || _g === void 0 ? void 0 : _g.save_player_position,
      onPlay: () => this.play(),
    });
  }
  /**
   * Update player state with events
   */
  handlePlayerEvents(player) {
    player.on('ready', e => {
      var _a, _b;
      // on ready
      this.player = e.detail.plyr;
      this.currentTime = this.player.currentTime;
      this.duration = this.player.duration;
      this.mutedPreview = (_b = (_a = this.blockAttributes) === null || _a === void 0 ? void 0 : _a.mutedPreview) === null || _b === void 0 ? void 0 : _b.enabled;
      this.player.on('timeupdate loadedmetadata', () => {
        this.currentTime = this.player.currentTime;
        this.duration = this.player.duration;
      });
      this.player.on('playing', () => {
        this.playClass = 'presto-player--playing';
      });
      this.player.on('pause', () => {
        this.playClass = 'presto-player--paused';
      });
      this.player.on('ended', () => {
        this.playClass = 'presto-player--ended';
      });
    });
  }
  /**
   * Handle lazy load changes
   * @returns
   */
  handleLazyLoadChange() {
    if (this.provider !== 'youtube' || this.shouldLazyLoad) {
      return;
    }
    setTimeout(() => {
      this.onReload('play');
    }, 50);
  }
  /**
   * Should we lazy load the video?
   * @returns boolean
   */
  shouldLazyLoadVideo() {
    var _a, _b, _c;
    if (this.provider !== 'youtube' || this.autoplay || ((_b = (_a = this.blockAttributes) === null || _a === void 0 ? void 0 : _a.mutedPreview) === null || _b === void 0 ? void 0 : _b.enabled)) {
      return false;
    }
    return !!((_c = this.preset) === null || _c === void 0 ? void 0 : _c.lazy_load_youtube);
  }
  /**
   * Initialize data
   */
  componentWillLoad() {
    var _a, _b;
    const children = (_a = this.el.children) === null || _a === void 0 ? void 0 : _a[0];
    children && children.classList && children.classList.contains('presto-iframe-fallback-container') && children.remove();
    this.shouldLazyLoad = this.shouldLazyLoadVideo();
    this.i18n = (_b = window === null || window === void 0 ? void 0 : window.prestoPlayer) === null || _b === void 0 ? void 0 : _b.i18n;
  }
  /**
   * Create Player
   */
  async componentDidLoad() {
    setTimeout(() => {
      this.initialize();
    }, 0);
  }
  /**
   * Init player
   * @returns plyr object
   */
  async initialize() {
    const player = await this.createPlayer();
    this.handlePlayerEvents(player);
    this.syncVideoHeight();
    return player;
  }
  /**
   * On player reload
   * @param ev
   */
  async onReload(action) {
    const player = await this.initialize();
    if (action == 'play') {
      player.on('ready', () => {
        this.play();
        player.muted = true;
        player.muted = false;
        player.off('ready', this.play);
      });
    }
  }
  /**
   * Sync video height as height changes
   */
  async syncVideoHeight() {
    // Loads polyfill asynchronously, only if required.
    if ('ResizeObserver' in window === false) {
      const module = await import('@juggle/resize-observer');
      window.ResizeObserver = module.ResizeObserver;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (!this.isSticky) {
        this.videoHeight = this.el.getBoundingClientRect().height;
      }
    });
    resizeObserver.observe(this.el);
  }
  /**
   * Render the muted overlay
   * @returns JSX
   */
  renderMutedOverlay() {
    var _a;
    if (!this.player || !this.mutedPreview || this.isAdmin) {
      return;
    }
    return (h("presto-muted-overlay", { mutedOverlay: (_a = this.player.config.blockAttributes) === null || _a === void 0 ? void 0 : _a.mutedOverlay, onPlayVideo: () => {
        this.mutedPreview = false;
        this.play();
      } }));
  }
  /**
   * Render the video
   * @returns JSX
   */
  renderVideo() {
    var _a;
    switch (this.provider) {
      case 'vimeo':
        return h("presto-vimeo", { player: this.player, getRef: el => (this.playerEl = el), poster: this.poster, src: this.src });
      case 'youtube':
        return (h("presto-youtube", { onReload: ev => this.onReload(ev === null || ev === void 0 ? void 0 : ev.detail), player: this.player, getRef: el => (this.playerEl = el), lazyLoad: this.shouldLazyLoad, poster: this.poster, src: this.src }));
      case 'bunny':
        return (h("presto-bunny", { thumbnail: (_a = this === null || this === void 0 ? void 0 : this.bunny) === null || _a === void 0 ? void 0 : _a.thumbnail, getRef: el => (this.playerEl = el), player: this.player, autoplay: this.autoplay, preload: this.preload, poster: this.poster, playsinline: this.playsinline, src: this.src, tracks: this.tracks }));
      default:
        return (h("presto-video", { getRef: el => (this.playerEl = el), player: this.player, autoplay: this.autoplay, preload: this.preload, poster: this.poster, playsinline: this.playsinline, src: this.src, tracks: this.tracks }));
    }
  }
  /**
   * Render email overlay
   * @returns JSX
   */
  renderEmailOverlay() {
    var _a, _b;
    if (!((_a = window === null || window === void 0 ? void 0 : window.prestoPlayer) === null || _a === void 0 ? void 0 : _a.isPremium) || this.isAdmin || ((_b = window === null || window === void 0 ? void 0 : window.prestoPlayer) === null || _b === void 0 ? void 0 : _b.logged_in)) {
      return;
    }
    return (h("presto-email-overlay", { direction: this.direction, player: this.player, preset: this.preset, videoId: this.video_id, i18n: this.i18n, onPlayVideo: () => {
        this.mutedPreview = false;
        this.play();
      }, currentTime: this.currentTime, duration: this.duration }));
  }
  /**
   * Render email overlay
   * @returns JSX
   */
  renderActionBar() {
    var _a, _b;
    if (!((_b = (_a = this.preset) === null || _a === void 0 ? void 0 : _a.action_bar) === null || _b === void 0 ? void 0 : _b.enabled)) {
      return;
    }
    return h("presto-action-bar", { config: this.preset.action_bar, currentTime: this.currentTime, duration: this.duration, youtube: this.youtube });
  }
  stickyPositionClass() {
    var _a, _b;
    if (!this.isSticky) {
      return "";
    }
    return !!((_a = this.preset) === null || _a === void 0 ? void 0 : _a.sticky_scroll_position) ? `presto-sticky--${(_b = this.preset) === null || _b === void 0 ? void 0 : _b.sticky_scroll_position.replace(/\s+/g, '-')}` : 'presto-sticky--bottom-right';
  }
  /**
   * Render the component
   * @returns JSX
   */
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, { style: { height: this.isSticky ? `${this.videoHeight}px` : 'auto' } },
      h("div", { part: "wrapper", dir: this.direction, class: `presto-player__wrapper fitvidsignore
        ${!!this.isSticky ? 'presto-sticky' : ''}
        ${this.stickyPositionClass()}
        ${this.direction === 'rtl' ? 'rtl' : ''}
        ${!!((_a = this.preset) === null || _a === void 0 ? void 0 : _a.skin) && `skin-${(_b = this.preset) === null || _b === void 0 ? void 0 : _b.skin}`}
        ${!!((_c = this.preset) === null || _c === void 0 ? void 0 : _c.hide_youtube) ? 'hide-youtube-ui' : ''}
        ${!!((_d = this.preset) === null || _d === void 0 ? void 0 : _d.caption_style) ? `caption-style-${(_e = this.preset) === null || _e === void 0 ? void 0 : _e.caption_style}` : ''}
        ${!!this.mutedPreview ? 'is-muted-overlay' : ''}
        ${this.playClass ? this.playClass : ''}` },
        h("div", null,
          h("slot", { name: "player-start" }),
          this.renderEmailOverlay(),
          h("slot", { name: "player-before-video" }),
          this.renderVideo(),
          h("slot", { name: "player-after-video" }),
          this.renderActionBar(),
          this.renderMutedOverlay(),
          h("slot", { name: "player-end" })))));
  }
  static get is() { return "presto-player"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["presto-player.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["presto-player.css"]
  }; }
  static get properties() { return {
    "video_id": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video_id",
      "reflect": false
    },
    "iconUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-url",
      "reflect": false
    },
    "src": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "src",
      "reflect": false
    },
    "bunny": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "BunnyConfig",
        "resolved": "BunnyConfig",
        "references": {
          "BunnyConfig": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "branding": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "prestoBranding",
        "resolved": "prestoBranding",
        "references": {
          "prestoBranding": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "config": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "PrestoConfig",
        "resolved": "PrestoConfig",
        "references": {
          "PrestoConfig": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "preset": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "presetAttributes",
        "resolved": "presetAttributes",
        "references": {
          "presetAttributes": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "chapters": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "prestoChapters",
        "resolved": "prestoChapters",
        "references": {
          "prestoChapters": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "blockAttributes": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "blockAttributes",
        "resolved": "blockAttributes",
        "references": {
          "blockAttributes": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "tracks": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ label: string; src: string; srcLang: string }[]",
        "resolved": "{ label: string; src: string; srcLang: string; }[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "analytics": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "analytics",
      "reflect": false
    },
    "provider": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "provider",
      "reflect": false
    },
    "provider_video_id": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "provider_video_id",
      "reflect": false
    },
    "actionBar": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ActionBarConfig",
        "resolved": "ActionBarConfig",
        "references": {
          "ActionBarConfig": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "youtube": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YoutubeConfig",
        "resolved": "YoutubeConfig",
        "references": {
          "YoutubeConfig": {
            "location": "import",
            "path": "../../../../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "autoplay": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "autoplay",
      "reflect": false
    },
    "preload": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "preload",
      "reflect": false
    },
    "poster": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "poster",
      "reflect": false
    },
    "playsinline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "playsinline",
      "reflect": false
    },
    "isAdmin": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-admin",
      "reflect": false
    },
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'rtl'",
        "resolved": "\"rtl\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "direction",
      "reflect": false
    }
  }; }
  static get states() { return {
    "player": {},
    "playerEl": {},
    "shouldLazyLoad": {},
    "mutedPreview": {},
    "currentTime": {},
    "duration": {},
    "isSticky": {},
    "videoHeight": {},
    "playClass": {}
  }; }
  static get methods() { return {
    "play": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Play video",
        "tags": [{
            "name": "returns",
            "text": "Plyr"
          }]
      }
    },
    "pause": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Pause video",
        "tags": [{
            "name": "returns",
            "text": "Plyr"
          }]
      }
    },
    "stop": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Pause video",
        "tags": [{
            "name": "returns",
            "text": "Plyr"
          }]
      }
    },
    "fullscreenToggle": {
      "complexType": {
        "signature": "(open: boolean) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Toggle Fullscreen",
        "tags": [{
            "name": "returns",
            "text": "Plyr"
          }]
      }
    },
    "on": {
      "complexType": {
        "signature": "(event: Event, func: Function) => Promise<any>",
        "parameters": [{
            "tags": [{
                "text": "event String",
                "name": "param"
              }],
            "text": "String"
          }, {
            "tags": [{
                "text": "func Function",
                "name": "param"
              }],
            "text": "Function"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          },
          "Function": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Add an event listener for the specified event.",
        "tags": [{
            "name": "param",
            "text": "event String"
          }, {
            "name": "param",
            "text": "func Function"
          }, {
            "name": "returns",
            "text": "Plyr"
          }]
      }
    },
    "off": {
      "complexType": {
        "signature": "(event: Event, func: Function) => Promise<any>",
        "parameters": [{
            "tags": [{
                "text": "event String",
                "name": "param"
              }],
            "text": "String"
          }, {
            "tags": [{
                "text": "func Function",
                "name": "param"
              }],
            "text": "Function"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          },
          "Function": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Remove an event listener for the specified event.",
        "tags": [{
            "name": "param",
            "text": "event String"
          }, {
            "name": "param",
            "text": "func Function"
          }, {
            "name": "returns",
            "text": "Plyr"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "isSticky",
      "methodName": "handleStickyChange"
    }, {
      "propName": "mutedPreview",
      "methodName": "handleMutedPreview"
    }, {
      "propName": "shouldLazyLoad",
      "methodName": "handleLazyLoadChange"
    }]; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "stickyClass",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
