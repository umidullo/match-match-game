import './styles.scss';

import Router from './router/router';
import { Header } from './components/header/header';
import { Field } from './components/field/field';
import { App } from './app';

window.onload = () => {
  const appElement = document.body;
  if (!appElement) throw Error('app is not defined');
  new Header(appElement);
  new Field(appElement);
  // new App(appElement).start();
};
``;
