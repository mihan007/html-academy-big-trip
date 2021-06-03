import dayjs from 'dayjs';
import { PointType } from '../const.js';
import { getRandomInteger } from '../utils.js';

const generateType = () => {
  const pointTypes = Object.entries(PointType);
  const randomIndex = getRandomInteger(0, pointTypes.length - 1);

  return pointTypes[randomIndex];
};

const generateDate = () => {
  // Когда в руках молоток, любая проблема - гвоздь.
  // Вот и для генерации случайного булевого значения
  // можно использовать "функцию из интернета".
  // Ноль - ложь, один - истина. Для верности приводим
  // к булевому типу с помощью Boolean
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false,
  };
};

function generateOffers () {

}

function generateDestination () {

}

function generateDateRange (type) {
  const typeDurationLimitInMinutes = {};
  typeDurationLimitInMinutes[PointType.BUS]= [10, 180];
  typeDurationLimitInMinutes[PointType.TAXI]= [20, 180];
  typeDurationLimitInMinutes[PointType.TRAIN]= [30, 240];
  typeDurationLimitInMinutes[PointType.SHIP]= [60, 480];
  typeDurationLimitInMinutes[PointType.TRANSPORT]= [10, 80];
  typeDurationLimitInMinutes[PointType.DRIVE]= [60, 480];
  typeDurationLimitInMinutes[PointType.FLIGHT]= [90, 720];
  typeDurationLimitInMinutes[PointType.CHECK_IN]= [5, 10];
  typeDurationLimitInMinutes[PointType.SIGHTSEEING]= [5, 240];
  typeDurationLimitInMinutes[PointType.RESTAURANT]= [60, 180];

  const duration = getRandomInteger(typeDurationLimitInMinutes[type][0], typeDurationLimitInMinutes[type][1]);

  return dayjs().add(duration, 'day').toDate();
}

function generateCost () {

}

export const generateTask = () => {
  const dueDate = generateDate();
  const repeating = dueDate === null
    ? generateRepeating()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false,
    };

  const type = generateType();
  let startDate, endDate;
  [startDate, endDate] = generateDateRange(type);

  return {
    type,
    offers: generateOffers(),
    destination: generateDestination(),
    startDate: startDate,
    endDate: endDate,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    cost: generateCost(),
  };
};
