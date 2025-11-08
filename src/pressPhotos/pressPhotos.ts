import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-press-photos")
export class PressPhotos extends LitElement {
  render() {
    return html`
      <h2>Press Photos</h2>
      <p>
        Photos by <a href="https://www.instagram.com/earthetc">Andrew Thomas</a>
      </p>
      <div>
        <img
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/MATTHEW02.jpg"
        />
        <img
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/MATTHEW03.jpg"
        />
        <img
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/MATTHEW06.jpg"
        />
        <img
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/MATTHEW07.jpg"
        />
        <img
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/MATTHEW08.jpg"
        />
      </div>
    `;
  }
  static styles = css`
    h2 {
      color: indianred;
    }
    img {
      width: 500px;
      max-width: 100%;
    }
  `;
}
