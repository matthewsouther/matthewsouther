import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-who")
export class Who extends LitElement {
  render() {
    return html`
      <p>
        ...is a musician in Portland, Oregon.
        <a href="/music">Check out his music!</a>
      </p>
      <p>
        He works on Salesforce stuff for
        <a href="https://lisc.org">
          Local Initiatives Support Corporation (LISC) </a
        >.
      </p>
      <p>
        And he's Otto and Asa's papa. Married to
        <a href="https://educatoremily.com">Emily</a>. Together, Matthew and
        Emily co-host a house concert series,
        <a href="https://stickyplum.com">Sticky Plum Concerts</a>, at their home
        in the Cully neighborhood.
      </p>
    `;
  }
}
