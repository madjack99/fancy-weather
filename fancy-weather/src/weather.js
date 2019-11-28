import config from './config';

const { darkSkyKey } = config;

export default async function getWeather(coordinates = '53.9006,27.5590') {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${coordinates}`
  );
  const data = await response.json();
  console.log(data);
}
