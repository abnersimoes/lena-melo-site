import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './styles';

const logo = new URL('../../../../assets/open-wc-logo.svg', import.meta.url)
  .href;

export class HeaderComponent extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = styles;

  render() {
    return html`
      <header>
        <div>
          <img src=${logo} alt="logo" />
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/politica-de-privacidade">Política de privacidade</a>
          <a href="/a-bu-ble">Qualquer coisa</a>
        </nav>
      </header>
    `;
  }
}
