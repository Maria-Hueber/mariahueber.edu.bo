let fetchedNonce = false;
let fetchingNonce = false;
let visit_time = Date.now();

/**
 * Sends an updated ajax progress event for plugins to hook into
 */
export default () => {
  let nonce;

  // get nonce when the player starts playing
  wp.hooks.addAction('presto.playerPlaying', 'presto-player', () => {
    wp.hooks.doAction('presto.playerGetNonce');
  });

  // get nonce refresh
  wp.hooks.addAction('presto.playerGetNonce', 'presto-player', () => {
    // bail if we are already getting it or got it
    if (fetchedNonce || fetchingNonce) {
      return;
    }

    // we're fetching
    fetchingNonce = true;

    // fetch it
    fetch(`${window?.prestoPlayer?.ajaxurl}?action=presto_refresh_progress_nonce`)
      .then(status)
      .then(response => response.json())
      .then(({ data }) => {
        nonce = data;
        wp.hooks.doAction('presto.nonceRefreshed', nonce);
        // we got it
        fetchedNonce = true;
      })
      .catch(function (error) {
        console.log('Request failed', error);
      })
      .finally(() => {
        // we're done fetching
        fetchingNonce = false;
      });
  });

  // on time update, maybe send time update
  wp.hooks.addAction('presto.playerTimeUpdate', 'presto-player', sendTimeUpdate);

  wp.hooks.addAction('presto.playerEnded', 'presto-player', plyr => {
    sendTimeUpdate(plyr, 100);
  });

  let watched = {
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
    100: false,
  };

  function sendTimeUpdate(player, percent = null) {
    // need to send nonce
    if (!nonce) {
      return;
    }

    // bail if progress is not turned on
    if (!player?.config?.ajaxProgress) {
      return;
    }

    if (!percent) {
      percent = (parseFloat(player.currentTime) / parseFloat(player.duration)) * 100;
    }

    player.watched = player.watched || {};
    Object.keys(watched).forEach(marker => {
      marker = parseInt(marker);
      if (!player.watched[marker] && percent >= parseInt(marker)) {
        player.watched[marker] = true;

        let formData = new FormData();

        formData.append('action', 'presto_player_progress_percent');
        formData.append('id', player?.config?.id);
        formData.append('percent', marker);
        formData.append('visit_time', visit_time);
        formData.append('nonce', nonce);

        if (window?.prestoPlayer?.debug) {
          console.log(`${marker} percent watched.`);
        }

        if (!window?.prestoPlayer?.debug_navigator) {
          let result = navigator.sendBeacon(window?.prestoPlayer?.ajaxurl, formData);
          if (window?.prestoPlayer?.debug) {
            if (result) {
              console.log('Successfully queued progress:', {
                id: player?.config?.id,
                percent: marker,
                visit_time,
                nonce,
              });
            } else {
              console.log('Failed to queue progress', {
                id: player?.config?.id,
                percent: marker,
                visit_time,
                nonce,
              });
            }
          }
        } else {
          jQuery.ajax({
            type: 'POST',
            url: window?.prestoPlayer?.ajaxurl,
            dataType: 'json',
            cache: false,
            data: {
              action: 'presto_player_progress_percent',
              id: player?.config?.id,
              visit_time,
              percent: marker,
              nonce,
            },
          });
        }
      }
    });
  }
};
