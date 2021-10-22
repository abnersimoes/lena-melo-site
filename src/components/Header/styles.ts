import { css } from 'lit';

export default css`
  :host {
    display: flex;
  }

  header {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-width: 17.5rem;
    display: flex;
  }

  .logo h1 {
    visibility: hidden;
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav ds-button-link {
    margin-right: var(--spacing-outset-xs);
  }
`;
