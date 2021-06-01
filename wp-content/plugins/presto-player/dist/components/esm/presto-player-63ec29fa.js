import { _ as _slicedToArray, a as _createClass$1, c as _typeof, d as _classCallCheck$1, e as _toConsumableArray, f as _defineProperty$2, g as _objectSpread2$1, i as _objectWithoutProperties, j as _asyncToGenerator, k as _createForOfIteratorHelper, r as registerInstance, h, H as Host, l as getElement$1 } from './index-32073d53.js';

// takes our saved options and transforms them into a format that plyr.io will use
function transform ({ preset = {}, chapters, branding, src, analytics, blockAttributes = {}, provider = '', provider_video_id = '', youtube, type, isAdmin, i18n, storage = {
  enabled: !isAdmin,
  key: `presto-player-${preset.id}`,
}, }) {
  var _a, _b, _c, _d, _e;
  const controlOptions = ['play-large', 'rewind', 'play', 'fast-forward', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'];
  const required = ['settings'];
  const disabled = [...(['youtube', 'vimeo'].includes(provider) ? ['pip'] : []), 'captions'];
  const controls = controlOptions.filter(key => {
    return ((preset === null || preset === void 0 ? void 0 : preset[key]) || required.includes(key)) && !disabled.includes(key);
  });
  if ((_a = blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.mutedPreview) === null || _a === void 0 ? void 0 : _a.enabled) {
    storage = {
      enabled: false,
    };
  }
  let playerSettings = Object.assign(Object.assign(Object.assign(Object.assign({ id: blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.id, title: (blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.title) || '', blockAttributes: Object.assign(Object.assign({}, blockAttributes), { type }), src, ajaxProgress: true, analytics, mutedPreview: {
      enabled: (_b = blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.mutedPreview) === null || _b === void 0 ? void 0 : _b.enabled,
    }, chapters,
    controls, settings: ['captions', 'quality', 'loop', ...((preset === null || preset === void 0 ? void 0 : preset.speed) ? ['speed'] : [])], hideControls: preset === null || preset === void 0 ? void 0 : preset.auto_hide, logo: branding === null || branding === void 0 ? void 0 : branding.logo, logo_width: branding === null || branding === void 0 ? void 0 : branding.logo_width, hide_logo: preset === null || preset === void 0 ? void 0 : preset.hide_logo, lazy_load_youtube: preset === null || preset === void 0 ? void 0 : preset.lazy_load_youtube, save_player_position: !!(preset === null || preset === void 0 ? void 0 : preset.save_player_position), sticky_scroll: preset === null || preset === void 0 ? void 0 : preset.sticky_scroll, autoplay: (blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.autoplay) && !((_c = window.wp) === null || _c === void 0 ? void 0 : _c.blocks) ? true : false, playsInline: (blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.playsInline) && !((_d = window.wp) === null || _d === void 0 ? void 0 : _d.blocks) ? true : false }, (provider ? { provider } : {})), (provider_video_id ? { provider_video_id } : {})), ((blockAttributes === null || blockAttributes === void 0 ? void 0 : blockAttributes.poster) ? { poster: blockAttributes.poster } : {})), { invertTime: true, 
    // debug: true,
    storage, resetOnEnd: !!(preset === null || preset === void 0 ? void 0 : preset.reset_on_end), vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false,
      // Prevent Vimeo blocking site
    }, youtube: {
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      // Custom settings from Plyr
      customControls: true,
      noCookie: !!(youtube === null || youtube === void 0 ? void 0 : youtube.noCookie), // Whether to use an alternative version of YouTube without cookies
    }, tooltips: {
      controls: true,
      seek: true,
    }, 
    // Localisation
    i18n });
  if ((_e = window === null || window === void 0 ? void 0 : window.wp) === null || _e === void 0 ? void 0 : _e.hooks) {
    playerSettings = window.wp.hooks.applyFilters('presto.playerSettings', playerSettings);
  }
  return playerSettings;
}

function _defineProperty$1(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}

function _createClass(e, t, i) {
  return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

function ownKeys(e, t) {
  var i = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i.push.apply(i, s);
  }

  return i;
}

function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(i), !0).forEach(function (t) {
      _defineProperty(e, t, i[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
    });
  }

  return e;
}

var defaults$1 = {
  addCSS: !0,
  thumbWidth: 15,
  watch: !0
};

function matches$1(e, t) {
  return function () {
    return Array.from(document.querySelectorAll(t)).includes(this);
  }.call(e, t);
}

function trigger(e, t) {
  if (e && t) {
    var i = new Event(t, {
      bubbles: !0
    });
    e.dispatchEvent(i);
  }
}

var getConstructor$1 = function getConstructor$1(e) {
  return null != e ? e.constructor : null;
},
    instanceOf$1 = function instanceOf$1(e, t) {
  return !!(e && t && e instanceof t);
},
    isNullOrUndefined$1 = function isNullOrUndefined$1(e) {
  return null == e;
},
    isObject$1 = function isObject$1(e) {
  return getConstructor$1(e) === Object;
},
    isNumber$1 = function isNumber$1(e) {
  return getConstructor$1(e) === Number && !Number.isNaN(e);
},
    isString$1 = function isString$1(e) {
  return getConstructor$1(e) === String;
},
    isBoolean$1 = function isBoolean$1(e) {
  return getConstructor$1(e) === Boolean;
},
    isFunction$1 = function isFunction$1(e) {
  return getConstructor$1(e) === Function;
},
    isArray$1 = function isArray$1(e) {
  return Array.isArray(e);
},
    isNodeList$1 = function isNodeList$1(e) {
  return instanceOf$1(e, NodeList);
},
    isElement$1 = function isElement$1(e) {
  return instanceOf$1(e, Element);
},
    isEvent$1 = function isEvent$1(e) {
  return instanceOf$1(e, Event);
},
    isEmpty$1 = function isEmpty$1(e) {
  return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
},
    is$1 = {
  nullOrUndefined: isNullOrUndefined$1,
  object: isObject$1,
  number: isNumber$1,
  string: isString$1,
  boolean: isBoolean$1,
  function: isFunction$1,
  array: isArray$1,
  nodeList: isNodeList$1,
  element: isElement$1,
  event: isEvent$1,
  empty: isEmpty$1
};

function getDecimalPlaces(e) {
  var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}

function round(e, t) {
  if (1 > t) {
    var i = getDecimalPlaces(t);
    return parseFloat(e.toFixed(i));
  }

  return Math.round(e / t) * t;
}

var RangeTouch = function () {
  function e(t, i) {
    _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, i), this.init());
  }

  return _createClass(e, [{
    key: "init",
    value: function value() {
      e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
    }
  }, {
    key: "destroy",
    value: function value() {
      e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
    }
  }, {
    key: "listeners",
    value: function value(e) {
      var t = this,
          i = e ? "addEventListener" : "removeEventListener";
      ["touchstart", "touchmove", "touchend"].forEach(function (e) {
        t.element[i](e, function (e) {
          return t.set(e);
        }, !1);
      });
    }
  }, {
    key: "get",
    value: function value(t) {
      if (!e.enabled || !is$1.event(t)) return null;
      var i,
          s = t.target,
          n = t.changedTouches[0],
          r = parseFloat(s.getAttribute("min")) || 0,
          a = parseFloat(s.getAttribute("max")) || 100,
          o = parseFloat(s.getAttribute("step")) || 1,
          l = s.getBoundingClientRect(),
          c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
      return 0 > (i = 100 / l.width * (n.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), r + round(i / 100 * (a - r), o);
    }
  }, {
    key: "set",
    value: function value(t) {
      e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
    }
  }], [{
    key: "setup",
    value: function value(t) {
      var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          s = null;
      if (is$1.empty(t) || is$1.string(t) ? s = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? s = [t] : is$1.nodeList(t) ? s = Array.from(t) : is$1.array(t) && (s = t.filter(is$1.element)), is$1.empty(s)) return null;

      var n = _objectSpread2({}, defaults$1, {}, i);

      if (is$1.string(t) && n.watch) {
        var r = new MutationObserver(function (i) {
          Array.from(i).forEach(function (i) {
            Array.from(i.addedNodes).forEach(function (i) {
              is$1.element(i) && matches$1(i, t) && new e(i, n);
            });
          });
        });
        r.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }

      return s.map(function (t) {
        return new e(t, i);
      });
    }
  }, {
    key: "enabled",
    get: function get() {
      return "ontouchstart" in document.documentElement;
    }
  }]), e;
}();

var getConstructor = function getConstructor(e) {
  return null != e ? e.constructor : null;
},
    instanceOf = function instanceOf(e, t) {
  return Boolean(e && t && e instanceof t);
},
    isNullOrUndefined = function isNullOrUndefined(e) {
  return null == e;
},
    isObject = function isObject(e) {
  return getConstructor(e) === Object;
},
    isNumber = function isNumber(e) {
  return getConstructor(e) === Number && !Number.isNaN(e);
},
    isString = function isString(e) {
  return getConstructor(e) === String;
},
    isBoolean = function isBoolean(e) {
  return getConstructor(e) === Boolean;
},
    isFunction = function isFunction(e) {
  return getConstructor(e) === Function;
},
    isArray = function isArray(e) {
  return Array.isArray(e);
},
    isWeakMap = function isWeakMap(e) {
  return instanceOf(e, WeakMap);
},
    isNodeList = function isNodeList(e) {
  return instanceOf(e, NodeList);
},
    isTextNode = function isTextNode(e) {
  return getConstructor(e) === Text;
},
    isEvent = function isEvent(e) {
  return instanceOf(e, Event);
},
    isKeyboardEvent = function isKeyboardEvent(e) {
  return instanceOf(e, KeyboardEvent);
},
    isCue = function isCue(e) {
  return instanceOf(e, window.TextTrackCue) || instanceOf(e, window.VTTCue);
},
    isTrack = function isTrack(e) {
  return instanceOf(e, TextTrack) || !isNullOrUndefined(e) && isString(e.kind);
},
    isPromise = function isPromise(e) {
  return instanceOf(e, Promise) && isFunction(e.then);
},
    isElement = function isElement(e) {
  return null !== e && "object" == _typeof(e) && 1 === e.nodeType && "object" == _typeof(e.style) && "object" == _typeof(e.ownerDocument);
},
    isEmpty = function isEmpty(e) {
  return isNullOrUndefined(e) || (isString(e) || isArray(e) || isNodeList(e)) && !e.length || isObject(e) && !Object.keys(e).length;
},
    isUrl = function isUrl(e) {
  if (instanceOf(e, window.URL)) return !0;
  if (!isString(e)) return !1;
  var t = e;
  e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

  try {
    return !isEmpty(new URL(t).hostname);
  } catch (e) {
    return !1;
  }
};

var is = {
  nullOrUndefined: isNullOrUndefined,
  object: isObject,
  number: isNumber,
  string: isString,
  boolean: isBoolean,
  function: isFunction,
  array: isArray,
  weakMap: isWeakMap,
  nodeList: isNodeList,
  element: isElement,
  textNode: isTextNode,
  event: isEvent,
  keyboardEvent: isKeyboardEvent,
  cue: isCue,
  track: isTrack,
  promise: isPromise,
  url: isUrl,
  empty: isEmpty
};

var transitionEndEvent = function () {
  var e = document.createElement("span"),
      t = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  },
      i = Object.keys(t).find(function (t) {
    return void 0 !== e.style[t];
  });
  return !!is.string(i) && t[i];
}();

function repaint(e, t) {
  setTimeout(function () {
    try {
      e.hidden = !0, e.hidden = !1;
    } catch (e) {}
  }, t);
}

var browser = {
  isIE:
  /* @cc_on!@ */
  !!document.documentMode,
  isEdge: window.navigator.userAgent.includes("Edge"),
  isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
  isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
  isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
};

function cloneDeep(e) {
  return JSON.parse(JSON.stringify(e));
}

function getDeep(e, t) {
  return t.split(".").reduce(function (e, t) {
    return e && e[t];
  }, e);
}

function extend() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    t[_key - 1] = arguments[_key];
  }

  if (!t.length) return e;
  var i = t.shift();
  return is.object(i) ? (Object.keys(i).forEach(function (t) {
    is.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, _defineProperty$2({}, t, {})), extend(e[t], i[t])) : Object.assign(e, _defineProperty$2({}, t, i[t]));
  }), extend.apply(void 0, [e].concat(t))) : e;
}

function wrap(e, t) {
  var i = e.length ? e : [e];
  Array.from(i).reverse().forEach(function (e, i) {
    var s = i > 0 ? t.cloneNode(!0) : t,
        n = e.parentNode,
        r = e.nextSibling;
    s.appendChild(e), r ? n.insertBefore(s, r) : n.appendChild(s);
  });
}

function setAttributes(e, t) {
  is.element(e) && !is.empty(t) && Object.entries(t).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        e = _ref2[1];

    return !is.nullOrUndefined(e);
  }).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        t = _ref4[0],
        i = _ref4[1];

    return e.setAttribute(t, i);
  });
}

function createElement(e, t, i) {
  var s = document.createElement(e);
  return is.object(t) && setAttributes(s, t), is.string(i) && (s.innerText = i), s;
}

function insertAfter(e, t) {
  is.element(e) && is.element(t) && t.parentNode.insertBefore(e, t.nextSibling);
}

function insertElement(e, t, i, s) {
  is.element(t) && t.appendChild(createElement(e, i, s));
}

function removeElement(e) {
  is.nodeList(e) || is.array(e) ? Array.from(e).forEach(removeElement) : is.element(e) && is.element(e.parentNode) && e.parentNode.removeChild(e);
}

function emptyElement(e) {
  if (!is.element(e)) return;
  var t = e.childNodes.length;

  for (; t > 0;) {
    e.removeChild(e.lastChild), t -= 1;
  }
}

function replaceElement(e, t) {
  return is.element(t) && is.element(t.parentNode) && is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
}

function getAttributesFromSelector(e, t) {
  if (!is.string(e) || is.empty(e)) return {};
  var i = {},
      s = extend({}, t);
  return e.split(",").forEach(function (e) {
    var t = e.trim(),
        n = t.replace(".", ""),
        r = t.replace(/[[\]]/g, "").split("="),
        _r = _slicedToArray(r, 1),
        a = _r[0],
        o = r.length > 1 ? r[1].replace(/["']/g, "") : "";

    switch (t.charAt(0)) {
      case ".":
        is.string(s.class) ? i.class = "".concat(s.class, " ").concat(n) : i.class = n;
        break;

      case "#":
        i.id = t.replace("#", "");
        break;

      case "[":
        i[a] = o;
    }
  }), extend(s, i);
}

function toggleHidden(e, t) {
  if (!is.element(e)) return;
  var i = t;
  is.boolean(i) || (i = !e.hidden), e.hidden = i;
}

function toggleClass(e, t, i) {
  if (is.nodeList(e)) return Array.from(e).map(function (e) {
    return toggleClass(e, t, i);
  });

  if (is.element(e)) {
    var s = "toggle";
    return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t);
  }

  return !1;
}

function hasClass(e, t) {
  return is.element(e) && e.classList.contains(t);
}

function matches(e, t) {
  var _Element = Element,
      i = _Element.prototype;
  return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
    return Array.from(document.querySelectorAll(t)).includes(this);
  }).call(e, t);
}

function closest$1(e, t) {
  var _Element2 = Element,
      i = _Element2.prototype;
  return (i.closest || function () {
    var e = this;

    do {
      if (matches.matches(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }).call(e, t);
}

function getElements(e) {
  return this.elements.container.querySelectorAll(e);
}

function getElement(e) {
  return this.elements.container.querySelector(e);
}

function setFocus() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  is.element(e) && (e.focus({
    preventScroll: !0
  }), t && toggleClass(e, this.config.classNames.tabFocus));
}

var defaultCodecs = {
  "audio/ogg": "vorbis",
  "audio/wav": "1",
  "video/webm": "vp8, vorbis",
  "video/mp4": "avc1.42E01E, mp4a.40.2",
  "video/ogg": "theora"
},
    support = {
  audio: "canPlayType" in document.createElement("audio"),
  video: "canPlayType" in document.createElement("video"),
  check: function check(e, t, i) {
    var s = browser.isIPhone && i && support.playsinline,
        n = support[e] || "html5" !== t;
    return {
      api: n,
      ui: n && support.rangeInput && ("video" !== e || !browser.isIPhone || s)
    };
  },
  pip: !(browser.isIPhone || !is.function(createElement("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || createElement("video").disablePictureInPicture)),
  airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
  playsinline: "playsInline" in document.createElement("video"),
  mime: function mime(e) {
    if (is.empty(e)) return !1;

    var _e$split = e.split("/"),
        _e$split2 = _slicedToArray(_e$split, 1),
        t = _e$split2[0];

    var i = e;
    if (!this.isHTML5 || t !== this.type) return !1;
    Object.keys(defaultCodecs).includes(i) && (i += "; codecs=\"".concat(defaultCodecs[e], "\""));

    try {
      return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
    } catch (e) {
      return !1;
    }
  },
  textTracks: "textTracks" in document.createElement("video"),
  rangeInput: function () {
    var e = document.createElement("input");
    return e.type = "range", "range" === e.type;
  }(),
  touch: "ontouchstart" in document.documentElement,
  transitions: !1 !== transitionEndEvent,
  reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
},
    supportsPassiveListeners = function () {
  var e = !1;

  try {
    var t = Object.defineProperty({}, "passive", {
      get: function get() {
        return e = !0, null;
      }
    });
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch (e) {}

  return e;
}();

function toggleListener(e, t, i) {
  var _this = this;

  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
  var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
  if (!e || !("addEventListener" in e) || is.empty(t) || !is.function(i)) return;
  var a = t.split(" ");
  var o = r;
  supportsPassiveListeners && (o = {
    passive: n,
    capture: r
  }), a.forEach(function (t) {
    _this && _this.eventListeners && s && _this.eventListeners.push({
      element: e,
      type: t,
      callback: i,
      options: o
    }), e[s ? "addEventListener" : "removeEventListener"](t, i, o);
  });
}

function on(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 ? arguments[2] : undefined;
  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
  toggleListener.call(this, e, t, i, !0, s, n);
}

function off(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 ? arguments[2] : undefined;
  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
  toggleListener.call(this, e, t, i, !1, s, n);
}

function once(e) {
  var _this2 = this;

  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 ? arguments[2] : undefined;
  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

  var r = function r() {
    for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a[_key2] = arguments[_key2];
    }

    off(e, t, r, s, n), i.apply(_this2, a);
  };

  toggleListener.call(this, e, t, r, !0, s, n);
}

function triggerEvent(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!is.element(e) || is.empty(t)) return;
  var n = new CustomEvent(t, {
    bubbles: i,
    detail: _objectSpread2$1(_objectSpread2$1({}, s), {}, {
      plyr: this
    })
  });
  e.dispatchEvent(n);
}

function unbindListeners() {
  this && this.eventListeners && (this.eventListeners.forEach(function (e) {
    var t = e.element,
        i = e.type,
        s = e.callback,
        n = e.options;
    t.removeEventListener(i, s, n);
  }), this.eventListeners = []);
}

function ready() {
  var _this3 = this;

  return new Promise(function (e) {
    return _this3.ready ? setTimeout(e, 0) : on.call(_this3, _this3.elements.container, "ready", e);
  }).then(function () {});
}

function silencePromise(e) {
  is.promise(e) && e.then(null, function () {});
}

function validateRatio(e) {
  if (!(is.array(e) || is.string(e) && e.includes(":"))) return !1;
  return (is.array(e) ? e : e.split(":")).map(Number).every(is.number);
}

function reduceAspectRatio(e) {
  if (!is.array(e) || !e.every(is.number)) return null;

  var _e = _slicedToArray(e, 2),
      t = _e[0],
      i = _e[1],
      s = function s(e, t) {
    return 0 === t ? e : s(t, e % t);
  },
      n = s(t, i);

  return [t / n, i / n];
}

function getAspectRatio(e) {
  var _this$embed;

  var t = function t(e) {
    return validateRatio(e) ? e.split(":").map(Number) : null;
  };

  var i = t(e);

  if (null === i && (i = t(this.config.ratio)), null === i && !is.empty(this.embed) && is.array(this.embed.ratio) && (_this$embed = this.embed, i = _this$embed.ratio, _this$embed), null === i && this.isHTML5) {
    var _this$media = this.media,
        _e2 = _this$media.videoWidth,
        _t = _this$media.videoHeight;
    i = reduceAspectRatio([_e2, _t]);
  }

  return i;
}

function setAspectRatio(e) {
  if (!this.isVideo) return {};

  var t = this.elements.wrapper,
      i = getAspectRatio.call(this, e),
      _ref5 = is.array(i) ? i : [0, 0],
      _ref6 = _slicedToArray(_ref5, 2),
      s = _ref6[0],
      n = _ref6[1],
      r = 100 / s * n;

  if (t.style.paddingBottom = r - .25 + "%", this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
    var _e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
        _i = (_e3 - r) / (_e3 / 50);

    this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(_i, "%)");
  } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);

  return {
    padding: r,
    ratio: i
  };
}

var html5 = {
  getSources: function getSources() {
    var _this4 = this;

    if (!this.isHTML5) return [];
    return Array.from(this.media.querySelectorAll("source")).filter(function (e) {
      var t = e.getAttribute("type");
      return !!is.empty(t) || support.mime.call(_this4, t);
    });
  },
  getQualityOptions: function getQualityOptions() {
    return this.config.quality.forced ? this.config.quality.options : html5.getSources.call(this).map(function (e) {
      return Number(e.getAttribute("size"));
    }).filter(Boolean);
  },
  setup: function setup() {
    if (!this.isHTML5) return;
    var e = this;
    e.options.speed = e.config.speed.options, is.empty(this.config.ratio) || setAspectRatio.call(e), Object.defineProperty(e.media, "quality", {
      get: function get() {
        var t = html5.getSources.call(e).find(function (t) {
          return t.getAttribute("src") === e.source;
        });
        return t && Number(t.getAttribute("size"));
      },
      set: function set(t) {
        if (e.quality !== t) {
          if (e.config.quality.forced && is.function(e.config.quality.onChange)) e.config.quality.onChange(t);else {
            var i = html5.getSources.call(e).find(function (e) {
              return Number(e.getAttribute("size")) === t;
            });
            if (!i) return;
            var _e$media = e.media,
                s = _e$media.currentTime,
                n = _e$media.paused,
                r = _e$media.preload,
                a = _e$media.readyState,
                o = _e$media.playbackRate;
            e.media.src = i.getAttribute("src"), ("none" !== r || a) && (e.once("loadedmetadata", function () {
              e.speed = o, e.currentTime = s, n || silencePromise(e.play());
            }), e.media.load());
          }
          triggerEvent.call(e, e.media, "qualitychange", !1, {
            quality: t
          });
        }
      }
    });
  },
  cancelRequests: function cancelRequests() {
    this.isHTML5 && (removeElement(html5.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
  }
};

function dedupe(e) {
  return is.array(e) ? e.filter(function (t, i) {
    return e.indexOf(t) === i;
  }) : e;
}

function closest(e, t) {
  return is.array(e) && e.length ? e.reduce(function (e, i) {
    return Math.abs(i - t) < Math.abs(e - t) ? i : e;
  }) : null;
}

function generateId(e) {
  return "".concat(e, "-").concat(Math.floor(1e4 * Math.random()));
}

function format(e) {
  for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    t[_key3 - 1] = arguments[_key3];
  }

  return is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, i) {
    return t[i].toString();
  });
}

function getPercentage(e, t) {
  return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2);
}

var replaceAll = function replaceAll() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
},
    toTitleCase = function toTitleCase() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return e.toString().replace(/\w\S*/g, function (e) {
    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
  });
};

function toPascalCase() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.toString();
  return t = replaceAll(t, "-", " "), t = replaceAll(t, "_", " "), t = toTitleCase(t), replaceAll(t, " ", "");
}

function toCamelCase() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.toString();
  return t = toPascalCase(t), t.charAt(0).toLowerCase() + t.slice(1);
}

function stripHTML(e) {
  var t = document.createDocumentFragment(),
      i = document.createElement("div");
  return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
}

function getHTML(e) {
  var t = document.createElement("div");
  return t.appendChild(e), t.innerHTML;
}

var resources = {
  pip: "PIP",
  airplay: "AirPlay",
  html5: "HTML5",
  vimeo: "Vimeo",
  youtube: "YouTube"
},
    i18n = {
  get: function get() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (is.empty(e) || is.empty(t)) return "";
    var i = getDeep(t.i18n, e);
    if (is.empty(i)) return Object.keys(resources).includes(e) ? resources[e] : "";
    var s = {
      "{seektime}": t.seekTime,
      "{title}": t.title
    };
    return Object.entries(s).forEach(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          e = _ref8[0],
          t = _ref8[1];

      i = replaceAll(i, e, t);
    }), i;
  }
};

