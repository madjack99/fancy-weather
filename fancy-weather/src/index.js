import getWeather from './weather';
import getCurrentLocationObject from './currentLocation';
import buildHTMLContent from './elements';
import showTime from './showTime';
import showWeather from './showWeather';
import showDate from './showDate';
import showThreeDaysWeather from './threeDaysWeather';
import { showMap } from './map';
import { getCityNameByCoords, insertDataIntoNode } from './helper';

import './styles/main.scss';

async function initWithDefaultValues() {
  const locationObject = await getCurrentLocationObject();
  const { latitude, longitude } = locationObject.coords;
  console.log(latitude);
  const { timestamp } = locationObject;
  const dateObj = new Date(timestamp);
  const weatherData = await getWeather(`${latitude},${longitude}`);
  const cityName = await getCityNameByCoords(`${latitude},${longitude}`);

  showDate(dateObj);
  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData);
  showThreeDaysWeather(weatherData);
  showMap([longitude.toFixed(3), latitude.toFixed(3)]);
}

buildHTMLContent();
initWithDefaultValues();
