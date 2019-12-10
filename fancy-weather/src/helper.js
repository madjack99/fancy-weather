import config from './config';
import clearDay from '../static/images/weather/clear-day.png';
import clearNight from '../static/images/weather/clear-night.png';
import cloudy from '../static/images/weather/cloudy.png';
import fog from '../static/images/weather/fog.png';
import hail from '../static/images/weather/hail.png';
import partlyCloudyDay from '../static/images/weather/partly-cloudy-day.png';
import partlyCloudyNight from '../static/images/weather/partly-cloudy-night.png';
import rain from '../static/images/weather/rain.png';
import sleet from '../static/images/weather/sleet.png';
import snow from '../static/images/weather/snow.png';
import thunderstorm from '../static/images/weather/thunderstorm.png';
import tornado from '../static/images/weather/tornado.png';
import wind from '../static/images/weather/wind.png';
import translations from './translations';
import { store } from './store';

const { openCageKey } = config;

export function getCityNameByCoords(coords, lang = 'en') {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${openCageKey}&pretty=1&language=${lang}`
  )
    .then(res => res.json())
    .then(data => {
      const locationName = data.results[0].formatted;
      return locationName
        .split(',')
        .slice(-2)
        .join(', ');
    });
}

export function insertDataIntoNode(data, nodeClassName) {
  const node = document.querySelector(nodeClassName);
  node.innerText = data;
}

export function insertIcon(iconDescription, nodeClassName) {
  const iconElem = document.querySelector(nodeClassName);

  switch (iconDescription) {
    case 'clear-day':
      iconElem.setAttribute('src', clearDay);
      break;
    case 'clear-night':
      iconElem.setAttribute('src', clearNight);
      break;
    case 'cloudy':
      iconElem.setAttribute('src', cloudy);
      break;
    case 'fog':
      iconElem.setAttribute('src', fog);
      break;
    case 'hail':
      iconElem.setAttribute('src', hail);
      break;
    case 'partly-cloudy-day':
      iconElem.setAttribute('src', partlyCloudyDay);
      break;
    case 'partly-cloudy-night':
      iconElem.setAttribute('src', partlyCloudyNight);
      break;
    case 'rain':
      iconElem.setAttribute('src', rain);
      break;
    case 'sleet':
      iconElem.setAttribute('src', sleet);
      break;
    case 'snow':
      iconElem.setAttribute('src', snow);
      break;
    case 'thunderstorm':
      iconElem.setAttribute('src', thunderstorm);
      break;
    case 'tornado':
      iconElem.setAttribute('src', tornado);
      break;
    case 'wind':
      iconElem.setAttribute('src', wind);
      break;
    default:
      iconElem.setAttribute('src', tornado);
  }
}

export function showCoords(lat, lng, lang = 'en') {
  if (typeof lat === 'string') {
    lng = +lng;
    lat = +lat;
  }
  insertDataIntoNode(
    `${translations[lang].latitude}: ${lat.toFixed(2)}`,
    '.coords__lat'
  );
  insertDataIntoNode(
    `${translations[lang].longitude}: ${lng.toFixed(2)}`,
    '.coords__lng'
  );
}

export function getSeason(dateObj) {
  switch (dateObj.getMonth()) {
    case 0:
    case 1:
    case 11:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    default:
      return 'winter';
  }
}

export function getPartOfTheDay(dateObj) {
  const hour = dateObj.getHours();
  if (hour >= 0 && hour < 3) return 'night';
  if (hour >= 3 && hour < 9) return 'morning';
  if (hour >= 9 && hour < 15) return 'day';
  if (hour >= 15 && hour < 21) return 'evening';
  if (hour >= 21 && hour <= 23) return 'night';
}

export function getDataFromLocalStorage() {
  const savedTemperatureUnits = localStorage.getItem('temperatureUnits');
  const savedLang = localStorage.getItem('lang');

  if (savedTemperatureUnits) {
    store.temperatureUnits = savedTemperatureUnits;
  }

  if (savedTemperatureUnits === 'F') {
    document.querySelector('.temp-units__fahrenheit').click();
  }

  Array.from(document.querySelector('.lang-box').children).forEach(langDiv => {
    if (langDiv.innerText === savedLang) langDiv.click();
  });
}

export function buttonAnimation() {
  this.animate(
    [{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }],
    {
      duration: 1000
    }
  );
}

export function animateLangButton() {
  this.animate(
    [{ borderRadius: '3px' }, { borderRadius: '50%' }, { borderRadius: '3px' }],
    {
      duration: 1000,
      iterations: 1
    }
  );
}

export function animateUnitButton() {
  this.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    {
      duration: 1000,
      iterations: 1,
      easing: 'ease-out'
    }
  );
}

export function spinner() {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
}
