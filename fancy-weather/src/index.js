import getWeather from './weather';
import getCurrentLocation from './currentLocation';

async function getWeatherWithCurrentLocation() {
  const coordinates = await getCurrentLocation();
  console.log(getWeather(coordinates));
}

getWeatherWithCurrentLocation();
getWeather();
