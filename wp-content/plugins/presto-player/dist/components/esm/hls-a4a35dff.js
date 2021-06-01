import { g as _objectSpread2 } from './index-32073d53.js';
import { P as PrestoPlayer } from './presto-player-63ec29fa.js';

const hls = (function (_ref) {
  var config = _ref.config,
      selector = _ref.selector,
      src = _ref.src,
      preload = _ref.preload;
  return new Promise(function (resolve, reject) {
    if (!window.Hls) {
      return;
    }

    if (window.Hls.isSupported()) {
      var _wp;

      // should we autoload start
      var autoStartLoad = !['metadata', 'none'].includes(preload); // always autoload in admin for preview

      if ((_wp = wp) === null || _wp === void 0 ? void 0 : _wp.blocks) {
        autoStartLoad = true;
      } // maybe don't auto start load depending on performance parameter


      var hls = new window.Hls({
        autoStartLoad: autoStartLoad
      });
      hls.loadSource(src); // update menu container to dynamically display quality

      hls.on(window.Hls.Events.LEVEL_SWITCHED, function (event, data) {
        var span = selector.closest('.presto-player__wrapper').querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");

        if (hls.autoLevelEnabled) {
          span.innerHTML = "AUTO (".concat(hls.levels[data.level].height, "p)");
        } else {
          span.innerHTML = "AUTO";
        }
      }); // From the m3u8 playlist, hls parses the manifest and returns
      // all available video qualities. This is important, in this approach,
      // we will have one source on the Plyr player.

      hls.on(window.Hls.Events.MANIFEST_PARSED, function (event, data) {
        // Transform available levels into an array of integers (height values).
        var availableQualities = hls.levels.map(function (l) {
          return l.height;
        });
        availableQualities.unshift(0); //prepend 0 to quality array;
        // do start level

        var startLevel = availableQualities.findIndex(function (qty) {
          var _prestoPlayer;

          return qty === parseInt((_prestoPlayer = prestoPlayer) === null || _prestoPlayer === void 0 ? void 0 : _prestoPlayer.hls_start_level);
        });
        hls.startLevel = startLevel ? startLevel - 1 : 2; // Add new qualities to option

        config.quality = {
          default: 0,
          options: availableQualities,
          // this ensures Plyr to use Hls to update quality level
          forced: true,
          onChange: function onChange(newQuality) {
            if (newQuality === 0) {
              prestoHLS.currentLevel = -1; //Enable AUTO quality if option.value = 0
            } else {
              prestoHLS.levels.forEach(function (level, levelIndex) {
                if (level.height === newQuality) {
                  console.log('Found quality match with ' + newQuality);
                  prestoHLS.currentLevel = levelIndex;
                }
              });
            }
          }
        }; // attach media and make our HLS options available globally

        hls.attachMedia(selector);
        window.prestoHLS = hls; // Initialize player

        var player = new PrestoPlayer(selector, _objectSpread2({}, config));
        player.hls = hls; // make sure we start loading on the first play

        var firstPlay = function firstPlay() {
          hls.startLoad(-1);
          player.off('waiting', firstPlay);
        };

        player.on('waiting', firstPlay); // Handle changing captions

        player.on('languagechange', function () {
          // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
          setTimeout(function () {
            return hls.subtitleTrack = player.currentTrack;
          }, 50);
        });
        return resolve(player);
      });
      return;
    }

    return resolve(new PrestoPlayer(selector, _objectSpread2({}, config)));
  });
});

export default hls;
