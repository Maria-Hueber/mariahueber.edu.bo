/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
  ToggleControl,
  BaseControl,
  HorizontalRule,
  __experimentalAlignmentMatrixControl: AlignmentMatrixControl,
} = wp.components;

export default function ({ state, updateState, className }) {
  return (
    <div className={className}>
      <BaseControl>
        <h3>{__("Behavior", "presto-player")}</h3>
      </BaseControl>
      <BaseControl>
        <ToggleControl
          label={__("Auto-Hide Controls", "presto-player")}
          help={__(
            "Hide video controls automatically after 2 seconds of no mouse movement.",
            "presto-player"
          )}
          onChange={(auto_hide) => {
            updateState({ auto_hide });
          }}
          checked={state.auto_hide}
        />
      </BaseControl>
      {/* <BaseControl>
        <ToggleControl
          label={__("Reset On End", "presto-player")}
          help={__(
            "Reset the video to the beginning when it completes.",
            "presto-player"
          )}
          onChange={(reset_on_end) => {
            updateState({ reset_on_end });
          }}
          checked={state.reset_on_end}
        />
      </BaseControl> */}
      <BaseControl>
        <ToggleControl
          label={__("Save Play Position", "presto-player")}
          help={__(
            "Saves the user's play position so when they come back to the page they can continue the video from where they left off.",
            "presto-player"
          )}
          onChange={(save_player_position) => {
            updateState({ save_player_position });
          }}
          checked={state.save_player_position}
        />
      </BaseControl>
      <BaseControl>
        <ToggleControl
          label={__("Captions On By Default", "presto-player")}
          help={__(
            "Toggles if captions should be active by default.",
            "presto-player"
          )}
          onChange={(captions_enabled) => {
            updateState({ captions_enabled });
          }}
          checked={state.captions_enabled}
        />
      </BaseControl>
      <BaseControl>
        <ToggleControl
          label={__("Sticky On Scroll", "presto-player")}
          help={__(
            "Stick videos to the side of the screen when the page is scrolled and the video is playing.",
            "presto-player"
          )}
          onChange={(sticky_scroll) => {
            updateState({ sticky_scroll });
          }}
          checked={state.sticky_scroll}
        />
      </BaseControl>
      {!!state.sticky_scroll && (
        <>
          <BaseControl
            label={__(
              "Choose a position for your sticky player.",
              "presto-player"
            )}
          >
            <AlignmentMatrixControl
              value={state.sticky_scroll_position}
              onChange={(sticky_scroll_position) => {
                updateState({ sticky_scroll_position });
              }}
            />
          </BaseControl>
        </>
      )}
      <HorizontalRule />
      <BaseControl />
      <BaseControl>
        <h3>{__("Youtube", "presto-player")}</h3>
      </BaseControl>
      <BaseControl>
        <ToggleControl
          label={__("Hide Youtube UI (Experimental)", "presto-player")}
          help={__(
            "Hides the Youtube logo and related videos.",
            "presto-player"
          )}
          onChange={(hide_youtube) => {
            updateState({ hide_youtube });
          }}
          checked={state.hide_youtube}
        />
      </BaseControl>
      <BaseControl>
        <ToggleControl
          label={__("Lazy Load Videos", "presto-player")}
          help={__(
            "Improves page loading performance by only loading the video when clicked.",
            "presto-player"
          )}
          onChange={(lazy_load_youtube) => {
            updateState({ lazy_load_youtube });
          }}
          checked={state.lazy_load_youtube}
        />
      </BaseControl>
    </div>
  );
}
