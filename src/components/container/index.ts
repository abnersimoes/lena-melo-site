import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import * as Types from '../../types';
import styles from './styles';

export class Container extends LitElement {
  static styles = styles;

  @property({ type: Number }) width = 80;

  @property({ type: Types.AlignItems, reflect: true }) 'align-items' =
    Types.AlignItems.FlexStart;

  @property({ type: Types.JustifyContent, reflect: true }) 'justify-content' =
    Types.JustifyContent.FlexStart;

  render() {
    return html`<slot></slot>`;
  }
}
