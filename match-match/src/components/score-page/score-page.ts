import './score-page.scss';
import { BaseComponent } from '../base-component';

export class ScorePage extends BaseComponent {
  title: HTMLElement | null;

  playersWrap: HTMLElement | null;

  playerItem: HTMLElement | null;

  playerAvatar: HTMLElement | null;

  playerName: string | null;

  playerEmail: string | null;

  playerScore: number | null;

  constructor() {
    super('div', ['score-page']);

    this.title = null;
    this.playersWrap = null;

    /* this.playerAvatar Escho ne realizovano */
    this.playerAvatar = null;

    this.playerItem = null;
    this.playerName = 'test';
    this.playerEmail = 'test';
    this.playerScore = 1234;

    this.init();
  }

  init() {
    this.title = this.create('h2', 'title', 'How to play?', this.element);
    this.playersWrap = this.create('div', 'player', null, this.element);
    this.playerItem = this.create(
      'div',
      'player__item',
      `
      <div class="player__info">
      <div class="player__avatar">
        <div></div>
      </div>
      <div class="player__name">
        <h3>${this.playerName}</h3>
        <p>${this.playerEmail}</p>
      </div>
    </div>
    <div class="player__score">
      <h3>Score:</h3>
      <span>${this.playerScore}</span>
    </div>
      `,
      this.playersWrap
    );
  }
}
