import "../player/global.scss";

import {
  PrestoPlayer,
  PrestoBunny,
  PrestoYoutube,
  PrestoVimeo,
  PrestoVideo,
  PrestoActionBar,
  PrestoActionBarUi,
  PrestoMutedOverlay,
  PrestoEmailOverlay,
  PrestoEmailOverlayUi,
  PrestoPlayerButton,
  PrestoYoutubeSubscribeButton,
} from "../../web-components/dist/custom-elements";

// needed
customElements.define("presto-player", PrestoPlayer);

// could break apart into different files
customElements.define("presto-bunny", PrestoBunny);
customElements.define("presto-video", PrestoVideo);
customElements.define("presto-vimeo", PrestoVimeo);
customElements.define("presto-youtube", PrestoYoutube);

// could conditionally load these in a different file maybe
// have to see what caching plugins will do
customElements.define("presto-email-overlay", PrestoEmailOverlay);
customElements.define("presto-email-overlay-ui", PrestoEmailOverlayUi);
customElements.define("presto-muted-overlay", PrestoMutedOverlay);
customElements.define("presto-action-bar", PrestoActionBar);
customElements.define("presto-action-bar-ui", PrestoActionBarUi);

// These only depend on action bar
customElements.define("presto-player-button", PrestoPlayerButton);
customElements.define(
  "presto-youtube-subscribe-button",
  PrestoYoutubeSubscribeButton
);
