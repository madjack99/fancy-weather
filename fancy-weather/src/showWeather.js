import { insertDataIntoNode, insertIcon } from './helper';

export default function showWeather(weatherData) {
  console.log(weatherData);
  const { currently } = weatherData;
  const {
    temperature,
    icon,
    summary,
    apparentTemperature,
    windSpeed,
    humidity
  } = currently;

  const roundedTemperature = Math.floor(temperature);
  const roundedApparentTemperature = Math.floor(apparentTemperature);

  insertDataIntoNode(roundedTemperature, '.weather-box__temperature');
  insertIcon(icon);
  insertDataIntoNode(summary, '.weather-box__summary');
  insertDataIntoNode(
    `FEELS LIKE: ${roundedApparentTemperature}`,
    '.weather-box__apparent-temperature'
  );
  insertDataIntoNode(`wind: ${windSpeed}`, '.weather-box__wind');
  insertDataIntoNode(`humidity: ${humidity * 100}`, '.weather-box__humidity');
}
