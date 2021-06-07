import { EventEmitter } from '../../../../stencil-public-runtime';
import { presetAttributes, i18nConfig } from '../../../../interfaces';
export declare class PrestoCTAOverlay {
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
  skipped: boolean;
  percentagePassed: number;
  ended: boolean;
  playVideo: EventEmitter<void>;
  rewatchVideo: EventEmitter<void>;
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
  handlePercentagePassed(): void;
  handlePercentagePassedChange(): void;
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
   * Skip email collection
   */
  skip(): void;
  rewatch(): void;
  /**
   * Maybe render
   * @returns JSX
   */
  render(): any;
}
