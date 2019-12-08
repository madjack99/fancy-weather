import config from './config';
import getWeather from './weather';
import showWeather from './showWeather';
import showTime from './showTime';
import showDate from './showDate';
import showThreeDaysWeather from './threeDaysWeather';
import getPhotosFromFlickr from './flickr';
import { store } from './store';
import { showMap } from './map';
import { insertDataIntoNode, showCoords } from './helper';

const { openCageKey } = config;

function getCoordsFromInput(input) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${openCageKey}&limit=1`
  )
    .then(res => res.json())
    .then(data => {
      const { geometry, annotations, formatted } = data.results[0];
      const { lat, lng } = geometry;
      const timeZone = annotations.timezone.name;
      const cityName = formatted;

      return {
        cityName,
        timeZone,
        lat,
        lng
      };
    });
}

export const handleCitySubmit = async e => {
  e.preventDefault();

  const { temperatureUnits } = store;
  const input = document.querySelector('.input');
  const city = input.value;
  const { lat, lng, timeZone, cityName } = await getCoordsFromInput(city);
  const weatherData = await getWeather(`${lat},${lng}`, temperatureUnits);
  const selectedLocationDateString = new Date().toLocaleString('en-US', {
    timeZone
  });
  const dateObj = new Date(selectedLocationDateString);

  showDate(dateObj);
  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData);
  showThreeDaysWeather(weatherData);
  showMap(lng, lat);
  showCoords(lat, lng);
  getPhotosFromFlickr(dateObj, weatherData);
};

export function handleRefreshClick() {
  const { weatherData, dateObj } = store;

  getPhotosFromFlickr(dateObj, weatherData);
}

export function switchTempUnits(e) {
  Array.from(e.currentTarget.children).forEach(async child => {
    child.classList.remove('active');

    if (child.innerText === e.target.innerText) {
      child.classList.add('active');

      const weatherData = await getWeather(store.coords, e.target.innerText);

      store.weatherData = weatherData;
      localStorage.temperatureUnits = e.target.innerText;

      showWeather(weatherData);
      showThreeDaysWeather(weatherData, store.lang);
    }
  });
}

export function changeLang(e) {
  const langBoxChildren = Array.from(e.currentTarget.children);

  langBoxChildren.forEach(lang => {
    lang.classList.remove('active');

    if (lang.innerText === e.target.innerText) {
      lang.classList.add('active');

      localStorage.setItem('lang', lang.innerText);
      store.lang = lang.innerText;

      showDate(store.dateObj, lang.innerText);
      showThreeDaysWeather(store.weatherData, lang.innerText);
    }
  });
}
