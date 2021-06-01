import { createStore } from '@stencil/store';
const store = createStore({
  players: {},
  config: {
    presets: {},
    branding: {},
    analytics: {},
    blockAttributes: {},
  },
  email_overlay: {
    enabled: {},
  },
});
export default store;
