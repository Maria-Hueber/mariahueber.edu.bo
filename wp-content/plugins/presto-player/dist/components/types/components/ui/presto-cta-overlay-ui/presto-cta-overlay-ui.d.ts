import { EventEmitter } from '../../../stencil-public-runtime';
import { ButtonLinkObject } from '../../../interfaces';
export declare class CTAOverlayUI {
  private textInput?;
  /**
   * Props
   */
  headline: string;
  defaultHeadline: string;
  bottomText: string;
  showButton: boolean;
  buttonText: string;
  buttonType: 'link' | 'time';
  buttonLink: ButtonLinkObject;
  allowRewatch: boolean;
  allowSkip: boolean;
  skipText: string;
  rewatchText: string;
  direction?: 'rtl';
  /**
   * Events
   */
  skip: EventEmitter<void>;
  rewatch: EventEmitter<void>;
  componentDidLoad(): void;
  handleCTAClick(e: any): void;
  handleLink(): void;
  render(): any;
}
