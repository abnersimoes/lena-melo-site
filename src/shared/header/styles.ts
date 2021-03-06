import { css } from 'lit';
import { mobile, desktop } from 'ds-lena-melo';

export default css`
  :host {
    display: flex;
  }

  header {
    width: 100%;
    padding: var(--spacing-inset-sm) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-width: 15rem;
    margin: 0 auto var(--spacing-outset-xxxl) auto;
  }

  .logo h1 {
    opacity: 0;
    visibility: hidden;
    height: 0;
    margin: 0;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ds-button-link {
    margin-right: var(--spacing-outset-xs);
  }

  ${mobile`
    header {
      padding-bottom: var(--spacing-inset-xxxl);
    }
    
    .logo {
      margin-bottom: 0;
    }
    
    .logo.isMobile {
      margin: 0;
    }
    
    nav {
      width: auto;
      padding-top: 0;
    }
  `}

  ${desktop`
    header {
      padding-bottom: var(--spacing-inset-sm);
    }

    .logo {
      margin: 0;
    }
  `}
`;
