import { PrestoPlayer } from "@/component-library/react/src/components";

const { useSelect } = wp.data;

export default ({ src, preset, branding, attributes, adminPreview, type }) => {
  const { chapters, mutedOverlay, mutedPreview } = attributes;

  const youtube = useSelect((select) => {
    return select("presto-player/player")?.youtube();
  });

  const mutedOverlayContent = () => {
    return (
      <div
        className="presto-player__overlay is-image"
        style={{
          position: "absolute",
          width: `${mutedOverlay?.width || 100}%`,
          left: `${(mutedOverlay?.focalPoint?.x || 0.5) * 100}%`,
          top: `${(mutedOverlay?.focalPoint?.y || 0.5) * 100}%`,
        }}
      >
        <img
          src={mutedOverlay?.src}
          style={{
            transform: "translateX(-50%) translateY(-50%)",
          }}
        />
      </div>
    );
  };

  return (
    <div
      className="wp-block-video presto-block-video"
      style={{
        "--presto-player-border-radius": `${preset?.border_radius}px`,
        ...(preset?.caption_background
          ? { "--plyr-captions-background": preset.caption_background }
          : {}),
        ...(branding?.color ? { "--plyr-color-main": branding.color } : {}),
        "--presto-player-email-border-radius": `${
          preset?.email_collection?.border_radius || 0
        }px`,
        "--presto-player-logo-width": `${branding?.logo_width || 75}px`,
      }}
    >
      <PrestoPlayer
        src={src}
        isAdmin={true}
        preload="metadata"
        preset={preset}
        bunny={{
          thumbnail: attributes?.previewThumbnail,
          preview: attributes?.preview,
        }}
        youtube={{
          channelId: youtube?.channel_id,
        }}
        branding={branding}
        chapters={chapters}
        blockAttributes={attributes}
        poster={attributes.poster}
        provider={type}
      >
        <div slot="player-end">
          {mutedPreview?.enabled &&
            mutedOverlay?.enabled &&
            mutedOverlayContent()}
          {adminPreview}
        </div>
      </PrestoPlayer>
    </div>
  );
};
