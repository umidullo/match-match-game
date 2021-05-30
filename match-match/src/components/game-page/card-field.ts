import './game.scss';
import { BaseComponent } from '../base-component';
import { Card } from './card';

const SHOW_TIME = 5;

export class CardsField extends BaseComponent {
  cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToback());
    }, SHOW_TIME * 1000);
  }
}
