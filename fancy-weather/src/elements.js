import handleRecognition from './speechRecognition';
import eclipseSpinner from '../static/images/eclipse-spinner.gif';
import {
  handleCitySubmit,
  handleRefreshClick,
  switchTempUnits,
  changeLang
} from './eventListeners';

import {
  buttonAnimation,
  animateLangButton,
  animateUnitButton
} from './helper';

const container = document.querySelector('.container');

const overlay = document.createElement('div');
overlay.classList.add('overlay');

const spinner = document.createElement('img');
spinner.classList.add('spinner');
spinner.src = eclipseSpinner;

const infoSection = document.createElement('section');
infoSection.classList.add('info');

const header = document.createElement('header');
header.classList.add('header');

const toolBar = document.createElement('div');
toolBar.classList.add('tool-bar');

const refresh = document.createElement('button');
refresh.classList.add('refresh');
refresh.addEventListener('click', handleRefreshClick);
refresh.addEventListener('mouseover', buttonAnimation);

const tempUnits = document.createElement('div');
tempUnits.classList.add('temp-units');
tempUnits.addEventListener('click', switchTempUnits);

const fahrenheit = document.createElement('button');
fahrenheit.classList.add('temp-units__fahrenheit', 'temp-units__unit');
fahrenheit.innerText = 'F';

const celsius = document.createElement('button');
celsius.classList.add('temp-units__celsius', 'temp-units__unit', 'active');
celsius.innerText = 'C';

[fahrenheit, celsius].forEach(item =>
  item.addEventListener('mouseover', animateUnitButton)
);

const langBox = document.createElement('div');
langBox.classList.add('lang-box');
langBox.addEventListener('click', changeLang);

const ru = document.createElement('button');
ru.classList.add('lang-box__ru', 'lang-box__lang');
ru.innerText = 'ru';

const be = document.createElement('button');
be.classList.add('lang-box__be', 'lang-box__lang');
be.innerText = 'be';

const en = document.createElement('button');
en.classList.add('lang-box__en', 'lang-box__lang', 'active');
en.innerText = 'en';

[ru, be, en].forEach(item =>
  item.addEventListener('mouseover', animateLangButton)
);

const input = document.createElement('input');
input.classList.add('input');
input.required = true;
input.setAttribute('type', 'text');

const submitBtn = document.createElement('input');
submitBtn.classList.add('submit');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Search');

const speechRecognition = document.createElement('div');
speechRecognition.classList.add('speech-recognition');
speechRecognition.addEventListener('click', handleRecognition);

const form = document.createElement('form');
form.classList.add('form');
form.addEventListener('submit', handleCitySubmit);

const locationName = document.createElement('div');
locationName.classList.add('location-name');

const dateBox = document.createElement('div');
dateBox.classList.add('date-box');

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

const icon = document.createElement('img');
icon.classList.add('weather-box__icon');

const summary = document.createElement('div');
summary.classList.add('weather-box__summary');

const apparentTemperature = document.createElement('div');
apparentTemperature.classList.add('weather-box__apparent-temperature');

const wind = document.createElement('div');
wind.classList.add('weather-box__wind');

const humidity = document.createElement('div');
humidity.classList.add('weather-box__humidity');

const threeDaysWeather = document.createElement('div');
threeDaysWeather.classList.add('three-days-weather');

const dayOne = document.createElement('div');
dayOne.classList.add('day', 'day-one');

const dayOneName = document.createElement('div');
dayOneName.classList.add('day__name', 'day-one__name');

const dayOneTemperature = document.createElement('div');
dayOneTemperature.classList.add('day__temperature', 'day-one__temperature');

const dayOneIcon = document.createElement('img');
dayOneIcon.classList.add('day__icon', 'day-one__icon');

const dayTwo = document.createElement('div');
dayTwo.classList.add('day', 'day-two');

const dayTwoName = document.createElement('div');
dayTwoName.classList.add('day__name', 'day-two__name');

const dayTwoTemperature = document.createElement('div');
dayTwoTemperature.classList.add('day__temperature', 'day-two__temperature');

const dayTwoIcon = document.createElement('img');
dayTwoIcon.classList.add('day__icon', 'day-two__icon');

const dayThree = document.createElement('div');
dayThree.classList.add('day', 'day-three');

const dayThreeName = document.createElement('div');
dayThreeName.classList.add('day__name', 'day-three__name');

const dayThreeTemperature = document.createElement('div');
dayThreeTemperature.classList.add('day__temperature', 'day-three__temperature');

const dayThreeIcon = document.createElement('img');
dayThreeIcon.classList.add('day__icon', 'day-three__icon');

const visualSection = document.createElement('section');
visualSection.classList.add('visual');

const map = document.createElement('div');
map.id = 'map';

const coords = document.createElement('div');
coords.classList.add('coords');

const lng = document.createElement('div');
lng.classList.add('coords__lng');

const lat = document.createElement('div');
lat.classList.add('coords__lat');

const main = document.createElement('main');
main.classList.add('main');

const centeredTemperature = document.createElement('div');
centeredTemperature.classList.add('weather-box__temperature_centered');

export default function buildHTMLContent() {
  container.append(header, main, overlay);

  overlay.append(spinner);

  header.append(toolBar, form);

  toolBar.append(refresh, tempUnits, langBox);
  form.append(input, submitBtn, speechRecognition);

  tempUnits.append(fahrenheit, celsius);

  langBox.append(en, be, ru);

  main.append(infoSection, visualSection);

  infoSection.append(
    locationName,
    dateBox,
    timeBox,
    weatherBox,
    threeDaysWeather
  );
  visualSection.append(map, coords);

  timeBox.append(hours, minutes);

  weatherBox.append(
    temperature,
    icon,
    summary,
    apparentTemperature,
    wind,
    humidity
  );
  temperature.append(centeredTemperature);

  threeDaysWeather.append(dayOne, dayTwo, dayThree);
  dayOne.append(dayOneName, dayOneTemperature, dayOneIcon);
  dayTwo.append(dayTwoName, dayTwoTemperature, dayTwoIcon);
  dayThree.append(dayThreeName, dayThreeTemperature, dayThreeIcon);

  coords.append(lat, lng);
}
