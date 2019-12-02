import config from './config';
import { getSeason, getPartOfTheDay } from './helper';

const { flickrKey } = config;

export default function getPhotosFromFlickr(dateObj, weatherData) {
  const season = getSeason(dateObj);
  const partOfTheDay = getPartOfTheDay(dateObj);
  const weatherCondition = getWeatherCondition(weatherData);
  const tagsString = `${season}%2C+${partOfTheDay}%2C+${weatherCondition}`;

  fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${tagsString}&tag_mode=all&per_page=100&format=json&nojsoncallback=1`
  )
    .then(res => res.json())
    .then(data => {
      const random = Math.trunc(Math.random() * 100);
      const photo = data.photos.photo[random];
      const urlString = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      const container = document.querySelector('.container');

      container.style.backgroundImage = `url(${urlString})`;
    });
}

function getWeatherCondition(data) {
  const { summary } = data.currently;
  const summaryList = summary.split(' ');

  if (summaryList.length === 1) return summaryList[0];
  return summaryList[1];
}