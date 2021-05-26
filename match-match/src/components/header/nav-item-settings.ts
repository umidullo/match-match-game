import './nav-item.scss';
import { BaseComponent } from '../base-component';

export class NavItemSettings extends BaseComponent {
  constructor() {
    super('a', ['nav__item']);

    this.element.innerHTML = `
      <img src="./settings.png" alt="icon" />
      <p>score</p>
    `;
    this.element.setAttribute('href', '#/settings');
  }
}
