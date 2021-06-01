/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
  ToggleControl,
  BaseControl,
  RangeControl,
  TextControl,
  TextareaControl,
} = wp.components;

import ChooseProvider from "./parts/ChooseProvider";

export default function ({ state, updateState, className }) {
  const { email_collection } = state;

  const updateEmailState = (updated) => {
    updateState({
      ...state,
      email_collection: {
        ...email_collection,
        ...updated,
      },
    });
  };

  return (
    <div className={className}>
      <BaseControl>
        <h3>{__("Email Capture", "presto-player")}</h3>
      </BaseControl>
      <BaseControl className="presto-player__control--large-play">
        <ToggleControl
          label={__("Enable", "presto-player")}
          help={__(
            "Show an email collection form and message over your video.",
            "presto-player"
          )}
          onChange={(enabled) => {
            updateEmailState({
              enabled,
            });
          }}
          checked={email_collection?.enabled}
        />
      </BaseControl>
      {!!email_collection?.enabled && (
        <>
          <BaseControl className="presto-player__control--percentage-watched">
            <RangeControl
              label={__("Display At (Percentage)", "presto-player")}
              labelPosition="top"
              onChange={(percentage) => {
                updateEmailState({
                  percentage,
                });
              }}
              marks={[
                {
                  value: 0,
                  label: "Start",
                },
                {
                  value: 50,
                  label: "50% Watched",
                },
                {
                  value: 100,
                  label: "End",
                },
              ]}
              shiftStep={5}
              value={email_collection?.percentage || 0}
            />
          </BaseControl>

          <BaseControl className="presto-player__control--large-play">
            <ToggleControl
              label={__("Allow Skipping", "presto-player")}
              help={__("Let the viewer skip", "presto-player")}
              onChange={(allow_skip) => {
                updateEmailState({
                  allow_skip,
                });
              }}
              checked={email_collection?.allow_skip}
            />
          </BaseControl>

          <BaseControl className="presto-player__control--large-play">
            <TextareaControl
              label={__("Headline", "presto-player")}
              help={__("The headline for your form.", "presto-player")}
              value={email_collection?.headline}
              onChange={(headline) => {
                updateEmailState({
                  headline,
                });
              }}
            />
          </BaseControl>

          <BaseControl className="presto-player__control--large-play">
            <TextareaControl
              label={__("Bottom Text", "presto-player")}
              help={__(
                "Text displayed below the form. HTML allowed.",
                "presto-player"
              )}
              value={email_collection?.bottom_text}
              onChange={(bottom_text) => {
                updateEmailState({
                  bottom_text,
                });
              }}
            />
          </BaseControl>

          <BaseControl className="presto-player__control--large-play">
            <TextControl
              label={__("Play Button Text", "presto-player")}
              help={<p>{__("Submit button text", "presto-player")}</p>}
              value={email_collection?.button_text}
              onChange={(button_text) => updateEmailState({ button_text })}
            />
          </BaseControl>

          <h3>{__("Integrate", "presto-player")}</h3>
          <BaseControl>
            <ChooseProvider
              updateEmailState={updateEmailState}
              options={email_collection}
            />
          </BaseControl>

          <h3>{__("Style", "presto-player")}</h3>

          <BaseControl>
            <RangeControl
              label={__("Round Corners", "presto-player")}
              help={__("Border radius of form elements.", "presto-player")}
              value={email_collection?.border_radius || 0}
              onChange={(border_radius) => updateEmailState({ border_radius })}
              min={0}
              max={25}
            />
          </BaseControl>
        </>
      )}
    </div>
  );
}
