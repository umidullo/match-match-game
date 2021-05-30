import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;

  constructor() {
    super('div', ['game-field']);

    // this.init();

    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
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
      let slicedCards = images.slice(0, 8);
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

  private async cardHandler(card: Card) {
    /* здесь должно навешиваться класс для покраски карточек*/
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToback(), card.flipToback()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
