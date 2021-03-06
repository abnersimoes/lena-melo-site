import { LitElement, html } from 'lit';
import { playStore, appStore } from '../../constants/external-links';
import styles from './styles';

const buttonPlayStore = new URL(
  '../../../../assets/button-play-store.svg',
  import.meta.url
).href;

const buttonAppStore = new URL(
  '../../../../assets/button-app-store.svg',
  import.meta.url
).href;

export class NavStoreComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <nav>
        <a href=${playStore} title="Baixar app na Play Store" target="_blank">
          <img
            src=${buttonPlayStore}
            alt="Botão de download do app na Play Store"
          />
        </a>

        <a href=${appStore} title="Baixar app na App Store" target="_blank">
          <img
            src=${buttonAppStore}
            alt="Botão de download do app na App Store"
          />
        </a>
      </nav>
    `;
  }
}
