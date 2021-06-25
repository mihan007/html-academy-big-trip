import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import { DateTimeFormat } from '../constants/dateTimeFormat';
import { createOffersTemplate } from './offers';

dayjs.extend(durationPlugin);

export const createPointListTemplate = (point) => {
  const { typeName, typeIconUrl, offers, destination, startDate, endDate, isFavorite, price } = point;
  const startDateForAttribute = dayjs(startDate).format(DateTimeFormat.htmlDateTimeAttribute);
  const endDateForAttribute = dayjs(endDate).format(DateTimeFormat.htmlDateTimeAttribute);
  const startDateTime = dayjs(startDate).format(DateTimeFormat.pointListTime);
  const startDateLabel = dayjs(startDate).format(DateTimeFormat.pointListDate);
  const endDateTime = dayjs(endDate).format(DateTimeFormat.pointListTime);
  const duration = dayjs.duration(dayjs(endDate).diff(dayjs(startDate)));
  const durationFormatted = duration.hours() > 0
    ? duration.format(DateTimeFormat.durationWithHours)
    : duration.format(DateTimeFormat.durationWithoutHours);
  const offersList = createOffersTemplate(offers);
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${startDateLabel}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="${typeIconUrl}" alt="${typeName} icon">
                </div>
                <h3 class="event__title">${typeName} ${destination.title}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${startDateForAttribute}">${startDateTime}</time>
                    —
                    <time class="event__end-time" datetime="${endDateForAttribute}">${endDateTime}</time>
                  </p>
                  <p class="event__duration">${durationFormatted}</p>
                </div>
                <p class="event__price">
                  €&nbsp;<span class="event__price-value">${price}</span>
                </p>
                ${offersList}
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
  `;
};
