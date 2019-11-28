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

export default function buildHTMLContent() {
  form.appendChild(input);
  form.appendChild(submitBtn);
  container.appendChild(form);
}
