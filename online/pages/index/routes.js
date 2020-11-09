import ViewFirst from './views/view-first.vue';
import ViewSecond from './views/view-second.vue';

export const routes = [
  { path: '/', component: ViewFirst },
  { path: '/second', component: ViewSecond },
];

export function beforeEach(to, from, next) {
  next();
}