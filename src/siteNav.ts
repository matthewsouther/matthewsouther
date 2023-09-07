import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('site-nav')
export class SiteNav extends LitElement {
  @property({type: Boolean})
  isMenuOpen = false;

  handleMenuClick = () => {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu = () => {
    this.isMenuOpen = false;
  }

  render() {
    return html`
      <div class="wrapper">
        <span class="siteName">
          <a href="/"><h1>Matthew Souther</h1></a>
        </span>
        <span class="menuButton">
          <button @click="${this.handleMenuClick}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </button>
        </span>
        <span class="${this.isMenuOpen ? 'navOptions showMenu' : 'navOptions'}">
          <a href="/who" @click="${this.closeMenu}">Who?</a>
          <a href="/music" @click="${this.closeMenu}">Music</a>
          <a href="/work" @click="${this.closeMenu}">Work</a>
          <a href="/etc" @click="${this.closeMenu}">Etc.</a>
        </span>
      </div>
    `
  }

  static styles = css`
    .wrapper {
      display: grid;
      grid-template-columns: auto auto;
    }

    h1 {
      font-family: 'Acme';
      font-size: 42px;
      color: darksalmon;
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    button {
      border: none;
      background-color: transparent;
    }

    button:hover {
      color: white;
      background-color: darksalmon;
    }

    button:hover svg path {
      fill: white;
    }

    .menuButton {
      display: flex;
      align-items: center;
      justify-self: end;
    }

    .navOptions {
      display: none;
    }

    .navOptions.showMenu {
      display: grid;
      grid-template-columns: auto;
      grid-column: 1 / span 2;
    }

    .navOptions a {
      margin: auto;
      text-align: center;
      padding: 3px;
      width: 100%;
      color: black;
    }

    .navOptions a:hover {
      color: white;
      background-color: darksalmon;
    }

    @media only screen and (min-width: 820px) {
      /* For desktop */
      .navOptions {
        display: grid;
        grid-template-columns: repeat(4, 80px);
        grid-column: 2;
        gap: 5px;
      }
      .navOptions.showMenu {
        grid-template-columns: repeat(4, 80px);
        grid-column: 2;
        gap: 5px;
      }
      .navOptions a {
        display: flex;
        align-items: end;
        text-align: initial;
        margin: initial;
      }
      .menuButton { display: none; }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'site-nav': SiteNav
  }
}
