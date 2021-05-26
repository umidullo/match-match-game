import './header.scss';
import { BaseComponent } from '../base-component';
import { Wrapper } from './wrapper';
import { NavField } from './nav';
import { NavItemAbout } from './nav-item-about';
import { NavItemScore } from './nav-item-score';
import { NavItemSettings } from './nav-item-settings';
import { GameButton } from './game-button';
import { UserField } from './user-field';
import { UserButton } from './user-button';
import { UserAvatar } from './user-avatar';

export class Header extends BaseComponent {
  private readonly wrapper: Wrapper;
  private readonly navField: NavField;
  private navItemAbout: NavItemAbout;
  private navItemScore: NavItemScore;
  private navItemSettings: NavItemSettings;
  private gameButton: GameButton;
  private userField: UserField;
  private userButton: UserButton;
  private userAvatar: UserAvatar;

  constructor(readonly rootElement: HTMLElement) {
    super('header', ['header']);

    this.wrapper = new Wrapper();
    this.navField = new NavField();
    this.navItemAbout = new NavItemAbout();
    this.navItemScore = new NavItemScore();
    this.navItemSettings = new NavItemSettings();
    this.gameButton = new GameButton();
    this.userField = new UserField();
    this.userButton = new UserButton();
    this.userAvatar = new UserAvatar();

    this.rootElement.appendChild(this.element);
    this.element.appendChild(this.wrapper.element);
    this.wrapper.element.appendChild(this.navField.element);
    this.navField.element.appendChild(this.navItemAbout.element);
    this.navField.element.appendChild(this.navItemScore.element);
    this.navField.element.appendChild(this.navItemSettings.element);
    this.wrapper.element.appendChild(this.gameButton.element);
    this.wrapper.element.appendChild(this.userField.element);
    this.userField.element.appendChild(this.userButton.element);
    this.userField.element.appendChild(this.userAvatar.element);
  }
}
