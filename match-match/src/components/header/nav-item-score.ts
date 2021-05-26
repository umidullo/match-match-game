import './nav-item.scss';
import { BaseComponent } from '../base-component';

export class NavItemScore extends BaseComponent {
  constructor() {
    super('a', ['nav__item']);

    this.element.innerHTML = `
      <img src="./stars.png" alt="icon" />
      <p>score</p>
    `;
    this.element.setAttribute('href', '#/score');
  }
}
