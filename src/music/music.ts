import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-music")
export class Music extends LitElement {
  render() {
    return html`
      <h2>Music</h2>
      <div class="container-flex">
        <div class="column-noflex">
          <img
            class="album-cover"
            src="https://s3.us-west-1.amazonaws.com/www.matthewsouther.com/piano_songs_400.png"
          />
        </div>
        <div class="column-flex">
          <h3>Check out my debut album, Piano Songs!</h3>
          <p>
            Released November 2025
            <a
              href="https://matthewsouther.bandcamp.com/album/piano-songs"
              target="_blank"
              >on Bandcamp</a
            >.
          </p>
          <p>Or find me on social media:</p>
          <!-- Instagram icon -->
          <a
            class="icon-link"
            href="https://www.instagram.com/matthewsouther/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 512"
              class="social-media-icon"
            >
              <path
                fill-rule="nonzero"
                d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
              />
            </svg>
          </a>
          <!-- YouTube icon -->
          <a
            class="icon-link"
            href="https://www.youtube.com/@MatthewSouther"
            target="_blank"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 86.43"
              class="social-media-icon"
            >
              <defs>
                <style>
                  .cls-1,
                  .cls-2 {
                    fill-rule: evenodd;
                  }
                  .cls-2 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <title>black-and-white-youtube</title>
              <path
                class="cls-1"
                d="M121.63,18.65s-1.2-8.47-4.9-12.19c-4.67-4.89-9.91-4.92-12.31-5.21C87.24,0,61.43,0,61.43,0h0s-25.8,0-43,1.25c-2.4.29-7.63.31-12.31,5.21C2.4,10.18,1.22,18.65,1.22,18.65A187.15,187.15,0,0,0,0,38.55v9.31a187.65,187.65,0,0,0,1.22,19.9S2.42,76.23,6.09,80c4.68,4.9,10.82,4.74,13.57,5.26,9.83.94,41.78,1.22,41.78,1.22s25.83,0,43-1.27c2.41-.29,7.64-.32,12.32-5.21,3.69-3.72,4.89-12.2,4.89-12.2a187.15,187.15,0,0,0,1.22-19.9V38.54a189.26,189.26,0,0,0-1.25-19.9Z"
              />
              <polygon
                class="cls-2"
                points="48.71 59.16 48.71 24.63 81.9 41.95 48.71 59.16 48.71 59.16"
              />
            </svg>
          </a>
          <p>
            Or
            <a href="http://eepurl.com/jrt9I6" target="_blank"
              >sign up for email updates!</a
            >
          </p>
          <p><a href="/pressPhotos">Press Photos</a></p>
        </div>
      </div>
      <p>
        Matthew Souther is a songwright, a piano hack, and a swirl of thematic
        contradictions. Exuberant and plaintive; bombastic and self-deprecating;
        paying homage to jazz traditions but compulsively irreverant -- his
        songs are paeans to complexity. Ever fond of folk idioms, willing to
        chase fool's gold, offering false pretenses, and indulging in
        anachronism, he offers his tunes with a wink and a nod, then offers a
        glimpse at something resembling humanity.
      </p>
      <p>
        Matthew is also a trumpet player and erstwhile composer, having studied
        music composition at Bennington College. He has contributed to
        <a href="https://ilgato.com/">il gato</a> and
        <a href="https://pickpocketensemble.com/">the pickPocket ensemble</a>.
      </p>
      <p>
        Besides the professionally-recorded work on Matthew's
        <a href="https://matthewsouther.bandcamp.com/">Bandcamp page</a>, you
        can also listen to these home recordings from circa 2009:
      </p>
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
    `;
  }

  static styles = css`
    h2 {
      color: indianred;
    }

    .container-flex {
      display: flex; /* Enables Flexbox layout */
      gap: 1rem; /* Adds space between columns */
    }

    .column-flex {
      flex: 1; /* Makes columns take up equal available space */
    }

    .column-noflex {
      flex: 1 0;
    }

    /* For responsiveness, stack columns on smaller screens */
    @media (max-width: 768px) {
      .container-flex {
        flex-direction: column; /* Stacks columns vertically */
      }
    }

    img.album-cover {
      max-width: 100%;
    }

    a.icon-link {
      text-decoration: none;
    }

    svg.social-media-icon {
      height: 50px;
      width: 50px;
    }
  `;
}
