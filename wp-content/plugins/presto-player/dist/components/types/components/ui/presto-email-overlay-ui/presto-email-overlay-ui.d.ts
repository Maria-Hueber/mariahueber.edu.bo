import { EventEmitter } from '../../../stencil-public-runtime';
export declare class EmailOverlayUI {
  private textInput?;
  /**
   * Props
   */
  headline: string;
  defaultHeadline: string;
  bottomText: string;
  buttonText: string;
  placeholder: string;
  allowSkip: boolean;
  borderRadius: number;
  skipText: string;
  isLoading: boolean;
  errorMessage: string;
  direction?: 'rtl';
  /**
   * State
   */
  email: string;
  /**
   * Events
   */
  submitForm: EventEmitter<object>;
  skip: EventEmitter<object>;
  /**
   * Handle form submission
   * @param e Event
   */
  handleSubmit(e: any): void;
  componentDidLoad(): void;
  /**
   * Handle input change
   * @param e Event
   */
  handleChange(e: any): void;
  render(): any;
}
