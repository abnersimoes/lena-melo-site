import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Header } from '..';
import '../wc-header';

describe('Header', () => {
  let component: Header;

  beforeEach(async () => {
    component = await fixture(html`<wc-header></wc-header>`);
  });

  it('renders a h1', () => {
    const h1 = component.shadowRoot!.querySelector('h1')!;

    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
