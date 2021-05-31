import './game.scss';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `
      <span class="minute">00</span>
      <span class="separator">:</span>
      <span class="secund">00</span>
    `;
  }
}
