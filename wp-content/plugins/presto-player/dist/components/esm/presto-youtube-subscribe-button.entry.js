import { r as registerInstance, h } from './index-bba610c1.js';

const prestoYoutubeSubscribeButtonCss = ":host{display:block}";

const PrestoYoutubeSubscribeButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.layout = 'default';
  }
  waitForApi(callback) {
    var interval = setInterval(function () {
      var _a;
      if ((_a = window === null || window === void 0 ? void 0 : window.gapi) === null || _a === void 0 ? void 0 : _a.ytsubscribe) {
        clearInterval(interval);
        callback();
      }
    }, 50);
  }
  componentDidLoad() {
    const po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = false;
    po.src = 'https://apis.google.com/js/platform.js';
    const s = document.getElementsByTagName('script')[0];
    s && s.parentNode.insertBefore(po, s);
    this.waitForApi(() => {
      window.gapi.ytsubscribe.render(this.textInput, {
        channelId: this.channel,
        layout: this.layout,
        count: this.showCount ? 'default' : 'hidden',
      });
    });
  }
  render() {
    return h("div", { class: "g-ytsubscribe", ref: el => (this.textInput = el) });
  }
};
PrestoYoutubeSubscribeButton.style = prestoYoutubeSubscribeButtonCss;

export { PrestoYoutubeSubscribeButton as presto_youtube_subscribe_button };