var Storage = /*#__PURE__*/function () {
  function Storage(e) {
    var _this5 = this;

    _classCallCheck$1(this, Storage);

    _defineProperty$1(this, "get", function (e) {
      if (!Storage.supported || !_this5.enabled) return null;
      var t = window.localStorage.getItem(_this5.key);
      if (is.empty(t)) return null;
      var i = JSON.parse(t);
      return is.string(e) && e.length ? i[e] : i;
    }), _defineProperty$1(this, "set", function (e) {
      if (!Storage.supported || !_this5.enabled) return;
      if (!is.object(e)) return;

      var t = _this5.get();

      is.empty(t) && (t = {}), extend(t, e), window.localStorage.setItem(_this5.key, JSON.stringify(t));
    }), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key;
  }

  _createClass$1(Storage, null, [{
    key: "supported",
    get: function get() {
      try {
        if (!("localStorage" in window)) return !1;
        var e = "___test";
        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    }
  }]);

  return Storage;
}();

function fetch$1(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  return new Promise(function (i, s) {
    try {
      var _s = new XMLHttpRequest();

      if (!("withCredentials" in _s)) return;
      _s.addEventListener("load", function () {
        if ("text" === t) try {
          i(JSON.parse(_s.responseText));
        } catch (e) {
          i(_s.responseText);
        } else i(_s.response);
      }), _s.addEventListener("error", function () {
        throw new Error(_s.status);
      }), _s.open("GET", e, !0), _s.responseType = t, _s.send();
    } catch (e) {
      s(e);
    }
  });
}

function _loadSprite(e, t) {
  if (!is.string(e)) return;
  var i = is.string(t);
  var s = !1;

  var n = function n() {
    return null !== document.getElementById(t);
  },
      r = function r(e, t) {
    e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
  };

  if (!i || !n()) {
    var _n = Storage.supported,
        a = document.createElement("div");

    if (a.setAttribute("hidden", ""), i && a.setAttribute("id", t), _n) {
      var _e4 = window.localStorage.getItem("cache-".concat(t));

      if (s = null !== _e4, s) {
        var _t2 = JSON.parse(_e4);

        r(a, _t2.content);
      }
    }

    fetch$1(e).then(function (e) {
      is.empty(e) || (_n && window.localStorage.setItem("cache-".concat(t), JSON.stringify({
        content: e
      })), r(a, e));
    }).catch(function () {});
  }
}

var getHours = function getHours(e) {
  return Math.trunc(e / 60 / 60 % 60, 10);
},
    getSeconds = function getSeconds(e) {
  return Math.trunc(e % 60, 10);
};

function _formatTime() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  if (!is.number(e)) return _formatTime(void 0, t, i);

  var s = function s(e) {
    return "0".concat(e).slice(-2);
  };

  var n = getHours(e);
  var r = (a = e, Math.trunc(a / 60 % 60, 10));
  var a;
  var o = getSeconds(e);
  return n = t || n > 0 ? "".concat(n, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(n).concat(s(r), ":").concat(s(o));
}

var controls = {
  getIconUrl: function getIconUrl() {
    var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || browser.isIE && !window.svg4everybody;
    return {
      url: this.config.iconUrl,
      cors: e
    };
  },
  findElements: function findElements() {
    try {
      return this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
        play: getElements.call(this, this.config.selectors.buttons.play),
        pause: getElement.call(this, this.config.selectors.buttons.pause),
        restart: getElement.call(this, this.config.selectors.buttons.restart),
        rewind: getElement.call(this, this.config.selectors.buttons.rewind),
        fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
        mute: getElement.call(this, this.config.selectors.buttons.mute),
        pip: getElement.call(this, this.config.selectors.buttons.pip),
        airplay: getElement.call(this, this.config.selectors.buttons.airplay),
        settings: getElement.call(this, this.config.selectors.buttons.settings),
        captions: getElement.call(this, this.config.selectors.buttons.captions),
        fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
      }, this.elements.progress = getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
        seek: getElement.call(this, this.config.selectors.inputs.seek),
        volume: getElement.call(this, this.config.selectors.inputs.volume)
      }, this.elements.display = {
        buffer: getElement.call(this, this.config.selectors.display.buffer),
        currentTime: getElement.call(this, this.config.selectors.display.currentTime),
        duration: getElement.call(this, this.config.selectors.display.duration)
      }, is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
    } catch (e) {
      return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
    }
  },
  createIcon: function createIcon(e, t) {
    var i = "http://www.w3.org/2000/svg",
        s = controls.getIconUrl.call(this),
        n = "".concat(s.cors ? "" : s.url, "#").concat(this.config.iconPrefix),
        r = document.createElementNS(i, "svg");
    setAttributes(r, extend(t, {
      "aria-hidden": "true",
      focusable: "false"
    }));
    var a = document.createElementNS(i, "use"),
        o = "".concat(n, "-").concat(e);
    return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), r.appendChild(a), r;
  },
  createLabel: function createLabel(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = i18n.get(e, this.config);
    return createElement("span", _objectSpread2$1(_objectSpread2$1({}, t), {}, {
      class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
    }), i);
  },
  createBadge: function createBadge(e) {
    if (is.empty(e)) return null;
    var t = createElement("span", {
      class: this.config.classNames.menu.value
    });
    return t.appendChild(createElement("span", {
      class: this.config.classNames.menu.badge
    }, e)), t;
  },
  createButton: function createButton(e, t) {
    var _this6 = this;

    var i = extend({}, t);
    var s = toCamelCase(e);
    var n = {
      element: "button",
      toggle: !1,
      label: null,
      icon: null,
      labelPressed: null,
      iconPressed: null
    };

    switch (["element", "icon", "label"].forEach(function (e) {
      Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
    }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function (e) {
      return e === _this6.config.classNames.control;
    }) || extend(i, {
      class: "".concat(i.class, " ").concat(this.config.classNames.control)
    }) : i.class = this.config.classNames.control, e) {
      case "play":
        n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
        break;

      case "mute":
        n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
        break;

      case "captions":
        n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
        break;

      case "fullscreen":
        n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
        break;

      case "play-large":
        i.class += " ".concat(this.config.classNames.control, "--overlaid"), s = "play", n.label = "play", n.icon = "play";
        break;

      default:
        is.empty(n.label) && (n.label = s), is.empty(n.icon) && (n.icon = e);
    }

    var r = createElement(n.element);
    return n.toggle ? (r.appendChild(controls.createIcon.call(this, n.iconPressed, {
      class: "icon--pressed"
    })), r.appendChild(controls.createIcon.call(this, n.icon, {
      class: "icon--not-pressed"
    })), r.appendChild(controls.createLabel.call(this, n.labelPressed, {
      class: "label--pressed"
    })), r.appendChild(controls.createLabel.call(this, n.label, {
      class: "label--not-pressed"
    }))) : (r.appendChild(controls.createIcon.call(this, n.icon)), r.appendChild(controls.createLabel.call(this, n.label))), extend(i, getAttributesFromSelector(this.config.selectors.buttons[s], i)), setAttributes(r, i), "play" === s ? (is.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r;
  },
  createRange: function createRange(e, t) {
    var i = createElement("input", extend(getAttributesFromSelector(this.config.selectors.inputs[e]), {
      type: "range",
      min: 0,
      max: 100,
      step: .01,
      value: 0,
      autocomplete: "off",
      role: "slider",
      "aria-label": i18n.get(e, this.config),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": 0
    }, t));
    return this.elements.inputs[e] = i, controls.updateRangeFill.call(this, i), RangeTouch.setup(i), i;
  },
  createProgress: function createProgress(e, t) {
    var i = createElement("progress", extend(getAttributesFromSelector(this.config.selectors.display[e]), {
      min: 0,
      max: 100,
      value: 0,
      role: "progressbar",
      "aria-hidden": !0
    }, t));

    if ("volume" !== e) {
      i.appendChild(createElement("span", null, "0"));
      var _t3 = {
        played: "played",
        buffer: "buffered"
      }[e],
          s = _t3 ? i18n.get(_t3, this.config) : "";
      i.innerText = "% ".concat(s.toLowerCase());
    }

    return this.elements.display[e] = i, i;
  },
  createTime: function createTime(e, t) {
    var i = getAttributesFromSelector(this.config.selectors.display[e], t),
        s = createElement("div", extend(i, {
      class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
      "aria-label": i18n.get(e, this.config)
    }), "00:00");
    return this.elements.display[e] = s, s;
  },
  bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
    var _this7 = this;

    on.call(this, e, "keydown keyup", function (i) {
      if (![32, 38, 39, 40].includes(i.which)) return;
      if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
      var s = matches(e, '[role="menuitemradio"]');
      if (!s && [32, 39].includes(i.which)) controls.showMenuPanel.call(_this7, t, !0);else {
        var _t4;

        32 !== i.which && (40 === i.which || s && 39 === i.which ? (_t4 = e.nextElementSibling, is.element(_t4) || (_t4 = e.parentNode.firstElementChild)) : (_t4 = e.previousElementSibling, is.element(_t4) || (_t4 = e.parentNode.lastElementChild)), setFocus.call(_this7, _t4, !0));
      }
    }, !1), on.call(this, e, "keyup", function (e) {
      13 === e.which && controls.focusFirstMenuItem.call(_this7, null, !0);
    });
  },
  createMenuItem: function createMenuItem(_ref9) {
    var _this8 = this;

    var e = _ref9.value,
        t = _ref9.list,
        i = _ref9.type,
        s = _ref9.title,
        _ref9$badge = _ref9.badge,
        n = _ref9$badge === void 0 ? null : _ref9$badge,
        _ref9$checked = _ref9.checked,
        r = _ref9$checked === void 0 ? !1 : _ref9$checked;
    var a = getAttributesFromSelector(this.config.selectors.inputs[i]),
        o = createElement("button", extend(a, {
      type: "button",
      role: "menuitemradio",
      class: "".concat(this.config.classNames.control, " ").concat(a.class ? a.class : "").trim(),
      "aria-checked": r,
      value: e
    })),
        l = createElement("span");
    l.innerHTML = s, is.element(n) && l.appendChild(n), o.appendChild(l), Object.defineProperty(o, "checked", {
      enumerable: !0,
      get: function get() {
        return "true" === o.getAttribute("aria-checked");
      },
      set: function set(e) {
        e && Array.from(o.parentNode.children).filter(function (e) {
          return matches(e, '[role="menuitemradio"]');
        }).forEach(function (e) {
          return e.setAttribute("aria-checked", "false");
        }), o.setAttribute("aria-checked", e ? "true" : "false");
      }
    }), this.listeners.bind(o, "click keyup", function (t) {
      if (!is.keyboardEvent(t) || 32 === t.which) {
        switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
          case "language":
            _this8.currentTrack = Number(e);
            break;

          case "quality":
            _this8.quality = e;
            break;

          case "speed":
            _this8.speed = parseFloat(e);
        }

        controls.showMenuPanel.call(_this8, "home", is.keyboardEvent(t));
      }
    }, i, !1), controls.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o);
  },
  formatTime: function formatTime() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    if (!is.number(e)) return e;
    return _formatTime(e, getHours(this.duration) > 0, t);
  },
  updateTimeDisplay: function updateTimeDisplay() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    is.element(e) && is.number(t) && (e.innerText = controls.formatTime(t, i));
  },
  updateVolume: function updateVolume() {
    this.supported.ui && (is.element(this.elements.inputs.volume) && controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), is.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
  },
  setRange: function setRange(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    is.element(e) && (e.value = t, controls.updateRangeFill.call(this, e));
  },
  updateProgress: function updateProgress(e) {
    var _this9 = this;

    if (!this.supported.ui || !is.event(e)) return;
    var t = 0;

    var i = function i(e, t) {
      var i = is.number(t) ? t : 0,
          s = is.element(e) ? e : _this9.elements.display.buffer;

      if (is.element(s)) {
        s.value = i;
        var _e5 = s.getElementsByTagName("span")[0];
        is.element(_e5) && (_e5.childNodes[0].nodeValue = i);
      }
    };

    if (e) switch (e.type) {
      case "timeupdate":
      case "seeking":
      case "seeked":
        t = getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && controls.setRange.call(this, this.elements.inputs.seek, t);
        break;

      case "playing":
      case "progress":
        i(this.elements.display.buffer, 100 * this.buffered);
    }
  },
  updateRangeFill: function updateRangeFill(e) {
    var t = is.event(e) ? e.target : e;

    if (is.element(t) && "range" === t.getAttribute("type")) {
      if (matches(t, this.config.selectors.inputs.seek)) {
        t.setAttribute("aria-valuenow", this.currentTime);

        var _e6 = controls.formatTime(this.currentTime),
            i = controls.formatTime(this.duration),
            s = i18n.get("seekLabel", this.config);

        t.setAttribute("aria-valuetext", s.replace("{currentTime}", _e6).replace("{duration}", i));
      } else if (matches(t, this.config.selectors.inputs.volume)) {
        var _e7 = 100 * t.value;

        t.setAttribute("aria-valuenow", _e7), t.setAttribute("aria-valuetext", "".concat(_e7.toFixed(1), "%"));
      } else t.setAttribute("aria-valuenow", t.value);

      browser.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%");
    }
  },
  updateSeekTooltip: function updateSeekTooltip(e) {
    var _this10 = this;

    if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || 0 === this.duration) return;

    var t = "".concat(this.config.classNames.tooltip, "--visible"),
        i = function i(e) {
      return toggleClass(_this10.elements.display.seekTooltip, t, e);
    };

    if (this.touch) return void i(!1);
    var s = 0;
    var n = this.elements.progress.getBoundingClientRect();
    if (is.event(e)) s = 100 / n.width * (e.pageX - n.left);else {
      if (!hasClass(this.elements.display.seekTooltip, t)) return;
      s = parseFloat(this.elements.display.seekTooltip.style.left, 10);
    }
    s < 0 ? s = 0 : s > 100 && (s = 100), controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s), this.elements.display.seekTooltip.style.left = "".concat(s, "%"), is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type);
  },
  timeUpdate: function timeUpdate(e) {
    var t = !is.element(this.elements.display.duration) && this.config.invertTime;
    controls.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || controls.updateProgress.call(this, e);
  },
  durationUpdate: function durationUpdate() {
    if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
    if (this.duration >= Math.pow(2, 32)) return toggleHidden(this.elements.display.currentTime, !0), void toggleHidden(this.elements.progress, !0);
    is.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
    var e = is.element(this.elements.display.duration);
    !e && this.config.displayDuration && this.paused && controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), controls.updateSeekTooltip.call(this);
  },
  toggleMenuButton: function toggleMenuButton(e, t) {
    toggleHidden(this.elements.settings.buttons[e], !t);
  },
  updateSetting: function updateSetting(e, t, i) {
    var s = this.elements.settings.panels[e];
    var n = null,
        r = t;
    if ("captions" === e) n = this.currentTrack;else {
      if (n = is.empty(i) ? this[e] : i, is.empty(n) && (n = this.config[e].default), !is.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn("Unsupported value of '".concat(n, "' for ").concat(e));
      if (!this.config[e].options.includes(n)) return void this.debug.warn("Disabled value of '".concat(n, "' for ").concat(e));
    }
    if (is.element(r) || (r = s && s.querySelector('[role="menu"]')), !is.element(r)) return;
    this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = controls.getLabel.call(this, e, n);
    var a = r && r.querySelector("[value=\"".concat(n, "\"]"));
    is.element(a) && (a.checked = !0);
  },
  getLabel: function getLabel(e, t) {
    switch (e) {
      case "speed":
        return 1 === t ? i18n.get("normal", this.config) : "".concat(t, "&times;");

      case "quality":
        if (is.number(t)) {
          if (0 === t) return "Auto";

          var _e8 = i18n.get("qualityLabel.".concat(t), this.config);

          return _e8.length ? _e8 : "".concat(t, "p");
        }

        return toTitleCase(t);

      case "captions":
        return captions.getLabel.call(this);

      default:
        return null;
    }
  },
  setQualityMenu: function setQualityMenu(e) {
    var _this11 = this;

    if (!is.element(this.elements.settings.panels.quality)) return;
    var t = "quality",
        i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
    is.array(e) && (this.options.quality = dedupe(e).filter(function (e) {
      return _this11.config.quality.options.includes(e);
    }));
    var s = !is.empty(this.options.quality) && this.options.quality.length > 1;
    if (controls.toggleMenuButton.call(this, t, s), emptyElement(i), controls.checkMenu.call(this), !s) return;

    var n = function n(e) {
      var t = i18n.get("qualityBadge.".concat(e), _this11.config);
      return t.length ? controls.createBadge.call(_this11, t) : null;
    };

    this.options.quality.sort(function (e, t) {
      var i = _this11.config.quality.options;
      return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
    }).forEach(function (e) {
      controls.createMenuItem.call(_this11, {
        value: e,
        list: i,
        type: t,
        title: controls.getLabel.call(_this11, "quality", e),
        badge: n(e)
      });
    }), controls.updateSetting.call(this, t, i);
  },
  setCaptionsMenu: function setCaptionsMenu() {
    var _this12 = this;

    if (!is.element(this.elements.settings.panels.captions)) return;
    var e = "captions",
        t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
        i = captions.getTracks.call(this),
        s = Boolean(i.length);
    if (controls.toggleMenuButton.call(this, e, s), emptyElement(t), controls.checkMenu.call(this), !s) return;
    var n = i.map(function (e, i) {
      return {
        value: i,
        checked: _this12.captions.toggled && _this12.currentTrack === i,
        title: captions.getLabel.call(_this12, e),
        badge: e.language && controls.createBadge.call(_this12, e.language.toUpperCase()),
        list: t,
        type: "language"
      };
    });
    n.unshift({
      value: -1,
      checked: !this.captions.toggled,
      title: i18n.get("disabled", this.config),
      list: t,
      type: "language"
    }), n.forEach(controls.createMenuItem.bind(this)), controls.updateSetting.call(this, e, t);
  },
  setSpeedMenu: function setSpeedMenu() {
    var _this13 = this;

    if (!is.element(this.elements.settings.panels.speed)) return;
    var e = "speed",
        t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
    this.options.speed = this.options.speed.filter(function (e) {
      return e >= _this13.minimumSpeed && e <= _this13.maximumSpeed;
    });
    var i = !is.empty(this.options.speed) && this.options.speed.length > 1;
    controls.toggleMenuButton.call(this, e, i), emptyElement(t), controls.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
      controls.createMenuItem.call(_this13, {
        value: i,
        list: t,
        type: e,
        title: controls.getLabel.call(_this13, "speed", i)
      });
    }), controls.updateSetting.call(this, e, t));
  },
  checkMenu: function checkMenu() {
    var e = this.elements.settings.buttons,
        t = !is.empty(e) && Object.values(e).some(function (e) {
      return !e.hidden;
    });
    toggleHidden(this.elements.settings.menu, !t);
  },
  focusFirstMenuItem: function focusFirstMenuItem(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    if (this.elements.settings.popup.hidden) return;
    var i = e;
    is.element(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
      return !e.hidden;
    }));
    var s = i.querySelector('[role^="menuitem"]');
    setFocus.call(this, s, t);
  },
  toggleMenu: function toggleMenu(e) {
    var t = this.elements.settings.popup,
        i = this.elements.buttons.settings;
    if (!is.element(t) || !is.element(i)) return;
    var s = t.hidden;
    var n = s;
    if (is.boolean(e)) n = e;else if (is.keyboardEvent(e) && 27 === e.which) n = !1;else if (is.event(e)) {
      var _s2 = is.function(e.composedPath) ? e.composedPath()[0] : e.target,
          r = t.contains(_s2);

      if (r || !r && e.target !== i && n) return;
    }
    i.setAttribute("aria-expanded", n), toggleHidden(t, !n), toggleClass(this.elements.container, this.config.classNames.menu.open, n), n && is.keyboardEvent(e) ? controls.focusFirstMenuItem.call(this, null, !0) : n || s || setFocus.call(this, i, is.keyboardEvent(e));
  },
  getMenuSize: function getMenuSize(e) {
    var t = e.cloneNode(!0);
    t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
    var i = t.scrollWidth,
        s = t.scrollHeight;
    return removeElement(t), {
      width: i,
      height: s
    };
  },
  showMenuPanel: function showMenuPanel() {
    var _this14 = this;

    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e));
    if (!is.element(i)) return;
    var s = i.parentNode,
        n = Array.from(s.children).find(function (e) {
      return !e.hidden;
    });

    if (support.transitions && !support.reducedMotion) {
      s.style.width = "".concat(n.scrollWidth, "px"), s.style.height = "".concat(n.scrollHeight, "px");

      var _e9 = controls.getMenuSize.call(this, i),
          _t5 = function _t5(e) {
        e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", off.call(_this14, s, transitionEndEvent, _t5));
      };

      on.call(this, s, transitionEndEvent, _t5), s.style.width = "".concat(_e9.width, "px"), s.style.height = "".concat(_e9.height, "px");
    }

    toggleHidden(n, !0), toggleHidden(i, !1), controls.focusFirstMenuItem.call(this, i, t);
  },
  setDownloadUrl: function setDownloadUrl() {
    var e = this.elements.buttons.download;
    is.element(e) && e.setAttribute("href", this.download);
  },
  create: function create(e) {
    var _this15 = this;

    var t = controls.bindMenuItemShortcuts,
        i = controls.createButton,
        s = controls.createProgress,
        n = controls.createRange,
        r = controls.createTime,
        a = controls.setQualityMenu,
        o = controls.setSpeedMenu,
        l = controls.showMenuPanel;
    this.elements.controls = null, is.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
    var c = createElement("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
    this.elements.controls = c;
    var u = {
      class: "plyr__controls__item"
    };
    return dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach(function (a) {
      if ("restart" === a && c.appendChild(i.call(_this15, "restart", u)), "rewind" === a && c.appendChild(i.call(_this15, "rewind", u)), "play" === a && c.appendChild(i.call(_this15, "play", u)), "fast-forward" === a && c.appendChild(i.call(_this15, "fast-forward", u)), "progress" === a) {
        var _t6 = createElement("div", {
          class: "".concat(u.class, " plyr__progress__container")
        }),
            _i2 = createElement("div", getAttributesFromSelector(_this15.config.selectors.progress));

        if (_i2.appendChild(n.call(_this15, "seek", {
          id: "plyr-seek-".concat(e.id)
        })), _i2.appendChild(s.call(_this15, "buffer")), _this15.config.tooltips.seek) {
          var _e10 = createElement("span", {
            class: _this15.config.classNames.tooltip
          }, "00:00");

          _i2.appendChild(_e10), _this15.elements.display.seekTooltip = _e10;
        }

        _this15.elements.progress = _i2, _t6.appendChild(_this15.elements.progress), c.appendChild(_t6);
      }

      if ("current-time" === a && c.appendChild(r.call(_this15, "currentTime", u)), "duration" === a && c.appendChild(r.call(_this15, "duration", u)), "mute" === a || "volume" === a) {
        var _t7 = _this15.elements.volume;

        if (is.element(_t7) && c.contains(_t7) || (_t7 = createElement("div", extend({}, u, {
          class: "".concat(u.class, " plyr__volume").trim()
        })), _this15.elements.volume = _t7, c.appendChild(_t7)), "mute" === a && _t7.appendChild(i.call(_this15, "mute")), "volume" === a && !browser.isIos) {
          var _i3 = {
            max: 1,
            step: .05,
            value: _this15.config.volume
          };

          _t7.appendChild(n.call(_this15, "volume", extend(_i3, {
            id: "plyr-volume-".concat(e.id)
          })));
        }
      }

      if ("captions" === a && c.appendChild(i.call(_this15, "captions", u)), "settings" === a && !is.empty(_this15.config.settings)) {
        var _s3 = createElement("div", extend({}, u, {
          class: "".concat(u.class, " plyr__menu").trim(),
          hidden: ""
        }));

        _s3.appendChild(i.call(_this15, "settings", {
          "aria-haspopup": !0,
          "aria-controls": "plyr-settings-".concat(e.id),
          "aria-expanded": !1
        }));

        var _n2 = createElement("div", {
          class: "plyr__menu__container",
          id: "plyr-settings-".concat(e.id),
          hidden: ""
        }),
            _r2 = createElement("div"),
            _a = createElement("div", {
          id: "plyr-settings-".concat(e.id, "-home")
        }),
            _o = createElement("div", {
          role: "menu"
        });

        _a.appendChild(_o), _r2.appendChild(_a), _this15.elements.settings.panels.home = _a, _this15.config.settings.forEach(function (i) {
          var s = createElement("button", extend(getAttributesFromSelector(_this15.config.selectors.buttons.settings), {
            type: "button",
            class: "".concat(_this15.config.classNames.control, " ").concat(_this15.config.classNames.control, "--forward"),
            role: "menuitem",
            "aria-haspopup": !0,
            hidden: ""
          }));
          t.call(_this15, s, i), on.call(_this15, s, "click", function () {
            l.call(_this15, i, !1);
          });
          var n = createElement("span", null, i18n.get(i, _this15.config)),
              a = createElement("span", {
            class: _this15.config.classNames.menu.value
          });
          a.innerHTML = e[i], n.appendChild(a), s.appendChild(n), _o.appendChild(s);
          var c = createElement("div", {
            id: "plyr-settings-".concat(e.id, "-").concat(i),
            hidden: ""
          }),
              u = createElement("button", {
            type: "button",
            class: "".concat(_this15.config.classNames.control, " ").concat(_this15.config.classNames.control, "--back")
          });
          u.appendChild(createElement("span", {
            "aria-hidden": !0
          }, i18n.get(i, _this15.config))), u.appendChild(createElement("span", {
            class: _this15.config.classNames.hidden
          }, i18n.get("menuBack", _this15.config))), on.call(_this15, c, "keydown", function (e) {
            37 === e.which && (e.preventDefault(), e.stopPropagation(), l.call(_this15, "home", !0));
          }, !1), on.call(_this15, u, "click", function () {
            l.call(_this15, "home", !1);
          }), c.appendChild(u), c.appendChild(createElement("div", {
            role: "menu"
          })), _r2.appendChild(c), _this15.elements.settings.buttons[i] = s, _this15.elements.settings.panels[i] = c;
        }), _n2.appendChild(_r2), _s3.appendChild(_n2), c.appendChild(_s3), _this15.elements.settings.popup = _n2, _this15.elements.settings.menu = _s3;
      }

      if ("pip" === a && support.pip && c.appendChild(i.call(_this15, "pip", u)), "airplay" === a && support.airplay && c.appendChild(i.call(_this15, "airplay", u)), "download" === a) {
        var _e11 = extend({}, u, {
          element: "a",
          href: _this15.download,
          target: "_blank"
        });

        _this15.isHTML5 && (_e11.download = "");
        var _t8 = _this15.config.urls.download;
        !is.url(_t8) && _this15.isEmbed && extend(_e11, {
          icon: "logo-".concat(_this15.provider),
          label: _this15.provider
        }), c.appendChild(i.call(_this15, "download", _e11));
      }

      "fullscreen" === a && c.appendChild(i.call(_this15, "fullscreen", u));
    }), this.isHTML5 && a.call(this, html5.getQualityOptions.call(this)), o.call(this), c;
  },
  inject: function inject() {
    var _this16 = this;

    if (this.config.loadSprite) {
      var _e12 = controls.getIconUrl.call(this);

      _e12.cors && _loadSprite(_e12.url, "sprite-plyr");
    }

    this.id = Math.floor(1e4 * Math.random());
    var e = null;
    this.elements.controls = null;
    var t = {
      id: this.id,
      seektime: this.config.seekTime,
      title: this.config.title
    };
    var i = !0;
    is.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), is.element(this.config.controls) || is.string(this.config.controls) ? e = this.config.controls : (e = controls.create.call(this, {
      id: this.id,
      seektime: this.config.seekTime,
      speed: this.speed,
      quality: this.quality,
      captions: captions.getLabel.call(this)
    }), i = !1);
    var s;
    i && is.string(this.config.controls) && (e = function (e) {
      var i = e;
      return Object.entries(t).forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            e = _ref11[0],
            t = _ref11[1];

        i = replaceAll(i, "{".concat(e, "}"), t);
      }), i;
    }(e)), is.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), is.element(s) || (s = this.elements.container);

    if (s[is.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), is.element(this.elements.controls) || controls.findElements.call(this), !is.empty(this.elements.buttons)) {
      var _e13 = function _e13(e) {
        var t = _this16.config.classNames.controlPressed;
        Object.defineProperty(e, "pressed", {
          enumerable: !0,
          get: function get() {
            return hasClass(e, t);
          },
          set: function set() {
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            toggleClass(e, t, i);
          }
        });
      };

      Object.values(this.elements.buttons).filter(Boolean).forEach(function (t) {
        is.array(t) || is.nodeList(t) ? Array.from(t).filter(Boolean).forEach(_e13) : _e13(t);
      });
    }

    if (browser.isEdge && repaint(s), this.config.tooltips.controls) {
      var _this$config = this.config,
          _e14 = _this$config.classNames,
          _t9 = _this$config.selectors,
          _i4 = "".concat(_t9.controls.wrapper, " ").concat(_t9.labels, " .").concat(_e14.hidden),
          _s4 = getElements.call(this, _i4);

      Array.from(_s4).forEach(function (e) {
        toggleClass(e, _this16.config.classNames.hidden, !1), toggleClass(e, _this16.config.classNames.tooltip, !0);
      });
    }
  }
};

