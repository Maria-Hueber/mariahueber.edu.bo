import { blockAttributes, BunnyConfig, i18nConfig, presetAttributes, prestoBranding, prestoChapters, PrestoConfig, YoutubeConfig, ActionBarConfig } from '../../../../interfaces';
export declare class PrestoPlayer {
  private originalConfig?;
  private i18n?;
  video_id: number;
  iconUrl: string;
  src: string;
  bunny: BunnyConfig;
  branding: prestoBranding;
  config: PrestoConfig;
  preset: presetAttributes;
  chapters: prestoChapters;
  blockAttributes: blockAttributes;
  tracks: {
    label: string;
    src: string;
    srcLang: string;
  }[];
  analytics: boolean;
  provider: string;
  provider_video_id: string;
  actionBar: ActionBarConfig;
  youtube: YoutubeConfig;
  type: string;
  autoplay: boolean;
  preload: string;
  poster: string;
  playsinline: boolean;
  isAdmin: boolean;
  direction?: 'rtl';
  /**
   * This element
   */
  el: HTMLElement;
  /**
   * State() variables
   */
  player: any;
  playerEl?: HTMLVideoElement | HTMLElement;
  shouldLazyLoad: boolean;
  mutedPreview: boolean;
  currentTime: number;
  duration: number;
  isSticky: boolean;
  videoHeight: number;
  playClass: string;
  /**
   * Play video
   * @returns Plyr
   */
  play(): Promise<any>;
  /**
   * Pause video
   * @returns Plyr
   */
  pause(): Promise<any>;
  /**
   * Pause video
   * @returns Plyr
   */
  stop(): Promise<any>;
  /**
   * Toggle Fullscreen
   * @returns Plyr
   */
  fullscreenToggle(open: boolean): Promise<any>;
  /**
   * Add an event listener for the specified event.
   * @param event String
   * @param func Function
   * @returns Plyr
   */
  on(event: Event, func: Function): Promise<any>;
  /**
   * Remove an event listener for the specified event.
   * @param event String
   * @param func Function
   * @returns Plyr
   */
  off(event: Event, func: Function): Promise<any>;
  /**
   * Sticky scroll handler
   * @returns void
   */
  stickyClass(): void;
  /**
   * Handle sticky change
   */
  handleStickyChange(): void;
  /**
   * Get player config
   * @returns object
   */
  getConfig(): {
    iconUrl?: string;
    invertTime: boolean;
    storage: {
      enabled?: boolean;
      key?: string;
    };
    resetOnEnd: boolean;
    vimeo: {
      byline: boolean;
      portrait: boolean;
      title: boolean;
      speed: boolean;
      transparent: boolean;
      customControls: boolean;
      premium: boolean;
    };
    youtube: {
      rel: number;
      showinfo: number;
      iv_load_policy: number;
      modestbranding: number;
      customControls: boolean;
      noCookie: boolean;
    };
    tooltips: {
      controls: boolean;
      seek: boolean;
    };
    i18n: i18nConfig;
    poster?: string;
    provider_video_id?: string;
    provider?: string;
    id: number;
    title: string;
    blockAttributes: {
      type: string;
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
      mutedOverlay?: import("../../../../interfaces").MutedOverlay;
      constructor: Function;
      toString(): string;
      toLocaleString(): string;
      valueOf(): Object;
      hasOwnProperty(v: PropertyKey): boolean;
      isPrototypeOf(v: Object): boolean;
      propertyIsEnumerable(v: PropertyKey): boolean;
    };
    src: string;
    ajaxProgress: boolean;
    analytics: boolean;
    mutedPreview: {
      enabled: boolean;
    };
    chapters: prestoChapters;
    controls: string[];
    settings: string[];
    hideControls: boolean;
    captions: {
      /**
       * This element
       */
      active: boolean;
      language: string;
      update: boolean;
    };
    logo: string;
    logo_width: number;
    hide_logo: boolean;
    lazy_load_youtube: boolean;
    save_player_position: boolean;
    sticky_scroll: boolean;
    autoplay: boolean;
    playsInline: boolean;
  };
  /**
   * Get player data
   * @returns object
   */
  getPlayerData(): {
    selector: HTMLElement | HTMLVideoElement;
    src: string;
    preload: string;
    provider: string;
    config: {
      iconUrl?: string;
      invertTime: boolean;
      storage: {
        enabled?: boolean;
        key?: string;
      };
      resetOnEnd: boolean;
      vimeo: {
        byline: boolean;
        portrait: boolean;
        title: boolean;
        speed: boolean;
        transparent: boolean;
        customControls: boolean;
        premium: boolean;
      };
      youtube: {
        rel: number;
        showinfo: number;
        iv_load_policy: number;
        modestbranding: number;
        customControls: boolean;
        noCookie: boolean;
      };
      tooltips: {
        controls: boolean;
        seek: boolean;
      };
      i18n: i18nConfig;
      poster?: string;
      provider_video_id?: string;
      provider?: string;
      id: number;
      title: string;
      blockAttributes: {
        type: string;
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
        mutedOverlay?: import("../../../../interfaces").MutedOverlay;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
      };
      src: string;
      ajaxProgress: boolean;
      analytics: boolean;
      mutedPreview: {
        enabled: boolean;
      };
      chapters: prestoChapters;
      controls: string[];
      settings: string[];
      hideControls: boolean;
      captions: {
        /**
         * This element
         */
        active: boolean;
        language: string;
        update: boolean;
      };
      logo: string;
      logo_width: number;
      hide_logo: boolean;
      lazy_load_youtube: boolean;
      save_player_position: boolean;
      sticky_scroll: boolean;
      autoplay: boolean;
      playsInline: boolean;
    };
    isAdmin: boolean;
  };
  /**
   * Create the video player
   * @returns void
   */
  createPlayer(): Promise<any>;
  /**
   * Handle muted preview change
   * @returns void
   */
  handleMutedPreview(val: any): void;
  /**
   * Update player state with events
   */
  handlePlayerEvents(player: any): void;
  /**
   * Handle lazy load changes
   * @returns
   */
  handleLazyLoadChange(): void;
  /**
   * Should we lazy load the video?
   * @returns boolean
   */
  shouldLazyLoadVideo(): boolean;
  /**
   * Initialize data
   */
  componentWillLoad(): void;
  /**
   * Create Player
   */
  componentDidLoad(): Promise<void>;
  /**
   * Init player
   * @returns plyr object
   */
  initialize(): Promise<any>;
  /**
   * On player reload
   * @param ev
   */
  onReload(action: any): Promise<void>;
  /**
   * Sync video height as height changes
   */
  syncVideoHeight(): Promise<void>;
  /**
   * Render the muted overlay
   * @returns JSX
   */
  renderMutedOverlay(): any;
  /**
   * Render the video
   * @returns JSX
   */
  renderVideo(): any;
  /**
   * Render email overlay
   * @returns JSX
   */
  renderEmailOverlay(): any;
  /**
   * Render email overlay
   * @returns JSX
   */
  renderActionBar(): any;
  stickyPositionClass(): string;
  /**
   * Render the component
   * @returns JSX
   */
  render(): any;
}
