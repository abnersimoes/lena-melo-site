import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../../types';
import styles from './styles';

export class Container extends LitElement {
  static styles = styles;

  @property({ type: Number }) width = 80;

  @property({ type: Types.AlignItems }) alignItems = Types.AlignItems.FlexStart;

  @property({ type: Types.JustifyContent }) justifyContent =
    Types.JustifyContent.FlexStart;

  render() {
    return html`
      <div
        class=${clsx([
          `align-items-${this.alignItems}`,
          `justify-content-${this.justifyContent}`,
        ])}
      >
        <slot></slot>
      </div>
    `;
  }
}
