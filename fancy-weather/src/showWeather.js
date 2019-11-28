export default function showWeather(weatherData) {
  const temperatureElem = document.querySelector('.weather-box__temperature');
  const apparentTemperatureElem = document.querySelector(
    '.weather-box__apparent-temperature'
  );

  const { currently } = weatherData;
  const { temperature, apparentTemperature } = currently;

  const roundedTemperature = Math.floor(temperature);
  const roundedApparentTemperature = Math.floor(apparentTemperature);

  temperatureElem.innerText = roundedTemperature;
  apparentTemperatureElem.innerText = `FEELS LIKE: ${roundedApparentTemperature}`;
}
