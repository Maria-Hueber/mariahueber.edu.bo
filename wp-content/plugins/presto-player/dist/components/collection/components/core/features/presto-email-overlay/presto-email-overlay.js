import { Component, Prop, h, State, Event, Watch } from '@stencil/core';
export class PrestoEmailOverlay {
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
  static get is() { return "presto-email-overlay"; }
  static get originalStyleUrls() { return {
    "$": ["presto-email-overlay.css"]
  }; }
  static get styleUrls() { return {
    "$": ["presto-email-overlay.css"]
  }; }
  static get properties() { return {
    "player": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "player",
      "reflect": false
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
    "videoId": {
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
      "attribute": "video-id",
      "reflect": false
    },
    "i18n": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "i18nConfig",
        "resolved": "i18nConfig",
        "references": {
          "i18nConfig": {
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
    "currentTime": {
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
      "attribute": "current-time",
      "reflect": false
    },
    "duration": {
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
      "attribute": "duration",
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
    "enabled": {},
    "show": {},
    "loading": {},
    "error": {}
  }; }
  static get events() { return [{
      "method": "playVideo",
      "name": "playVideo",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "player",
      "methodName": "handlePlayerInit"
    }, {
      "propName": "duration",
      "methodName": "handleDuration"
    }, {
      "propName": "currentTime",
      "methodName": "handleTime"
    }]; }
}
