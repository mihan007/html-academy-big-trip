export const createOffersTemplate = (offers) => {
  if (!offers.length) {
    return '';
  }
  const result = ['<h4 class="visually-hidden">Offers:</h4><ul class="event__selected-offers">'];
  for (const offer of offers) {
    result.push(`
    <li class="event__offer">
    <nobr>
        <span class="event__offer-title">${offer.title}</nobr></span>
        +€&nbsp;<span class="event__offer-price">${offer.price}</span>
    </nobr>
    </li>`,
    );
  }
  result.push('</ul>');

  return result.join('');
};
