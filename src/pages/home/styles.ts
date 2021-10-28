import { css } from 'lit';
import { desktop } from 'ds-lena-melo';

export default css`
  .content {
    width: 100%;
    box-sizing: border-box;
  }

  .content.info {
    padding-bottom: var(--spacing-inset-sm);
    text-align: center;
    max-width: 35rem;
    margin: 0 auto;
  }

  .content.info nav-store {
    justify-content: center;
  }

  .content img {
    max-width: 100%;
    max-height: 36.25rem;
    display: block;
    margin: 0 auto;
  }

  ${desktop`
    .content {
      width: 50%;
    }

    .content.info {
      padding-right: 1rem;
      padding-bottom: 5rem;
      text-align: left;
    }

    .content.info nav-store {
      justify-content: flex-start;
    }

    .content.image {
      padding-left: 1rem;
    }

    .content img {
      margin-right: 0;
    }
  `}
`;
