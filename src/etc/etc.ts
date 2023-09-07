import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-etc")
export class Etc extends LitElement {
  render() {
    return html`
      <h2>Etc.</h2>
      <p>Speaks a bit of Danish.</p>
      <p>
        Built this site with <a href="https://lit.dev/">Lit</a>, hosted on
        <a href="https://www.netlify.com/">Netlify</a>. See
        <a href="https://github.com/matthewsouther/matthewsouther">repo</a>.
      </p>
    `;
  }

  static styles = css`
    h2 { color: indianred; }
  `
}
