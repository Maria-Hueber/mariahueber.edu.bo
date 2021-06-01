let player, $wrapper;

import { addChapterControl } from "../chapters";

export default function (pl) {
  player = pl;
  $wrapper = jQuery(player.elements.container).closest(
    ".presto-player__wrapper"
  );

  // chapter control
  player.on("ready", addChapterControl);

  // control ui
  player.on("controlshidden", addParentClass);
  player.on("controlsshown", removeParentClass);
}

export function addParentClass(e) {
  jQuery(e?.detail?.plyr?.elements?.container)
    .closest(".presto-player__wrapper")
    .addClass("presto-player--hide-controls");
}

export function removeParentClass(e) {
  jQuery(e?.detail?.plyr?.elements?.container)
    .closest(".presto-player__wrapper")
    .removeClass("presto-player--hide-controls");
}
