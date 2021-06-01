import { EventEmitter } from '../../../../stencil-public-runtime';
import { presetAttributes, i18nConfig } from '../../../../interfaces';
export declare class PrestoEmailOverlay {
  player: any;
  preset: presetAttributes;
  videoId: number;
  i18n: i18nConfig;
  currentTime: number;
  duration: number;
  direction?: 'rtl';
  enabled: boolean;
  show: boolean;
  loading: boolean;
  error: string;
  playVideo: EventEmitter<void>;
  /**
   * Set email collection in local storage
   * @param status string
   */
  setStorage(status: any): void;
  /**
   * Get email collection in local storage
   * @returns status string
   */
  getStorage(): string;
  componentWillLoad(): void;
  /**
   * Find out if time is passed.
   * @returns boolean
   */
  timePassed({ current, duration, showAfter }: {
    current: number;
    duration: number;
    showAfter: number;
  }): boolean;
  handlePlayerInit(_: any, old: any): void;
  /**
   * Wait for duration to start before checking time
   * @returns void
   */
  handleDuration(): void;
  /**
   * When current time changes, check to see if we should
   * enable the overlay
   * @returns void
   */
  handleTime(): void;
  /**
   * Set enabled/disabled based on time that has passed
   */
  checkTime(): void;
  /**
   * Fetch updated nonce in case of caching
   * @returns Promise
   */
  getNonce(): Promise<Response>;
  /**
   * Submit email collection
   * @param e Event
   */
  submit(e: any): Promise<void>;
  /**
   * Skip email collection
   */
  skip(): void;
  /**
   * Maybe render
   * @returns JSX
   */
  render(): any;
}
