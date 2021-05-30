import './game.scss';
import { BaseComponent } from '../base-component';

let time: NodeJS.Timeout;
let minutes = 0;
let seconds = 0;
let gameTime: string;

export class Timer extends BaseComponent {
  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `
      <span class="minute">00</span>
      <span class="separator">:</span>
      <span class="secund">00</span>
    `;
  }

  startTimer() {
    setTimeout(() => {
      time = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        console.log(seconds);
        this.element.innerHTML = `
        <span class="minute">0${minutes}</span>
        <span class="separator">:</span>
        <span class="secund">${seconds}</span>
      `;
      }, 1000);
    }, 5000);
  }

  stopTime() {
    gameTime = `you've finised the game in ${minutes} minutes ${seconds} secunds`;
    console.log(gameTime);
    clearInterval(time);
    seconds = 0;
    minutes = 0;
    this.element.innerHTML = `
      <span class="minute">00</span>
      <span class="separator">:</span>
      <span class="secund">00</span>
    `;
  }
}
