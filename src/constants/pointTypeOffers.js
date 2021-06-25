import { PointType } from './pointType';

export const PointTypeOffers = {
  [PointType.BUS]: [
    'Motor coach',
    'School bus',
    'Shuttle bus',
    'Minibus',
    'Minicoach',
    'Double-decker bus',
    'Single-decker bus',
    'Low-floor bus',
  ],
  [PointType.TAXI]: [
    'Economy',
    'Comfort',
    'Comfort Plus',
    'Pool',
    'Business',
    'Ultima',
    'Elite',
  ],
  [PointType.TRAIN]: [
    'High speed',
    'Inter-city',
    'Commuter',
    'Regional',
    'Rapid',
    'Light',
  ],
  [PointType.SHIP]: [
    'Sailboat',
    'Motorboat',
    'Catamaran',
    'Riverboat',
  ],
  [PointType.TRANSPORT]: [],
  [PointType.DRIVE]: [],
  [PointType.FLIGHT]: [
    'Economy class',
    'Business class',
    'First class',
  ],
  [PointType.CHECK_IN]: [],
  [PointType.SIGHTSEEING]: [
    'With dinner',
  ],
  [PointType.RESTAURANT]: [
    'Casual Dining',
    'Contemporary Casual',
    'Family Style',
    'Fast Food',
    'Cafe',
    'Buffet',
  ],
};
