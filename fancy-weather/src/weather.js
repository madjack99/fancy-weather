import config from './config';

const { darkSkyKey } = config;

export default async function getWeather() {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/37.8267,-122.4233`
  );
  const data = await response.json();
  console.log(data);
}
