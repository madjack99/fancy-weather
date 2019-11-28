import getWeather from './weather';
import getCurrentLocationObject from './currentLocation';
import buildHTMLContent from './elements';
import showTime from './showTime';

async function initWithDefaultValues() {
  const locationObject = await getCurrentLocationObject();
  const { latitude, longitude } = locationObject.coords;
  const { timestamp } = locationObject;
  const dateObj = new Date(timestamp);

  const weatherData = await getWeather(`${latitude},${longitude}`);
  console.log(weatherData, 'data');
  showTime(dateObj);
}

buildHTMLContent();
initWithDefaultValues();
