import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  nav {
    display: flex;
  }

  a {
    width: 3rem;
    height: 3rem;
    fill: var(--color-primary-pure);
    /* border: var(--border-width-thin) solid var(--color-primary-pure); */
    border-radius: var(--border-radius-circular);
    padding: var(--spacing-inset-xxs);
    margin: 0 var(--spacing-outset-xxs);
    display: block;
    box-sizing: border-box;
    transition: all var(--motion-duration-level-fast) ease-out 0s;
  }

  a:hover {
    fill: var(--color-neutral-high-light);
    background-color: var(--color-primary-pure);
  }
`;
