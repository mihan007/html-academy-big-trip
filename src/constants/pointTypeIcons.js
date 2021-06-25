import { PointType } from './pointType';

const PointTypeOffers = {
  [PointType.BUS]: 'bus.png',
  [PointType.TAXI]: 'taxi.png',
  [PointType.TRAIN]: 'train.png',
  [PointType.SHIP]: 'ship.png',
  [PointType.TRANSPORT]: 'transport.png',
  [PointType.DRIVE]: 'drive.png',
  [PointType.FLIGHT]: 'flight.png',
  [PointType.CHECK_IN]: 'check-in.png',
  [PointType.SIGHTSEEING]: 'sightseeing.png',
  [PointType.RESTAURANT]: 'restaurant.png',
};

export function getPointTypeIconUrl(pointType) {
  return 'img/icons/' + PointTypeOffers[pointType];
}
