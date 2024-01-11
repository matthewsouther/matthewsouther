import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-music")
export class Music extends LitElement {
  render() {
    return html`
      <h2>Music</h2>
      <p>
        Matthew Souther is a songwright, a piano hack, and an iconoclastic swirl
        of contradictions. Exuberant and plaintive; bombastic and
        self-deprecating; soaked through with jazz and other musical traditions
        but compulsively irreverant -- his songs are paeans to complexity. Ever
        fond of folk idioms, willing to chase fool's gold, offering false
        pretenses, and indulging in anachronism, he offers his tunes with a wink
        and a nod, then offers a glimpse at something resembling humanity.
      </p>
      <p>
        Matthew is also a trumpet player and erstwhile composer, having studied
        music composition at Bennington College.
      </p>
      <p>He has contributed to:</p>
      <ul>
        <li>
          <a href="https://ilgato.com/">il gato</a>
        </li>
        <li>
          <a href="https://pickpocketensemble.com/">the pickPocket ensemble</a>
        </li>
      </ul>
      <p>Here are some songs he wrote and recorded circa 2009:</p>
      <h3>The Clams</h3>
      <audio controls>
        <source
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/the_clams.mp3"
          type="audio/mpeg"
        />
      </audio>
      <h3>The Woodcock's Flight</h3>
      <audio controls>
        <source
          src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/the_woodcocks_flight.mp3"
          type="audio/mpeg"
        />
      </audio>
      <p>
        Some of his open mic from 2023 is
        <a href="https://www.youtube.com/@MatthewSouther">up on YouTube</a> as
        well.
      </p>
    `;
  }

  static styles = css`
    h2 {
      color: indianred;
    }
  `;
}
