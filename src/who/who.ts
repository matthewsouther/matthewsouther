import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-who')
export class Who extends LitElement {
  render() {
    return html`
      <p>...is a musician in Portland, Oregon. Or is he?</p>
      <p>
        Anyway, he works on Salesforce stuff for
        <a href="https://lisc.org">
          Local Initiatives Support Corporation (LISC)
        </a>.
      </p>
      <p>
        And he's Otto and Asa's papa. Married to
        <a href="https://educatoremily.com">Emily</a>.
      </p>
    `;
  }
}