import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import styles from './styles';
import { home } from '../../constants/routes';
import { playStore, appStore } from '../../constants/external-links';
import { getIsMobile, getIsAndroid } from '../../helpers/browser';

const logo = new URL('../../../../assets/logo-horizontal.svg', import.meta.url)
  .href;

export class HeaderComponent extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = styles;

  _redirectToStore() {
    const isAndroid = getIsAndroid();
    const store = isAndroid ? playStore : appStore;

    window.open(store, '_blank');
  }

  _isMobile(): boolean {
    return getIsMobile();
  }

  _renderDownloadButton() {
    if (this._isMobile()) {
      return html`
        <ds-button @on-click=${() => this._redirectToStore()} raised>
          Baixar App
        </ds-button>
      `;
    }
    return null;
  }

  render() {
    return html`
      <header>
        <container-component justifyContent="space-between" alignItems="center">
          <a
            href=${home.path}
            title="Página inicial"
            class=${clsx('logo', { isMobile: this._isMobile() })}
          >
            <img src=${logo} alt="logo" />
            <h1>Lena Melo - Costureira</h1>
          </a>

          <nav>${this._renderDownloadButton()}</nav>
        </container-component>
      </header>
    `;
  }
}
