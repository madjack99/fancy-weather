import { insertDataIntoNode } from './helper';

export default function showWeather(weatherData) {
  // const temperatureElem = document.querySelector('.weather-box__temperature');
  // const apparentTemperatureElem = document.querySelector(
  //   '.weather-box__apparent-temperature'
  // );
  console.log(weatherData);
  const { currently } = weatherData;
  const {
    temperature,
    icon,
    summary,
    apparentTemperature,
    wind,
    humidity
  } = currently;

  const roundedTemperature = Math.floor(temperature);
  const roundedApparentTemperature = Math.floor(apparentTemperature);

  insertDataIntoNode(roundedTemperature, '.weather-box__temperature');
  insertDataIntoNode(icon, '.weather-box__icon');
  insertDataIntoNode(summary, '.weather-box__summary');
  insertDataIntoNode(
    `FEELS LIKE: ${roundedApparentTemperature}`,
    '.weather-box__apparent-temperature'
  );
  insertDataIntoNode(wind, '.weather-box__wind');
  insertDataIntoNode(humidity, '.weather-box__humidity');
}
