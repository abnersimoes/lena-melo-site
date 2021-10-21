import { css } from 'lit';

export default css`
  :host {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-inset-sm);
    padding-right: var(--spacing-inset-sm);
    display: flex;
    flex-flow: row wrap;
  }

  :host([align-items='flex-start']) {
    align-items: flex-start;
  }

  :host([align-items='flex-end']) {
    align-items: flex-end;
  }

  :host([align-items='center']) {
    align-items: center;
  }

  :host([align-items='stretch']) {
    align-items: stretch;
  }

  :host([align-items='baseline']) {
    align-items: baseline;
  }

  :host([justify-content='flex-start']) {
    justify-content: flex-start;
  }

  :host([justify-content='flex-end']) {
    justify-content: flex-end;
  }

  :host([justify-content='center']) {
    justify-content: center;
  }

  :host([justify-content='space-between']) {
    justify-content: space-between;
  }

  :host([justify-content='space-around']) {
    justify-content: space-around;
  }
`;
