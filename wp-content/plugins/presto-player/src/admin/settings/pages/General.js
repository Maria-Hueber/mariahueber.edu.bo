/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { RangeControl, Notice } = wp.components;

import { getSettings, getSetting } from "@/admin/settings/util";

import Group from "../components/Group";
import Page from "../components/Page";

import ColorPicker from "../components/ColorPicker";
import ToggleControl from "../components/ToggleControl";
import Media from "../components/Media";
import Disabled from "../components/Disabled";

export default () => {
  const settings = getSettings();

  const disabled = () => {
    if (prestoPlayer?.isPremium) {
      return false;
    }
    return {
      title: __("Pro Feature", "presto-player"),
      heading: __("Unlock Presto Player Pro", "presto-player"),
      message: __(
        "Get this feature and more with the Pro version of Presto Player!",
        "presto-player"
      ),
      link: "https://prestoplayer.com",
    };
  };

  return (
    <Page
      title={__("General", "presto-player")}
      description={__(
        "Branding, analytics and uninstall data.",
        "presto-player"
      )}
    >
      <Group
        title={__("Branding", "presto-player")}
        description={__("Global player branding options", "presto-player")}
      >
        <Disabled disabled={disabled()}>
          <Media
            className={"presto-player__setting--logo"}
            option={{
              name: (
                <>
                  {__("Logo", "presto-player")}{" "}
                  {disabled() && (
                    <span className="presto-options__pro-badge">
                      {__("Pro", "presto-player")}
                    </span>
                  )}
                </>
              ),
              id: "logo",
              default: "",
            }}
            maxWidth={getSetting("branding", "logo_width") || 150}
            value={getSetting("branding", "logo")}
            optionName="branding"
          />

          <div style={{ maxWidth: "500px" }}>
            <RangeControl
              className={"presto-player__setting--logo-width"}
              label={__("Logo Max Width", "presto-player")}
              value={getSetting("branding", "logo_width") || 150}
              onChange={(width) => {
                dispatch("presto-player/settings").updateSetting(
                  "logo_width",
                  width,
                  "branding"
                );
              }}
              min={1}
              max={400}
            />
          </div>
        </Disabled>
        <ColorPicker
          className={"presto-player__setting--brand-color"}
          option={{
            name: __("Brand Color", "presto-player"),
            id: "color",
            default: "",
          }}
          value={getSetting("branding", "color")}
          optionName="branding"
        />
      </Group>

      <Group
        title={__("Performance", "presto-player")}
        description={__(
          "Performance options for player loading.",
          "presto-player"
        )}
      >
        <div>
          <ToggleControl
            className={"presto-player__setting--module-enabled"}
            option={{
              id: "module_enabled",
              name: __("Dynamically Load JavaScript", "presto-player"),
              help: __(
                "Dynamically load javascript modules on the page which can significantly reduce javascript size and increase performance.",
                "presto-player"
              ),
            }}
            value={settings?.presto_player_performance?.module_enabled}
            optionName="performance"
          />
          {!!settings?.presto_player_performance?.module_enabled && (
            <Notice
              css={css`
                background: #f3f4f5 !important;
              `}
              className="presto-notice"
              status="info"
              isDismissible={false}
            >
              <div>
                <strong>{__("Please Note", "presto-player")}</strong>
              </div>
              <div>
                {__(
                  "You may need to exclude the player script from combining, as well as enable CORS requests for some CDNs",
                  "presto-player"
                )}
              </div>
            </Notice>
          )}
        </div>
      </Group>

      <Group
        title={__("Analytics", "presto-player")}
        disabled={disabled()}
        description={__(
          "Analytics settings for video plays, watch times and more.",
          "presto-player"
        )}
      >
        <div>
          <ToggleControl
            className={"presto-player__setting--analytics-enable"}
            option={{
              id: "enable",
              name: __("Enable", "presto-player"),
              help: __(
                "Enable view analytics for your videos",
                "presto-player"
              ),
            }}
            value={settings?.presto_player_analytics?.enable}
            optionName="analytics"
          />
          {!!settings?.presto_player_analytics?.enable && (
            <ToggleControl
              className={"presto-player__setting--purge-data"}
              option={{
                id: "purge_data",
                name: __("Auto-Purge Data (recommended)", "presto-player"),
                help: __(
                  "Automatically purge data older than 90 days.",
                  "presto-player"
                ),
              }}
              value={
                settings?.presto_player_analytics?.purge_data !== undefined
                  ? settings?.presto_player_analytics?.purge_data
                  : true
              }
              optionName="analytics"
            />
          )}
        </div>
      </Group>

      <Group
        title={__("Uninstall Options", "presto-player")}
        description={__(
          "Options to remove data on uninstall.",
          "presto-player"
        )}
      >
        <ToggleControl
          className="presto-player__setting--uninstall"
          option={{
            id: "uninstall_data",
            name: __("Remove data on uninstall", "presto-player"),
            help: __("This removes all data on uninstall.", "presto-player"),
            confirm: {
              title: __("Caution: Data Loss", "presto-player"),
              heading: __("Are you sure?", "presto-player"),
              message: __(
                "Are you sure you want to remove all the data from this plugin? This is irreversible!",
                "presto-player"
              ),
            },
          }}
          value={settings?.presto_player_uninstall?.uninstall_data}
          optionName="uninstall"
        />
      </Group>
    </Page>
  );
};
