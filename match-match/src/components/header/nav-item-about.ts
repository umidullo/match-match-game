import './nav-item.scss';
import { BaseComponent } from '../base-component';

export class NavItemAbout extends BaseComponent {
  constructor() {
    super('a', ['nav__item']);

    this.element.innerHTML = `
      <img src="./q.png" alt="icon" />
      <p>about</p>
    `;
    this.element.setAttribute('href', '#/about');
  }
}
