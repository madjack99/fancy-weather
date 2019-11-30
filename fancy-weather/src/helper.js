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

const { openCageKey } = config;

export function getCityNameByCoords(coords) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${openCageKey}&pretty=1`
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

export function insertIcon(iconDescription) {
  const iconElem = document.querySelector('.weather-box__icon');

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