function parseUrl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  var i = e;

  if (t) {
    var _e15 = document.createElement("a");

    _e15.href = i, i = _e15.href;
  }

  try {
    return new URL(i);
  } catch (e) {
    return null;
  }
}

function buildUrlParams(e) {
  var t = new URLSearchParams();
  return is.object(e) && Object.entries(e).forEach(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
        e = _ref13[0],
        i = _ref13[1];

    t.set(e, i);
  }), t;
}

var captions = {
  setup: function setup() {
    var _e17, _e18, _this$config$captions;

    if (!this.supported.ui) return;
    if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) return void (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && controls.setCaptionsMenu.call(this));

    if (is.element(this.elements.captions) || (this.elements.captions = createElement("div", getAttributesFromSelector(this.config.selectors.captions)), insertAfter(this.elements.captions, this.elements.wrapper)), browser.isIE && window.URL) {
      var _e16 = this.media.querySelectorAll("track");

      Array.from(_e16).forEach(function (e) {
        var t = e.getAttribute("src"),
            i = parseUrl(t);
        null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && fetch$1(t, "blob").then(function (t) {
          e.setAttribute("src", window.URL.createObjectURL(t));
        }).catch(function () {
          removeElement(e);
        });
      });
    }

    var e = dedupe((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
      return e.split("-")[0];
    }));
    var t = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
    "auto" === t && (_e17 = e, _e18 = _slicedToArray(_e17, 1), t = _e18[0], _e17);
    var i = this.storage.get("captions");

    if (is.boolean(i) || (_this$config$captions = this.config.captions, i = _this$config$captions.active, _this$config$captions), Object.assign(this.captions, {
      toggled: !1,
      active: i,
      language: t,
      languages: e
    }), this.isHTML5) {
      var _e19 = this.config.captions.update ? "addtrack removetrack" : "removetrack";

      on.call(this, this.media.textTracks, _e19, captions.update.bind(this));
    }

    setTimeout(captions.update.bind(this), 0);
  },
  update: function update() {
    var _this17 = this;

    var e = captions.getTracks.call(this, !0),
        _this$captions = this.captions,
        t = _this$captions.active,
        i = _this$captions.language,
        s = _this$captions.meta,
        n = _this$captions.currentTrackNode,
        r = Boolean(e.find(function (e) {
      return e.language === i;
    }));
    this.isHTML5 && this.isVideo && e.filter(function (e) {
      return !s.get(e);
    }).forEach(function (e) {
      _this17.debug.log("Track added", e), s.set(e, {
        default: "showing" === e.mode
      }), "showing" === e.mode && (e.mode = "hidden"), on.call(_this17, e, "cuechange", function () {
        return captions.updateCues.call(_this17);
      });
    }), (r && this.language !== i || !e.includes(n)) && (captions.setLanguage.call(this, i), captions.toggle.call(this, t && r)), toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(e)), is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && controls.setCaptionsMenu.call(this);
  },
  toggle: function toggle(e) {
    var _this18 = this;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    if (!this.supported.ui) return;
    var i = this.captions.toggled,
        s = this.config.classNames.captions.active,
        n = is.nullOrUndefined(e) ? !i : e;

    if (n !== i) {
      if (t || (this.captions.active = n, this.storage.set({
        captions: n
      })), !this.language && n && !t) {
        var _e20 = captions.getTracks.call(this),
            _t10 = captions.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), !0);

        return this.captions.language = _t10.language, void captions.set.call(this, _e20.indexOf(_t10));
      }

      this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), toggleClass(this.elements.container, s, n), this.captions.toggled = n, controls.updateSetting.call(this, "captions"), triggerEvent.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
    }

    setTimeout(function () {
      n && _this18.captions.toggled && (_this18.captions.currentTrackNode.mode = "hidden");
    });
  },
  set: function set(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    var i = captions.getTracks.call(this);
    if (-1 !== e) {
      if (is.number(e)) {
        if (e in i) {
          if (this.captions.currentTrack !== e) {
            this.captions.currentTrack = e;

            var s = i[e],
                _ref14 = s || {},
                n = _ref14.language;

            this.captions.currentTrackNode = s, controls.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({
              language: n
            })), this.isVimeo && this.embed.enableTextTrack(n), triggerEvent.call(this, this.media, "languagechange");
          }

          captions.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && captions.updateCues.call(this);
        } else this.debug.warn("Track not found", e);
      } else this.debug.warn("Invalid caption argument", e);
    } else captions.toggle.call(this, !1, t);
  },
  setLanguage: function setLanguage(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    if (!is.string(e)) return void this.debug.warn("Invalid language argument", e);
    var i = e.toLowerCase();
    this.captions.language = i;
    var s = captions.getTracks.call(this),
        n = captions.findTrack.call(this, [i]);
    captions.set.call(this, s.indexOf(n), t);
  },
  getTracks: function getTracks() {
    var _this19 = this;

    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    return Array.from((this.media || {}).textTracks || []).filter(function (t) {
      return !_this19.isHTML5 || e || _this19.captions.meta.has(t);
    }).filter(function (e) {
      return ["captions", "subtitles"].includes(e.kind);
    });
  },
  findTrack: function findTrack(e) {
    var _this20 = this;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

    var i = captions.getTracks.call(this),
        s = function s(e) {
      return Number((_this20.captions.meta.get(e) || {}).default);
    },
        n = Array.from(i).sort(function (e, t) {
      return s(t) - s(e);
    });

    var r;
    return e.every(function (e) {
      return r = n.find(function (t) {
        return t.language === e;
      }), !r;
    }), r || (t ? n[0] : void 0);
  },
  getCurrentTrack: function getCurrentTrack() {
    return captions.getTracks.call(this)[this.currentTrack];
  },
  getLabel: function getLabel(e) {
    var t = e;
    return !is.track(t) && support.textTracks && this.captions.toggled && (t = captions.getCurrentTrack.call(this)), is.track(t) ? is.empty(t.label) ? is.empty(t.language) ? i18n.get("enabled", this.config) : e.language.toUpperCase() : t.label : i18n.get("disabled", this.config);
  },
  updateCues: function updateCues(e) {
    if (!this.supported.ui) return;
    if (!is.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
    if (!is.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
    var t = e;

    if (!t) {
      var _e21 = captions.getCurrentTrack.call(this);

      t = Array.from((_e21 || {}).activeCues || []).map(function (e) {
        return e.getCueAsHTML();
      }).map(getHTML);
    }

    var i = t.map(function (e) {
      return e.trim();
    }).join("\n");

    if (i !== this.elements.captions.innerHTML) {
      emptyElement(this.elements.captions);

      var _e22 = createElement("span", getAttributesFromSelector(this.config.selectors.caption));

      _e22.innerHTML = i, this.elements.captions.appendChild(_e22), triggerEvent.call(this, this.media, "cuechange");
    }
  }
},
    defaults = {
  enabled: !0,
  title: "",
  debug: !1,
  autoplay: !1,
  autopause: !0,
  playsinline: !0,
  seekTime: 10,
  volume: 1,
  muted: !1,
  duration: null,
  displayDuration: !0,
  invertTime: !0,
  toggleInvert: !0,
  ratio: null,
  clickToPlay: !0,
  hideControls: !0,
  resetOnEnd: !1,
  disableContextMenu: !0,
  loadSprite: !0,
  iconPrefix: "plyr",
  iconUrl: "https://cdn.plyr.io/3.6.4/plyr.svg",
  blankVideo: "https://cdn.plyr.io/static/blank.mp4",
  quality: {
    default: 576,
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: !1,
    onChange: null
  },
  loop: {
    active: !1
  },
  speed: {
    selected: 1,
    options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
  },
  keyboard: {
    focused: !0,
    global: !1
  },
  tooltips: {
    controls: !1,
    seek: !0
  },
  captions: {
    active: !1,
    language: "auto",
    update: !1
  },
  fullscreen: {
    enabled: !0,
    fallback: !0,
    iosNative: !1
  },
  storage: {
    enabled: !0,
    key: "plyr"
  },
  controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
  settings: ["captions", "quality", "speed"],
  i18n: {
    restart: "Restart",
    rewind: "Rewind {seektime}s",
    play: "Play",
    pause: "Pause",
    fastForward: "Forward {seektime}s",
    seek: "Seek",
    seekLabel: "{currentTime} of {duration}",
    played: "Played",
    buffered: "Buffered",
    currentTime: "Current time",
    duration: "Duration",
    volume: "Volume",
    mute: "Mute",
    unmute: "Unmute",
    enableCaptions: "Enable captions",
    disableCaptions: "Disable captions",
    download: "Download",
    enterFullscreen: "Enter fullscreen",
    exitFullscreen: "Exit fullscreen",
    frameTitle: "Player for {title}",
    captions: "Captions",
    settings: "Settings",
    pip: "PIP",
    menuBack: "Go back to previous menu",
    speed: "Speed",
    normal: "Normal",
    quality: "Quality",
    loop: "Loop",
    start: "Start",
    end: "End",
    all: "All",
    reset: "Reset",
    disabled: "Disabled",
    enabled: "Enabled",
    advertisement: "Ad",
    qualityBadge: {
      2160: "4K",
      1440: "HD",
      1080: "HD",
      720: "HD",
      576: "SD",
      480: "SD"
    }
  },
  urls: {
    download: null,
    vimeo: {
      sdk: "https://player.vimeo.com/api/player.js",
      iframe: "https://player.vimeo.com/video/{0}?{1}",
      api: "https://vimeo.com/api/oembed.json?url={0}"
    },
    youtube: {
      sdk: "https://www.youtube.com/iframe_api",
      api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
    },
    googleIMA: {
      sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
    }
  },
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null
  },
  events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
  selectors: {
    editable: "input, textarea, select, [contenteditable]",
    container: ".plyr",
    controls: {
      container: null,
      wrapper: ".plyr__controls"
    },
    labels: "[data-plyr]",
    buttons: {
      play: '[data-plyr="play"]',
      pause: '[data-plyr="pause"]',
      restart: '[data-plyr="restart"]',
      rewind: '[data-plyr="rewind"]',
      fastForward: '[data-plyr="fast-forward"]',
      mute: '[data-plyr="mute"]',
      captions: '[data-plyr="captions"]',
      download: '[data-plyr="download"]',
      fullscreen: '[data-plyr="fullscreen"]',
      pip: '[data-plyr="pip"]',
      airplay: '[data-plyr="airplay"]',
      settings: '[data-plyr="settings"]',
      loop: '[data-plyr="loop"]'
    },
    inputs: {
      seek: '[data-plyr="seek"]',
      volume: '[data-plyr="volume"]',
      speed: '[data-plyr="speed"]',
      language: '[data-plyr="language"]',
      quality: '[data-plyr="quality"]'
    },
    display: {
      currentTime: ".plyr__time--current",
      duration: ".plyr__time--duration",
      buffer: ".plyr__progress__buffer",
      loop: ".plyr__progress__loop",
      volume: ".plyr__volume--display"
    },
    progress: ".plyr__progress",
    captions: ".plyr__captions",
    caption: ".plyr__caption"
  },
  classNames: {
    type: "plyr--{0}",
    provider: "plyr--{0}",
    video: "plyr__video-wrapper",
    embed: "plyr__video-embed",
    videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
    embedContainer: "plyr__video-embed__container",
    poster: "plyr__poster",
    posterEnabled: "plyr__poster-enabled",
    ads: "plyr__ads",
    control: "plyr__control",
    controlPressed: "plyr__control--pressed",
    playing: "plyr--playing",
    paused: "plyr--paused",
    stopped: "plyr--stopped",
    loading: "plyr--loading",
    hover: "plyr--hover",
    tooltip: "plyr__tooltip",
    cues: "plyr__cues",
    hidden: "plyr__sr-only",
    hideControls: "plyr--hide-controls",
    isIos: "plyr--is-ios",
    isTouch: "plyr--is-touch",
    uiSupported: "plyr--full-ui",
    noTransition: "plyr--no-transition",
    display: {
      time: "plyr__time"
    },
    menu: {
      value: "plyr__menu__value",
      badge: "plyr__badge",
      open: "plyr--menu-open"
    },
    captions: {
      enabled: "plyr--captions-enabled",
      active: "plyr--captions-active"
    },
    fullscreen: {
      enabled: "plyr--fullscreen-enabled",
      fallback: "plyr--fullscreen-fallback"
    },
    pip: {
      supported: "plyr--pip-supported",
      active: "plyr--pip-active"
    },
    airplay: {
      supported: "plyr--airplay-supported",
      active: "plyr--airplay-active"
    },
    tabFocus: "plyr__tab-focus",
    previewThumbnails: {
      thumbContainer: "plyr__preview-thumb",
      thumbContainerShown: "plyr__preview-thumb--is-shown",
      imageContainer: "plyr__preview-thumb__image-container",
      timeContainer: "plyr__preview-thumb__time-container",
      scrubbingContainer: "plyr__preview-scrubbing",
      scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
    }
  },
  attributes: {
    embed: {
      provider: "data-plyr-provider",
      id: "data-plyr-embed-id"
    }
  },
  ads: {
    enabled: !1,
    publisherId: "",
    tagUrl: ""
  },
  previewThumbnails: {
    enabled: !1,
    src: ""
  },
  vimeo: {
    byline: !1,
    portrait: !1,
    title: !1,
    speed: !0,
    transparent: !1,
    customControls: !0,
    referrerPolicy: null,
    premium: !1
  },
  youtube: {
    rel: 0,
    showinfo: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    customControls: !0,
    noCookie: !1
  }
},
    pip = {
  active: "picture-in-picture",
  inactive: "inline"
},
    providers = {
  html5: "html5",
  youtube: "youtube",
  vimeo: "vimeo"
},
    types = {
  audio: "audio",
  video: "video"
};

function getProviderByUrl(e) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? providers.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? providers.vimeo : null;
}

var noop = function noop() {};

var Console = /*#__PURE__*/function () {
  function Console() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

    _classCallCheck$1(this, Console);

    this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
  }

  _createClass$1(Console, [{
    key: "log",
    get: function get() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }
  }, {
    key: "warn",
    get: function get() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }
  }, {
    key: "error",
    get: function get() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }
  }]);

  return Console;
}();

var Fullscreen = /*#__PURE__*/function () {
  function Fullscreen(e) {
    var _this21 = this;

    _classCallCheck$1(this, Fullscreen);

    _defineProperty$1(this, "onChange", function () {
      if (!_this21.enabled) return;
      var e = _this21.player.elements.buttons.fullscreen;
      is.element(e) && (e.pressed = _this21.active);
      var t = _this21.target === _this21.player.media ? _this21.target : _this21.player.elements.container;
      triggerEvent.call(_this21.player, t, _this21.active ? "enterfullscreen" : "exitfullscreen", !0);
    }), _defineProperty$1(this, "toggleFallback", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

      if (e ? _this21.scrollPosition = {
        x: window.scrollX || 0,
        y: window.scrollY || 0
      } : window.scrollTo(_this21.scrollPosition.x, _this21.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", toggleClass(_this21.target, _this21.player.config.classNames.fullscreen.fallback, e), browser.isIos) {
        var t = document.head.querySelector('meta[name="viewport"]');
        var i = "viewport-fit=cover";
        t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
        var s = is.string(t.content) && t.content.includes(i);
        e ? (_this21.cleanupViewport = !s, s || (t.content += ",".concat(i))) : _this21.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
          return e.trim() !== i;
        }).join(","));
      }

      _this21.onChange();
    }), _defineProperty$1(this, "trapFocus", function (e) {
      if (browser.isIos || !_this21.active || "Tab" !== e.key || 9 !== e.keyCode) return;

      var t = document.activeElement,
          i = getElements.call(_this21.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
          _i5 = _slicedToArray(i, 1),
          s = _i5[0],
          n = i[i.length - 1];

      t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault());
    }), _defineProperty$1(this, "update", function () {
      if (_this21.enabled) {
        var _e23;

        _e23 = _this21.forceFallback ? "Fallback (forced)" : Fullscreen.native ? "Native" : "Fallback", _this21.player.debug.log("".concat(_e23, " fullscreen enabled"));
      } else _this21.player.debug.log("Fullscreen not supported and fallback disabled");

      toggleClass(_this21.player.elements.container, _this21.player.config.classNames.fullscreen.enabled, _this21.enabled);
    }), _defineProperty$1(this, "enter", function () {
      _this21.enabled && (browser.isIos && _this21.player.config.fullscreen.iosNative ? _this21.player.isVimeo ? _this21.player.embed.requestFullscreen() : _this21.target.webkitEnterFullscreen() : !Fullscreen.native || _this21.forceFallback ? _this21.toggleFallback(!0) : _this21.prefix ? is.empty(_this21.prefix) || _this21.target["".concat(_this21.prefix, "Request").concat(_this21.property)]() : _this21.target.requestFullscreen({
        navigationUI: "hide"
      }));
    }), _defineProperty$1(this, "exit", function () {
      if (_this21.enabled) if (browser.isIos && _this21.player.config.fullscreen.iosNative) _this21.target.webkitExitFullscreen(), silencePromise(_this21.player.play());else if (!Fullscreen.native || _this21.forceFallback) _this21.toggleFallback(!1);else if (_this21.prefix) {
        if (!is.empty(_this21.prefix)) {
          var _e24 = "moz" === _this21.prefix ? "Cancel" : "Exit";

          document["".concat(_this21.prefix).concat(_e24).concat(_this21.property)]();
        }
      } else (document.cancelFullScreen || document.exitFullscreen).call(document);
    }), _defineProperty$1(this, "toggle", function () {
      _this21.active ? _this21.exit() : _this21.enter();
    }), this.player = e, this.prefix = Fullscreen.prefix, this.property = Fullscreen.property, this.scrollPosition = {
      x: 0,
      y: 0
    }, this.forceFallback = "force" === e.config.fullscreen.fallback, this.player.elements.fullscreen = e.config.fullscreen.container && closest$1(this.player.elements.container, e.config.fullscreen.container), on.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
      _this21.onChange();
    }), on.call(this.player, this.player.elements.container, "dblclick", function (e) {
      is.element(_this21.player.elements.controls) && _this21.player.elements.controls.contains(e.target) || _this21.player.listeners.proxy(e, _this21.toggle, "fullscreen");
    }), on.call(this, this.player.elements.container, "keydown", function (e) {
      return _this21.trapFocus(e);
    }), this.update();
  }

  _createClass$1(Fullscreen, [{
    key: "usingNative",
    get: function get() {
      return Fullscreen.native && !this.forceFallback;
    }
  }, {
    key: "enabled",
    get: function get() {
      return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
    }
  }, {
    key: "active",
    get: function get() {
      if (!this.enabled) return !1;
      if (!Fullscreen.native || this.forceFallback) return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
      return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
    }
  }, {
    key: "target",
    get: function get() {
      return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
    }
  }], [{
    key: "native",
    get: function get() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    }
  }, {
    key: "prefix",
    get: function get() {
      if (is.function(document.exitFullscreen)) return "";
      var e = "";
      return ["webkit", "moz", "ms"].some(function (t) {
        return !(!is.function(document["".concat(t, "ExitFullscreen")]) && !is.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
      }), e;
    }
  }, {
    key: "property",
    get: function get() {
      return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
    }
  }]);

  return Fullscreen;
}();

function loadImage(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return new Promise(function (i, s) {
    var n = new Image(),
        r = function r() {
      delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
    };

    Object.assign(n, {
      onload: r,
      onerror: r,
      src: e
    });
  });
}

var ui = {
  addStyleHook: function addStyleHook() {
    toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
  },
  toggleNativeControls: function toggleNativeControls() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
  },
  build: function build() {
    var _this22 = this;

    if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void ui.toggleNativeControls.call(this, !0);
    is.element(this.elements.controls) || (controls.inject.call(this), this.listeners.controls()), ui.toggleNativeControls.call(this), this.isHTML5 && captions.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, controls.updateVolume.call(this), controls.timeUpdate.call(this), ui.checkPlaying.call(this), toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo), toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5), toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos), toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
      triggerEvent.call(_this22, _this22.media, "ready");
    }, 0), ui.setTitle.call(this), this.poster && ui.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && controls.durationUpdate.call(this);
  },
  setTitle: function setTitle() {
    var e = i18n.get("play", this.config);

    if (is.string(this.config.title) && !is.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
      t.setAttribute("aria-label", e);
    }), this.isEmbed) {
      var _e25 = getElement.call(this, "iframe");

      if (!is.element(_e25)) return;
      var t = is.empty(this.config.title) ? "video" : this.config.title,
          i = i18n.get("frameTitle", this.config);

      _e25.setAttribute("title", i.replace("{title}", t));
    }
  },
  togglePoster: function togglePoster(e) {
    toggleClass(this.elements.container, this.config.classNames.posterEnabled, e);
  },
  setPoster: function setPoster(e) {
    var _this23 = this;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), ready.call(this).then(function () {
      return loadImage(e);
    }).catch(function (t) {
      throw e === _this23.poster && ui.togglePoster.call(_this23, !1), t;
    }).then(function () {
      if (e !== _this23.poster) throw new Error("setPoster cancelled by later call to setPoster");
    }).then(function () {
      return Object.assign(_this23.elements.poster.style, {
        backgroundImage: "url('".concat(e, "')"),
        backgroundSize: ""
      }), ui.togglePoster.call(_this23, !0), e;
    }));
  },
  checkPlaying: function checkPlaying(e) {
    var _this24 = this;

    toggleClass(this.elements.container, this.config.classNames.playing, this.playing), toggleClass(this.elements.container, this.config.classNames.paused, this.paused), toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
      Object.assign(e, {
        pressed: _this24.playing
      }), e.setAttribute("aria-label", i18n.get(_this24.playing ? "pause" : "play", _this24.config));
    }), is.event(e) && "timeupdate" === e.type || ui.toggleControls.call(this);
  },
  checkLoading: function checkLoading(e) {
    var _this25 = this;

    this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
      toggleClass(_this25.elements.container, _this25.config.classNames.loading, _this25.loading), ui.toggleControls.call(_this25);
    }, this.loading ? 250 : 0);
  },
  toggleControls: function toggleControls(e) {
    var t = this.elements.controls;

    if (t && this.config.hideControls) {
      var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
      this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
    }
  },
  migrateStyles: function migrateStyles() {
    var _this26 = this;

    Object.values(_objectSpread2$1({}, this.media.style)).filter(function (e) {
      return !is.empty(e) && is.string(e) && e.startsWith("--plyr");
    }).forEach(function (e) {
      _this26.elements.container.style.setProperty(e, _this26.media.style.getPropertyValue(e)), _this26.media.style.removeProperty(e);
    }), is.empty(this.media.style) && this.media.removeAttribute("style");
  }
};

