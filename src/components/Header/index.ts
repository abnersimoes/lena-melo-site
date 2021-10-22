import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './styles';
import { home, privacyPolicy } from '../../constants/routes';

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
          <a href=${home.path} title="Página inicial" class="logo">
            <img src=${logo} alt="logo" />
          </a>

          <nav>
            <ds-button-link to=${privacyPolicy.path} size="small">
              Política de privacidade
            </ds-button-link>
            <ds-button raised>Baixar App</ds-button>
          </nav>
        </container-component>
      </header>
    `;
  }
}
