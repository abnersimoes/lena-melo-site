import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';
import './design-system.js';
import './shared/container/container-component.js';
import './shared/header/header-component.js';
import './shared/footer/footer-component.js';

@customElement('app-component')
export class AppIndex extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <main role="main"></main>
      <footer-component></footer-component>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