var Listeners = /*#__PURE__*/function () {
  function Listeners(e) {
    var _this27 = this;

    _classCallCheck$1(this, Listeners);

    _defineProperty$1(this, "firstTouch", function () {
      var e = _this27.player,
          t = e.elements;
      e.touch = !0, toggleClass(t.container, e.config.classNames.isTouch, !0);
    }), _defineProperty$1(this, "setTabFocus", function (e) {
      var t = _this27.player,
          i = t.elements;
      if (clearTimeout(_this27.focusTimer), "keydown" === e.type && 9 !== e.which) return;
      "keydown" === e.type && (_this27.lastKeyDown = e.timeStamp);
      var s = e.timeStamp - _this27.lastKeyDown <= 20;
      ("focus" !== e.type || s) && (function () {
        var e = t.config.classNames.tabFocus;
        toggleClass(getElements.call(t, ".".concat(e)), e, !1);
      }(), "focusout" !== e.type && (_this27.focusTimer = setTimeout(function () {
        var e = document.activeElement;
        i.container.contains(e) && toggleClass(document.activeElement, t.config.classNames.tabFocus, !0);
      }, 10)));
    }), _defineProperty$1(this, "global", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = _this27.player;
      t.config.keyboard.global && toggleListener.call(t, window, "keydown keyup", _this27.handleKey, e, !1), toggleListener.call(t, document.body, "click", _this27.toggleMenu, e), once.call(t, document.body, "touchstart", _this27.firstTouch), toggleListener.call(t, document.body, "keydown focus blur focusout", _this27.setTabFocus, e, !1, !0);
    }), _defineProperty$1(this, "container", function () {
      var e = _this27.player,
          t = e.config,
          i = e.elements,
          s = e.timers;
      !t.keyboard.global && t.keyboard.focused && on.call(e, i.container, "keydown keyup", _this27.handleKey, !1), on.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
        var n = i.controls;
        n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
        var r = 0;
        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (ui.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(function () {
          return ui.toggleControls.call(e, !1);
        }, r);
      });

      var n = function n(t) {
        if (!t) return setAspectRatio.call(e);
        var s = i.container.getBoundingClientRect(),
            n = s.width,
            r = s.height;
        return setAspectRatio.call(e, "".concat(n, ":").concat(r));
      },
          r = function r() {
        clearTimeout(s.resized), s.resized = setTimeout(n, 50);
      };

      on.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
        var _e$fullscreen = e.fullscreen,
            s = _e$fullscreen.target,
            a = _e$fullscreen.usingNative;
        if (s !== i.container) return;
        if (!e.isEmbed && is.empty(e.config.ratio)) return;

        var o = "enterfullscreen" === t.type,
            _n3 = n(o),
            c = _n3.ratio;

        (function (t, i, s) {
          if (!e.isVimeo || e.config.vimeo.premium) return;

          var n = e.elements.wrapper.firstChild,
              _t11 = _slicedToArray(t, 2),
              r = _t11[1],
              _getAspectRatio$call = getAspectRatio.call(e),
              _getAspectRatio$call2 = _slicedToArray(_getAspectRatio$call, 2),
              a = _getAspectRatio$call2[0],
              o = _getAspectRatio$call2[1];

          n.style.maxWidth = s ? r / o * a + "px" : null, n.style.margin = s ? "0 auto" : null;
        })(c, 0, o), o && setTimeout(function () {
          return repaint(i.container);
        }, 100), a || (o ? on.call(e, window, "resize", r) : off.call(e, window, "resize", r));
      });
    }), _defineProperty$1(this, "media", function () {
      var e = _this27.player,
          t = e.elements;

      if (on.call(e, e.media, "timeupdate seeking seeked", function (t) {
        return controls.timeUpdate.call(e, t);
      }), on.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
        return controls.durationUpdate.call(e, t);
      }), on.call(e, e.media, "ended", function () {
        e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
      }), on.call(e, e.media, "progress playing seeking seeked", function (t) {
        return controls.updateProgress.call(e, t);
      }), on.call(e, e.media, "volumechange", function (t) {
        return controls.updateVolume.call(e, t);
      }), on.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
        return ui.checkPlaying.call(e, t);
      }), on.call(e, e.media, "waiting canplay seeked playing", function (t) {
        return ui.checkLoading.call(e, t);
      }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
        var _i6 = getElement.call(e, ".".concat(e.config.classNames.video));

        if (!is.element(_i6)) return;
        on.call(e, t.container, "click", function (s) {
          ([t.container, _i6].includes(s.target) || _i6.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (_this27.proxy(s, e.restart, "restart"), _this27.proxy(s, function () {
            silencePromise(e.play());
          }, "play")) : _this27.proxy(s, function () {
            silencePromise(e.togglePlay());
          }, "play")));
        });
      }

      e.supported.ui && e.config.disableContextMenu && on.call(e, t.wrapper, "contextmenu", function (e) {
        e.preventDefault();
      }, !1), on.call(e, e.media, "volumechange", function () {
        e.storage.set({
          volume: e.volume,
          muted: e.muted
        });
      }), on.call(e, e.media, "ratechange", function () {
        controls.updateSetting.call(e, "speed"), e.storage.set({
          speed: e.speed
        });
      }), on.call(e, e.media, "qualitychange", function (t) {
        controls.updateSetting.call(e, "quality", null, t.detail.quality);
      }), on.call(e, e.media, "ready qualitychange", function () {
        controls.setDownloadUrl.call(e);
      });
      var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
      on.call(e, e.media, i, function (i) {
        var _i$detail = i.detail,
            s = _i$detail === void 0 ? {} : _i$detail;
        "error" === i.type && (s = e.media.error), triggerEvent.call(e, t.container, i.type, !0, s);
      });
    }), _defineProperty$1(this, "proxy", function (e, t, i) {
      var s = _this27.player,
          n = s.config.listeners[i];
      var r = !0;
      is.function(n) && (r = n.call(s, e)), !1 !== r && is.function(t) && t.call(s, e);
    }), _defineProperty$1(this, "bind", function (e, t, i, s) {
      var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
      var r = _this27.player,
          a = r.config.listeners[s],
          o = is.function(a);
      on.call(r, e, t, function (e) {
        return _this27.proxy(e, i, s);
      }, n && !o);
    }), _defineProperty$1(this, "controls", function () {
      var e = _this27.player,
          t = e.elements,
          i = browser.isIE ? "change" : "input";

      if (t.buttons.play && Array.from(t.buttons.play).forEach(function (t) {
        _this27.bind(t, "click", function () {
          silencePromise(e.togglePlay());
        }, "play");
      }), _this27.bind(t.buttons.restart, "click", e.restart, "restart"), _this27.bind(t.buttons.rewind, "click", function () {
        e.lastSeekTime = Date.now(), e.rewind();
      }, "rewind"), _this27.bind(t.buttons.fastForward, "click", function () {
        e.lastSeekTime = Date.now(), e.forward();
      }, "fastForward"), _this27.bind(t.buttons.mute, "click", function () {
        e.muted = !e.muted;
      }, "mute"), _this27.bind(t.buttons.captions, "click", function () {
        return e.toggleCaptions();
      }), _this27.bind(t.buttons.download, "click", function () {
        triggerEvent.call(e, e.media, "download");
      }, "download"), _this27.bind(t.buttons.fullscreen, "click", function () {
        e.fullscreen.toggle();
      }, "fullscreen"), _this27.bind(t.buttons.pip, "click", function () {
        e.pip = "toggle";
      }, "pip"), _this27.bind(t.buttons.airplay, "click", e.airplay, "airplay"), _this27.bind(t.buttons.settings, "click", function (t) {
        t.stopPropagation(), t.preventDefault(), controls.toggleMenu.call(e, t);
      }, null, !1), _this27.bind(t.buttons.settings, "keyup", function (t) {
        var i = t.which;
        [13, 32].includes(i) && (13 !== i ? (t.preventDefault(), t.stopPropagation(), controls.toggleMenu.call(e, t)) : controls.focusFirstMenuItem.call(e, null, !0));
      }, null, !1), _this27.bind(t.settings.menu, "keydown", function (t) {
        27 === t.which && controls.toggleMenu.call(e, t);
      }), _this27.bind(t.inputs.seek, "mousedown mousemove", function (e) {
        var i = t.progress.getBoundingClientRect(),
            s = 100 / i.width * (e.pageX - i.left);
        e.currentTarget.setAttribute("seek-value", s);
      }), _this27.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
        var i = t.currentTarget,
            s = t.keyCode ? t.keyCode : t.which,
            n = "play-on-seeked";
        if (is.keyboardEvent(t) && 39 !== s && 37 !== s) return;
        e.lastSeekTime = Date.now();
        var r = i.hasAttribute(n),
            a = ["mouseup", "touchend", "keyup"].includes(t.type);
        r && a ? (i.removeAttribute(n), silencePromise(e.play())) : !a && e.playing && (i.setAttribute(n, ""), e.pause());
      }), browser.isIos) {
        var _t12 = getElements.call(e, 'input[type="range"]');

        Array.from(_t12).forEach(function (e) {
          return _this27.bind(e, i, function (e) {
            return repaint(e.target);
          });
        });
      }

      _this27.bind(t.inputs.seek, i, function (t) {
        var i = t.currentTarget;
        var s = i.getAttribute("seek-value");
        is.empty(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
      }, "seek"), _this27.bind(t.progress, "mouseenter mouseleave mousemove", function (t) {
        return controls.updateSeekTooltip.call(e, t);
      }), _this27.bind(t.progress, "mousemove touchmove", function (t) {
        var i = e.previewThumbnails;
        i && i.loaded && i.startMove(t);
      }), _this27.bind(t.progress, "mouseleave touchend click", function () {
        var t = e.previewThumbnails;
        t && t.loaded && t.endMove(!1, !0);
      }), _this27.bind(t.progress, "mousedown touchstart", function (t) {
        var i = e.previewThumbnails;
        i && i.loaded && i.startScrubbing(t);
      }), _this27.bind(t.progress, "mouseup touchend", function (t) {
        var i = e.previewThumbnails;
        i && i.loaded && i.endScrubbing(t);
      }), browser.isWebkit && Array.from(getElements.call(e, 'input[type="range"]')).forEach(function (t) {
        _this27.bind(t, "input", function (t) {
          return controls.updateRangeFill.call(e, t.target);
        });
      }), e.config.toggleInvert && !is.element(t.display.duration) && _this27.bind(t.display.currentTime, "click", function () {
        0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, controls.timeUpdate.call(e));
      }), _this27.bind(t.inputs.volume, i, function (t) {
        e.volume = t.target.value;
      }, "volume"), _this27.bind(t.controls, "mouseenter mouseleave", function (i) {
        t.controls.hover = !e.touch && "mouseenter" === i.type;
      }), t.fullscreen && Array.from(t.fullscreen.children).filter(function (e) {
        return !e.contains(t.container);
      }).forEach(function (i) {
        _this27.bind(i, "mouseenter mouseleave", function (i) {
          t.controls.hover = !e.touch && "mouseenter" === i.type;
        });
      }), _this27.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
        t.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
      }), _this27.bind(t.controls, "focusin", function () {
        var i = e.config,
            s = e.timers;
        toggleClass(t.controls, i.classNames.noTransition, !0), ui.toggleControls.call(e, !0), setTimeout(function () {
          toggleClass(t.controls, i.classNames.noTransition, !1);
        }, 0);
        var n = _this27.touch ? 3e3 : 4e3;
        clearTimeout(s.controls), s.controls = setTimeout(function () {
          return ui.toggleControls.call(e, !1);
        }, n);
      }), _this27.bind(t.inputs.volume, "wheel", function (t) {
        var i = t.webkitDirectionInvertedFromDevice,
            _map = [t.deltaX, -t.deltaY].map(function (e) {
          return i ? -e : e;
        }),
            _map2 = _slicedToArray(_map, 2),
            s = _map2[0],
            n = _map2[1],
            r = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);

        e.increaseVolume(r / 50);
        var a = e.media.volume;
        (1 === r && a < 1 || -1 === r && a > 0) && t.preventDefault();
      }, "volume", !1);
    }), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
  }

  _createClass$1(Listeners, [{
    key: "handleKey",
    value: function handleKey(e) {
      var t = this.player,
          i = t.elements,
          s = e.keyCode ? e.keyCode : e.which,
          n = "keydown" === e.type,
          r = n && s === this.lastKey;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (!is.number(s)) return;

      if (n) {
        var _n4 = document.activeElement;

        if (is.element(_n4)) {
          var _s5 = t.config.selectors.editable,
              _r3 = i.inputs.seek;
          if (_n4 !== _r3 && matches(_n4, _s5)) return;
          if (32 === e.which && matches(_n4, 'button, [role^="menuitem"]')) return;
        }

        switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            r || (t.currentTime = t.duration / 10 * (s - 48));
            break;

          case 32:
          case 75:
            r || silencePromise(t.togglePlay());
            break;

          case 38:
            t.increaseVolume(.1);
            break;

          case 40:
            t.decreaseVolume(.1);
            break;

          case 77:
            r || (t.muted = !t.muted);
            break;

          case 39:
            t.forward();
            break;

          case 37:
            t.rewind();
            break;

          case 70:
            t.fullscreen.toggle();
            break;

          case 67:
            r || t.toggleCaptions();
            break;

          case 76:
            t.loop = !t.loop;
        }

        27 === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s;
      } else this.lastKey = null;
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(e) {
      controls.toggleMenu.call(this.player, e);
    }
  }]);

  return Listeners;
}();

function createCommonjsModule(e, t) {
  return e(t = {
    exports: {}
  }, t.exports), t.exports;
}

var loadjs_umd = createCommonjsModule(function (e, t) {
  e.exports = function () {
    var e = function e() {},
        t = {},
        i = {},
        s = {};

    function n(e, t) {
      e = e.push ? e : [e];
      var n,
          r,
          a,
          o = [],
          l = e.length,
          c = l;

      for (n = function n(e, i) {
        i.length && o.push(e), --c || t(o);
      }; l--;) {
        r = e[l], (a = i[r]) ? n(r, a) : (s[r] = s[r] || []).push(n);
      }
    }

    function r(e, t) {
      if (e) {
        var n = s[e];
        if (i[e] = t, n) for (; n.length;) {
          n[0](e, t), n.splice(0, 1);
        }
      }
    }

    function a(t, i) {
      t.call && (t = {
        success: t
      }), i.length ? (t.error || e)(i) : (t.success || e)(t);
    }

    function o(t, i, s, n) {
      var r,
          a,
          l = document,
          c = s.async,
          u = (s.numRetries || 0) + 1,
          d = s.before || e,
          h = t.replace(/[\?|#].*$/, ""),
          m = t.replace(/^(css|img)!/, "");
      n = n || 0, /(^css!|\.css$)/.test(h) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = m, (r = "hideFocus" in a) && a.relList && (r = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (a = l.createElement("img")).src = m : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function (e) {
        var l = e.type[0];
        if (r) try {
          a.sheet.cssText.length || (l = "e");
        } catch (e) {
          18 != e.code && (l = "e");
        }

        if ("e" == l) {
          if ((n += 1) < u) return o(t, i, s, n);
        } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";

        i(t, l, e.defaultPrevented);
      }, !1 !== d(t, a) && l.head.appendChild(a);
    }

    function l(e, t, i) {
      var s,
          n,
          r = (e = e.push ? e : [e]).length,
          a = r,
          l = [];

      for (s = function s(e, i, _s6) {
        if ("e" == i && l.push(e), "b" == i) {
          if (!_s6) return;
          l.push(e);
        }

        --r || t(l);
      }, n = 0; n < a; n++) {
        o(e[n], s, i);
      }
    }

    function c(e, i, s) {
      var n, o;

      if (i && i.trim && (n = i), o = (n ? s : i) || {}, n) {
        if (n in t) throw "LoadJS";
        t[n] = !0;
      }

      function c(t, i) {
        l(e, function (e) {
          a(o, e), t && a({
            success: t,
            error: i
          }, e), r(n, e);
        }, o);
      }

      if (o.returnPromise) return new Promise(c);
      c();
    }

    return c.ready = function (e, t) {
      return n(e, function (e) {
        a(t, e);
      }), c;
    }, c.done = function (e) {
      r(e, []);
    }, c.reset = function () {
      t = {}, i = {}, s = {};
    }, c.isDefined = function (e) {
      return e in t;
    }, c;
  }();
});

function loadScript(e) {
  return new Promise(function (t, i) {
    loadjs_umd(e, {
      success: t,
      error: i
    });
  });
}

function parseId$1(e) {
  if (is.empty(e)) return null;
  if (is.number(Number(e))) return e;
  return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e;
}

function assurePlaybackState$1(e) {
  e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, triggerEvent.call(this, this.media, e ? "play" : "pause"));
}

var vimeo = {
  setup: function setup() {
    var e = this;
    toggleClass(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, setAspectRatio.call(e), is.object(window.Vimeo) ? vimeo.ready.call(e) : loadScript(e.config.urls.vimeo.sdk).then(function () {
      vimeo.ready.call(e);
    }).catch(function (t) {
      e.debug.warn("Vimeo SDK (player.js) failed to load", t);
    });
  },
  ready: function ready() {
    var _this28 = this;

    var e = this,
        t = e.config.vimeo,
        i = t.premium,
        s = t.referrerPolicy,
        n = _objectWithoutProperties(t, ["premium", "referrerPolicy"]);

    i && Object.assign(n, {
      controls: !1,
      sidedock: !1
    });
    var r = buildUrlParams(_objectSpread2$1({
      loop: e.config.loop.active,
      autoplay: e.autoplay,
      muted: e.muted,
      gesture: "media",
      playsinline: !this.config.fullscreen.iosNative
    }, n));
    var a = e.media.getAttribute("src");
    is.empty(a) && (a = e.media.getAttribute(e.config.attributes.embed.id));
    var o = parseId$1(a),
        l = createElement("iframe"),
        c = format(e.config.urls.vimeo.iframe, o, r);
    if (l.setAttribute("src", c), l.setAttribute("allowfullscreen", ""), l.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture"].join("; ")), is.empty(s) || l.setAttribute("referrerPolicy", s), i || !t.customControls) l.setAttribute("data-poster", e.poster), e.media = replaceElement(l, e.media);else {
      var _t13 = createElement("div", {
        class: e.config.classNames.embedContainer,
        "data-poster": e.poster
      });

      _t13.appendChild(l), e.media = replaceElement(_t13, e.media);
    }
    t.customControls || fetch$1(format(e.config.urls.vimeo.api, c)).then(function (t) {
      !is.empty(t) && t.thumbnail_url && ui.setPoster.call(e, t.thumbnail_url).catch(function () {});
    }), e.embed = new window.Vimeo.Player(l, {
      autopause: e.config.autopause,
      muted: e.muted
    }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = function () {
      return assurePlaybackState$1.call(e, !0), e.embed.play();
    }, e.media.pause = function () {
      return assurePlaybackState$1.call(e, !1), e.embed.pause();
    }, e.media.stop = function () {
      e.pause(), e.currentTime = 0;
    };
    var u = e.media.currentTime;
    Object.defineProperty(e.media, "currentTime", {
      get: function get() {
        return u;
      },
      set: function set(t) {
        var i = e.embed,
            s = e.media,
            n = e.paused,
            r = e.volume,
            a = n && !i.hasPlayed;
        s.seeking = !0, triggerEvent.call(e, s, "seeking"), Promise.resolve(a && i.setVolume(0)).then(function () {
          return i.setCurrentTime(t);
        }).then(function () {
          return a && i.pause();
        }).then(function () {
          return a && i.setVolume(r);
        }).catch(function () {});
      }
    });
    var d = e.config.speed.selected;
    Object.defineProperty(e.media, "playbackRate", {
      get: function get() {
        return d;
      },
      set: function set(t) {
        e.embed.setPlaybackRate(t).then(function () {
          d = t, triggerEvent.call(e, e.media, "ratechange");
        }).catch(function () {
          e.options.speed = [1];
        });
      }
    });
    var h = e.config.volume;
    Object.defineProperty(e.media, "volume", {
      get: function get() {
        return h;
      },
      set: function set(t) {
        e.embed.setVolume(t).then(function () {
          h = t, triggerEvent.call(e, e.media, "volumechange");
        });
      }
    });
    var m = e.config.muted;
    Object.defineProperty(e.media, "muted", {
      get: function get() {
        return m;
      },
      set: function set(t) {
        var i = !!is.boolean(t) && t;
        e.embed.setVolume(i ? 0 : e.config.volume).then(function () {
          m = i, triggerEvent.call(e, e.media, "volumechange");
        });
      }
    });
    var p,
        g = e.config.loop;
    Object.defineProperty(e.media, "loop", {
      get: function get() {
        return g;
      },
      set: function set(t) {
        var i = is.boolean(t) ? t : e.config.loop.active;
        e.embed.setLoop(i).then(function () {
          g = i;
        });
      }
    }), e.embed.getVideoUrl().then(function (t) {
      p = t, controls.setDownloadUrl.call(e);
    }).catch(function (e) {
      _this28.debug.warn(e);
    }), Object.defineProperty(e.media, "currentSrc", {
      get: function get() {
        return p;
      }
    }), Object.defineProperty(e.media, "ended", {
      get: function get() {
        return e.currentTime === e.duration;
      }
    }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(function (t) {
      var _t14 = _slicedToArray(t, 2),
          i = _t14[0],
          s = _t14[1];

      e.embed.ratio = [i, s], setAspectRatio.call(_this28);
    }), e.embed.setAutopause(e.config.autopause).then(function (t) {
      e.config.autopause = t;
    }), e.embed.getVideoTitle().then(function (t) {
      e.config.title = t, ui.setTitle.call(_this28);
    }), e.embed.getCurrentTime().then(function (t) {
      u = t, triggerEvent.call(e, e.media, "timeupdate");
    }), e.embed.getDuration().then(function (t) {
      e.media.duration = t, triggerEvent.call(e, e.media, "durationchange");
    }), e.embed.getTextTracks().then(function (t) {
      e.media.textTracks = t, captions.setup.call(e);
    }), e.embed.on("cuechange", function (_ref15) {
      var _ref15$cues = _ref15.cues,
          t = _ref15$cues === void 0 ? [] : _ref15$cues;
      var i = t.map(function (e) {
        return stripHTML(e.text);
      });
      captions.updateCues.call(e, i);
    }), e.embed.on("loaded", function () {
      if (e.embed.getPaused().then(function (t) {
        assurePlaybackState$1.call(e, !t), t || triggerEvent.call(e, e.media, "playing");
      }), is.element(e.embed.element) && e.supported.ui) {
        e.embed.element.setAttribute("tabindex", -1);
      }
    }), e.embed.on("bufferstart", function () {
      triggerEvent.call(e, e.media, "waiting");
    }), e.embed.on("bufferend", function () {
      triggerEvent.call(e, e.media, "playing");
    }), e.embed.on("play", function () {
      assurePlaybackState$1.call(e, !0), triggerEvent.call(e, e.media, "playing");
    }), e.embed.on("pause", function () {
      assurePlaybackState$1.call(e, !1);
    }), e.embed.on("timeupdate", function (t) {
      e.media.seeking = !1, u = t.seconds, triggerEvent.call(e, e.media, "timeupdate");
    }), e.embed.on("progress", function (t) {
      e.media.buffered = t.percent, triggerEvent.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && triggerEvent.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(function (t) {
        t !== e.media.duration && (e.media.duration = t, triggerEvent.call(e, e.media, "durationchange"));
      });
    }), e.embed.on("seeked", function () {
      e.media.seeking = !1, triggerEvent.call(e, e.media, "seeked");
    }), e.embed.on("ended", function () {
      e.media.paused = !0, triggerEvent.call(e, e.media, "ended");
    }), e.embed.on("error", function (t) {
      e.media.error = t, triggerEvent.call(e, e.media, "error");
    }), t.customControls && setTimeout(function () {
      return ui.build.call(e);
    }, 0);
  }
};

function parseId(e) {
  if (is.empty(e)) return null;
  return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e;
}

function assurePlaybackState(e) {
  e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, triggerEvent.call(this, this.media, e ? "play" : "pause"));
}

function getHost(e) {
  return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
}

var youtube = {
  setup: function setup() {
    var _this29 = this;

    if (toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), is.object(window.YT) && is.function(window.YT.Player)) youtube.ready.call(this);else {
      var e = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        is.function(e) && e(), youtube.ready.call(_this29);
      }, loadScript(this.config.urls.youtube.sdk).catch(function (e) {
        _this29.debug.warn("YouTube API failed to load", e);
      });
    }
  },
  getTitle: function getTitle(e) {
    var _this30 = this;

    fetch$1(format(this.config.urls.youtube.api, e)).then(function (e) {
      if (is.object(e)) {
        var t = e.title,
            i = e.height,
            s = e.width;
        _this30.config.title = t, ui.setTitle.call(_this30), _this30.embed.ratio = [s, i];
      }

      setAspectRatio.call(_this30);
    }).catch(function () {
      setAspectRatio.call(_this30);
    });
  },
  ready: function ready() {
    var e = this,
        t = e.config.youtube,
        i = e.media && e.media.getAttribute("id");
    if (!is.empty(i) && i.startsWith("youtube-")) return;
    var s = e.media.getAttribute("src");
    is.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
    var n = parseId(s),
        r = createElement("div", {
      id: generateId(e.provider),
      "data-poster": t.customControls ? e.poster : void 0
    });

    if (e.media = replaceElement(r, e.media), t.customControls) {
      var _t15 = function _t15(e) {
        return "https://i.ytimg.com/vi/".concat(n, "/").concat(e, "default.jpg");
      };

      loadImage(_t15("maxres"), 121).catch(function () {
        return loadImage(_t15("sd"), 121);
      }).catch(function () {
        return loadImage(_t15("hq"));
      }).then(function (t) {
        return ui.setPoster.call(e, t.src);
      }).then(function (t) {
        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
      }).catch(function () {});
    }

    e.embed = new window.YT.Player(e.media, {
      videoId: n,
      host: getHost(t),
      playerVars: extend({}, {
        autoplay: e.config.autoplay ? 1 : 0,
        hl: e.config.hl,
        controls: e.supported.ui && t.customControls ? 0 : 1,
        disablekb: 1,
        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
        cc_load_policy: e.captions.active ? 1 : 0,
        cc_lang_pref: e.config.captions.language,
        widget_referrer: window ? window.location.href : null
      }, t),
      events: {
        onError: function onError(t) {
          if (!e.media.error) {
            var _i7 = t.data,
                _s7 = {
              2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
              5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
              100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
              101: "The owner of the requested video does not allow it to be played in embedded players.",
              150: "The owner of the requested video does not allow it to be played in embedded players."
            }[_i7] || "An unknown error occured";

            e.media.error = {
              code: _i7,
              message: _s7
            }, triggerEvent.call(e, e.media, "error");
          }
        },
        onPlaybackRateChange: function onPlaybackRateChange(t) {
          var i = t.target;
          e.media.playbackRate = i.getPlaybackRate(), triggerEvent.call(e, e.media, "ratechange");
        },
        onReady: function onReady(i) {
          if (is.function(e.media.play)) return;
          var s = i.target;
          youtube.getTitle.call(e, n), e.media.play = function () {
            assurePlaybackState.call(e, !0), s.playVideo();
          }, e.media.pause = function () {
            assurePlaybackState.call(e, !1), s.pauseVideo();
          }, e.media.stop = function () {
            s.stopVideo();
          }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
            get: function get() {
              return Number(s.getCurrentTime());
            },
            set: function set(t) {
              e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, triggerEvent.call(e, e.media, "seeking"), s.seekTo(t);
            }
          }), Object.defineProperty(e.media, "playbackRate", {
            get: function get() {
              return s.getPlaybackRate();
            },
            set: function set(e) {
              s.setPlaybackRate(e);
            }
          });
          var r = e.config.volume;
          Object.defineProperty(e.media, "volume", {
            get: function get() {
              return r;
            },
            set: function set(t) {
              r = t, s.setVolume(100 * r), triggerEvent.call(e, e.media, "volumechange");
            }
          });
          var a = e.config.muted;
          Object.defineProperty(e.media, "muted", {
            get: function get() {
              return a;
            },
            set: function set(t) {
              var i = is.boolean(t) ? t : a;
              a = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * r), triggerEvent.call(e, e.media, "volumechange");
            }
          }), Object.defineProperty(e.media, "currentSrc", {
            get: function get() {
              return s.getVideoUrl();
            }
          }), Object.defineProperty(e.media, "ended", {
            get: function get() {
              return e.currentTime === e.duration;
            }
          });
          var o = s.getAvailablePlaybackRates();
          e.options.speed = o.filter(function (t) {
            return e.config.speed.options.includes(t);
          }), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), triggerEvent.call(e, e.media, "timeupdate"), triggerEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
            e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && triggerEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), triggerEvent.call(e, e.media, "canplaythrough"));
          }, 200), t.customControls && setTimeout(function () {
            return ui.build.call(e);
          }, 50);
        },
        onStateChange: function onStateChange(i) {
          var s = i.target;
          clearInterval(e.timers.playing);

          switch (e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1, triggerEvent.call(e, e.media, "seeked")), i.data) {
            case -1:
              triggerEvent.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), triggerEvent.call(e, e.media, "progress");
              break;

            case 0:
              assurePlaybackState.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : triggerEvent.call(e, e.media, "ended");
              break;

            case 1:
              t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (assurePlaybackState.call(e, !0), triggerEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                triggerEvent.call(e, e.media, "timeupdate");
              }, 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), triggerEvent.call(e, e.media, "durationchange")));
              break;

            case 2:
              e.muted || e.embed.unMute(), assurePlaybackState.call(e, !1);
              break;

            case 3:
              triggerEvent.call(e, e.media, "waiting");
          }

          triggerEvent.call(e, e.elements.container, "statechange", !1, {
            code: i.data
          });
        }
      }
    });
  }
},
    media = {
  setup: function setup() {
    this.media ? (toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = createElement("div", {
      class: this.config.classNames.video
    }), wrap(this.media, this.elements.wrapper), this.elements.poster = createElement("div", {
      class: this.config.classNames.poster,
      hidden: ""
    }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? html5.setup.call(this) : this.isYouTube ? youtube.setup.call(this) : this.isVimeo && vimeo.setup.call(this)) : this.debug.warn("No media element found!");
  }
};

var Ads = /*#__PURE__*/function () {
  function Ads(e) {
    var _this31 = this;

    _classCallCheck$1(this, Ads);

    _defineProperty$1(this, "load", function () {
      _this31.enabled && (is.object(window.google) && is.object(window.google.ima) ? _this31.ready() : loadScript(_this31.player.config.urls.googleIMA.sdk).then(function () {
        _this31.ready();
      }).catch(function () {
        _this31.trigger("error", new Error("Google IMA SDK failed to load"));
      }));
    }), _defineProperty$1(this, "ready", function () {
      var e;
      _this31.enabled || ((e = _this31).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), _this31.startSafetyTimer(12e3, "ready()"), _this31.managerPromise.then(function () {
        _this31.clearSafetyTimer("onAdsManagerLoaded()");
      }), _this31.listeners(), _this31.setupIMA();
    }), _defineProperty$1(this, "setupIMA", function () {
      _this31.elements.container = createElement("div", {
        class: _this31.player.config.classNames.ads
      }), _this31.player.elements.container.appendChild(_this31.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(_this31.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(_this31.player.config.playsinline), _this31.elements.displayContainer = new google.ima.AdDisplayContainer(_this31.elements.container, _this31.player.media), _this31.loader = new google.ima.AdsLoader(_this31.elements.displayContainer), _this31.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
        return _this31.onAdsManagerLoaded(e);
      }, !1), _this31.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        return _this31.onAdError(e);
      }, !1), _this31.requestAds();
    }), _defineProperty$1(this, "requestAds", function () {
      var e = _this31.player.elements.container;

      try {
        var t = new google.ima.AdsRequest();
        t.adTagUrl = _this31.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!_this31.player.muted), _this31.loader.requestAds(t);
      } catch (e) {
        _this31.onAdError(e);
      }
    }), _defineProperty$1(this, "pollCountdown", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      if (!e) return clearInterval(_this31.countdownTimer), void _this31.elements.container.removeAttribute("data-badge-text");
      _this31.countdownTimer = setInterval(function () {
        var e = _formatTime(Math.max(_this31.manager.getRemainingTime(), 0)),
            t = "".concat(i18n.get("advertisement", _this31.player.config), " - ").concat(e);

        _this31.elements.container.setAttribute("data-badge-text", t);
      }, 100);
    }), _defineProperty$1(this, "onAdsManagerLoaded", function (e) {
      if (!_this31.enabled) return;
      var t = new google.ima.AdsRenderingSettings();
      t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, _this31.manager = e.getAdsManager(_this31.player, t), _this31.cuePoints = _this31.manager.getCuePoints(), _this31.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        return _this31.onAdError(e);
      }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
        _this31.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
          return _this31.onAdEvent(e);
        });
      }), _this31.trigger("loaded");
    }), _defineProperty$1(this, "addCuePoints", function () {
      is.empty(_this31.cuePoints) || _this31.cuePoints.forEach(function (e) {
        if (0 !== e && -1 !== e && e < _this31.player.duration) {
          var t = _this31.player.elements.progress;

          if (is.element(t)) {
            var i = 100 / _this31.player.duration * e,
                s = createElement("span", {
              class: _this31.player.config.classNames.cues
            });
            s.style.left = "".concat(i.toString(), "%"), t.appendChild(s);
          }
        }
      });
    }), _defineProperty$1(this, "onAdEvent", function (e) {
      var t = _this31.player.elements.container,
          i = e.getAd(),
          s = e.getAdData();

      switch (function (e) {
        triggerEvent.call(_this31.player, _this31.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
      }(e.type), e.type) {
        case google.ima.AdEvent.Type.LOADED:
          _this31.trigger("loaded"), _this31.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
          break;

        case google.ima.AdEvent.Type.STARTED:
          _this31.manager.setVolume(_this31.player.volume);

          break;

        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          _this31.player.ended ? _this31.loadAds() : _this31.loader.contentComplete();
          break;

        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          _this31.pauseContent();

          break;

        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          _this31.pollCountdown(), _this31.resumeContent();
          break;

        case google.ima.AdEvent.Type.LOG:
          s.adError && _this31.player.debug.warn("Non-fatal ad error: ".concat(s.adError.getMessage()));
      }
    }), _defineProperty$1(this, "onAdError", function (e) {
      _this31.cancel(), _this31.player.debug.warn("Ads error", e);
    }), _defineProperty$1(this, "listeners", function () {
      var e = _this31.player.elements.container;
      var t;
      _this31.player.on("canplay", function () {
        _this31.addCuePoints();
      }), _this31.player.on("ended", function () {
        _this31.loader.contentComplete();
      }), _this31.player.on("timeupdate", function () {
        t = _this31.player.currentTime;
      }), _this31.player.on("seeked", function () {
        var e = _this31.player.currentTime;
        is.empty(_this31.cuePoints) || _this31.cuePoints.forEach(function (i, s) {
          t < i && i < e && (_this31.manager.discardAdBreak(), _this31.cuePoints.splice(s, 1));
        });
      }), window.addEventListener("resize", function () {
        _this31.manager && _this31.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
      });
    }), _defineProperty$1(this, "play", function () {
      var e = _this31.player.elements.container;
      _this31.managerPromise || _this31.resumeContent(), _this31.managerPromise.then(function () {
        _this31.manager.setVolume(_this31.player.volume), _this31.elements.displayContainer.initialize();

        try {
          _this31.initialized || (_this31.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), _this31.manager.start()), _this31.initialized = !0;
        } catch (e) {
          _this31.onAdError(e);
        }
      }).catch(function () {});
    }), _defineProperty$1(this, "resumeContent", function () {
      _this31.elements.container.style.zIndex = "", _this31.playing = !1, silencePromise(_this31.player.media.play());
    }), _defineProperty$1(this, "pauseContent", function () {
      _this31.elements.container.style.zIndex = 3, _this31.playing = !0, _this31.player.media.pause();
    }), _defineProperty$1(this, "cancel", function () {
      _this31.initialized && _this31.resumeContent(), _this31.trigger("error"), _this31.loadAds();
    }), _defineProperty$1(this, "loadAds", function () {
      _this31.managerPromise.then(function () {
        _this31.manager && _this31.manager.destroy(), _this31.managerPromise = new Promise(function (e) {
          _this31.on("loaded", e), _this31.player.debug.log(_this31.manager);
        }), _this31.initialized = !1, _this31.requestAds();
      }).catch(function () {});
    }), _defineProperty$1(this, "trigger", function (e) {
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }

      var i = _this31.events[e];
      is.array(i) && i.forEach(function (e) {
        is.function(e) && e.apply(_this31, t);
      });
    }), _defineProperty$1(this, "on", function (e, t) {
      return is.array(_this31.events[e]) || (_this31.events[e] = []), _this31.events[e].push(t), _this31;
    }), _defineProperty$1(this, "startSafetyTimer", function (e, t) {
      _this31.player.debug.log("Safety timer invoked from: ".concat(t)), _this31.safetyTimer = setTimeout(function () {
        _this31.cancel(), _this31.clearSafetyTimer("startSafetyTimer()");
      }, e);
    }), _defineProperty$1(this, "clearSafetyTimer", function (e) {
      is.nullOrUndefined(_this31.safetyTimer) || (_this31.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(_this31.safetyTimer), _this31.safetyTimer = null);
    }), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
      container: null,
      displayContainer: null
    }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
      _this31.on("loaded", e), _this31.on("error", t);
    }), this.load();
  }

  _createClass$1(Ads, [{
    key: "enabled",
    get: function get() {
      var e = this.config;
      return this.player.isHTML5 && this.player.isVideo && e.enabled && (!is.empty(e.publisherId) || is.url(e.tagUrl));
    }
  }, {
    key: "tagUrl",
    get: function get() {
      var e = this.config;
      if (is.url(e.tagUrl)) return e.tagUrl;
      return "https://go.aniview.com/api/adserver6/vast/?".concat(buildUrlParams({
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: e.publisherId
      }));
    }
  }]);

  return Ads;
}();

