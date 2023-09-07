import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-music')
export class Music extends LitElement {
  render() {
    return html`
      <h2>Music</h2>
      <p>
        Trumpet player and composer who dabbles in piano and vocals. Or is it the
        other way around?
      </p>
      <p>Studied music composition at Bennington College.</p>
      <p>Post-college, was a part of:</p>
      <ul>
        <li>
          <a href="ilgato.com/">il gato</a>
        </li>
        <li>
          <a href="pickpocketensemble.com/">the pickPocket ensemble</a>
        </li>
      </ul>
      <p>Here are some songs he wrote and recorded circa 2009:</p>
      <h3>The Clams</h3>
      <audio controls>
        <source src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/the_clams.mp3" type="audio/mpeg" />
      </audio>
      <h3>The Woodcock's Flight</h3>
      <audio controls>
        <source src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/the_woodcocks_flight.mp3" type="audio/mpeg" />
      </audio>
      <p>
        Some of his open mic stuff from July 2023 is
        <a href="https://www.youtube.com/@MatthewSouther">up on YouTube</a> as
        well.
      </p>
    `;
  }

  static styles = css`
    h2 { color: indianred; }
  `
}