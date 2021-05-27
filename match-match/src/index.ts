import './styles.scss';

import { Header } from './components/header/header';
import { Field } from './components/field/field';
import { App } from './app';
import { AboutPage } from './components/about-page/about-page';
import { ScorePage } from './components/score-page/score-page';

const appElement = document.body;
const gameBtn = document.querySelector('.game-button');

if (!appElement) throw Error('app is not defined');
new Header(appElement);
const container = new Field(appElement);

/* PAGES */
const aboutPage = new AboutPage();
const scorePage = new ScorePage();

container.element.appendChild(aboutPage.element);

/* START GAME */
gameBtn?.addEventListener('click', () => {
  new App(appElement).start();
});

// window.onload = () => {
//   if (!appElement) throw Error('app is not defined');
//   new Header(appElement);
//   new Field(appElement);
//   new App(appElement).start();
// };

window.onpopstate = () => {
  let currentRouteName = window.location.hash.slice(1);
  let currentRoute =
    routing.find((p) => p.name === `#${currentRouteName}`) || routing[0];
  currentRoute.component();
};

const routing = [
  {
    name: '#/about',
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
      container.element.innerHTML = `settings`;
    },
  },
];