var parseVtt = function parseVtt(e) {
  var t = [];
  return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
    var i = {};
    e.split(/\r\n|\n|\r/).forEach(function (e) {
      if (is.number(i.startTime)) {
        if (!is.empty(e.trim()) && is.empty(i.text)) {
          var _t17, _t18, _t16$1$split, _t16$1$split2;

          var _t16 = e.trim().split("#xywh=");

          (_t17 = _t16, _t18 = _slicedToArray(_t17, 1), i.text = _t18[0], _t17), _t16[1] && (_t16$1$split = _t16[1].split(","), _t16$1$split2 = _slicedToArray(_t16$1$split, 4), i.x = _t16$1$split2[0], i.y = _t16$1$split2[1], i.w = _t16$1$split2[2], i.h = _t16$1$split2[3], _t16$1$split);
        }
      } else {
        var _t19 = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);

        _t19 && (i.startTime = 60 * Number(_t19[1] || 0) * 60 + 60 * Number(_t19[2]) + Number(_t19[3]) + Number("0.".concat(_t19[4])), i.endTime = 60 * Number(_t19[6] || 0) * 60 + 60 * Number(_t19[7]) + Number(_t19[8]) + Number("0.".concat(_t19[9])));
      }
    }), i.text && t.push(i);
  }), t;
},
    fitRatio = function fitRatio(e, t) {
  var i = {};
  return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
};

var PreviewThumbnails = /*#__PURE__*/function () {
  function PreviewThumbnails(e) {
    var _this32 = this;

    _classCallCheck$1(this, PreviewThumbnails);

    _defineProperty$1(this, "load", function () {
      _this32.player.elements.display.seekTooltip && (_this32.player.elements.display.seekTooltip.hidden = _this32.enabled), _this32.enabled && _this32.getThumbnails().then(function () {
        _this32.enabled && (_this32.render(), _this32.determineContainerAutoSizing(), _this32.loaded = !0);
      });
    }), _defineProperty$1(this, "getThumbnails", function () {
      return new Promise(function (e) {
        var t = _this32.player.config.previewThumbnails.src;
        if (is.empty(t)) throw new Error("Missing previewThumbnails.src config attribute");

        var i = function i() {
          _this32.thumbnails.sort(function (e, t) {
            return e.height - t.height;
          }), _this32.player.debug.log("Preview thumbnails", _this32.thumbnails), e();
        };

        if (is.function(t)) t(function (e) {
          _this32.thumbnails = e, i();
        });else {
          var _e26 = (is.string(t) ? [t] : t).map(function (e) {
            return _this32.getThumbnail(e);
          });

          Promise.all(_e26).then(i);
        }
      });
    }), _defineProperty$1(this, "getThumbnail", function (e) {
      return new Promise(function (t) {
        fetch$1(e).then(function (i) {
          var s = {
            frames: parseVtt(i),
            height: null,
            urlPrefix: ""
          };
          s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
          var n = new Image();
          n.onload = function () {
            s.height = n.naturalHeight, s.width = n.naturalWidth, _this32.thumbnails.push(s), t();
          }, n.src = s.urlPrefix + s.frames[0].text;
        });
      });
    }), _defineProperty$1(this, "startMove", function (e) {
      if (_this32.loaded && is.event(e) && ["touchmove", "mousemove"].includes(e.type) && _this32.player.media.duration) {
        if ("touchmove" === e.type) _this32.seekTime = _this32.player.media.duration * (_this32.player.elements.inputs.seek.value / 100);else {
          var t = _this32.player.elements.progress.getBoundingClientRect(),
              i = 100 / t.width * (e.pageX - t.left);

          _this32.seekTime = _this32.player.media.duration * (i / 100), _this32.seekTime < 0 && (_this32.seekTime = 0), _this32.seekTime > _this32.player.media.duration - 1 && (_this32.seekTime = _this32.player.media.duration - 1), _this32.mousePosX = e.pageX, _this32.elements.thumb.time.innerText = _formatTime(_this32.seekTime);
        }

        _this32.showImageAtCurrentTime();
      }
    }), _defineProperty$1(this, "endMove", function () {
      _this32.toggleThumbContainer(!1, !0);
    }), _defineProperty$1(this, "startScrubbing", function (e) {
      (is.nullOrUndefined(e.button) || !1 === e.button || 0 === e.button) && (_this32.mouseDown = !0, _this32.player.media.duration && (_this32.toggleScrubbingContainer(!0), _this32.toggleThumbContainer(!1, !0), _this32.showImageAtCurrentTime()));
    }), _defineProperty$1(this, "endScrubbing", function () {
      _this32.mouseDown = !1, Math.ceil(_this32.lastTime) === Math.ceil(_this32.player.media.currentTime) ? _this32.toggleScrubbingContainer(!1) : once.call(_this32.player, _this32.player.media, "timeupdate", function () {
        _this32.mouseDown || _this32.toggleScrubbingContainer(!1);
      });
    }), _defineProperty$1(this, "listeners", function () {
      _this32.player.on("play", function () {
        _this32.toggleThumbContainer(!1, !0);
      }), _this32.player.on("seeked", function () {
        _this32.toggleThumbContainer(!1);
      }), _this32.player.on("timeupdate", function () {
        _this32.lastTime = _this32.player.media.currentTime;
      });
    }), _defineProperty$1(this, "render", function () {
      _this32.elements.thumb.container = createElement("div", {
        class: _this32.player.config.classNames.previewThumbnails.thumbContainer
      }), _this32.elements.thumb.imageContainer = createElement("div", {
        class: _this32.player.config.classNames.previewThumbnails.imageContainer
      }), _this32.elements.thumb.container.appendChild(_this32.elements.thumb.imageContainer);
      var e = createElement("div", {
        class: _this32.player.config.classNames.previewThumbnails.timeContainer
      });
      _this32.elements.thumb.time = createElement("span", {}, "00:00"), e.appendChild(_this32.elements.thumb.time), _this32.elements.thumb.container.appendChild(e), is.element(_this32.player.elements.progress) && _this32.player.elements.progress.appendChild(_this32.elements.thumb.container), _this32.elements.scrubbing.container = createElement("div", {
        class: _this32.player.config.classNames.previewThumbnails.scrubbingContainer
      }), _this32.player.elements.wrapper.appendChild(_this32.elements.scrubbing.container);
    }), _defineProperty$1(this, "destroy", function () {
      _this32.elements.thumb.container && _this32.elements.thumb.container.remove(), _this32.elements.scrubbing.container && _this32.elements.scrubbing.container.remove();
    }), _defineProperty$1(this, "showImageAtCurrentTime", function () {
      _this32.mouseDown ? _this32.setScrubbingContainerSize() : _this32.setThumbContainerSizeAndPos();

      var e = _this32.thumbnails[0].frames.findIndex(function (e) {
        return _this32.seekTime >= e.startTime && _this32.seekTime <= e.endTime;
      }),
          t = e >= 0;

      var i = 0;
      _this32.mouseDown || _this32.toggleThumbContainer(t), t && (_this32.thumbnails.forEach(function (t, s) {
        _this32.loadedImages.includes(t.frames[e].text) && (i = s);
      }), e !== _this32.showingThumb && (_this32.showingThumb = e, _this32.loadImage(i)));
    }), _defineProperty$1(this, "loadImage", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = _this32.showingThumb,
          i = _this32.thumbnails[e],
          s = i.urlPrefix,
          n = i.frames[t],
          r = i.frames[t].text,
          a = s + r;
      if (_this32.currentImageElement && _this32.currentImageElement.dataset.filename === r) _this32.showImage(_this32.currentImageElement, n, e, t, r, !1), _this32.currentImageElement.dataset.index = t, _this32.removeOldImages(_this32.currentImageElement);else {
        _this32.loadingImage && _this32.usingSprites && (_this32.loadingImage.onload = null);

        var _i8 = new Image();

        _i8.src = a, _i8.dataset.index = t, _i8.dataset.filename = r, _this32.showingThumbFilename = r, _this32.player.debug.log("Loading image: ".concat(a)), _i8.onload = function () {
          return _this32.showImage(_i8, n, e, t, r, !0);
        }, _this32.loadingImage = _i8, _this32.removeOldImages(_i8);
      }
    }), _defineProperty$1(this, "showImage", function (e, t, i, s, n) {
      var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
      _this32.player.debug.log("Showing thumb: ".concat(n, ". num: ").concat(s, ". qual: ").concat(i, ". newimg: ").concat(r)), _this32.setImageSizeAndOffset(e, t), r && (_this32.currentImageContainer.appendChild(e), _this32.currentImageElement = e, _this32.loadedImages.includes(n) || _this32.loadedImages.push(n)), _this32.preloadNearby(s, !0).then(_this32.preloadNearby(s, !1)).then(_this32.getHigherQuality(i, e, t, n));
    }), _defineProperty$1(this, "removeOldImages", function (e) {
      Array.from(_this32.currentImageContainer.children).forEach(function (t) {
        if ("img" !== t.tagName.toLowerCase()) return;
        var i = _this32.usingSprites ? 500 : 1e3;

        if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
          t.dataset.deleting = !0;
          var _e27 = _this32.currentImageContainer;
          setTimeout(function () {
            _e27.removeChild(t), _this32.player.debug.log("Removing thumb: ".concat(t.dataset.filename));
          }, i);
        }
      });
    }), _defineProperty$1(this, "preloadNearby", function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      return new Promise(function (i) {
        setTimeout(function () {
          var s = _this32.thumbnails[0].frames[e].text;

          if (_this32.showingThumbFilename === s) {
            var n;
            n = t ? _this32.thumbnails[0].frames.slice(e) : _this32.thumbnails[0].frames.slice(0, e).reverse();
            var r = !1;
            n.forEach(function (e) {
              var t = e.text;

              if (t !== s && !_this32.loadedImages.includes(t)) {
                r = !0, _this32.player.debug.log("Preloading thumb filename: ".concat(t));

                var _e28 = _this32.thumbnails[0].urlPrefix,
                    _s8 = _e28 + t,
                    _n5 = new Image();

                _n5.src = _s8, _n5.onload = function () {
                  _this32.player.debug.log("Preloaded thumb filename: ".concat(t)), _this32.loadedImages.includes(t) || _this32.loadedImages.push(t), i();
                };
              }
            }), r || i();
          }
        }, 300);
      });
    }), _defineProperty$1(this, "getHigherQuality", function (e, t, i, s) {
      if (e < _this32.thumbnails.length - 1) {
        var n = t.naturalHeight;
        _this32.usingSprites && (n = i.h), n < _this32.thumbContainerHeight && setTimeout(function () {
          _this32.showingThumbFilename === s && (_this32.player.debug.log("Showing higher quality thumb for: ".concat(s)), _this32.loadImage(e + 1));
        }, 300);
      }
    }), _defineProperty$1(this, "toggleThumbContainer", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = _this32.player.config.classNames.previewThumbnails.thumbContainerShown;
      _this32.elements.thumb.container.classList.toggle(i, e), !e && t && (_this32.showingThumb = null, _this32.showingThumbFilename = null);
    }), _defineProperty$1(this, "toggleScrubbingContainer", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var t = _this32.player.config.classNames.previewThumbnails.scrubbingContainerShown;
      _this32.elements.scrubbing.container.classList.toggle(t, e), e || (_this32.showingThumb = null, _this32.showingThumbFilename = null);
    }), _defineProperty$1(this, "determineContainerAutoSizing", function () {
      (_this32.elements.thumb.imageContainer.clientHeight > 20 || _this32.elements.thumb.imageContainer.clientWidth > 20) && (_this32.sizeSpecifiedInCSS = !0);
    }), _defineProperty$1(this, "setThumbContainerSizeAndPos", function () {
      if (_this32.sizeSpecifiedInCSS) {
        if (_this32.elements.thumb.imageContainer.clientHeight > 20 && _this32.elements.thumb.imageContainer.clientWidth < 20) {
          var _e29 = Math.floor(_this32.elements.thumb.imageContainer.clientHeight * _this32.thumbAspectRatio);

          _this32.elements.thumb.imageContainer.style.width = "".concat(_e29, "px");
        } else if (_this32.elements.thumb.imageContainer.clientHeight < 20 && _this32.elements.thumb.imageContainer.clientWidth > 20) {
          var _e30 = Math.floor(_this32.elements.thumb.imageContainer.clientWidth / _this32.thumbAspectRatio);

          _this32.elements.thumb.imageContainer.style.height = "".concat(_e30, "px");
        }
      } else {
        var _e31 = Math.floor(_this32.thumbContainerHeight * _this32.thumbAspectRatio);

        _this32.elements.thumb.imageContainer.style.height = "".concat(_this32.thumbContainerHeight, "px"), _this32.elements.thumb.imageContainer.style.width = "".concat(_e31, "px");
      }

      _this32.setThumbContainerPos();
    }), _defineProperty$1(this, "setThumbContainerPos", function () {
      var e = _this32.player.elements.progress.getBoundingClientRect(),
          t = _this32.player.elements.container.getBoundingClientRect(),
          i = _this32.elements.thumb.container,
          s = t.left - e.left + 10,
          n = t.right - e.left - i.clientWidth - 10;

      var r = _this32.mousePosX - e.left - i.clientWidth / 2;
      r < s && (r = s), r > n && (r = n), i.style.left = "".concat(r, "px");
    }), _defineProperty$1(this, "setScrubbingContainerSize", function () {
      var _fitRatio = fitRatio(_this32.thumbAspectRatio, {
        width: _this32.player.media.clientWidth,
        height: _this32.player.media.clientHeight
      }),
          e = _fitRatio.width,
          t = _fitRatio.height;

      _this32.elements.scrubbing.container.style.width = "".concat(e, "px"), _this32.elements.scrubbing.container.style.height = "".concat(t, "px");
    }), _defineProperty$1(this, "setImageSizeAndOffset", function (e, t) {
      if (!_this32.usingSprites) return;
      var i = _this32.thumbContainerHeight / t.h;
      e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
    }), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
      thumb: {},
      scrubbing: {}
    }, this.load();
  }

  _createClass$1(PreviewThumbnails, [{
    key: "enabled",
    get: function get() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }
  }, {
    key: "currentImageContainer",
    get: function get() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
    }
  }, {
    key: "usingSprites",
    get: function get() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w");
    }
  }, {
    key: "thumbAspectRatio",
    get: function get() {
      return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
    }
  }, {
    key: "thumbContainerHeight",
    get: function get() {
      if (this.mouseDown) {
        var _fitRatio2 = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }),
            e = _fitRatio2.height;

        return e;
      }

      return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
  }, {
    key: "currentImageElement",
    get: function get() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
    },
    set: function set(e) {
      this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
    }
  }]);

  return PreviewThumbnails;
}();

