import './user.scss';

import { BaseComponent } from '../base-component';

export class User extends BaseComponent {
  registerBtn: HTMLElement | null;

  avatar: HTMLElement | null;

  constructor() {
    super('div', ['user-field']);

    this.registerBtn = null;
    this.avatar = null;

    this.init();
  }

  init() {
    this.registerBtn = this.create(
      'button',
      'button register-button',
      'register new player',
      this.element,
    );

    this.avatar = this.create('div', 'avatar', null, this.element);
  }
}
