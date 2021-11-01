import { LitElement, html } from 'lit';
import { whatsapp, facebook, instagram } from '../../constants/external-links';
import styles from './styles';
import './icon-whatsapp/icon-whatsapp-component';
import './icon-facebook/icon-facebook-component';
import './icon-instagram/icon-instagram-component';

export class NavSocialComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <nav>
        <a
          href=${whatsapp}
          title="Conversar com Lena Melo pelo WhatsApp"
          target="_blank"
        >
          <icon-whatsapp></icon-whatsapp>
        </a>

        <a
          href=${facebook}
          title="Acesar o perfil de Lena Melo no Facebook"
          target="_blank"
        >
          <icon-facebook></icon-facebook>
        </a>

        <a
          href=${instagram}
          title="Acessar o perfil de Lena Melo no Instagram"
          target="_blank"
        >
          <icon-instagram></icon-instagram>
        </a>
      </nav>
    `;
  }
}