var source = {
  insertElements: function insertElements(e, t) {
    var _this33 = this;

    is.string(t) ? insertElement(e, this.media, {
      src: t
    }) : is.array(t) && t.forEach(function (t) {
      insertElement(e, _this33.media, t);
    });
  },
  change: function change(e) {
    var _this34 = this;

    getDeep(e, "sources.length") ? (html5.cancelRequests.call(this), this.destroy.call(this, function () {
      _this34.options.quality = [], removeElement(_this34.media), _this34.media = null, is.element(_this34.elements.container) && _this34.elements.container.removeAttribute("class");

      var t = e.sources,
          i = e.type,
          _t20 = _slicedToArray(t, 1),
          _t20$ = _t20[0],
          _t20$$provider = _t20$.provider,
          s = _t20$$provider === void 0 ? providers.html5 : _t20$$provider,
          n = _t20$.src,
          r = "html5" === s ? i : "div",
          a = "html5" === s ? {} : {
        src: n
      };

      Object.assign(_this34, {
        provider: s,
        type: i,
        supported: support.check(i, s, _this34.config.playsinline),
        media: createElement(r, a)
      }), _this34.elements.container.appendChild(_this34.media), is.boolean(e.autoplay) && (_this34.config.autoplay = e.autoplay), _this34.isHTML5 && (_this34.config.crossorigin && _this34.media.setAttribute("crossorigin", ""), _this34.config.autoplay && _this34.media.setAttribute("autoplay", ""), is.empty(e.poster) || (_this34.poster = e.poster), _this34.config.loop.active && _this34.media.setAttribute("loop", ""), _this34.config.muted && _this34.media.setAttribute("muted", ""), _this34.config.playsinline && _this34.media.setAttribute("playsinline", "")), ui.addStyleHook.call(_this34), _this34.isHTML5 && source.insertElements.call(_this34, "source", t), _this34.config.title = e.title, media.setup.call(_this34), _this34.isHTML5 && Object.keys(e).includes("tracks") && source.insertElements.call(_this34, "track", e.tracks), (_this34.isHTML5 || _this34.isEmbed && !_this34.supported.ui) && ui.build.call(_this34), _this34.isHTML5 && _this34.media.load(), is.empty(e.previewThumbnails) || (Object.assign(_this34.config.previewThumbnails, e.previewThumbnails), _this34.previewThumbnails && _this34.previewThumbnails.loaded && (_this34.previewThumbnails.destroy(), _this34.previewThumbnails = null), _this34.config.previewThumbnails.enabled && (_this34.previewThumbnails = new PreviewThumbnails(_this34))), _this34.fullscreen.update();
    }, !0)) : this.debug.warn("Invalid source format");
  }
};

function clamp() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
  return Math.min(Math.max(e, t), i);
}

var Plyr = /*#__PURE__*/function () {
  function Plyr(e, t) {
    var _this35 = this;

    _classCallCheck$1(this, Plyr);

    if (_defineProperty$1(this, "play", function () {
      return is.function(_this35.media.play) ? (_this35.ads && _this35.ads.enabled && _this35.ads.managerPromise.then(function () {
        return _this35.ads.play();
      }).catch(function () {
        return silencePromise(_this35.media.play());
      }), _this35.media.play()) : null;
    }), _defineProperty$1(this, "pause", function () {
      return _this35.playing && is.function(_this35.media.pause) ? _this35.media.pause() : null;
    }), _defineProperty$1(this, "togglePlay", function (e) {
      return (is.boolean(e) ? e : !_this35.playing) ? _this35.play() : _this35.pause();
    }), _defineProperty$1(this, "stop", function () {
      _this35.isHTML5 ? (_this35.pause(), _this35.restart()) : is.function(_this35.media.stop) && _this35.media.stop();
    }), _defineProperty$1(this, "restart", function () {
      _this35.currentTime = 0;
    }), _defineProperty$1(this, "rewind", function (e) {
      _this35.currentTime -= is.number(e) ? e : _this35.config.seekTime;
    }), _defineProperty$1(this, "forward", function (e) {
      _this35.currentTime += is.number(e) ? e : _this35.config.seekTime;
    }), _defineProperty$1(this, "increaseVolume", function (e) {
      var t = _this35.media.muted ? 0 : _this35.volume;
      _this35.volume = t + (is.number(e) ? e : 0);
    }), _defineProperty$1(this, "decreaseVolume", function (e) {
      _this35.increaseVolume(-e);
    }), _defineProperty$1(this, "airplay", function () {
      support.airplay && _this35.media.webkitShowPlaybackTargetPicker();
    }), _defineProperty$1(this, "toggleControls", function (e) {
      if (_this35.supported.ui && !_this35.isAudio) {
        var _t21 = hasClass(_this35.elements.container, _this35.config.classNames.hideControls),
            _i9 = void 0 === e ? void 0 : !e,
            _s9 = toggleClass(_this35.elements.container, _this35.config.classNames.hideControls, _i9);

        if (_s9 && is.array(_this35.config.controls) && _this35.config.controls.includes("settings") && !is.empty(_this35.config.settings) && controls.toggleMenu.call(_this35, !1), _s9 !== _t21) {
          var _e32 = _s9 ? "controlshidden" : "controlsshown";

          triggerEvent.call(_this35, _this35.media, _e32);
        }

        return !_s9;
      }

      return !1;
    }), _defineProperty$1(this, "on", function (e, t) {
      on.call(_this35, _this35.elements.container, e, t);
    }), _defineProperty$1(this, "once", function (e, t) {
      once.call(_this35, _this35.elements.container, e, t);
    }), _defineProperty$1(this, "off", function (e, t) {
      off(_this35.elements.container, e, t);
    }), _defineProperty$1(this, "destroy", function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      if (!_this35.ready) return;

      var i = function i() {
        document.body.style.overflow = "", _this35.embed = null, t ? (Object.keys(_this35.elements).length && (removeElement(_this35.elements.buttons.play), removeElement(_this35.elements.captions), removeElement(_this35.elements.controls), removeElement(_this35.elements.wrapper), _this35.elements.buttons.play = null, _this35.elements.captions = null, _this35.elements.controls = null, _this35.elements.wrapper = null), is.function(e) && e()) : (unbindListeners.call(_this35), html5.cancelRequests.call(_this35), replaceElement(_this35.elements.original, _this35.elements.container), triggerEvent.call(_this35, _this35.elements.original, "destroyed", !0), is.function(e) && e.call(_this35.elements.original), _this35.ready = !1, setTimeout(function () {
          _this35.elements = null, _this35.media = null;
        }, 200));
      };

      _this35.stop(), clearTimeout(_this35.timers.loading), clearTimeout(_this35.timers.controls), clearTimeout(_this35.timers.resized), _this35.isHTML5 ? (ui.toggleNativeControls.call(_this35, !0), i()) : _this35.isYouTube ? (clearInterval(_this35.timers.buffering), clearInterval(_this35.timers.playing), null !== _this35.embed && is.function(_this35.embed.destroy) && _this35.embed.destroy(), i()) : _this35.isVimeo && (null !== _this35.embed && _this35.embed.unload().then(i), setTimeout(i, 200));
    }), _defineProperty$1(this, "supports", function (e) {
      return support.mime.call(_this35, e);
    }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = support.touch, this.media = e, is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) && (this.media = this.media[0]), this.config = extend({}, defaults, Plyr.defaults, t || {}, function () {
      try {
        return JSON.parse(_this35.media.getAttribute("data-plyr-config"));
      } catch (e) {
        return {};
      }
    }()), this.elements = {
      container: null,
      fullscreen: null,
      captions: null,
      buttons: {},
      display: {},
      progress: {},
      inputs: {},
      settings: {
        popup: null,
        menu: null,
        panels: {},
        buttons: {}
      }
    }, this.captions = {
      active: null,
      currentTrack: -1,
      meta: new WeakMap()
    }, this.fullscreen = {
      active: !1
    }, this.options = {
      speed: [],
      quality: []
    }, this.debug = new Console(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", support), is.nullOrUndefined(this.media) || !is.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
    if (this.media.plyr) return void this.debug.warn("Target already setup");
    if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
    if (!support.check().api) return void this.debug.error("Setup failed: no support");
    var i = this.media.cloneNode(!0);
    i.autoplay = !1, this.elements.original = i;
    var s = this.media.tagName.toLowerCase();
    var n = null,
        r = null;

    switch (s) {
      case "div":
        if (n = this.media.querySelector("iframe"), is.element(n)) {
          if (r = parseUrl(n.getAttribute("src")), this.provider = getProviderByUrl(r.toString()), this.elements.container = this.media, this.media = n, this.elements.container.className = "", r.search.length) {
            var _e33 = ["1", "true"];
            _e33.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), _e33.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = _e33.includes(r.searchParams.get("playsinline")), this.config.youtube.hl = r.searchParams.get("hl")) : this.config.playsinline = !0;
          }
        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

        if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
        this.type = types.video;
        break;

      case "video":
      case "audio":
        this.type = s, this.provider = providers.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
        break;

      default:
        return void this.debug.error("Setup failed: unsupported type");
    }

    this.supported = support.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Listeners(this), this.storage = new Storage(this), this.media.plyr = this, is.element(this.elements.container) || (this.elements.container = createElement("div", {
      tabindex: 0
    }), wrap(this.media, this.elements.container)), ui.migrateStyles.call(this), ui.addStyleHook.call(this), media.setup.call(this), this.config.debug && on.call(this, this.elements.container, this.config.events.join(" "), function (e) {
      _this35.debug.log("event: ".concat(e.type));
    }), this.fullscreen = new Fullscreen(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ui.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Ads(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
      return silencePromise(_this35.play());
    }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new PreviewThumbnails(this))) : this.debug.error("Setup failed: no support");
  }

  _createClass$1(Plyr, [{
    key: "toggleCaptions",
    value: function toggleCaptions(e) {
      captions.toggle.call(this, e, !1);
    }
  }, {
    key: "isHTML5",
    get: function get() {
      return this.provider === providers.html5;
    }
  }, {
    key: "isEmbed",
    get: function get() {
      return this.isYouTube || this.isVimeo;
    }
  }, {
    key: "isYouTube",
    get: function get() {
      return this.provider === providers.youtube;
    }
  }, {
    key: "isVimeo",
    get: function get() {
      return this.provider === providers.vimeo;
    }
  }, {
    key: "isVideo",
    get: function get() {
      return this.type === types.video;
    }
  }, {
    key: "isAudio",
    get: function get() {
      return this.type === types.audio;
    }
  }, {
    key: "playing",
    get: function get() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
  }, {
    key: "paused",
    get: function get() {
      return Boolean(this.media.paused);
    }
  }, {
    key: "stopped",
    get: function get() {
      return Boolean(this.paused && 0 === this.currentTime);
    }
  }, {
    key: "ended",
    get: function get() {
      return Boolean(this.media.ended);
    }
  }, {
    key: "currentTime",
    set: function set(e) {
      if (!this.duration) return;
      var t = is.number(e) && e > 0;
      this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
    },
    get: function get() {
      return Number(this.media.currentTime);
    }
  }, {
    key: "buffered",
    get: function get() {
      var e = this.media.buffered;
      return is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
    }
  }, {
    key: "seeking",
    get: function get() {
      return Boolean(this.media.seeking);
    }
  }, {
    key: "duration",
    get: function get() {
      var e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          i = is.number(t) && t !== 1 / 0 ? t : 0;
      return e || i;
    }
  }, {
    key: "volume",
    set: function set(e) {
      var _this$config2;

      var t = e;
      is.string(t) && (t = Number(t)), is.number(t) || (t = this.storage.get("volume")), is.number(t) || (_this$config2 = this.config, t = _this$config2.volume, _this$config2), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !is.empty(e) && this.muted && t > 0 && (this.muted = !1);
    },
    get: function get() {
      return Number(this.media.volume);
    }
  }, {
    key: "muted",
    set: function set(e) {
      var t = e;
      is.boolean(t) || (t = this.storage.get("muted")), is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
    },
    get: function get() {
      return Boolean(this.media.muted);
    }
  }, {
    key: "hasAudio",
    get: function get() {
      return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
  }, {
    key: "speed",
    set: function set(e) {
      var _this36 = this;

      var t = null;
      is.number(e) && (t = e), is.number(t) || (t = this.storage.get("speed")), is.number(t) || (t = this.config.speed.selected);
      var i = this.minimumSpeed,
          s = this.maximumSpeed;
      t = clamp(t, i, s), this.config.speed.selected = t, setTimeout(function () {
        _this36.media.playbackRate = t;
      }, 0);
    },
    get: function get() {
      return Number(this.media.playbackRate);
    }
  }, {
    key: "minimumSpeed",
    get: function get() {
      return this.isYouTube ? Math.min.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? .5 : .0625;
    }
  }, {
    key: "maximumSpeed",
    get: function get() {
      return this.isYouTube ? Math.max.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? 2 : 16;
    }
  }, {
    key: "quality",
    set: function set(e) {
      var t = this.config.quality,
          i = this.options.quality;
      if (!i.length) return;
      var s = [!is.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(is.number),
          n = !0;

      if (!i.includes(s)) {
        var _e34 = closest(i, s);

        this.debug.warn("Unsupported quality option: ".concat(s, ", using ").concat(_e34, " instead")), s = _e34, n = !1;
      }

      t.selected = s, this.media.quality = s, n && this.storage.set({
        quality: s
      });
    },
    get: function get() {
      return this.media.quality;
    }
  }, {
    key: "loop",
    set: function set(e) {
      var t = is.boolean(e) ? e : this.config.loop.active;
      this.config.loop.active = t, this.media.loop = t;
    },
    get: function get() {
      return Boolean(this.media.loop);
    }
  }, {
    key: "source",
    set: function set(e) {
      source.change.call(this, e);
    },
    get: function get() {
      return this.media.currentSrc;
    }
  }, {
    key: "download",
    get: function get() {
      var e = this.config.urls.download;
      return is.url(e) ? e : this.source;
    },
    set: function set(e) {
      is.url(e) && (this.config.urls.download = e, controls.setDownloadUrl.call(this));
    }
  }, {
    key: "poster",
    set: function set(e) {
      this.isVideo ? ui.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
    },
    get: function get() {
      return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
    }
  }, {
    key: "ratio",
    get: function get() {
      if (!this.isVideo) return null;
      var e = reduceAspectRatio(getAspectRatio.call(this));
      return is.array(e) ? e.join(":") : e;
    },
    set: function set(e) {
      this.isVideo ? is.string(e) && validateRatio(e) ? (this.config.ratio = e, setAspectRatio.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
    }
  }, {
    key: "autoplay",
    set: function set(e) {
      var t = is.boolean(e) ? e : this.config.autoplay;
      this.config.autoplay = t;
    },
    get: function get() {
      return Boolean(this.config.autoplay);
    }
  }, {
    key: "currentTrack",
    set: function set(e) {
      captions.set.call(this, e, !1);
    },
    get: function get() {
      var _this$captions2 = this.captions,
          e = _this$captions2.toggled,
          t = _this$captions2.currentTrack;
      return e ? t : -1;
    }
  }, {
    key: "language",
    set: function set(e) {
      captions.setLanguage.call(this, e, !1);
    },
    get: function get() {
      return (captions.getCurrentTrack.call(this) || {}).language;
    }
  }, {
    key: "pip",
    set: function set(e) {
      if (!support.pip) return;
      var t = is.boolean(e) ? e : !this.pip;
      is.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? pip.active : pip.inactive), is.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
    },
    get: function get() {
      return support.pip ? is.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === pip.active : null;
    }
  }], [{
    key: "supported",
    value: function supported(e, t, i) {
      return support.check(e, t, i);
    }
  }, {
    key: "loadSprite",
    value: function loadSprite(e, t) {
      return _loadSprite(e, t);
    }
  }, {
    key: "setup",
    value: function setup(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = null;
      return is.string(e) ? i = Array.from(document.querySelectorAll(e)) : is.nodeList(e) ? i = Array.from(e) : is.array(e) && (i = e.filter(is.element)), is.empty(i) ? null : i.map(function (e) {
        return new Plyr(e, t);
      });
    }
  }]);

  return Plyr;
}();

Plyr.defaults = cloneDeep(defaults);

function saveTime (player) {
  // check option
  player.on('timeupdate', function () {
    return saveProgress(player);
  });
  player.on('ready', function () {
    return resumeProgress(player);
  });
  player.on('loadeddata', function () {
    return resumeProgress(player);
  });
}
function getId(player) {
  var _player$config, _player$config$blockA;

  return player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : (_player$config$blockA = _player$config.blockAttributes) === null || _player$config$blockA === void 0 ? void 0 : _player$config$blockA.id;
}
function saveProgress(player) {
  var _player$config2, _player$config2$muted;

  if (player === null || player === void 0 ? void 0 : (_player$config2 = player.config) === null || _player$config2 === void 0 ? void 0 : (_player$config2$muted = _player$config2.mutedPreview) === null || _player$config2$muted === void 0 ? void 0 : _player$config2$muted.enabled) {
    return;
  }

  updateTime(player);
}
function resumeProgress(player) {
  var _player$config3, _player$config4, _player$config4$muted;

  if (!(player === null || player === void 0 ? void 0 : (_player$config3 = player.config) === null || _player$config3 === void 0 ? void 0 : _player$config3.save_player_position) || (player === null || player === void 0 ? void 0 : (_player$config4 = player.config) === null || _player$config4 === void 0 ? void 0 : (_player$config4$muted = _player$config4.mutedPreview) === null || _player$config4$muted === void 0 ? void 0 : _player$config4$muted.enabled)) {
    return;
  } // get current saved time


  var currentTime = getTime(player); // maybe start loading HLS

  if (player.hls) {
    if (currentTime >= 0) {
      player.hls.startLoad(currentTime);
    }
  } // if we have duration
  // current time shouldn't be more than duration


  if (player.duration) {
    currentTime = Math.min(currentTime, player.duration);
  }

  player.currentTime = currentTime || 0;

  if (player === null || player === void 0 ? void 0 : player.isVimeo) {
    setTimeout(function () {
      player.embed.setCurrentTime(currentTime || 0);
    }, 0);
  }

  return currentTime;
}
function getTime(player) {
  return parseFloat(localStorage.getItem("player-progress-".concat(getId(player))));
}
function updateTime(player) {
  var _player$config5;

  if (player.currentTime === 0) {
    return;
  }

  if (!(player === null || player === void 0 ? void 0 : (_player$config5 = player.config) === null || _player$config5 === void 0 ? void 0 : _player$config5.save_player_position)) {
    return;
  }

  localStorage.setItem("player-progress-".concat(getId(player)), player.currentTime);
}

var _window$prestoPlayer$1, _window$prestoPlayer$$1, _window$prestoPlayer2, _window$prestoPlayer3;

var hideChapters = ((_window$prestoPlayer$1 = window.prestoPlayer) === null || _window$prestoPlayer$1 === void 0 ? void 0 : (_window$prestoPlayer$$1 = _window$prestoPlayer$1.i18n) === null || _window$prestoPlayer$$1 === void 0 ? void 0 : _window$prestoPlayer$$1.hide_chapters) || 'Hide Chapters';
var showChapters = ((_window$prestoPlayer2 = window.prestoPlayer) === null || _window$prestoPlayer2 === void 0 ? void 0 : (_window$prestoPlayer3 = _window$prestoPlayer2.i18n) === null || _window$prestoPlayer3 === void 0 ? void 0 : _window$prestoPlayer3.show_chapters) || 'Show Chapters';
const button = "<button class=\"plyr__controls__item plyr__control\" type=\"button\" data-plyr=\"chapters\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-list\">\n    <line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line>\n    <line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line>\n    <line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>\n</svg>\n<span class=\"label--pressed plyr__tooltip\" role=\"tooltip\">".concat(hideChapters, "</span>\n<span class=\"label--not-pressed plyr__tooltip\" role=\"tooltip\">").concat(showChapters, "</span>\n</button>\n");

var _window$prestoPlayer, _window$prestoPlayer$;

const toc = "\n<div class=\"presto-player-toc__wrapper\">\n    <div class=\"presto-player-toc__cover\" data-player-toc-cover></div>\n    <div class=\"presto-player-toc\">\n        <div class=\"presto-player-toc__title\">".concat(((_window$prestoPlayer = window.prestoPlayer) === null || _window$prestoPlayer === void 0 ? void 0 : (_window$prestoPlayer$ = _window$prestoPlayer.i18n) === null || _window$prestoPlayer$ === void 0 ? void 0 : _window$prestoPlayer$.chapters) || 'Chapters', "</div>\n        <div class=\"presto-player-toc__list\" data-player-toc></div>\n    </div>\n</div>");

function tocItem (_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Untitled" : _ref$name,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 1 : _ref$order,
      _ref$highlight = _ref.highlight,
      highlight = _ref$highlight === void 0 ? false : _ref$highlight;
  return "<div class=\"presto-player-toc__chapter ".concat(highlight ? "is-highlighted" : "", "\" data-chapter-item>\n  \n  <span class=\"presto-player-toc__order\">\n    ").concat(order, "\n  </span>\n  <span class=\"presto-player-toc__name\">\n    ").concat(name, "\n  </div>\n</div>");
}

function marker (_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? 0 : _ref$position,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name;
  return "<div class=\"presto-player-progress__marker plyr__controls__item plyr__control\" style=\"left: ".concat(position, "%\" data-timeline-marker>\n    <span class=\"label--not-pressed plyr__tooltip\" role=\"tooltip\">").concat(name, "</span>\n  </div>");
}

function addChapterControl(e) {
  var _player, _player$config;

  var chapters,
      player,
      $wrapper,
      $playerTimeline,
      $tocContainer,
      $tocListContainer,
      $button,
      $tocCover,
      $timeline,
      currentTime = 0,
      $allChapters,
      $controls,
      $items = {},
      checker = null,
      wait = 0;
  player = e.detail.plyr;
  chapters = formatChapters(((_player = player) === null || _player === void 0 ? void 0 : (_player$config = _player.config) === null || _player$config === void 0 ? void 0 : _player$config.chapters) || []); // handle if preload is set to none

  if (player.provider === "html5") {
    if (!player.duration) {
      player.on("loadedmetadata", addChapterControl);
      return;
    }
  }

  if (!chapters || !Object.keys(chapters).length) return;
  $wrapper = jQuery(player.elements.container).closest(".presto-player__wrapper").find(".plyr");
  $controls = jQuery(player.elements.controls);
  var $appendButton = $controls.find(".plyr__time");
  $appendButton = $appendButton.length ? $appendButton : $controls.find(".plyr__progress__container");
  $button = $wrapper.find('[data-plyr="chapters"]');

  if (!$button.length) {
    $button = jQuery(button).insertAfter($appendButton);
  }

  $tocContainer = $wrapper.find(".presto-player-toc__wrapper");

  if (!$tocContainer.length) {
    $tocContainer = jQuery(toc).appendTo($wrapper);
  }

  $tocCover = $tocContainer.find("[data-player-toc-cover]");
  $tocListContainer = $tocContainer.find("[data-player-toc]");
  $playerTimeline = $wrapper.find(".plyr__progress__container");
  var $timelineWrapper = jQuery('<div class="presto-player__chapters"></div>').appendTo($playerTimeline);
  $timeline = jQuery('<div class="presto-player__chapter-markers"></div>').appendTo($timelineWrapper); // init

  addControl();
  events();
  /**
   * Format chapters data
   */

  function formatChapters() {
    var chapters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!chapters.length) {
      return chapters;
    }

    var formatted = {};
    chapters.forEach(function (chapter) {
      var pieces = chapter.time.split(":");
      var seconds;

      if (pieces.length > 1) {
        seconds = parseInt(pieces[0]) * 60;
      }

      formatted[parseInt(pieces[1]) + parseInt(seconds)] = chapter;
    });
    return formatted;
  }
  /**
   * Adds chapters and timeline markers
   */


  function addControl() {
    addChapters();
    addChapterTimelineMarkers();
  }
  /**
   * Add Chapters
   */


  function addChapters() {
    var order = 0;

    if ($tocListContainer.find(".presto-player-toc__chapter").length) {
      return;
    }

    Object.keys(chapters).forEach(function (timestamp) {
      order++;
      var chapter = chapters[timestamp];
      var $item = jQuery(tocItem({
        name: chapter.title,
        order: order
      })).appendTo($tocListContainer);
      $item.data("presto-player-timestamp", timestamp);
      $items[timestamp] = $item;
      $item.on("click", function () {
        player.currentTime = parseFloat(timestamp);
        player.play();
        toggleToc(false);
      });
    });
    $allChapters = $tocContainer.find("[data-chapter-item]");
  }
  /**
   * When mouse leaves toc container
   */


  function onTocMouseOut() {
    if (player.playing) {
      var timeout = setTimeout(function () {
        toggleToc(false);
        $tocListContainer.off("mouseleave", onTocMouseOut);
      }, 2000);
      $tocListContainer.on("mouseenter", function () {
        clearTimeout(timeout);
      });
    }
  }
  /**
   * Handles all events
   */


  function events() {
    // toggle open/closed
    $button.off("click");
    $button.on("click", toggleToc); // current chapter

    currentChapter();
    player.off("timeupdate");
    player.on("timeupdate", currentChapter); // timeline markers

    checker = window.setInterval(maybeAddMarkers, 100); // close cover

    $tocCover.off("click");
    $tocCover.on("click", function () {
      return toggleToc(false);
    });
    $tocListContainer.off("mouseleave");
    $tocListContainer.on("mouseleave", onTocMouseOut);
  }

  function maybeAddMarkers() {
    wait++;

    if (player.duration) {
      addChapterTimelineMarkers();
      window.clearInterval(checker);
    }

    if (wait > 50) {
      window.clearInterval(checker);
    }
  }
  /**
   * Handles highlighting the current chapter in the TOC
   */


  function currentChapter() {
    currentTime = player.currentTime; // find only ones before current time

    var passed = Object.keys(chapters).filter(function (item) {
      return item <= currentTime;
    }); // convert to int

    var passedNumbers = passed.map(function (item) {
      return parseInt(item, 10);
    }); // find largest passed

    var currentChapterIndex = Math.max.apply(Math, _toConsumableArray(passedNumbers)); // handle classes

    $allChapters && $allChapters.removeClass("is-highlighted");
    jQuery($items[currentChapterIndex || 0]).addClass("is-highlighted");
  }
  /**
   * Adds markers to the timeline on load
   */


  function addChapterTimelineMarkers() {
    if (!player.duration) {
      return;
    }

    Object.keys(chapters).forEach(function (timestamp) {
      // need a timestamp
      if (!parseInt(timestamp)) {
        return;
      } // make sure it's not already added


      if ($timeline.find("[data-timestamp=".concat(timestamp, "]")).length) {
        return;
      }

      var chapter = chapters[timestamp];
      var position = parseInt(timestamp) / player.duration * 100;
      var $marker = jQuery(marker({
        position: position,
        name: "".concat(chapter.title)
      })).prependTo($timeline);
      $marker.attr("data-timestamp", timestamp);
      $marker.data("timestamp", timestamp);
      $marker.on("click", function (e) {
        player.currentTime = parseInt(timestamp);
        player.play();
      });
    });
    $tocContainer.find("[data-timeline-marker]");
  }
  /**
   * Toggles the TOC
   */


  function toggleToc(show) {
    if (_typeof(show) !== undefined) {
      $tocContainer.toggleClass("is-showing", show);
    } else {
      $tocContainer.toggleClass("is-showing");
    }
  }
}

