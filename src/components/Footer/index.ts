import { LitElement, html } from 'lit';
import { privacyPolicy } from '../../constants/routes';
import styles from './styles';

export class FooterComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <footer>
        <container-component alignItems="center">
          <div class="footer-left">
            <a href=${privacyPolicy.path} title="Política de privacidade">
              <ds-paragraph size="small">
                Política de privacidade
              </ds-paragraph>
            </a>
            <ds-paragraph size="small">
              © 2021, Desenvolvido por Abner Simões
            </ds-paragraph>
          </div>
        </container-component>
      </footer>
    `;
  }
}
