import getWeather from './weather';
import getCurrentLocationObject from './currentLocation';
import buildHTMLContent from './elements';
import showTime from './showTime';
import showWeather from './showWeather';
import { getCityNameByCoords, insertDataIntoNode } from './helper';

async function initWithDefaultValues() {
  const locationObject = await getCurrentLocationObject();
  console.log(locationObject);
  const { latitude, longitude } = locationObject.coords;
  const { timestamp } = locationObject;
  const dateObj = new Date(timestamp);
  const weatherData = await getWeather(`${latitude},${longitude}`);
  const cityName = await getCityNameByCoords(`${latitude},${longitude}`);

  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData);
}

buildHTMLContent();
initWithDefaultValues();
