/**
 * @typedef IRoute
 * @property {string} name
 * @property {typeof Function} component
 */

import { Card } from "../components/card/card";



export default () => {
  let currentRouteName = window.location.hash.slice(1);
  let currentRoute = routing.find((p) => p.name === `#${currentRouteName}`) || routing[0];
  currentRoute.component();
};

let { body } = document;

/**
 *
 * @type {Array<IRoute>}
 */
const routing = [
  {
    name: '#/about',
    component: () => {
        body.innerHTML = about;
    },
  },
  {
    name: '#/score',
    component: () => {
        body.innerHTML = score;
    },
  },
  {
    name: '#/settings',
    component: () => {
        body.innerHTML = settings;
    },
  },
];

