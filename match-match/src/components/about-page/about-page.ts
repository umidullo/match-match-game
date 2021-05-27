import './about-page.scss';
import { BaseComponent } from '../base-component';

export class AboutPage extends BaseComponent {
  title: HTMLElement | null;

  blockWrap: HTMLElement | null;

  constructor() {
    super('div', ['about-page']);

    this.title = null;
    this.blockWrap = null;

    this.init();
  }

  init() {
    this.title = this.create('h2', 'title', 'How to play?', this.element);
    this.blockWrap = this.create(
      'div',
      'block',
      [
        this.create(
          'div',
          'block__item',
          [
            this.create(
              'div',
              'desciption',
              [
                this.create('span', '', '1', this.element),
                this.create(
                  'p',
                  '',
                  'Register new player in game',
                  this.element,
                ),
              ],
              this.element,
            ),
            this.create(
              'div',
              'img-div',
              `
            <img src="./descr1.png" class="illustration"></img>
            `,
              this.element,
            ),
          ],
          this.element,
        ),
        this.create(
          'div',
          'block__item',
          [
            this.create(
              'div',
              'desciption',
              [
                this.create('span', '', '2', this.element),
                this.create(
                  'p',
                  '',
                  'Configure your game settings',
                  this.element,
                ),
              ],
              this.element,
            ),
            this.create(
              'div',
              'img-div',
              `
            <img src="./descr2.png" class="illustration"></img>
            `,
              this.element,
            ),
          ],
          this.element,
        ),
        this.create(
          'div',
          'block__item',
          [
            this.create(
              'div',
              'desciption',
              [
                this.create('span', '', '3', this.element),
                this.create(
                  'p',
                  '',
                  'Start you new game! Remember card <br> positions and match it before times up.',
                  this.element,
                ),
              ],
              this.element,
            ),
            this.create(
              'div',
              'img-div',
              `
            <img src="./descr3.png" class="illustration"></img>
            `,
              this.element,
            ),
          ],
          this.element,
        ),
      ],
      this.element,
    );
  }
}
