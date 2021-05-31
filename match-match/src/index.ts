import './styles.scss';

import { Header } from './components/header/header';
import { Field } from './components/field/field';
import { AboutPage } from './components/about-page/about-page';
import { ScorePage } from './components/score-page/score-page';
import { SettingsPage } from './components/settings-page/settings-page';
import { GamePage } from './components/game-page/game';

const appElement = document.body;

if (!appElement) throw Error('app is not defined');
const header = new Header(appElement);
const container = new Field(appElement);

const gameBtn = document.querySelector('.game-button');

const aboutPage = new AboutPage();
const scorePage = new ScorePage();
const settingsPage = new SettingsPage();
const gamePage = new GamePage();

const routing = [
  {
    name: '#/',
    component: () => {
      container.element.innerHTML = '';
      container.element.appendChild(aboutPage.element);
    },
  },
  {
    name: '#/score',
    component: () => {
      container.element.innerHTML = '';
      container.element.appendChild(scorePage.element);
    },
  },
  {
    name: '#/settings',
    component: () => {
      container.element.innerHTML = '';
      container.element.appendChild(settingsPage.element);
    },
  },
];

const router = () => {
  const currentRouteName = window.location.hash.slice(1);
  const currentRoute = routing.find((p) => p.name === `#${currentRouteName}`) || routing[0];
  currentRoute.component();
};

window.onpopstate = () => {
  router();
};

gameBtn?.addEventListener('click', () => {
  if (gameBtn.innerHTML === 'start game') {
    container.element.innerHTML = '';
    container.element.appendChild(gamePage.element);
    gamePage.start();
    gameBtn.innerHTML = 'stop game';
  } else {
    router();
    gameBtn.innerHTML = 'start game';
    gamePage.stopGame();
  }
});
