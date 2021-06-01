import { Component, Prop, h, Event, State } from '@stencil/core';
import fitText from '../../../library/fittext.js';
export class EmailOverlayUI {
  /**
   * Handle form submission
   * @param e Event
   */
  handleSubmit(e) {
    this.submitForm.emit({
      email: this.email,
    });
    e.preventDefault();
  }
  componentDidLoad() {
    fitText(this.textInput, 3, {
      maxFontSize: 20,
      minFontSize: 8,
    });
  }
  /**
   * Handle input change
   * @param e Event
   */
  handleChange(e) {
    this.email = e.target.value;
  }
  render() {
    return (h("div", { class: `overlay ${this.direction === 'rtl' ? 'rtl' : ''}`, ref: el => (this.textInput = el) },
      h("div", { class: "content" },
        h("h1", null, this.headline || this.defaultHeadline),
        this.isLoading ? (h("presto-player-spinner", null)) : (h("form", { onSubmit: e => this.handleSubmit(e) },
          h("input", { type: "email", placeholder: this.placeholder, value: this.email, onInput: event => this.handleChange(event), required: true }),
          h("button", { type: "submit" }, this.buttonText || 'Play'))),
        this.errorMessage && h("p", { class: "error" }, this.errorMessage),
        this.bottomText && h("p", { innerHTML: this.bottomText }),
        !!this.allowSkip && (h("div", { class: "skip", onClick: () => {
            this.skip.emit();
          } },
          this.skipText || 'Skip',
          " \u2192")))));
  }
  static get is() { return "presto-email-overlay-ui"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["presto-email-overlay-ui.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["presto-email-overlay-ui.css"]
  }; }
  static get properties() { return {
    "headline": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Props"
      },
      "attribute": "headline",
      "reflect": false
    },
    "defaultHeadline": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "default-headline",
      "reflect": false
    },
    "bottomText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "bottom-text",
      "reflect": false
    },
    "buttonText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "button-text",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "allowSkip": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "allow-skip",
      "reflect": false
    },
    "borderRadius": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "border-radius",
      "reflect": false
    },
    "skipText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "skip-text",
      "reflect": false
    },
    "isLoading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-loading",
      "reflect": false
    },
    "errorMessage": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "error-message",
      "reflect": false
    },
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'rtl'",
        "resolved": "\"rtl\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "direction",
      "reflect": false
    }
  }; }
  static get states() { return {
    "email": {}
  }; }
  static get events() { return [{
      "method": "submitForm",
      "name": "submitForm",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Events"
      },
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      }
    }, {
      "method": "skip",
      "name": "skip",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      }
    }]; }
}
