import { LitElement, html } from 'lit';
import { home } from '../../constants/routes';
import { title } from '../../constants/SEO';
import styles from './styles';

export class NotFoundPage extends LitElement {
  static styles = styles;

  requestUpdate() {
    super.requestUpdate();
    document.title = title.notFound;
  }

  render() {
    return html`
      <container-component justifyContent="center" alignItems="flex-start">
        <section>
          <ds-heading>Página não encontrada!</ds-heading>
          <ds-paragraph
            >O endereço <b>${window.location.pathname}</b> não é
            válido</ds-paragraph
          >
          <ds-button-link
            href=${home.path}
            title="Voltar para a Página Inicial"
            raised
          >
            Página inicial
          </ds-button-link>
        </section>
      </container-component>
    `;
  }
}
