import { insertDataIntoNode, insertIcon } from './helper';
import translations from './translations';

export default function showWeather(weatherData, lang) {
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

  insertDataIntoNode(roundedTemperature, '.weather-box__temperature_centered');
  insertIcon(icon, '.weather-box__icon');
  insertDataIntoNode(summary, '.weather-box__summary');
  insertDataIntoNode(
    `${translations[lang].feelsLike} ${roundedApparentTemperature}`,
    '.weather-box__apparent-temperature'
  );
  insertDataIntoNode(`wind: ${windSpeed}`, '.weather-box__wind');
  insertDataIntoNode(
    `humidity: ${Math.trunc(humidity * 100)}`,
    '.weather-box__humidity'
  );
}
