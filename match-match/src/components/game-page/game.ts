import './game.scss';
import { BaseComponent } from '../base-component';
import { Timer } from './timer';
import { CardsField } from './card-field';
import { Card } from './card';
import { ImageCategoryModel } from '../../models/image-category-model';
import { delay } from '../../shared/delay';

const FLIP_DELAY = 1000;

export class GamePage extends BaseComponent {
  timer: Timer;

  cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['game-field']);

    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.timer.startTimer();
    const type = localStorage.getItem('difficultyType');
    if (type === 'hard') {
      const cards = images
        .concat(images)
        .concat(images)
        .concat(images)
        .map((url) => new Card(url))
        .sort(() => Math.random() - 0.5);
      cards.forEach((card) => {
        card.element.addEventListener('click', () => this.cardHandler(card));
      });
      this.cardsField.addCards(cards);
    } else {
      this.cardsField.clear();
      const slicedCards = images.slice(0, 8);
      const cards = slicedCards
        .concat(slicedCards)
        .map((url) => new Card(url))
        .sort(() => Math.random() - 0.5);
      cards.forEach((card) => {
        card.element.addEventListener('click', () => this.cardHandler(card));
      });
      this.cardsField.addCards(cards);
    }
  }

  // остановка игры
  stopGame() {
    this.cardsField.clear();
    this.timer.stopTime();
  }

  // проверка на совпадание
  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    console.log(this.activeCard.image);
    console.log(card.image);

    if (this.activeCard.image !== card.image) {
      console.log(this.activeCard.image);
      console.log(card.image);

      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToback(), card.flipToback()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  // check game finished?
  // winGame() {}

  // старт игры
  async start() {
    const cardType = localStorage.getItem('difficultyType');
    console.log(cardType);

    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const ind = localStorage.getItem('animalType') === 'cat' ? 0 : 1;
    const ctg = categories[ind];
    const images = ctg.images.map((name) => `${ctg.category}/${name}`);
    this.newGame(images);
  }
}
