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
    this.selectHandler();
  }

  init() {
    this.cardType = this.create(
      'div',
      'settings__item',
      [
        this.create('h2', '', 'Game cards', this.element),
        this.create(
          'div',
          'form',
          [
            this.create(
              'select',
              'animal',
              [
                this.create(
                  'option',
                  '',
                  'select game cards type',
                  this.element,
                  ['value', 'dis'],
                  ['selected', ''],
                  ['disabled', ''],
                ),
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
        this.create('h2', '', 'Difficulty', this.element),
        this.create(
          'div',
          'form',
          [
            this.create(
              'select',
              'difficulty',
              [
                this.create(
                  'option',
                  '',
                  'select game type',
                  this.element,
                  ['value', 'dis'],
                  ['selected', ''],
                  ['disabled', ''],
                ),
                this.create('option', '', '4x4', this.element, [
                  'value',
                  'easy',
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

  selectHandler() {
    const animal = this.element.querySelector('.animal') as HTMLInputElement;
    const difficulty = this.element.querySelector(
      '.difficulty',
    ) as HTMLInputElement;
    animal.addEventListener('change', () => {
      if (animal.value === 'cat') {
        localStorage.setItem('animalType', 'cat');
      } else if (animal.value === 'dog') {
        localStorage.setItem('animalType', 'dog');
      }
    });
    difficulty.addEventListener('change', () => {
      if (difficulty.value === 'easy') {
        localStorage.setItem('difficultyType', 'easy');
      } else if (difficulty.value === 'hard') {
        localStorage.setItem('difficultyType', 'hard');
      }
    });
  }
}
