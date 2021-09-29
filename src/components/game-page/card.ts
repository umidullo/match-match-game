import './game.scss';
import { BaseComponent } from '../base-component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  classList: any;

  constructor(readonly image: string) {
    super('div', ['card-container']);

    const size = localStorage.getItem('difficultyType') === 'easy' ? '168px' : '110px';

    this.element.innerHTML = `
        <div class="card" style="width: ${size}; height: ${size}">
          <div></div>
          <div class="card__front" style="background-image: url('./images/${image}')"></div>
          <div class="card__back"></div>
        </div>
    `;
  }

  flipToback() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}

// style="width: ${size}; height: ${size};"
