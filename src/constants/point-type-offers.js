import { PointType } from './point-type';

export const PointTypeOffers = {
  [PointType.BUS]: [
    { 'title': 'Motor coach', 'cost': 150 },
    { 'title': 'School bus', 'cost': 250 },
    { 'title': 'Shuttle bus', 'cost': 350 },
    { 'title': 'Minibus', 'cost': 400 },
    { 'title': 'Minicoach', 'cost': 50 },
    { 'title': 'Double-decker bus', 'cost': 500 },
    { 'title': 'Single-decker bus', 'cost': 600 },
    { 'title': 'Low-floor bus', 'cost': 1000 },
  ],
  [PointType.TAXI]: [
    { 'title': 'Economy', 'cost': 30 },
    { 'title': 'Comfort', 'cost': 50 },
    { 'title': 'Comfort Plus', 'cost': 100 },
    { 'title': 'Pool', 'cost': 10 },
    { 'title': 'Business', 'cost': 200 },
    { 'title': 'Ultima', 'cost': 300 },
    { 'title': 'Elite', 'cost': 500 },
  ],
  [PointType.TRAIN]: [
    { 'title': 'High speed', 'cost': 300 },
    { 'title': 'Inter-city', 'cost': 500 },
    { 'title': 'Commuter', 'cost': 200 },
    { 'title': 'Regional', 'cost': 400 },
    { 'title': 'Rapid', 'cost': 900 },
    { 'title': 'Light', 'cost': 350 },
  ],
  [PointType.SHIP]: [
    { 'title': 'Sailboat', 'cost': 600 },
    { 'title': 'Motorboat', 'cost': 800 },
    { 'title': 'Catamaran', 'cost': 950 },
    { 'title': 'Riverboat', 'cost': 300 },
  ],
  [PointType.TRANSPORT]: [],
  [PointType.DRIVE]: [],
  [PointType.FLIGHT]: [
    { 'title': 'Upgrade to business class', 'cost': 2000 },
    { 'title': 'Upgrade to first class', 'cost': 1000 },
  ],
  [PointType.CHECK_IN]: [],
  [PointType.SIGHTSEEING]: [
    { 'title': 'With dinner', 'cost': 50 },
  ],
  [PointType.RESTAURANT]: [
    { 'title': 'Casual dining', 'cost': 20 },
    { 'title': 'Contemporary casual', 'cost': 30 },
    { 'title': 'Family style', 'cost': 40 },
    { 'title': 'Fast food', 'cost': 5 },
    { 'title': 'Cafe', 'cost': 10 },
    { 'title': 'Buffet', 'cost': 15 },
  ],
};
