import { handleCitySubmit } from './eventListeners';

const container = document.querySelector('.container');

const infoSection = document.createElement('section');
infoSection.classList.add('info');

const input = document.createElement('input');
input.classList.add('input');
input.setAttribute('type', 'text');

const submitBtn = document.createElement('input');
submitBtn.classList.add('submit');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Search');

const form = document.createElement('form');
form.classList.add('form');
form.addEventListener('submit', handleCitySubmit);

const locationName = document.createElement('div');
locationName.classList.add('location-name');

const timeBox = document.createElement('div');
timeBox.classList.add('time-box');

const hours = document.createElement('div');
hours.classList.add('time-box__hours');

const minutes = document.createElement('div');
minutes.classList.add('time-box__minutes');

const weatherBox = document.createElement('div');
weatherBox.classList.add('weather-box');

const temperature = document.createElement('div');
temperature.classList.add('weather-box__temperature');

const apparentTemperature = document.createElement('div');
apparentTemperature.classList.add('weather-box__apparent-temperature');

export default function buildHTMLContent() {
  container.append(form, infoSection);

  form.append(input, submitBtn);
  infoSection.append(locationName, timeBox, weatherBox);

  timeBox.append(hours, minutes);
  weatherBox.append(temperature, apparentTemperature);
}
