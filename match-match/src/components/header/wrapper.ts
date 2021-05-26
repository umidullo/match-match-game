import './wrapper.scss';

import { BaseComponent } from '../base-component';

export class Wrapper extends BaseComponent {
  constructor() {
    super('div', ['wrapper']);

    this.element.innerHTML = `
      <div class="logo">
        <span>match</span>
        <span class="inverted">match</span>
      </div>
    `;
  }
}
