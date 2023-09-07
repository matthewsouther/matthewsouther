import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-home')
export class Home extends LitElement {
  render() {
    return html`
      <img src="./src/assets/matthew.jpg" />
    `;
  }

  static styles = css`
    img {
        max-width: 100%;
    }
  `
}