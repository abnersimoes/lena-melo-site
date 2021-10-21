import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './styles';

const logo = new URL('../../../../assets/logo-horizontal.svg', import.meta.url)
  .href;

export class HeaderComponent extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = styles;

  render() {
    return html`
      <header>
        <container-component
          justify-content="space-between"
          align-items="center"
        >
          <div class="logo">
            <img src=${logo} alt="logo" />
          </div>

          <nav>
            <ds-button outline>Política de privacidade</ds-button>
            <!-- <a href="/">Home</a>
            <a href="/politica-de-privacidade">Política de privacidade</a>
            <a href="/a-bu-ble">Qualquer coisa</a> -->
          </nav>
        </container-component>
      </header>
    `;
  }
}
