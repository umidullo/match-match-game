import './settings-page.scss';
import { BaseComponent } from '../base-component';

export class SettingsPage extends BaseComponent {
  cardType: HTMLElement | null;

  gameType: HTMLElement | null;

  constructor() {
    super('div', ['settings-block']);

    this.cardType = null;
    this.gameType = null;

    this.init();
  }

  init() {
    this.cardType = this.create(
      'div',
      'settings__item',
      [
        this.create(
          'div',
          '',
          [
            this.create('h2', '', 'Game cards', this.element),
            this.create('p', '', 'select game cards type', this.element),
          ],
          this.element,
        ),
        this.create(
          'div',
          'form',
          [
            this.create(
              'select',
              '',
              [
                this.create('option', '', 'cats', this.element, [
                  'value',
                  'cat',
                ]),
                this.create('option', '', 'dogs', this.element, [
                  'value',
                  'dog',
                ]),
              ],
              this.element,
              ['name', 'animal'],
            ),
          ],
          this.element,
        ),
      ],
      this.element,
    );
    this.gameType = this.create(
      'div',
      'settings__item',
      [
        this.create(
          'div',
          '',
          [
            this.create('h2', '', 'Difficulty', this.element),
            this.create('p', '', 'select game type', this.element),
          ],
          this.element,
        ),
        this.create(
          'div',
          'form',
          [
            this.create(
              'select',
              '',
              [
                this.create('option', '', '4x4', this.element, [
                  'value',
                  'easy',
                ]),
                this.create('option', '', '4x6', this.element, [
                  'value',
                  'medium',
                ]),
                this.create('option', '', '6x6', this.element, [
                  'value',
                  'hard',
                ]),
              ],
              this.element,
              ['name', 'difficulty'],
            ),
          ],
          this.element,
        ),
      ],
      this.element,
    );
  }
}
