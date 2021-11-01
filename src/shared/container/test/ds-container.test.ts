import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ContainerComponent } from '../ContainerComponent';
import '../container-component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;

  beforeEach(async () => {
    component = await fixture<ContainerComponent>(
      html`<ds-container>foo</ds-container>`
    );
  });

  it('should be render a medium container by default', async () => {
    expect(component).to.exist;
    expect(component.textContent).to.equal('foo');
  });

  it('should be defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
