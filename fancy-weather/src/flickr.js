import config from './config';
import { getSeason, getPartOfTheDay } from './helper';

const { flickrKey } = config;

export default function getPhotosFromFlickr(dateObj, weatherData, cityName) {
  const season = getSeason(dateObj);
  const partOfTheDay = getPartOfTheDay(dateObj);
  const weatherCondition = weatherData.currently.icon.split('-').slice(-1);
  const [city] = cityName.split(',');
  const tagsString = `${season}%2C+${partOfTheDay}%2C+${weatherCondition}%2C+${city}`;

  fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${tagsString}&tag_mode=all&per_page=1&format=json&nojsoncallback=1`
  )
    .then(res => res.json())
    .then(data => {
      const photo = data.photos.photo[0];
      const urlString = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      const container = document.querySelector('.container');

      container.style.backgroundImage = `url(${urlString})`;
    });
}
