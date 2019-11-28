import getWeather from './weather';
import getCurrentLocationObject from './currentLocation';
import buildHTMLContent from './elements';
import showTime from './showTime';
import showWeather from './showWeather';

async function initWithDefaultValues() {
  const locationObject = await getCurrentLocationObject();
  const { latitude, longitude } = locationObject.coords;
  const { timestamp } = locationObject;
  const dateObj = new Date(timestamp);

  showTime(dateObj);

  const weatherData = await getWeather(`${latitude},${longitude}`);
  showWeather(weatherData);
}

buildHTMLContent();
initWithDefaultValues();