var player$1;
function setControls (pl) {
  player$1 = pl;
  jQuery(player$1.elements.container).closest(".presto-player__wrapper"); // chapter control

  player$1.on("ready", addChapterControl); // control ui

  player$1.on("controlshidden", addParentClass);
  player$1.on("controlsshown", removeParentClass);
}
function addParentClass(e) {
  var _e$detail, _e$detail$plyr, _e$detail$plyr$elemen;

  jQuery(e === null || e === void 0 ? void 0 : (_e$detail = e.detail) === null || _e$detail === void 0 ? void 0 : (_e$detail$plyr = _e$detail.plyr) === null || _e$detail$plyr === void 0 ? void 0 : (_e$detail$plyr$elemen = _e$detail$plyr.elements) === null || _e$detail$plyr$elemen === void 0 ? void 0 : _e$detail$plyr$elemen.container).closest(".presto-player__wrapper").addClass("presto-player--hide-controls");
}
function removeParentClass(e) {
  var _e$detail2, _e$detail2$plyr, _e$detail2$plyr$eleme;

  jQuery(e === null || e === void 0 ? void 0 : (_e$detail2 = e.detail) === null || _e$detail2 === void 0 ? void 0 : (_e$detail2$plyr = _e$detail2.plyr) === null || _e$detail2$plyr === void 0 ? void 0 : (_e$detail2$plyr$eleme = _e$detail2$plyr.elements) === null || _e$detail2$plyr$eleme === void 0 ? void 0 : _e$detail2$plyr$eleme.container).closest(".presto-player__wrapper").removeClass("presto-player--hide-controls");
}

function gaTracking () {
  var _window;

  if (!((_window = window) === null || _window === void 0 ? void 0 : _window.gtag)) {
    return;
  }

  wp.hooks.addAction("presto.playerPlay", "presto-player", videoStart);
  wp.hooks.addAction("presto.playerPause", "presto-player", videoPause);
  wp.hooks.addAction("presto.playerReady", "presto-player", videoLoad);
  wp.hooks.addAction("presto.playerTimeUpdate", "presto-player", videoTime);
}
function videoData$1(player) {
  var _player$config, _player$config2;

  var data = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
    video_current_time: parseInt((player === null || player === void 0 ? void 0 : player.currentTime) || 0),
    video_provider: (player === null || player === void 0 ? void 0 : player.provider) || "html5"
  }, (player === null || player === void 0 ? void 0 : player.duration) ? {
    video_duration: parseInt(player === null || player === void 0 ? void 0 : player.duration)
  } : {}), (player === null || player === void 0 ? void 0 : player.source) ? {
    video_url: player === null || player === void 0 ? void 0 : player.source
  } : {}), (player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : _player$config.title) ? {
    video_title: player === null || player === void 0 ? void 0 : (_player$config2 = player.config) === null || _player$config2 === void 0 ? void 0 : _player$config2.title
  } : {});

  return data;
} // send video start

function videoStart(player) {
  var _window2;

  (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.gtag("event", "Play", videoData$1(player));
}
function videoPause(player) {
  var _window3;

  (_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.gtag("event", "Pause", videoData$1(player));
}
function videoLoad(player) {
  var _window4;

  (_window4 = window) === null || _window4 === void 0 ? void 0 : _window4.gtag("event", "Player Load", videoData$1(player));
}
var watched = {
  25: false,
  50: false,
  75: false,
  100: false
};
function videoTime(player) {
  if (!player.currentTime) {
    return;
  }

  var percent = parseFloat(player.currentTime) / parseFloat(player.duration) * 100;
  Object.keys(watched).forEach(function (marker) {
    if (!watched[marker] && percent >= parseInt(marker)) {
      var _window5;

      watched[marker] = true;
      (_window5 = window) === null || _window5 === void 0 ? void 0 : _window5.gtag("event", "".concat(marker, " Percent Played"), videoData$1(player));
    }
  });
}

var player;
var namespace = 'presto-player.analytics';
var nonce = '';
function wpTracking (pl) {
  player = pl;

  if (!player.config.analytics) {
    return;
  }

  if (!wp.hooks.hasAction('presto.nonceRefreshed', namespace)) {
    wp.hooks.addAction('presto.nonceRefreshed', namespace, function (newNonce) {
      nonce = newNonce;
    });
  }

  if (!wp.hooks.hasAction('presto.playerPlay', namespace)) {
    wp.hooks.addAction('presto.playerPlay', namespace, sendVideoData);
  }

  if (!wp.hooks.hasAction('presto.playerEnded', namespace)) {
    wp.hooks.addAction('presto.playerEnded', namespace, sendVideoData);
  }

  if (!wp.hooks.hasAction('presto.playerHidden', namespace)) {
    wp.hooks.addAction('presto.playerHidden', namespace, sendVideoData);
  }

  if (!wp.hooks.hasAction('presto.playerPause', namespace)) {
    wp.hooks.addAction('presto.playerPause', namespace, sendVideoData);
  }

  if (!wp.hooks.hasAction('presto.playerSeeked', namespace)) {
    wp.hooks.addAction('presto.playerSeeked', namespace, sendVideoData);
  }
}
function videoData(player) {
  var _player$config, _player$config2;

  var data = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
    video_current_time: parseInt((player === null || player === void 0 ? void 0 : player.currentTime) || 0),
    video_provider: (player === null || player === void 0 ? void 0 : player.provider) || 'html5'
  }, (player === null || player === void 0 ? void 0 : player.duration) ? {
    video_duration: parseInt(player === null || player === void 0 ? void 0 : player.duration)
  } : {}), (player === null || player === void 0 ? void 0 : player.source) ? {
    video_url: player === null || player === void 0 ? void 0 : player.source
  } : {}), (player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : _player$config.title) ? {
    video_title: player === null || player === void 0 ? void 0 : (_player$config2 = player.config) === null || _player$config2 === void 0 ? void 0 : _player$config2.title
  } : {});

  return data;
} // send video data

function sendVideoData(player) {
  sendData(videoData(player));
}
function sendData(data) {
  var _player, _player$config3, _prestoPlayer, _player2, _player2$config;

  if (!nonce) {
    return;
  }

  var formData = new FormData();
  formData.append('action', 'presto_player_progress');
  formData.append('duration', data === null || data === void 0 ? void 0 : data.video_current_time);
  formData.append('video_id', (_player = player) === null || _player === void 0 ? void 0 : (_player$config3 = _player.config) === null || _player$config3 === void 0 ? void 0 : _player$config3.id);
  formData.append('nonce', nonce);

  if (!((_prestoPlayer = prestoPlayer) === null || _prestoPlayer === void 0 ? void 0 : _prestoPlayer.debug_navigator)) {
    navigator.sendBeacon(window.prestoPlayer.ajaxurl, formData);
    return;
  }

  jQuery.ajax({
    type: 'POST',
    url: window.prestoPlayer.ajaxurl,
    dataType: 'json',
    cache: false,
    data: {
      action: 'presto_player_progress',
      duration: data === null || data === void 0 ? void 0 : data.video_current_time,
      video_id: (_player2 = player) === null || _player2 === void 0 ? void 0 : (_player2$config = _player2.config) === null || _player2$config === void 0 ? void 0 : _player2$config.id,
      nonce: nonce
    }
  });
}

function analytics (player) {
  var _prestoPlayer;

  if (!((_prestoPlayer = prestoPlayer) === null || _prestoPlayer === void 0 ? void 0 : _prestoPlayer.isPremium)) {
    return;
  }

  gaTracking();
  wpTracking(player);
}

const customLogo = (function (player) {
  player.on('ready', function () {
    var _player$config, _player$config2, _player$config3, _player$elements;

    if (!(player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : _player$config.logo) || (player === null || player === void 0 ? void 0 : (_player$config2 = player.config) === null || _player$config2 === void 0 ? void 0 : _player$config2.logo_added)) {
      return;
    }

    jQuery("<img src=\"".concat(player === null || player === void 0 ? void 0 : (_player$config3 = player.config) === null || _player$config3 === void 0 ? void 0 : _player$config3.logo, "\" class=\"presto-player__logo is-bottom-right\" part=\"logo\">")).insertBefore(player === null || player === void 0 ? void 0 : (_player$elements = player.elements) === null || _player$elements === void 0 ? void 0 : _player$elements.controls);
    player.config.logo_added = true;
  });
});

function setPoster (player) {
  var _player$config;

  if (player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : _player$config.poster) {
    player.poster = player.config.poster;
  }
}

/**
 * Maps player actions to wordpress actions
 */
const actions = (function (player) {
  player.on('ready', function () {
    doAction('Ready', player);
  });
  player.on('play', function () {
    doAction('Play', player);
  });
  player.on('playing', function () {
    doAction('Playing', player);
  });
  player.on('pause', function () {
    doAction('Pause', player);
  });
  player.on('ended', function () {
    doAction('Ended', player);
  });
  player.on('seeked', function () {
    doAction('Seeked', player);
  });
  player.on('timeupdate', function () {
    doAction('TimeUpdate', player);
  });
  player.on('enterfullscreen', function () {
    doAction('EnterFullScreen', player);
  });
  player.on('exitfullscreen', function () {
    doAction('ExitFullScreen', player);
  });
  document.addEventListener('visibilitychange', function () {
    doAction(document.visibilityState === 'hidden' ? 'Hidden' : 'Visible', player);
  }); // youtube events

  player.on('statechange', function (e) {
    var _e$detail;

    switch (e === null || e === void 0 ? void 0 : (_e$detail = e.detail) === null || _e$detail === void 0 ? void 0 : _e$detail.code) {
      case 0:
        doAction('Ended', player);
        break;

      case 1:
        doAction('Play', player);
        break;

      case 2:
        doAction('Pause', player);
        break;
    }
  });
});
function doAction(action, player) {
  window.wp.hooks.doAction("presto.player".concat(action), player);
}

var fetchedNonce = false;
var fetchingNonce = false;
var visit_time = Date.now();
/**
 * Sends an updated ajax progress event for plugins to hook into
 */

const ajaxProgress = (function () {
  var nonce; // get nonce when the player starts playing

  wp.hooks.addAction('presto.playerPlaying', 'presto-player', function () {
    wp.hooks.doAction('presto.playerGetNonce');
  }); // get nonce refresh

  wp.hooks.addAction('presto.playerGetNonce', 'presto-player', function () {
    // bail if we are already getting it or got it
    if (fetchedNonce || fetchingNonce) {
      return;
    } // we're fetching


    fetchingNonce = true; // fetch it

    fetch("".concat(window.prestoPlayer.ajaxurl, "?action=presto_refresh_progress_nonce")).then(status).then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      nonce = data;
      wp.hooks.doAction('presto.nonceRefreshed', nonce); // we got it

      fetchedNonce = true;
    }).catch(function (error) {
      console.log('Request failed', error);
    }).finally(function () {
      // we're done fetching
      fetchingNonce = false;
    });
  }); // on time update, maybe send time update

  wp.hooks.addAction('presto.playerTimeUpdate', 'presto-player', sendTimeUpdate);
  wp.hooks.addAction('presto.playerEnded', 'presto-player', function (plyr) {
    sendTimeUpdate(plyr, 100);
  });
  var watched = {
    0: false,
    10: false,
    20: false,
    30: false,
    40: false,
    50: false,
    60: false,
    70: false,
    80: false,
    90: false,
    100: false
  };

  function sendTimeUpdate(player) {
    var _player$config;

    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // need to send nonce
    if (!nonce) {
      return;
    } // bail if progress is not turned on


    if (!(player === null || player === void 0 ? void 0 : (_player$config = player.config) === null || _player$config === void 0 ? void 0 : _player$config.ajaxProgress)) {
      return;
    }

    if (!percent) {
      percent = parseFloat(player.currentTime) / parseFloat(player.duration) * 100;
    }

    player.watched = player.watched || {};
    Object.keys(watched).forEach(function (marker) {
      marker = parseInt(marker);

      if (!player.watched[marker] && percent >= parseInt(marker)) {
        var _player$config2, _prestoPlayer, _prestoPlayer2;

        player.watched[marker] = true;
        var formData = new FormData();
        formData.append('action', 'presto_player_progress_percent');
        formData.append('id', player === null || player === void 0 ? void 0 : (_player$config2 = player.config) === null || _player$config2 === void 0 ? void 0 : _player$config2.id);
        formData.append('percent', marker);
        formData.append('visit_time', visit_time);
        formData.append('nonce', nonce);

        if ((_prestoPlayer = prestoPlayer) === null || _prestoPlayer === void 0 ? void 0 : _prestoPlayer.debug) {
          console.log("".concat(marker, " percent watched."));
        }

        if (!((_prestoPlayer2 = prestoPlayer) === null || _prestoPlayer2 === void 0 ? void 0 : _prestoPlayer2.debug_navigator)) {
          var _prestoPlayer3;

          var result = navigator.sendBeacon(window.prestoPlayer.ajaxurl, formData);

          if ((_prestoPlayer3 = prestoPlayer) === null || _prestoPlayer3 === void 0 ? void 0 : _prestoPlayer3.debug) {
            if (result) {
              var _player$config3;

              console.log('Successfully queued progress:', {
                id: player === null || player === void 0 ? void 0 : (_player$config3 = player.config) === null || _player$config3 === void 0 ? void 0 : _player$config3.id,
                percent: marker,
                visit_time: visit_time,
                nonce: nonce
              });
            } else {
              var _player$config4;

              console.log('Failed to queue progress', {
                id: player === null || player === void 0 ? void 0 : (_player$config4 = player.config) === null || _player$config4 === void 0 ? void 0 : _player$config4.id,
                percent: marker,
                visit_time: visit_time,
                nonce: nonce
              });
            }
          }
        } else {
          var _player$config5;

          jQuery.ajax({
            type: 'POST',
            url: window.prestoPlayer.ajaxurl,
            dataType: 'json',
            cache: false,
            data: {
              action: 'presto_player_progress_percent',
              id: player === null || player === void 0 ? void 0 : (_player$config5 = player.config) === null || _player$config5 === void 0 ? void 0 : _player$config5.id,
              visit_time: visit_time,
              percent: marker,
              nonce: nonce
            }
          });
        }
      }
    });
  }
});

const fullscreen = (function (player) {
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);

  if (!iOS) {
    return;
  }

  var handleFullScreen = function handleFullScreen(player, open) {
    var _player$elements;

    var elem = player === null || player === void 0 ? void 0 : (_player$elements = player.elements) === null || _player$elements === void 0 ? void 0 : _player$elements.container.getRootNode().host;

    while ((elem != null ? elem.nodeType : void 0) === Node.ELEMENT_NODE && elem.tagName !== 'BODY' && elem.tagName !== 'HTML') {
      if (open) {
        elem.classList.add('presto-player-fullscreen-open');
      } else {
        elem.classList.remove('presto-player-fullscreen-open');
      } // set parent node


      elem = elem.parentNode;
    }
  };

  wp.hooks.addAction('presto.playerEnterFullScreen', 'presto-player', function () {
    var _player$fullscreen;

    if (!(player === null || player === void 0 ? void 0 : (_player$fullscreen = player.fullscreen) === null || _player$fullscreen === void 0 ? void 0 : _player$fullscreen.active)) {
      return;
    }

    handleFullScreen(player, true);
  });
  wp.hooks.addAction('presto.playerExitFullScreen', 'presto-player', function () {
    var _player$fullscreen2;

    if (player === null || player === void 0 ? void 0 : (_player$fullscreen2 = player.fullscreen) === null || _player$fullscreen2 === void 0 ? void 0 : _player$fullscreen2.active) {
      return;
    }

    handleFullScreen(player, false);
  });
});

const menuSizing = /*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(player) {
    var _player$elements, _player$elements2;

    var module, ro;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('ResizeObserver' in window === false)) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return import('./resize-observer-9b92cbbf.js');

          case 3:
            module = _context.sent;
            window.ResizeObserver = module.ResizeObserver;

          case 5:
            ro = new ResizeObserver(function (entries) {
              var _iterator = _createForOfIteratorHelper(entries),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var entry = _step.value;
                  var cr = entry.contentRect;
                  jQuery(entry.target).find('.plyr__menu__container').css({
                    maxHeight: "".concat(cr.height - 48, "px")
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });

            if (player === null || player === void 0 ? void 0 : (_player$elements = player.elements) === null || _player$elements === void 0 ? void 0 : _player$elements.container) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return");

          case 8:
            ro.observe(player === null || player === void 0 ? void 0 : (_player$elements2 = player.elements) === null || _player$elements2 === void 0 ? void 0 : _player$elements2.container); // this resets style on play for some reason

            player.on('playing', function () {
              var _player$elements3, _player$elements4;

              var cr = player === null || player === void 0 ? void 0 : (_player$elements3 = player.elements) === null || _player$elements3 === void 0 ? void 0 : _player$elements3.container.getBoundingClientRect();
              jQuery(player === null || player === void 0 ? void 0 : (_player$elements4 = player.elements) === null || _player$elements4 === void 0 ? void 0 : _player$elements4.container).find('.plyr__menu__container').css({
                maxHeight: "".concat(cr.height - 48, "px")
              });
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Get things going
 *
 * @param {HTMLElement} element
 */

function PrestoPlayer$1 (element) {
  var _window, _window$prestoPlayer;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var setup = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, options), {
    iconUrl: "".concat((_window = window) === null || _window === void 0 ? void 0 : (_window$prestoPlayer = _window.prestoPlayer) === null || _window$prestoPlayer === void 0 ? void 0 : _window$prestoPlayer.plugin_url, "img/sprite.svg")
  }), {
    chapters: (options === null || options === void 0 ? void 0 : options.chapters) || [],
    controls: (options === null || options === void 0 ? void 0 : options.controls) || [],
    settings: Object.keys((options === null || options === void 0 ? void 0 : options.settings) || {}).length ? options.settings : {}
  });

  var player = new Plyr(element, setup); // conditionally load learndash

  if (typeof learndash_video_data !== 'undefined') {
    import('./learndash-d52c5641.js').then(function (module) {
      var learnDash = module.default;
      learnDash(player);
    });
  }

  if (typeof _tutorobject !== 'undefined') {
    import('./tutor-21b508fe.js').then(function (module) {
      var tutor = module.default;
      tutor(player);
    });
  }

  actions(player);
  ajaxProgress();
  fullscreen(player);
  menuSizing(player);
  customLogo(player);
  setPoster(player);
  setControls(player); // if we're in the admin, don't do the rest of these.

  if (prestoPlayer.isAdmin) {
    return player;
  } // non-admin stuff


  saveTime(player);
  analytics(player);
  return player;
}

