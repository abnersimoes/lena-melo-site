import { css } from 'lit';

export default css`
  :host {
    width: 100%;
  }

  :host > div {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-inset-sm);
    padding-right: var(--spacing-inset-sm);
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
  }

  .align-items-flex-start {
    align-items: flex-start;
  }

  .align-items-flex-end {
    align-items: flex-end;
  }

  .align-items-center {
    align-items: center;
  }

  .align-items-stretch {
    align-items: stretch;
  }

  .align-items-baseline {
    align-items: baseline;
  }

  .justify-content-flex-start {
    justify-content: flex-start;
  }

  .justify-content-flex-end {
    justify-content: flex-end;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-space-between {
    justify-content: space-between;
  }

  .justify-content-space-around {
    justify-content: space-around;
  }
`;
