import { Component, State, Prop, Watch, h, Element } from '@stencil/core';
import { timePassed } from '../../../../util';
export class PrestoActionBar {
  constructor() {
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
      _b.text,
      h("div", { slot: "button" },
        this.youtubeButton(),
        this.customButton())));
  }
  static get is() { return "presto-action-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["presto-action-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["presto-action-bar.css"]
  }; }
  static get properties() { return {
    "config": {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "show": {},
    "youtubeRenderKey": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "config",
      "methodName": "handleButtonCountChange"
    }, {
      "propName": "currentTime",
      "methodName": "handleDuration"
    }, {
      "propName": "duration",
      "methodName": "handleDuration"
    }]; }
}
