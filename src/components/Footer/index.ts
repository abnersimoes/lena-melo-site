import { LitElement, html } from 'lit';
import { privacyPolicy } from '../../constants/routes';
import '../nav-social/nav-social';
import styles from './styles';

export class FooterComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <footer>
        <container-component justifyContent="space-between" alignItems="center">
          <div class="footer-left">
            <a
              href=${privacyPolicy.path}
              title="Política de privacidade do Aplicativo"
            >
              <ds-paragraph size="small">
                Política de privacidade do App
              </ds-paragraph>
            </a>
            <ds-paragraph size="small">
              © 2021, Desenvolvido por Abner Simões
            </ds-paragraph>
          </div>

          <div class="footer-right">
            <nav-social></nav-social>
          </div>
        </container-component>
      </footer>
    `;
  }
}
