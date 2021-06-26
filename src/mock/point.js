import dayjs from 'dayjs';
import { PointType } from '../constants/pointType';
import { getRandomInteger } from '../utils.js';
import { PointPriceRange } from '../constants/priceRanges';
import { generateOffer } from './offer';
import { getPointTypeIconUrl } from '../constants/pointTypeIcons';
import { generateDestination } from './destination';
import { PointTypeNames } from '../constants/pointTypeNames';
import { PointTypeOffers } from '../constants/pointTypeOffers';

const generatePointType = () => {
  const pointTypes = Object.entries(PointType);
  const randomIndex = getRandomInteger(0, pointTypes.length - 1);

  return pointTypes[randomIndex][1];
};

function generateOffers (pointType) {
  if (!PointTypeOffers[pointType].length) {
    return [];
  }

  const offersCount = getRandomInteger(0, 5);

  const uniqueArrayByProperty = (array) => {
    return array.reduce((prev, item) => {
      const v = item.title;
      if (!prev.used.includes(v)) {
        prev.used.push(v);
        prev.result.push(item);
      }
      return prev;
    }, {
      used: [],
      result: [],
    });
  };

  const offers = new Array(offersCount).fill().map(() => generateOffer(pointType));
  if (offers.length > 1) {
    return uniqueArrayByProperty(offers).result;
  }

  return offers;
}

function generateDateRange (startDate, type) {
  const typeDurationLimitInMinutes = {
    [PointType.BUS]: [10, 180],
    [PointType.TAXI]: [20, 180],
    [PointType.TRAIN]: [30, 240],
    [PointType.SHIP]: [60, 480],
    [PointType.TRANSPORT]: [10, 80],
    [PointType.DRIVE]: [60, 480],
    [PointType.FLIGHT]: [90, 720],
    [PointType.CHECK_IN]: [5, 10],
    [PointType.SIGHTSEEING]: [5, 240],
    [PointType.RESTAURANT]: [60, 180],
  };
  const duration = getRandomInteger(typeDurationLimitInMinutes[type][0], typeDurationLimitInMinutes[type][1]);

  return dayjs(startDate).add(duration, 'minute').toDate();
}

function generatePrice () {
  return getRandomInteger(PointPriceRange.min, PointPriceRange.max);
}

function generateIsFavorite () {
  return Boolean(getRandomInteger(0, 1));
}

function generateStartDate () {
  const startInDays = getRandomInteger(2, 40);

  return dayjs().add(startInDays, 'day').toDate();
}

export const generatePoint = (startDate = null) => {
  if (!startDate) {
    startDate = generateStartDate();
  }
  const pointType = generatePointType();
  const endDate = generateDateRange(startDate, pointType);

  return {
    type: pointType,
    typeName: PointTypeNames[pointType],
    typeIconUrl: getPointTypeIconUrl(pointType),
    offers: generateOffers(pointType),
    destination: generateDestination(),
    startDate,
    endDate,
    isFavorite: generateIsFavorite(),
    price: generatePrice(),
  };
};
