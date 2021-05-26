import './button.scss';
import { BaseComponent } from '../base-component';

export class GameButton extends BaseComponent {
  constructor() {
    super('button', ['button']);
    this.element.innerHTML = 'start game';
  }
}
