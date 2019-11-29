import config from './config';
import getWeather from './weather';
import showWeather from './showWeather';
import showTime from './showTime';
import { insertDataIntoNode } from './helper';

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
      console.log(data);
      console.log(cityName);
      return {
        cityName,
        timeZone,
        coordinates: `${lat},${lng}`
      };
    });
}

export const handleCitySubmit = async e => {
  e.preventDefault();

  const input = document.querySelector('.input');
  const city = input.value;
  const { coordinates, timeZone, cityName } = await getCoordsFromInput(city);
  const weatherData = await getWeather(coordinates);
  const selectedLocationDateString = new Date().toLocaleString('en-US', {
    timeZone
  });
  const dateObj = new Date(selectedLocationDateString);

  insertDataIntoNode(cityName, '.location-name');
  showTime(dateObj);
  showWeather(weatherData);
};
