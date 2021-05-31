import './game.scss';
import { BaseComponent } from '../base-component';
import { Timer } from './timer';
import { CardsField } from './card-field';
import { Card } from './card';
import { ImageCategoryModel } from '../../models/image-category-model';
import { delay } from '../../shared/delay';
import { gameBtn, router } from '../..';

const FLIP_DELAY = 1000;

let time: NodeJS.Timeout;
let minutes = 0;
let seconds = 0;
let timeOut: NodeJS.Timeout;

let rightCounter = 0;
let wrongCounter = 0;
let score = 0;

export class GamePage extends BaseComponent {
  popup: HTMLElement | null;
  timer: Timer;
  cardsField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;

  constructor() {
    super('div', ['game-field']);

    this.popup = null;
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  startTimer() {
    timeOut = setTimeout(() => {
      time = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        // console.log(seconds);
        this.timer.element.innerHTML = `
        <span class="minute">0${minutes}</span>
        <span class="separator">:</span>
        <span class="secund">${seconds}</span>
      `;
      }, 1000);
    }, 5000);
  }

  stopTime() {
    clearInterval(time);
    clearTimeout(timeOut);
    seconds = 0;
    minutes = 0;
    this.timer.element.innerHTML = `
      <span class="minute">00</span>
      <span class="separator">:</span>
      <span class="secund">00</span>
    `;
  }

  newGame(images: string[]) {
    this.startTimer();
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

  stopGame() {
    this.cardsField.clear();
    this.stopTime();
  }

  winGame() {
    score = rightCounter * 100 - (minutes * 60 + seconds) * 10;
    this.popup = this.create(
      'div',
      'popup-block none',
      [
        this.create(
          'div',
          'popup',
          `<p>
          Congratulations! You successfully found all matches on ${minutes}.${seconds} minutes <b>YOUR SCORE ${score}</b>.
          </p>
        <button class="popup-btn">ok</button>`,
          this.element
        ),
      ],
      this.element
    );
    this.popup?.classList.remove('none');
    this.popupOpen();
    this.stopTime();
    rightCounter = 0;
    wrongCounter = 0;
    score = 0;
  }

  popupOpen() {
    const popupBtn = this.popup?.querySelector('.popup-btn');
    (popupBtn as HTMLElement).addEventListener('click', () => {
      router();
      (gameBtn as HTMLElement).innerHTML = 'start game';
      this.stopGame();
      this.popup?.classList.add('none');
    });
  }

  wrongType(card: Card) {
    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }
    this.activeCard.element.querySelector('.card')?.classList.add('wrong');
    card.element.querySelector('.card')?.classList.add('wrong');
  }

  rightType(card: Card) {
    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }
    this.activeCard.element.querySelector('.card')?.classList.remove('wrong');
    card.element.querySelector('.card')?.classList.remove('wrong');
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

    if (this.activeCard.image !== card.image) {
      //добавляю класс крассного цвета
      this.wrongType(card);

      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToback(), card.flipToback()]);

      //убираю класс кросного цвета
      this.rightType(card);
      // подсчет неправильных попыток
      wrongCounter++;
    } else {
      //добавляю класс зеленого цвета
      this.activeCard.element.querySelector('.card')?.classList.add('right');
      card.element.querySelector('.card')?.classList.add('right');

      //подсчет правльных попыток
      rightCounter++;
      if (localStorage.getItem('difficultyType') === 'easy') {
        if (rightCounter === 8) {
          this.winGame();
        }
      }
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  // старт игры
  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const ind = localStorage.getItem('animalType') === 'cat' ? 0 : 1;
    const ctg = categories[ind];
    const images = ctg.images.map((name) => `${ctg.category}/${name}`);
    this.newGame(images);
  }
}
