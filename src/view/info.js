import dayjs from 'dayjs';
import { DateTimeFormat } from '../constants/dateTimeFormat';

export const createInfoTemplate = (points) => {
  const path = [];
  let lastAddedTitle = '';
  for (const point of points) {
    const pointTitle = point.destination.title;
    if (pointTitle !== lastAddedTitle) {
      path.push(pointTitle);
      lastAddedTitle = pointTitle;
    }
  }
  const startDate = points ? dayjs(points[0].startDate) : '';
  const startDateTemplate = startDate ? startDate.format(DateTimeFormat.infoFullDate) : '';

  const endDate = points ? dayjs(points[points.length - 1].endDate) : '';
  const endDateTemplate = endDate ? endDate.format(DateTimeFormat.infoFullDate) : '';

  let datesTemplate = `${startDateTemplate}&nbsp;&mdash;&nbsp;${endDateTemplate}`;
  if (!points) {
    datesTemplate = '';
  } else if (startDate.month() === endDate.month()) {
    if (startDate.day() === endDate.day()) {
      datesTemplate = `${startDateTemplate}`;
    } else {
      datesTemplate = `${startDateTemplate}&nbsp;&mdash;&nbsp;${endDate.format(DateTimeFormat.infoShortDate)}`;
    }
  }

  return path ? `<div class="trip-info__main">
              <h1 class="trip-info__title">${path.join(' &mdash; ')}</h1>
              <p class="trip-info__dates">${datesTemplate}</p>
        </div>` : '';
};
