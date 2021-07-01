import { createPointFormTemplate } from './view/point-form';
import { createMenuTemplate } from './view/menu';
import { createPointListTemplate } from './view/point-list';
import { createCostTemplate } from './view/cost';
import { createFilterTemplate } from './view/filter';
import { createInfoTemplate } from './view/info';
import { createSortTemplate } from './view/sort';
import { generatePoint } from './mock/point';
import { range } from './utils';

const POINT_COUNT = 20;
const points = range(1, POINT_COUNT).map(() => generatePoint());

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const menuElement = document.querySelector('.js-menu');
render(menuElement, createMenuTemplate());

const contentElement = document.querySelector('.js-content');
render(contentElement, createPointFormTemplate(points[0]));
render(contentElement, createPointFormTemplate());

points.map((el, index) => render(contentElement, createPointListTemplate(points[index])));

const tripElement = document.querySelector('.js-trip');
render(tripElement, createInfoTemplate(points));

const costElement = document.querySelector('.js-cost');
render(costElement, createCostTemplate(points));

const filterElement = document.querySelector('.js-filter');
render(filterElement, createFilterTemplate());

const sortElement = document.querySelector('.js-sort');
render(sortElement, createSortTemplate());
