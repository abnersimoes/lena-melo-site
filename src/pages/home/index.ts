import { LitElement, html } from 'lit';
import styles from './styles';

export class HomePage extends LitElement {
  static styles = styles;

  render() {
    return html`
      <container-component>
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
        </article>
        <aside class="content"></aside>
      </container-component>
    `;
  }
}
