import { getRandomInteger } from '../utils';
import { Destinations } from '../constants/cities';

function generateTitle () {
  const randomIndex = getRandomInteger(0, Destinations.length - 1);
  return Destinations[randomIndex];
}

function generateDescription () {
  function generateSentence () {
    const sentences = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Cras aliquet varius magna, non porta ligula feugiat eget.',
      'Fusce tristique felis at fermentum pharetra.',
      'Aliquam id orci ut lectus varius viverra.',
      'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
      'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
      'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
      'Aliquam id orci ut lectus varius viverra.',
      'Sed sed nisi sed augue convallis suscipit in sed felis.',
      'Aliquam erat volutpat.',
      'Nunc fermentum tortor ac porta dapibus.',
      'In rutrum ac purus sit amet tempus.',
    ];
    const randomIndex = getRandomInteger(0, sentences.length - 1);

    return sentences[randomIndex];
  }

  const sentencesCount = getRandomInteger(1, 5);
  const randomSentences = new Array(sentencesCount).fill().map(() => generateSentence());

  return randomSentences.join(' ');
}

function generatePictures () {
  function generatePictureUrl () {
    return 'http://picsum.photos/248/152?r=' + getRandomInteger(0, 1e9);
  }

  const picturesCount = getRandomInteger(1, 5);

  return new Array(picturesCount).fill().map(() => generatePictureUrl());
}

export function generateDestination () {
  return {
    title: generateTitle(),
    description: generateDescription(),
    pictures: generatePictures(),
  };
}
