import { LitElement, html } from 'lit';
import { privacyPolicy } from '../../constants/routes';
import { developer } from '../../constants/external-links';
import '../nav-social/nav-social';
import styles from './styles';

export class FooterComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <footer>
        <container-component justifyContent="space-between" alignItems="center">
          <div class="footer-left">
            <nav-social></nav-social>

            <a
              href=${privacyPolicy.path}
              title="Política de privacidade do Aplicativo"
            >
              <ds-paragraph size="small">
                Política de privacidade do App
              </ds-paragraph>
            </a>
          </div>

          <div class="footer-right">
            <ds-paragraph size="small">
              © 2021, Desenvolvido por
              <a
                href=${developer}
                title="Portfólio do desenvolvedor Abner Simões"
                target="_blank"
                >Abner Simões</a
              >
            </ds-paragraph>
          </div>
        </container-component>
      </footer>
    `;
  }
}
