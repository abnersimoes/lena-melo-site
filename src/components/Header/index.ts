import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './styles';
import { home } from '../../constants/routes';

const logo = new URL('../../../../assets/logo-horizontal.svg', import.meta.url)
  .href;

export class HeaderComponent extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = styles;

  render() {
    return html`
      <header>
        <container-component justifyContent="space-between" alignItems="center">
          <a href=${home.path} title="Página inicial" class="logo">
            <img src=${logo} alt="logo" />
            <h1>Lena Melo - Costureira</h1>
          </a>

          <nav>
            <ds-button raised>Baixar App</ds-button>
          </nav>
        </container-component>
      </header>
    `;
  }
}
