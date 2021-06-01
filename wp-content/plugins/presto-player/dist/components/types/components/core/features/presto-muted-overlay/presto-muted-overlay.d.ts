import { EventEmitter } from '../../../../stencil-public-runtime';
import { MutedOverlay } from '../../../../interfaces';
export declare class PrestoMutedOverlay {
  mutedPreview: boolean;
  mutedOverlay: MutedOverlay;
  playVideo: EventEmitter<void>;
  render(): any;
}
