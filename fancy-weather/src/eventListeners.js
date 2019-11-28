import config from './config';
import getWeather from './weather';

const { openCageKey } = config;

function getCoordsFromInput(input) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${openCageKey}&no_annotations=1&limit=1`
  )
    .then(res => res.json())
    .then(data => {
      const { geometry } = data.results[0];
      const { lat, lng } = geometry;
      console.log(data);
      return `${lat},${lng}`;
    });
}

export const handleCitySubmit = async e => {
  e.preventDefault();

  const input = document.querySelector('.input');
  const city = input.value;
  const coordinates = await getCoordsFromInput(city);

  getWeather(coordinates);
};
