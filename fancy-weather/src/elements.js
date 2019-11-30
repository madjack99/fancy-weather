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
threeDaysWeather.classList.add('.three-days-weather');

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

export default function buildHTMLContent() {
  container.append(form, infoSection);

  form.append(input, submitBtn);
  infoSection.append(
    locationName,
    dateBox,
    timeBox,
    weatherBox,
    threeDaysWeather
  );

  timeBox.append(hours, minutes);
  weatherBox.append(
    temperature,
    icon,
    summary,
    apparentTemperature,
    wind,
    humidity
  );

  threeDaysWeather.append(dayOne, dayTwo, dayThree);
  dayOne.append(dayOneName, dayOneTemperature, dayOneIcon);
  dayTwo.append(dayTwoName, dayTwoTemperature, dayTwoIcon);
  dayThree.append(dayThreeName, dayThreeTemperature, dayThreeIcon);
}
