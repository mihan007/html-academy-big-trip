import { getRandomArrayElement, getRandomInteger } from '../utils';
import { Destinations } from '../constants/destinations';
import { MockSentences } from '../constants/mockSentences';

const generateTitle = () => {
  const randomIndex = getRandomInteger(0, Destinations.length - 1);
  return Destinations[randomIndex];
};

const generateSentence = () => {
  return getRandomArrayElement(MockSentences);
};

const generateDescription = () => {
  const sentencesCount = getRandomInteger(1, 5);
  const randomSentences = new Array(sentencesCount).fill().map(() => generateSentence());

  return randomSentences.join(' ');
};

const generatePictureUrl = () => 'http://picsum.photos/248/152?r=' + getRandomInteger(0, 1e9);

const generatePictures = () => {
  const picturesCount = getRandomInteger(1, 5);

  return new Array(picturesCount).fill().map(() => generatePictureUrl());
};

export const generateDestination = () => ({
  title: generateTitle(),
  description: generateDescription(),
  pictures: generatePictures(),
});
