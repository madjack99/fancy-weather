import config from './config';

const { openCageKey } = config;

export function getCityNameByCoords(coords) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${openCageKey}&pretty=1`
  )
    .then(res => res.json())
    .then(data => {
      const locationName = data.results[0].formatted;
      return locationName
        .split(',')
        .slice(-2)
        .join(', ');
    });
}
