import Player from 'plyr';

import saveTime from './functions/save-time';
import setControls from './functions/custom-controls';
import analytics from './functions/analytics';
import customLogo from './functions/custom-logo';
import setPoster from './functions/set-poster';
import actions from './functions/actions';
import ajaxProgress from './functions/ajax-progress';
import getNonce from './functions/get-nonce';
import fullscreen from './functions/fullscreen';
import menuSizing from './functions/menu-sizing';

/**
 * Get things going
 *
 * @param {HTMLElement} element
 */
export default function (element, options = {}) {
  const setup = {
    ...options,
    ...{
      iconUrl: `${window?.prestoPlayer?.plugin_url}img/sprite.svg`,
    },
    ...{
      chapters: options?.chapters || [],
      controls: options?.controls || [],
      settings: Object.keys(options?.settings || {}).length ? options.settings : {},
    },
  };

  let player = new Player(element, setup);

  // conditionally load learndash
  if (typeof learndash_video_data !== 'undefined') {
    import('../integrations/learndash').then(module => {
      const learnDash = module.default;
      learnDash(player);
    });
  }

  if (typeof _tutorobject !== 'undefined') {
    import('../integrations/tutor').then(module => {
      const tutor = module.default;
      tutor(player);
    });
  }

  actions(player);
  fullscreen(player);
  menuSizing(player);
  customLogo(player);
  setPoster(player);
  setControls(player);

  // if we're in the admin, don't do the rest of these.
  if (prestoPlayer.isAdmin) {
    return player;
  }

  // non-admin stuff
  getNonce(player);
  ajaxProgress(setup);
  saveTime(player);
  analytics(player);

  return player;
}
