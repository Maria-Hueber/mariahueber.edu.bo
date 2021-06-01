import { ActionBarConfig, YoutubeConfig } from '../../../../interfaces';
export declare class PrestoActionBar {
  el: HTMLElement;
  config: ActionBarConfig;
  currentTime: number;
  duration: number;
  direction?: 'rtl';
  youtube?: YoutubeConfig;
  show: boolean;
  youtubeRenderKey: number;
  componentWillLoad(): void;
  handleButtonCountChange(newVal: any, oldVal: any): void;
  /**
   * Wait for duration to start before checking time
   * @returns void
   */
  handleDuration(): void;
  youtubeButton(): any;
  customButton(): any;
  render(): any;
}
