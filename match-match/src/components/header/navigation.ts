import './navigation.scss';
import { BaseComponent } from '../base-component';

export class Navigation extends BaseComponent {
  about: HTMLElement | null;

  settings: HTMLElement | null;

  score: HTMLElement | null;

  constructor() {
    super('nav', ['nav']);
    this.element.addEventListener('click', this.clickHandler);

    this.about = null;
    this.settings = null;
    this.score = null;

    this.init();
  }

  init() {
    this.about = this.create(
      'a',
      'nav__item nav__item_active',

      `<img src="./q.png" alt="icon" />
        <p>about</p>`,
      this.element,
    );
    this.score = this.create(
      'a',
      'nav__item',

      `<img src="./stars.png" alt="icon" />
        <p>score</p>`,
      this.element,
    );
    this.settings = this.create(
      'a',
      'nav__item',

      `<img src="./settings.png" alt="icon" />
        <p>settings</p>`,
      this.element,
    );

    this.about.setAttribute('href', '#/');
    this.score.setAttribute('href', '#/score');
    this.settings.setAttribute('href', '#/settings');
  }

  clickHandler = (e: Event) => {
    const el = (e.target as HTMLElement).closest('.nav__item');
    if (!el) return;
    this.about?.classList.remove('nav__item_active');
    this.settings?.classList.remove('nav__item_active');
    this.score?.classList.remove('nav__item_active');
    el.classList.add('nav__item_active');
  };
}
