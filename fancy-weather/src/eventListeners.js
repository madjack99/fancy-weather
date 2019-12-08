import config from './config';
import getWeather from './weather';
import showWeather from './showWeather';
import showTime from './showTime';
import showDate from './showDate';
import showThreeDaysWeather from './threeDaysWeather';
import getPhotosFromFlickr from './flickr';
import { store } from './store';
import { showMap } from './map';
import { insertDataIntoNode, showCoords, getCityNameByCoords } from './helper';

const { openCageKey } = config;

function getCoordsFromInput(input, lang) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${openCageKey}&limit=1&language=${lang}`
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

  const { temperatureUnits, lang } = store;
  const input = document.querySelector('.input');
  const city = input.value;
  const { lat, lng, timeZone, cityName } = await getCoordsFromInput(city, lang);
  const weatherData = await getWeather(`${lat},${lng}`, temperatureUnits, lang);
  const selectedLocationDateString = new Date().toLocaleString('en-US', {
    timeZone
  });
  const dateObj = new Date(selectedLocationDateString);

  store.coords = `${lat},${lng}`;

  showDate(dateObj, lang);
  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData, lang);
  showThreeDaysWeather(weatherData, lang);
  showMap(lng, lat);
  showCoords(lat, lng, lang);
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
      store.temperatureUnits = e.target.innerText;
      localStorage.temperatureUnits = e.target.innerText;

      showWeather(weatherData, store.lang);
      showThreeDaysWeather(weatherData, store.lang);
    }
  });
}

export function changeLang(e) {
  const langBoxChildren = Array.from(e.currentTarget.children);

  langBoxChildren.forEach(async lang => {
    lang.classList.remove('active');

    if (lang.innerText === e.target.innerText) {
      lang.classList.add('active');

      localStorage.setItem('lang', lang.innerText);
      store.lang = lang.innerText;

      showDate(store.dateObj, lang.innerText);
      showThreeDaysWeather(store.weatherData, lang.innerText);

      const cityName = await getCityNameByCoords(store.coords, store.lang);
      insertDataIntoNode(cityName, '.location-name');

      const weatherData = await getWeather(
        store.coords,
        store.temperatureUnits,
        store.lang
      );

      showWeather(weatherData, store.lang);
      showCoords(...store.coords.split(','), store.lang);
    }
  });
}
