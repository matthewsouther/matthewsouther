import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('custom-header')
export class MyHeader extends LitElement {

  render() {
    return html`
      <div>
        Header
      </div>
    `
  }

  static styles = css`
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-header': MyHeader
  }
}
