import './field.scss';
import { BaseComponent } from '../base-component';

export class Field extends BaseComponent {
  constructor(readonly body: HTMLElement) {
    super('main', ['field']);

    this.body.appendChild(this.element);
  }
}
