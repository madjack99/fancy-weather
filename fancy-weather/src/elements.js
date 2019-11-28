import { handleCitySubmit } from './eventListeners';

const container = document.querySelector('.container');

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

const timeBox = document.createElement('div');
timeBox.classList.add('time-box');

const hours = document.createElement('div');
hours.classList.add('time-box__hours');

const minutes = document.createElement('div');
minutes.classList.add('time-box__minutes');

export default function buildHTMLContent() {
  form.appendChild(input);
  form.appendChild(submitBtn);
  container.appendChild(form);
  timeBox.appendChild(hours);
  timeBox.appendChild(minutes);
  container.appendChild(timeBox);
}