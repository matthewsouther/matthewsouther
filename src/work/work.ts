import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-work")
export class Work extends LitElement {
  render() {
    return html`
      <h2>Work</h2>
      <p>
        Matthew is a Salesforce developer at
        <a href="https://lisc.org">
          Local Initiatives Support Corporation (LISC) </a
        >.
      </p>
      <p>
        To find out more about his professional qualifications and the kind of
        stuff he gets into for work, try these links:
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/matthewsouther/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/matthewsouther">GitHub</a>
        </li>
        <li>
          <a
            href="https://salesforce.stackexchange.com/users/53350/matthew-souther?tab=profile"
            >Salesforce StackExchange</a
          >
        </li>
        <li>
          <a href="https://trailblazer.me/id/matthewsouther">Trailblazer.me</a>
        </li>
      </ul>
    `;
  }

  static styles = css`
    h2 {
      color: indianred;
    }
  `;
}
