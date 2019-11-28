import getWeather from './weather';
import getCurrentLocation from './currentLocation';
import buildHTMLContent from './elements';

async function getWeatherWithCurrentLocation() {
  const coordinates = await getCurrentLocation();
  console.log(getWeather(coordinates));
}

buildHTMLContent();
// getWeather();
// getWeatherWithCurrentLocation();
