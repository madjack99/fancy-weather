import config from './config';
import { getSeason, getPartOfTheDay } from './helper';

const { flickrKey } = config;

export default function getPhotosFromFlickr(dateObj) {
  const season = getSeason(dateObj);
  const partOfTheDay = getPartOfTheDay(dateObj);
  const tagsString = `${season}%2C+${partOfTheDay}`;
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
