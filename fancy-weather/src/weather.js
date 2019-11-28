import config from './config';

const { darkSkyKey, MINSK_COORDS } = config;

export default async function getWeather(coordinates = MINSK_COORDS) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${coordinates}`
  );
  const data = await response.json();
}
