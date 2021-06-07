import { newSpecPage } from '@stencil/core/testing';
import { PrestoCTAOverlay } from '../presto-cta-overlay';
import { h } from '@stencil/core';
describe('presto-cta-overlay', () => {
  it('renders without overlay by default', async () => {
    const page = await newSpecPage({
      components: [PrestoCTAOverlay],
      html: `<presto-cta-overlay></presto-cta-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <presto-cta-overlay></presto-cta-overlay>
    `);
  });
  it('Does not render overlay if not enabled', async () => {
    const page = await newSpecPage({
      components: [PrestoCTAOverlay],
      template: () => (h("presto-cta-overlay", { preset: {
          email_collection: {
            enabled: false,
          },
        }, currentTime: 0, duration: 0 })),
    });
    expect(page.root).toEqualHtml(`
      <presto-cta-overlay></presto-cta-overlay>
    `);
  });
  it('Renders overlay if enabled and time is 0', async () => {
    const page = await newSpecPage({
      components: [PrestoCTAOverlay],
      template: () => (h("presto-cta-overlay", { preset: {
          email_collection: {
            enabled: true,
          },
        }, currentTime: 0, duration: 0 })),
    });
    expect(page.root).toEqualHtml(`
      <presto-cta-overlay>
        <presto-cta-overlay-ui class="cta-overlay"></presto-cta-overlay-ui>
      </presto-cta-overlay>
    `);
  });
  it('Renders overlay if percentage has passed', async () => {
    const page = await newSpecPage({
      components: [PrestoCTAOverlay],
      template: () => (h("presto-cta-overlay", { preset: {
          email_collection: {
            enabled: true,
            percentage: 50,
          },
        }, currentTime: 50, duration: 100 })),
    });
    expect(page.root).toEqualHtml(`
      <presto-cta-overlay>
        <presto-cta-overlay-ui class="cta-overlay"></presto-cta-overlay-ui>
      </presto-cta-overlay>
    `);
  });
  it('Does not render overlay if percentage has not passed', async () => {
    const page = await newSpecPage({
      components: [PrestoCTAOverlay],
      template: () => (h("presto-cta-overlay", { preset: {
          email_collection: {
            enabled: true,
            percentage: 50,
          },
        }, currentTime: 49, duration: 100 })),
    });
    expect(page.root).toEqualHtml(`
      <presto-cta-overlay></presto-cta-overlay>
    `);
  });
});
