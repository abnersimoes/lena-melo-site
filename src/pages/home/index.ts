import { LitElement, html } from 'lit';
import '../../shared/nav-store/nav-store';
import { title } from '../../constants/SEO';
import styles from './styles';

const devicesImage2x = new URL(
  '../../../../assets/devices-app@2x.png',
  import.meta.url
).href;

export class HomePage extends LitElement {
  static styles = styles;

  requestUpdate() {
    super.requestUpdate();
    document.title = title.home;
  }

  render() {
    return html`
      <container-component alignItems="center">
        <article class="content info">
          <ds-heading priority="2" size="large">Guia de tecidos App</ds-heading>

          <ds-paragraph size="large"
            >Deseja confeccionar uma roupa mas não sabe quais os tecidos mais
            indicados nem quantos metros comprar?</ds-paragraph
          >
          <ds-paragraph size="large"
            >Baixe o app e confira indicações de tecidos de acordo o modelo da
            roupa e a ocasião que você deseja usa-la:</ds-paragraph
          >

          <nav-store></nav-store>
        </article>
        <aside class="content image">
          <img
            src=${devicesImage2x}
            alt="Smartphones com o aplicativo da Lena Melo costureira"
          />
        </aside>
      </container-component>
    `;
  }
}
