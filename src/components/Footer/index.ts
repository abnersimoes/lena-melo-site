import { LitElement, html } from 'lit';
import styles from './styles';

export class FooterComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <footer>
        <container-component justifyContent="flex-end" alignItems="center">
          <ds-paragraph size="small">
            © 2021, Desenvolvido por Abner Simões
          </ds-paragraph>
        </container-component>
      </footer>
    `;
  }
}
