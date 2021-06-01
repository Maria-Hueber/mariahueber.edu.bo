declare global {
  interface Window {
    gapi: any;
    wp: any;
    jQuery: any;
    prestoPlayer: {
      ajaxurl: string;
      nonce: string;
      isPremium: string;
      logged_in: boolean;
      i18n: i18nConfig;
    };
  }
}
export interface BunnyConfig extends Object {
  hostname: string;
  thumbnail: string;
  preview: string;
}
export interface i18nConfig extends Object {
  emailPlaceholder?: string;
  skip?: string;
  emailDefaultHeadline?: string;
}
export interface ActionBarConfig extends Object {
  enabled: boolean;
  percentage_start: number;
  text: string;
  background_color: string;
  button_type: string;
  button_radius: string;
  button_text?: string;
  button_color?: string;
  button_count?: boolean;
  button_link?: ButtonLinkObject;
}
export interface ButtonLinkObject extends Object {
  id: string;
  url: string;
  type: string;
  opensInNewTab: boolean;
}
export interface PrestoConfig extends Object {
  type?: string;
  preset?: presetAttributes;
  blockAttributes?: blockAttributes;
  chapters?: prestoChapters;
  branding?: prestoBranding;
  src?: string;
  analytics?: boolean;
  provider?: string;
  provider_video_id?: string;
  isAdmin?: boolean;
  save_player_position?: boolean;
  ajaxProgress?: boolean;
  youtube?: YoutubeConfig;
  i18n?: i18nConfig;
  storage?: {
    enabled?: boolean;
    key?: string;
  };
}
export interface prestoChapters extends Object {
  [index: number]: {
    time: number;
    title: string;
  };
}
export interface blockAttributes extends Object {
  color?: string;
  id?: number;
  title?: string;
  src?: string;
  poster?: string;
  playsInline?: boolean;
  autoplay?: boolean;
  mutedPreview?: {
    enabled?: boolean;
    captions?: boolean;
  };
  mutedOverlay?: MutedOverlay;
}
export interface MutedOverlay extends Object {
  enabled?: boolean;
  width?: number;
  src?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
}
export interface YoutubeConfig extends Object {
  noCookie?: boolean;
  channelId?: string;
}
export interface presetAttributes extends Object {
  id?: number;
  lazy_load_youtube?: boolean;
  after_video_action?: string;
  hide_youtube?: boolean;
  sticky_scroll?: boolean;
  sticky_scroll_position?: string;
  skin?: string;
  save_player_position?: boolean;
  captions_enabled?: boolean;
  hide_logo?: boolean;
  reset_on_end?: boolean;
  auto_hide?: boolean;
  speed?: boolean;
  caption_style?: string;
  email_collection?: EmailCollection;
  action_bar?: ActionBarConfig;
}
export interface prestoBranding extends Object {
  logo?: string;
  logo_width?: number;
}
export interface EmailCollection extends Object {
  enabled?: boolean;
  percentage?: number;
  allow_skip?: boolean;
  headline?: string;
  bottom_text?: string;
  button_text?: string;
  border_radius?: number;
}
interface OnVolumeChangeParam {
  muted: boolean;
  volume: number;
}
export interface PlyrProps {
  id?: number;
  type?: 'youtube' | 'vimeo' | 'video' | 'audio';
  className?: string;
  videoId?: string;
  url?: string;
  config: PrestoConfig;
  on?: (eventName: string, event?: any) => void;
  onReady?: (player?: any) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onLoadedData?: () => void;
  onSeeked?: (time?: number) => void;
  onTimeUpdate?: (time?: number) => void;
  onEnterFullscreen?: () => void;
  onExitFullscreen?: () => void;
  onVolumeChange?: (params: OnVolumeChangeParam) => void;
  onCaptionsEnabled?: () => void;
  onCaptionsDisabled?: () => void;
  enabled?: boolean;
  title?: string;
  debug?: boolean;
  autoplay?: boolean;
  autopause?: boolean;
  seekTime?: number;
  volume?: number;
  muted?: boolean;
  duration?: number;
  displayDuration?: boolean;
  invertTime?: boolean;
  toggleInvert?: boolean;
  ratio?: string;
  clickToPlay?: boolean;
  hideControls?: boolean;
  resetOnEnd?: boolean;
  disableContextMenu?: boolean;
  loadSprite?: boolean;
  iconPrefix?: string;
  iconUrl?: string;
  blankVideo?: string;
  quality?: {
    default?: string | number;
    option?: string[] | number[];
  };
  loop?: {
    active?: boolean;
  };
  speed?: {
    selected?: number;
    options?: number[];
  };
  keyboard?: {
    focused?: boolean;
    global?: boolean;
  };
  tooltips?: {
    controls?: boolean;
    seek?: boolean;
  };
  fullscreen?: {
    enabled?: boolean;
    fallback?: boolean;
    iosNative?: boolean;
  };
  storage?: {
    enabled?: boolean;
    key?: string;
  };
  controls?: string[];
  settings?: string[];
  poster?: string;
  sources?: Array<{
    src: string;
    type: string;
    size?: string;
  }>;
  captions?: Array<{
    kind?: string;
    label?: string;
    src: string;
    srclang?: string;
    default?: boolean;
    key?: any;
  }>;
}
export {};
