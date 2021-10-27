import { css } from 'lit';

export default css`
  :host {
    display: flex;
  }

  footer {
    width: 100%;
    padding: var(--spacing-inset-sm) 0;
    margin-top: var(--spacing-outset-sm);
  }

  .footer-left,
  .footer-right {
    width: 100%;
    text-align: center;
  }

  .footer-left a {
    display: block;
    color: var(--color-primary-dark);
    margin: var(--spacing-outset-sm) 0 var(--spacing-outset-xs) 0;
  }

  .footer-left nav-social {
    justify-content: center;
  }

  @media only screen and (min-width: 480px) {
  }

  /* @media only screen and (min-width: 600px) { */
  @media only screen and (min-width: 900px) {
    footer {
      /* padding: 0; */
      margin-top: 0;
    }

    .footer-left,
    .footer-right {
      width: 50%;
    }

    .footer-left {
      text-align: left;
    }

    .footer-right {
      text-align: right;
      align-self: flex-end;
    }

    .footer-left nav-social {
      justify-content: flex-start;
      margin-bottom: 0;
    }

    .footer-left a {
      margin-bottom: var(--spacing-outset-xxs);
    }
  }

  /* @media only screen and (min-width: 900px) {
  } */
`;