// get file extension
function getFileExtension(url) {
  return url.split(/[#?]/)[0].split('.').pop().trim();
}
// is the source hls?
function isHLS(url) {
  return getFileExtension(url) === 'm3u8';
}
function getParents(elem) {
  var parents = [];
  while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
    elem = elem.parentNode;
    parents.push(elem);
  }
  return parents;
}

const createPlayer = (function (_ref) {
  var config = _ref.config,
      selector = _ref.selector,
      src = _ref.src,
      preload = _ref.preload;

  // dynamically load hls module if we have an hls video
  if (src && isHLS(src)) {
    return import('./hls-a4a35dff.js').then(function (module) {
      var hls = module.default;
      return hls({
        config: config,
        selector: selector,
        src: src,
        preload: preload
      });
    });
  }

  return new Promise(function (resolve) {
    var player = new PrestoPlayer$1(selector, _objectSpread2$1({}, config));
    return resolve(player);
  });
});

const mutedAutoplay = ({ player, mutedPreview, captions, progress, savePosition, onPlay, }) => {
  // skip for iOS
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  if (iOS) {
    console.log('ios device, do not do muted autoplay');
    return;
  }
  player.config.mutedPreview.enabled = mutedPreview;
  player.muted = mutedPreview;
  player.loop = mutedPreview;
  player.config.ajaxProgress = mutedPreview ? false : progress;
  player.config.save_player_position = mutedPreview ? false : savePosition;
  // caption change, catch error due to error in support check of plyr
  try {
    player.toggleCaptions(mutedPreview ? !!captions : false);
  }
  catch (e) { }
  setTimeout(() => {
    const resume = resumeProgress(player);
    if (!resume) {
      player.restart();
    }
    setTimeout(() => {
      onPlay();
    }, 0);
  }, 0);
  return player;
};

const prestoPlayerCss = "@charset \"UTF-8\";@keyframes plyr-progress{to{background-position:var(--plyr-progress-loading-size, 25px) 0}}@keyframes plyr-popup{0%{opacity:0.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-fade-in{from{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:var(--plyr-font-family, inherit);font-variant-numeric:tabular-nums;font-weight:var(--plyr-font-weight-regular, 400);line-height:var(--plyr-line-height, 1.7);max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow 0.3s ease;z-index:0}.plyr video,.plyr audio,.plyr iframe{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui *::after,.plyr--full-ui *::before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:var(--plyr-badge-background, #4a5464);border-radius:var(--plyr-badge-border-radius, 2px);color:var(--plyr-badge-text-color, #fff);font-size:var(--plyr-font-size-badge, 9px);line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{animation:plyr-fade-in 0.3s ease;bottom:0;display:none;font-size:var(--plyr-font-size-small, 13px);left:0;padding:var(--plyr-control-spacing, 10px);position:absolute;text-align:center;transition:transform 0.4s ease-in-out;width:100%}.plyr__captions span:empty{display:none}@media (min-width: 480px){.plyr__captions{font-size:var(--plyr-font-size-base, 15px);padding:calc(var(--plyr-control-spacing, 10px) * 2)}}@media (min-width: 768px){.plyr__captions{font-size:var(--plyr-font-size-large, 18px)}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 10px) * -4))}.plyr__caption{background:var(--plyr-captions-background, rgba(0, 0, 0, 0.8));border-radius:2px;box-decoration-break:clone;color:var(--plyr-captions-text-color, #fff);line-height:185%;padding:0.2em 0.5em;white-space:pre-wrap}.plyr__caption div{display:inline}.plyr__control{background:transparent;border:0;border-radius:var(--plyr-control-radius, 3px);color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:calc(var(--plyr-control-spacing, 10px) * 0.7);position:relative;transition:all 0.3s ease}.plyr__control svg{display:block;fill:currentColor;height:var(--plyr-control-icon-size, 18px);pointer-events:none;width:var(--plyr-control-icon-size, 18px)}.plyr__control:focus{outline:0}.plyr__control.plyr__tab-focus{outline-color:var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}a.plyr__control{text-decoration:none}a.plyr__control::after,a.plyr__control::before{display:none}.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed,.plyr__control.plyr__control--pressed .label--not-pressed{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:calc(var(--plyr-control-spacing, 10px) / 4)}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:calc(var(--plyr-control-spacing, 10px) / 4)}.plyr__controls .plyr__controls__item.plyr__time{padding:0 calc(var(--plyr-control-spacing, 10px) / 2)}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time{padding-left:0}.plyr__controls:empty{display:none}.plyr [data-plyr=captions],.plyr [data-plyr=pip],.plyr [data-plyr=airplay],.plyr [data-plyr=fullscreen]{display:none}.plyr--captions-enabled [data-plyr=captions],.plyr--pip-supported [data-plyr=pip],.plyr--airplay-supported [data-plyr=airplay],.plyr--fullscreen-enabled [data-plyr=fullscreen]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform 0.3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{animation:plyr-popup 0.2s ease;background:var(--plyr-menu-background, rgba(255, 255, 255, 0.9));border-radius:4px;bottom:100%;box-shadow:var(--plyr-menu-shadow, 0 1px 2px rgba(0, 0, 0, 0.15));color:var(--plyr-menu-color, #4a5464);font-size:var(--plyr-font-size-base, 15px);margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)}.plyr__menu__container::after{border:var(--plyr-menu-arrow-size, 4px) solid transparent;border-top-color:var(--plyr-menu-background, rgba(255, 255, 255, 0.9));content:\"\";height:0;position:absolute;right:calc(((var(--plyr-control-icon-size, 18px) / 2) + calc(var(--plyr-control-spacing, 10px) * 0.7)) - (var(--plyr-menu-arrow-size, 4px) / 2));top:100%;width:0}.plyr__menu__container [role=menu]{padding:calc(var(--plyr-control-spacing, 10px) * 0.7)}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:var(--plyr-menu-color, #4a5464);display:flex;font-size:var(--plyr-font-size-menu, var(--plyr-font-size-small, 13px));padding-bottom:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) / 1.5);padding-left:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) * 1.5);padding-right:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) * 1.5);padding-top:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) / 1.5);user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control::after{border:var(--plyr-menu-item-arrow-size, 4px) solid transparent;content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) * 4)}.plyr__menu__container .plyr__control--forward::after{border-left-color:var(--plyr-menu-arrow-color, #728197);right:calc((calc(var(--plyr-control-spacing, 10px) * 0.7) * 1.5) - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--forward.plyr__tab-focus::after,.plyr__menu__container .plyr__control--forward:hover::after{border-left-color:currentColor}.plyr__menu__container .plyr__control--back{font-weight:var(--plyr-font-weight-regular, 400);margin:calc(var(--plyr-control-spacing, 10px) * 0.7);margin-bottom:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) / 2);padding-left:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) * 4);position:relative;width:calc(100% - (calc(var(--plyr-control-spacing, 10px) * 0.7) * 2))}.plyr__menu__container .plyr__control--back::after{border-right-color:var(--plyr-menu-arrow-color, #728197);left:calc((calc(var(--plyr-control-spacing, 10px) * 0.7) * 1.5) - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--back::before{background:var(--plyr-menu-back-border-color, #dcdfe5);box-shadow:0 1px 0 var(--plyr-menu-back-border-shadow-color, #fff);content:\"\";height:1px;left:0;margin-top:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) / 2);overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back.plyr__tab-focus::after,.plyr__menu__container .plyr__control--back:hover::after{border-right-color:currentColor}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:calc(var(--plyr-control-spacing, 10px) * 0.7)}.plyr__menu__container .plyr__control[role=menuitemradio]::before,.plyr__menu__container .plyr__control[role=menuitemradio]::after{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]::before{background:rgba(0, 0, 0, 0.1);content:\"\";display:block;flex-shrink:0;height:16px;margin-right:var(--plyr-control-spacing, 10px);transition:all 0.3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]::after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform 0.3s ease, opacity 0.3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before{background:var(--plyr-control-toggle-checked-background, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)))}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus::before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover::before{background:rgba(35, 40, 47, 0.1)}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:calc((calc(var(--plyr-control-spacing, 10px) * 0.7) - 2) * -1);overflow:hidden;padding-left:calc(calc(var(--plyr-control-spacing, 10px) * 0.7) * 3.5);pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;background:transparent;border:0;border-radius:calc(var(--plyr-range-thumb-height, 13px) * 2);color:var(--plyr-range-fill-background, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));display:block;height:calc((var(--plyr-range-thumb-active-shadow-width, 3px) * 2) + var(--plyr-range-thumb-height, 13px));margin:0;min-width:0;padding:0;transition:box-shadow 0.3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:transparent;border:0;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px);transition:box-shadow 0.3s ease;user-select:none;background-image:linear-gradient(to right, currentColor var(--value, 0%), transparent var(--value, 0%))}.plyr--full-ui input[type=range]::-webkit-slider-thumb{background:var(--plyr-range-thumb-background, #fff);border:0;border-radius:100%;box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2));height:var(--plyr-range-thumb-height, 13px);position:relative;transition:all 0.2s ease;width:var(--plyr-range-thumb-height, 13px);-webkit-appearance:none;margin-top:calc(((var(--plyr-range-thumb-height, 13px) - var(--plyr-range-track-height, 5px)) / 2) * -1)}.plyr--full-ui input[type=range]::-moz-range-track{background:transparent;border:0;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px);transition:box-shadow 0.3s ease;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:var(--plyr-range-thumb-background, #fff);border:0;border-radius:100%;box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2));height:var(--plyr-range-thumb-height, 13px);position:relative;transition:all 0.2s ease;width:var(--plyr-range-thumb-height, 13px)}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px)}.plyr--full-ui input[type=range]::-ms-track{background:transparent;border:0;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px);transition:box-shadow 0.3s ease;user-select:none;color:transparent}.plyr--full-ui input[type=range]::-ms-fill-upper{background:transparent;border:0;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px);transition:box-shadow 0.3s ease;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:transparent;border:0;border-radius:calc(var(--plyr-range-track-height, 5px) / 2);height:var(--plyr-range-track-height, 5px);transition:box-shadow 0.3s ease;user-select:none;background:currentColor}.plyr--full-ui input[type=range]::-ms-thumb{background:var(--plyr-range-thumb-background, #fff);border:0;border-radius:100%;box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2));height:var(--plyr-range-thumb-height, 13px);position:relative;transition:all 0.2s ease;width:var(--plyr-range-thumb-height, 13px);margin-top:0}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{outline-color:var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{outline-color:var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{outline-color:var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr__poster{background-color:var(--plyr-video-background, var(--plyr-video-background, black));background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity 0.2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr__time{font-size:var(--plyr-font-size-time, var(--plyr-font-size-small, 13px))}.plyr__time+.plyr__time::before{content:\"⁄\";margin-right:var(--plyr-control-spacing, 10px)}@media (max-width: 767px){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:var(--plyr-tooltip-background, rgba(255, 255, 255, 0.9));border-radius:var(--plyr-tooltip-radius, 3px);bottom:100%;box-shadow:var(--plyr-tooltip-shadow, 0 1px 2px rgba(0, 0, 0, 0.15));color:var(--plyr-tooltip-color, #4a5464);font-size:var(--plyr-font-size-small, 13px);font-weight:var(--plyr-font-weight-regular, 400);left:50%;line-height:1.3;margin-bottom:calc(calc(var(--plyr-control-spacing, 10px) / 2) * 2);opacity:0;padding:calc(var(--plyr-control-spacing, 10px) / 2) calc(calc(var(--plyr-control-spacing, 10px) / 2) * 1.5);pointer-events:none;position:absolute;transform:translate(-50%, 10px) scale(0.8);transform-origin:50% 100%;transition:transform 0.2s 0.1s ease, opacity 0.2s 0.1s ease;white-space:nowrap;z-index:2}.plyr__tooltip::before{border-left:var(--plyr-tooltip-arrow-size, 4px) solid transparent;border-right:var(--plyr-tooltip-arrow-size, 4px) solid transparent;border-top:var(--plyr-tooltip-arrow-size, 4px) solid var(--plyr-tooltip-background, rgba(255, 255, 255, 0.9));bottom:calc(var(--plyr-tooltip-arrow-size, 4px) * -1);content:\"\";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control:hover .plyr__tooltip,.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%, 0) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;transform:translate(0, 10px) scale(0.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip::before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip::before{left:calc((var(--plyr-control-icon-size, 18px) / 2) + calc(var(--plyr-control-spacing, 10px) * 0.7))}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translate(0, 10px) scale(0.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip::before{left:auto;right:calc((var(--plyr-control-icon-size, 18px) / 2) + calc(var(--plyr-control-spacing, 10px) * 0.7));transform:translateX(50%)}.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible{transform:translate(0, 0) scale(1)}.plyr__progress{left:calc(var(--plyr-range-thumb-height, 13px) * 0.5);margin-right:var(--plyr-range-thumb-height, 13px);position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:calc(var(--plyr-range-thumb-height, 13px) * -0.5);margin-right:calc(var(--plyr-range-thumb-height, 13px) * -0.5);width:calc(100% + var(--plyr-range-thumb-height, 13px))}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{font-size:var(--plyr-font-size-time, var(--plyr-font-size-small, 13px));left:0}.plyr__progress__buffer{-webkit-appearance:none;background:transparent;border:0;border-radius:100px;height:var(--plyr-range-track-height, 5px);left:0;margin-top:calc((var(--plyr-range-track-height, 5px) / 2) * -1);padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:transparent}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:var(--plyr-range-track-height, 5px);transition:width 0.2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:var(--plyr-range-track-height, 5px);transition:width 0.2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;transition:width 0.2s ease}.plyr--loading .plyr__progress__buffer{animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg, var(--plyr-progress-loading-background, rgba(35, 40, 47, 0.6)) 25%, transparent 25%, transparent 50%, var(--plyr-progress-loading-background, rgba(35, 40, 47, 0.6)) 50%, var(--plyr-progress-loading-background, rgba(35, 40, 47, 0.6)) 75%, transparent 75%, transparent);background-repeat:repeat-x;background-size:var(--plyr-progress-loading-size, 25px) var(--plyr-progress-loading-size, 25px);color:transparent}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:var(--plyr-video-progress-buffered-background, rgba(255, 255, 255, 0.25))}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, 0.6))}.plyr__volume{align-items:center;display:flex;max-width:110px;min-width:80px;position:relative;width:20%}.plyr__volume input[type=range]{margin-left:calc(var(--plyr-control-spacing, 10px) / 2);margin-right:calc(var(--plyr-control-spacing, 10px) / 2);position:relative;z-index:2}.plyr--is-ios .plyr__volume{min-width:0;width:auto}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:var(--plyr-audio-controls-background, #fff);border-radius:inherit;color:var(--plyr-audio-control-color, #4a5464);padding:var(--plyr-control-spacing, 10px)}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:var(--plyr-audio-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));color:var(--plyr-audio-control-color-hover, #fff)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, 0.6)))}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, 0.6)))}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, 0.6)))}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, 0.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, 0.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, 0.1))}.plyr--audio .plyr__progress__buffer{color:var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, 0.6))}.plyr--video{background:var(--plyr-video-background, var(--plyr-video-background, black));overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:var(--plyr-video-background, var(--plyr-video-background, black));height:100%;margin:auto;overflow:hidden;position:relative;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;left:0;position:absolute;top:0}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:var(--plyr-video-controls-background, linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:var(--plyr-video-control-color, #fff);left:0;padding:calc(var(--plyr-control-spacing, 10px) / 2);padding-top:calc(var(--plyr-control-spacing, 10px) * 2);position:absolute;right:0;transition:opacity 0.4s ease-in-out, transform 0.4s ease-in-out;z-index:3}@media (min-width: 480px){.plyr--video .plyr__controls{padding:var(--plyr-control-spacing, 10px);padding-top:calc(var(--plyr-control-spacing, 10px) * 3.5)}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));color:var(--plyr-video-control-color-hover, #fff)}.plyr__control--overlaid{background:var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));border:0;border-radius:100%;color:var(--plyr-video-control-color, #fff);display:none;left:50%;opacity:0.9;padding:calc(var(--plyr-control-spacing, 10px) * 1.5);position:absolute;top:50%;transform:translate(-50%, -50%);transition:0.3s;z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:hover,.plyr__control--overlaid:focus{opacity:1}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, rgba(255, 255, 255, 0.25)))}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, rgba(255, 255, 255, 0.25)))}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, rgba(255, 255, 255, 0.25)))}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(255, 255, 255, 0.5))}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(255, 255, 255, 0.5))}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, 0.15), 0 0 0 1px rgba(35, 40, 47, 0.2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(255, 255, 255, 0.5))}.plyr--video .plyr__progress__buffer{color:var(--plyr-video-progress-buffered-background, rgba(255, 255, 255, 0.25))}.plyr:fullscreen{background:#000;border-radius:0 !important;height:100%;margin:0;width:100%}.plyr:fullscreen video{height:100%}.plyr:fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width: 1024px){.plyr:fullscreen .plyr__captions{font-size:var(--plyr-font-size-xlarge, 21px)}}.plyr:-webkit-full-screen{background:#000;border-radius:0 !important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}@media (min-width: 1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:var(--plyr-font-size-xlarge, 21px)}}.plyr:-moz-full-screen{background:#000;border-radius:0 !important;height:100%;margin:0;width:100%}.plyr:-moz-full-screen video{height:100%}.plyr:-moz-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-moz-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-moz-full-screen.plyr--hide-controls{cursor:none}@media (min-width: 1024px){.plyr:-moz-full-screen .plyr__captions{font-size:var(--plyr-font-size-xlarge, 21px)}}.plyr:-ms-fullscreen{background:#000;border-radius:0 !important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}@media (min-width: 1024px){.plyr:-ms-fullscreen .plyr__captions{font-size:var(--plyr-font-size-xlarge, 21px)}}.plyr--fullscreen-fallback{background:#000;border-radius:0 !important;height:100%;margin:0;width:100%;bottom:0;display:block;left:0;position:fixed;right:0;top:0;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__video-wrapper{height:100%;position:static}.plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width: 1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:var(--plyr-font-size-xlarge, 21px)}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads::after{background:#23282f;border-radius:2px;bottom:var(--plyr-control-spacing, 10px);color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:var(--plyr-control-spacing, 10px);z-index:3}.plyr__ads::after:empty{display:none}.plyr__cues{background:currentColor;display:block;height:var(--plyr-range-track-height, 5px);left:0;margin:-var(--plyr-range-track-height, 5px)/2 0 0;opacity:0.8;position:absolute;top:50%;width:3px;z-index:3}.plyr__preview-thumb{background-color:var(--plyr-tooltip-background, rgba(255, 255, 255, 0.9));border-radius:3px;bottom:100%;box-shadow:var(--plyr-tooltip-shadow, 0 1px 2px rgba(0, 0, 0, 0.15));margin-bottom:calc(calc(var(--plyr-control-spacing, 10px) / 2) * 2);opacity:0;padding:var(--plyr-tooltip-radius, 3px);pointer-events:none;position:absolute;transform:translate(0, 10px) scale(0.8);transform-origin:50% 100%;transition:transform 0.2s 0.1s ease, opacity 0.2s 0.1s ease;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0, 0) scale(1)}.plyr__preview-thumb::before{border-left:var(--plyr-tooltip-arrow-size, 4px) solid transparent;border-right:var(--plyr-tooltip-arrow-size, 4px) solid transparent;border-top:var(--plyr-tooltip-arrow-size, 4px) solid var(--plyr-tooltip-background, rgba(255, 255, 255, 0.9));bottom:calc(var(--plyr-tooltip-arrow-size, 4px) * -1);content:\"\";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c8d1;border-radius:calc(var(--plyr-tooltip-radius, 3px) - 1px);overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img{height:100%;left:0;max-height:none;max-width:none;position:absolute;top:0;width:100%}.plyr__preview-thumb__time-container{bottom:6px;left:0;position:absolute;right:0;white-space:nowrap;z-index:3}.plyr__preview-thumb__time-container span{background-color:rgba(0, 0, 0, 0.55);border-radius:calc(var(--plyr-tooltip-radius, 3px) - 1px);color:#fff;font-size:var(--plyr-font-size-time, var(--plyr-font-size-small, 13px));padding:3px 6px}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity 0.3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none !important}.plyr__sr-only{clip:rect(1px, 1px, 1px, 1px);overflow:hidden;border:0 !important;height:1px !important;padding:0 !important;position:absolute !important;width:1px !important}.plyr [hidden]{display:none !important}video,iframe{max-width:100%}.presto-player__wrapper{position:relative;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}.presto-player__wrapper.rtl{direction:rtl}.presto-player__wrapper img{max-width:100%}.presto-player__wrapper .plyr.plyr--video.plyr--menu-open{overflow:hidden}.presto-player__wrapper .plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{top:50%;transform:translateY(-50%)}.presto-player__wrapper .plyr--fullscreen-fallback.plyr{border-radius:0 !important}.presto-player__wrapper .plyr--fullscreen-fallback.plyr iframe{border-radius:0 !important}.presto-player__wrapper .plyr__menu__container{overflow:auto}.presto-player__wrapper .plyr__menu__container:after{display:none}.presto-player__wrapper img{border:none}.presto-player__wrapper video{margin:auto}.presto-player__wrapper iframe{height:100%}.presto-player__wrapper .plyr--video .plyr__control:active,.presto-player__wrapper .plyr--video .plyr__control:focus{background:#00b3ff;background:var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));color:#fff;color:var(--plyr-video-control-color-hover, #fff)}.presto-player__wrapper .plyr__poster{background-size:cover;z-index:2}.presto-player__wrapper .presto-player__logo{margin:0;display:block;position:absolute;z-index:3;opacity:0.5;object-fit:contain;transition:bottom 0.4s ease-in-out;max-width:var(--presto-player-logo-width, 75px)}.presto-player__wrapper .presto-player__logo.is-bottom-right{left:auto;right:20px;top:auto;bottom:60px}.presto-player__wrapper .presto-player__logo.is-bottom-left{left:20px;right:auto;top:auto;bottom:60px}@media screen and (min-width: 380px){.presto-player__wrapper.presto-player--hide-controls .presto-player__logo.is-bottom-right,.presto-player__wrapper.presto-player--hide-controls .presto-player__logo.is-bottom-left,.presto-player__wrapper .plyr--hide-controls .presto-player__logo.is-bottom-right,.presto-player__wrapper .plyr--hide-controls .presto-player__logo.is-bottom-left{bottom:20px}}.presto-player__wrapper .presto-player-progress__marker{width:16px;height:16px;padding:0;border:2px solid rgba(255, 255, 255, 0.5);position:absolute;border-radius:9999px;bottom:calc(50% - 8px);z-index:9;margin-left:-8px !important}.presto-player__wrapper.presto-player--ended .plyr--youtube .plyr__poster{display:none}.presto-player__wrapper.presto-player--ended .plyr--youtube .plyr__control.plyr__control--overlaid{display:none}.presto-player__wrapper button.plyr__control.plyr__control--overlaid:focus{background:inherit;border:none;outline:0;position:absolute;top:50%;transform:translate(-50%, -50%)}.presto-player__wrapper .plyr__controls__item.plyr__progress__container{position:relative}.presto-player__wrapper .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{box-shadow:none}.presto-player__wrapper .plyr--video .plyr__controls{background:var(--plyr-video-controls-background, linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)))}.presto-player__wrapper .presto-player-toc{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";line-height:1.4;position:absolute;top:auto;right:0;left:0;bottom:0;max-height:calc(100%);max-width:calc(100%);background:rgba(255, 255, 255, 0.9);background:var(--plyr-menu-background, rgba(255, 255, 255, 0.9));left:auto;padding:20px 15px;border-radius:4px;width:100%;z-index:9;box-shadow:0 1px 2px rgba(0, 0, 0, 0.15);box-shadow:var(--plyr-menu-shadow, 0 1px 2px rgba(0, 0, 0, 0.15));color:#4a5464;color:var(--plyr-menu-color, #4a5464);font-size:15px;font-size:var(--plyr-font-size-base, 15px);white-space:nowrap;z-index:3;display:flex;flex-direction:column;transition:bottom 0.25s ease}@media screen and (min-width: 380px){.presto-player__wrapper .presto-player-toc{right:20px;bottom:60px;width:300px;max-height:calc(100% - 80px);max-width:calc(100vw - 70px)}}.presto-player__wrapper .presto-player-toc__wrapper{position:absolute;top:0;left:0;bottom:0;right:0;z-index:3;visibility:hidden;opacity:0;transition:opacity 0.3s ease-in-out, visibility 0.3s ease-in-out}.presto-player__wrapper .presto-player-toc__wrapper.is-showing{visibility:visible;opacity:1}.presto-player__wrapper .presto-player-toc__cover{position:absolute;top:0;left:0;bottom:0;right:0;z-index:3}.presto-player__wrapper .presto-player-toc__list{flex:1;overflow:auto}.presto-player__wrapper .presto-player-toc__title{font-size:12px;font-weight:bold;margin-bottom:10px;margin-left:10px;margin-right:10px;display:none}@media screen and (min-width: 380px){.presto-player__wrapper .presto-player-toc__title{display:block}}.presto-player__wrapper .presto-player-toc__name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.presto-player__wrapper .presto-player-toc__chapter{padding:12px;border-radius:3px;cursor:pointer;line-height:1;display:flex;align-items:center;transition:background-color 0.4s ease, color 0.4s ease;margin-bottom:2px;position:relative}.presto-player__wrapper .presto-player-toc__chapter:last-child{margin-bottom:0}.presto-player__wrapper .presto-player-toc__chapter.is-highlighted,.presto-player__wrapper .presto-player-toc__chapter:hover{background:#00b3ff;background:var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));color:#fff;color:var(--plyr-video-control-color-hover, #fff)}.presto-player__wrapper .presto-player-toc__chapter.is-highlighted{padding-right:30px}.presto-player__wrapper .presto-player-toc__chapter.is-highlighted:after{background:rgba(255, 255, 255, 0.5);content:\"\";display:block;flex-shrink:0;height:8px;width:8px;margin-right:10px;margin-right:var(--plyr-control-spacing, 10px);transition:all 0.3s ease;border-radius:9999px;position:absolute;right:7px}.presto-player__wrapper .presto-player-toc__order{margin-right:12px;opacity:0.5}.presto-player__wrapper.rtl{direction:rtl}.presto-player__wrapper.rtl .presto-player-toc__order{order:2;margin-left:12px;margin-right:0}.presto-player__wrapper.rtl .presto-player-toc__name{direction:rtl}.presto-player__wrapper .presto-player-error{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(0, 0, 0, 0.9);color:#fff;display:flex;align-items:center;justify-content:center;z-index:10;text-align:center}.presto-player__wrapper .presto-player-error__title{font-size:18px;font-weight:bold;margin-bottom:8px}.presto-player__wrapper .presto-player-error__description{opacity:0.75}.presto-player__wrapper.hide-youtube-ui .plyr__video-embed iframe{top:-50%;height:200%}.presto-player__wrapper .plyr--vimeo.plyr--playing .plyr__video-embed__container{pointer-events:none}.presto-player__wrapper .plyr__control--overlaid{border-radius:6px;padding-left:26px;padding-right:26px;position:absolute !important;top:50% !important}.presto-player__wrapper.skin-stacked .plyr__controls{flex-wrap:wrap}.presto-player__wrapper.skin-stacked .presto-player-progress__marker{transform:scale(0.75)}.presto-player__wrapper.skin-stacked .plyr__controls{justify-content:flex-start}.presto-player__wrapper.skin-stacked .plyr__controls__item.plyr__progress__container{order:-1;flex:1 0 100%}.presto-player__wrapper.skin-stacked .plyr__controls__item.plyr__progress__container+:not(.plyr__time),.presto-player__wrapper.skin-stacked .plyr__controls__item.plyr__progress__container+.plyr__time+*{margin-left:auto}.presto-player__wrapper.skin-stacked .plyr__controls .plyr__controls__item:first-child{margin:0}.presto-player__wrapper.skin-stacked .plyr__progress{height:19px;display:flex;align-items:center}.presto-player__wrapper.skin-stacked .plyr__progress .plyr__progress__buffer{height:3px;transition:all 0.25s ease;position:absolute;top:calc(50% + 1px)}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-moz-range-track{height:3px;transition:all 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:3px;transition:all 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-ms-track{height:3px;transition:all 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-ms-fill-upper{height:3px;transition:all 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-ms-fill-lower{height:3px;transition:height 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-moz-range-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress input[type=range]::-ms-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .presto-player-progress__marker{transform:scale(1)}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress .plyr__progress__buffer{height:5px;top:calc(50%)}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]{overflow:visible}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-track{height:5px}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:5px}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-track{height:5px}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-upper{height:5px}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-lower{height:5px}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:visible;opacity:1}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-thumb{visibility:visible;opacity:1}.presto-player__wrapper.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-thumb{visibility:visible;opacity:1}.presto-sticky-parent{z-index:99998}@media screen and (min-width: 960px){.presto-sticky{position:fixed;z-index:3000;max-width:var(--presto-sticky-width, 380px);top:auto;bottom:0;right:15px;transform:translateY(-15px);width:100vw}.presto-sticky .plyr__controls,.presto-sticky .presto-player-toc__wrapper,.presto-sticky .presto-player__logo{display:none}}.presto-player__overlay{position:absolute;top:50%;left:50%;z-index:3}.presto-player__muted-overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.presto-player__muted-overlay .plyr__control--overlaid{display:block;opacity:1;visibility:visible}.presto-player__wrapper.is-muted-overlay{cursor:pointer}.presto-player__wrapper.is-muted-overlay .plyr--playing .presto-player__muted-overlay .plyr__control--overlaid{opacity:1;visibility:visible}.presto-player__wrapper.is-muted-overlay .presto-player__logo{display:none}.presto-player__wrapper.is-muted-overlay .plyr__controls{display:none}.presto-player__wrapper.is-muted-overlay .plyr .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(0) !important}.presto-player__wrapper.rtl .plyr__captions{direction:rtl}.presto-player__wrapper.caption-style-full .plyr__captions{background:var(--plyr-captions-background, rgba(0, 0, 0, 0.8));padding-top:0;padding-bottom:0}.presto-player__wrapper.caption-style-full .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 13px) * -4))}.presto-player__wrapper.caption-style-full.skin-stacked .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 17px) * -4))}.presto-player__play-cover{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0;z-index:99}.presto-player__chapters{width:100%;position:absolute;top:0;height:100%}.presto-player__chapter-markers{margin:0 8px;height:100%;position:relative}.presto-player-progress__marker.plyr__controls__item.plyr__control:hover{border:0;background:#fff}";

const PrestoPlayer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
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
  handleMutedPreview() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!this.player || this.isAdmin || !((_c = (_b = (_a = this.originalConfig) === null || _a === void 0 ? void 0 : _a.blockAttributes) === null || _b === void 0 ? void 0 : _b.mutedPreview) === null || _c === void 0 ? void 0 : _c.enabled)) {
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
    this.i18n = (_b = window.prestoPlayer) === null || _b === void 0 ? void 0 : _b.i18n;
  }
  /**
   * Create Player
   */
  async componentDidLoad() {
    this.initialize();
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
      const module = await import('./resize-observer-9b92cbbf.js');
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
    if (!((_a = window.prestoPlayer) === null || _a === void 0 ? void 0 : _a.isPremium) || this.isAdmin || ((_b = window.prestoPlayer) === null || _b === void 0 ? void 0 : _b.logged_in)) {
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
  /**
   * Render the component
   * @returns JSX
   */
  render() {
    var _a, _b, _c, _d;
    return (h(Host, { style: { height: this.isSticky ? `${this.videoHeight}px` : 'auto' } }, h("div", { part: "wrapper", dir: this.direction, class: `presto-player__wrapper fitvidsignore
        ${!!this.isSticky && 'presto-sticky'}
        ${this.direction === 'rtl' ? 'rtl' : ''}
        ${!!((_a = this.preset) === null || _a === void 0 ? void 0 : _a.skin) && `skin-${(_b = this.preset) === null || _b === void 0 ? void 0 : _b.skin}`}
        ${!!((_c = this.preset) === null || _c === void 0 ? void 0 : _c.hide_youtube) ? 'hide-youtube-ui' : ''}
        caption-style-${(_d = this.preset) === null || _d === void 0 ? void 0 : _d.caption_style}
        ${!!this.mutedPreview ? 'is-muted-overlay' : ''}
        ${this.playClass ? this.playClass : ''}` }, h("slot", { name: "player-start" }), this.renderEmailOverlay(), h("slot", { name: "player-before-video" }), this.renderVideo(), h("slot", { name: "player-after-video" }), this.renderActionBar(), this.renderMutedOverlay(), h("slot", { name: "player-end" }))));
  }
  get el() { return getElement$1(this); }
  static get watchers() { return {
    "isSticky": ["handleStickyChange"],
    "mutedPreview": ["handleMutedPreview"],
    "shouldLazyLoad": ["handleLazyLoadChange"]
  }; }
};
PrestoPlayer.style = prestoPlayerCss;

export { PrestoPlayer$1 as P, PrestoPlayer as a, resumeProgress as r };
