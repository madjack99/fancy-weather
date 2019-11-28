import config from './config';

const { openCageKey } = config;

export const handleCitySubmit = e => {
  e.preventDefault();
  const input = document.querySelector('.input');
  const city = input.value;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${openCageKey}&no_annotations=1&limit=1`
  )
    .then(res => res.json())
    .then(data => {
      const { geometry } = data.results[0];
      const { lat, lng } = geometry;
      console.log(lat, lng);
    });
};
