import { LitElement, html } from 'lit';

export class HomePage extends LitElement {
  render() {
    return html`
      <section>
        <container-component>
          <h2>HomePage</h2>
        </container-component>
      </section>
    `;
  }
}
