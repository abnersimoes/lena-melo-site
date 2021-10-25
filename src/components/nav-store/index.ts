import { LitElement, html } from 'lit';
import { linkPlayStore, linkAppStore } from '../../constants/external-links';
import styles from './styles';

const buttonPlayStore = new URL(
  '../../../../assets/button-play-store.svg',
  import.meta.url
).href;

const buttonAppStore = new URL(
  '../../../../assets/button-app-store.svg',
  import.meta.url
).href;

export class NavStore extends LitElement {
  static styles = styles;

  render() {
    return html`
      <nav>
        <a
          href=${linkPlayStore}
          title="Baixar app na Play Store"
          target="_blank"
        >
          <img
            src=${buttonPlayStore}
            alt="Botão de download do app na Play Store"
          />
        </a>

        <a href=${linkAppStore} title="Baixar app na App Store" target="_blank">
          <img
            src=${buttonAppStore}
            alt="Botão de download do app na App Store"
          />
        </a>
      </nav>
    `;
  }
}
