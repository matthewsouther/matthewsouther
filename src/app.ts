import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('lit-site')
export class Site extends LitElement {
  render() {
    return html`
      <site-nav></site-nav>
      <slot></slot>
    `;
  }
}