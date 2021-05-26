import './button.scss';
import { BaseComponent } from '../base-component';

export class UserButton extends BaseComponent {
  constructor() {
    super('button', ['button']);
    this.element.innerHTML = 'register new player';
  }
}
