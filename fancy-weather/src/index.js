import getWeather from './weather';
import getCurrentLocationObject from './currentLocation';
import buildHTMLContent from './elements';
import showTime from './showTime';
import showWeather from './showWeather';
import showDate from './showDate';
import showThreeDaysWeather from './threeDaysWeather';
import getPhotosFromFlickr from './flickr';
import { store } from './store';
import { showMap } from './map';
import {
  getCityNameByCoords,
  insertDataIntoNode,
  showCoords,
  getDataFromLocalStorage,
  spinner
} from './helper';

import './styles/main.scss';

async function initWithDefaultValues() {
  const { temperatureUnits, lang } = store;
  const locationObject = await getCurrentLocationObject();
  const { latitude, longitude } = locationObject.coords;
  const { timestamp } = locationObject;
  const dateObj = new Date(timestamp);
  const weatherData = await getWeather(
    `${latitude},${longitude}`,
    temperatureUnits
  );
  const cityName = await getCityNameByCoords(`${latitude},${longitude}`);

  store.dateObj = dateObj;
  store.weatherData = weatherData;
  store.coords = `${latitude},${longitude}`;

  showDate(dateObj, lang);
  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData, lang);
  showThreeDaysWeather(weatherData, lang);
  showMap(longitude, latitude);
  showCoords(latitude, longitude);
  getPhotosFromFlickr(dateObj, weatherData);

  getDataFromLocalStorage();
  spinner();
}

buildHTMLContent();
initWithDefaultValues();
