import { LitElement, html } from 'lit';
import '../../components/nav-store/nav-store';
import styles from './styles';

const devicesImage = new URL(
  '../../../../assets/devices-app.png',
  import.meta.url
).href;

export class HomePage extends LitElement {
  static styles = styles;

  render() {
    return html`
      <container-component alignItems="center">
        <article class="content">
          <ds-heading priority="2" size="large">Guia de tecidos</ds-heading>

          <ds-paragraph
            >Deseja confeccionar uma roupa mas não sabe quais os tecidos mais
            indicados nem quantos metros comprar?</ds-paragraph
          >
          <ds-paragraph
            >Baixe o app e confira indicações de tecidos de acordo o modelo da
            roupa e a ocasião que você deseja usa-la:</ds-paragraph
          >

          <nav-store></nav-store>
        </article>
        <aside class="content">
          <img
            src=${devicesImage}
            alt="Smartphones com o aplicativo da Lena Melo costureira"
          />
        </aside>
      </container-component>
    `;
  }
}
