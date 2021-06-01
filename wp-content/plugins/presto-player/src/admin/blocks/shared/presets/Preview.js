const { __ } = wp.i18n;
const { Disabled } = wp.components;
import Player from "../Player";
const { useState, useEffect } = wp.element;
const { useSelect } = wp.data;
import { PrestoEmailOverlayUi } from "@/component-library/react/src/components.ts";

export default ({ state, branding, menu }) => {
  const [renderKey, setRenderKey] = useState(1);
  const { email_collection } = state;

  useEffect(() => {
    setRenderKey(renderKey + 1);
  }, [
    state.skin,
    state["play-large"],
    state.rewind,
    state.play,
    state["fast-forward"],
    state.progress,
    state["current-time"],
    state.mute,
    state.volume,
    state.speed,
    state.pip,
    state.fullscreen,
    state.hide_logo,
  ]);

  const previews = {
    email: !!email_collection?.enabled && (
      <PrestoEmailOverlayUi
        className="email-overlay"
        slot="player-end"
        headline={email_collection?.headline}
        defaultHeadline={__(
          "Enter your email to watch this video.",
          "presto-player"
        )}
        bottomText={email_collection?.bottom_text}
        allowSkip={email_collection?.allow_skip}
        skipText={__("Skip", "presto-player")}
        buttonText={email_collection?.button_text}
        placeholder={__("Email address", "presto-player")}
      />
    ),
  };

  return (
    <Disabled>
      <div className="presto-player__wrapper">
        <Player
          preset={state}
          branding={branding}
          attributes={{
            chapters: [],
            poster: "https://source.unsplash.com/daily",
          }}
          setAttributes={() => {}}
          key={renderKey}
          adminPreview={previews[menu]}
        />
      </div>
    </Disabled>
  );
};
