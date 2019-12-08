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
  const fahrenheit = document.querySelector('.temp-units__fahrenheit');
  const celsius = document.querySelector('.temp-units__celsius');

  const mainTemp = document.querySelector('.weather-box__temperature_centered');
  const dayOneTemp = document.querySelector('.day-one__temperature');
  const dayTwoTemp = document.querySelector('.day-two__temperature');
  const dayThreeTemp = document.querySelector('.day-three__temperature');

  const divsWithTemp = [mainTemp, dayOneTemp, dayTwoTemp, dayThreeTemp];

  Array.from(e.currentTarget.children).forEach(child => {
    child.classList.remove('active');
  });

  switch (e.target.innerText) {
    case 'F':
      fahrenheit.classList.add('active');
      if (store.temperatureUnits === 'F') break;
      switchToFahrenheit(divsWithTemp);
      break;
    case 'C':
      celsius.classList.add('active');
      if (store.temperatureUnits === 'C') break;
      switchToCelsius(divsWithTemp);
      break;
    default:
      break;
  }
}

function switchToFahrenheit(temperatureDivsArr) {
  temperatureDivsArr.forEach(div => {
    const fahrenheitTemp = (+div.innerText * 9) / 5 + 32;
    div.innerText = Math.round(fahrenheitTemp);
  });

  store.temperatureUnits = 'F';
  localStorage.setItem('temperatureUnits', 'F');
}

function switchToCelsius(temperatureDivsArr) {
  temperatureDivsArr.forEach(div => {
    const celsiusTemp = ((+div.innerText - 32) * 5) / 9;
    div.innerText = Math.round(celsiusTemp);
  });

  store.temperatureUnits = 'C';
  localStorage.setItem('temperatureUnits', 'C');
}

export function changeLang(e) {
  const curLang = store.lang;
  const langBoxChildren = Array.from(e.currentTarget.children);

  langBoxChildren.forEach(lang => {
    lang.classList.remove('active');
    if (lang.innerText === e.target.innerText) {
      lang.classList.add('active');
      if (lang.innerText !== curLang) {
        localStorage.setItem('lang', lang.innerText);
        store.lang = lang.innerText;
        showDate(store.dateObj, lang.innerText);
      }
    }
  });
}
