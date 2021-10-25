import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  nav {
    display: flex;
    padding: var(--spacing-inset-xs) 0;
  }

  a:first-of-type {
    margin-right: var(--spacing-outset-xs);
  }

  img {
    display: block;
  }
`;
