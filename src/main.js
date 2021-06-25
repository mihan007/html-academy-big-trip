import { createPointEditTemplate } from './view/point-edit';
import { createPointCreateTemplate } from './view/point-create';
import { createMenuTemplate } from './view/menu';
import { createPointListTemplate } from './view/point-list';
import { createCostTemplate } from './view/cost';
import { createFilterTemplate } from './view/filter';
import { createInfoTemplate } from './view/info';
import { createSortTemplate } from './view/sort';
import { generatePoint } from './mock/point';

const POINT_COUNT = 20;
const points = [generatePoint()];
for (let i = 1; i < POINT_COUNT; i++) {
  points.push(generatePoint(points[i - 1].endDate));
}

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const menuElement = document.querySelector('.js-menu');
render(menuElement, createMenuTemplate(), 'beforeend');

const contentElement = document.querySelector('.js-content');
render(contentElement, createPointEditTemplate(), 'beforeend');
render(contentElement, createPointCreateTemplate(), 'beforeend');

for (let i = 0; i < POINT_COUNT; i++) {
  render(contentElement, createPointListTemplate(points[i]), 'beforeend');
}

const tripElement = document.querySelector('.js-trip');
render(tripElement, createInfoTemplate(), 'beforeend');

const costElement = document.querySelector('.js-cost');
render(costElement, createCostTemplate(), 'beforeend');

const filterElement = document.querySelector('.js-filter');
render(filterElement, createFilterTemplate(), 'beforeend');

const sortElement = document.querySelector('.js-sort');
render(sortElement, createSortTemplate(), 'beforeend');
