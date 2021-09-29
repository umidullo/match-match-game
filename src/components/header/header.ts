import './header.scss';
import { BaseComponent } from '../base-component';
import { Navigation } from './navigation';
import { GameButton } from './game-button';
import { User } from './user';

export class Header extends BaseComponent {
  wrapper: HTMLElement | null;

  gameButton: GameButton;

  navigation: Navigation;

  user: User;

  constructor(readonly rootElement: HTMLElement) {
    super('header', ['header']);

    this.wrapper = null;

    this.gameButton = new GameButton();
    this.navigation = new Navigation();
    this.user = new User();

    this.rootElement.appendChild(this.element);

    this.init();
  }

  init() {
    this.wrapper = this.create(
      'div',
      'wrapper',
      `
      <div class="logo">
        <span>match</span>
        <span class="inverted">match</span>
      </div>
      `,
      this.element,
    );

    this.wrapper.appendChild(this.navigation.element);
    this.wrapper.appendChild(this.gameButton.element);
    this.wrapper.appendChild(this.user.element);
  }
}
