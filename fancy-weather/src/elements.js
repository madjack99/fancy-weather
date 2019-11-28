const container = document.querySelector('.container');

const form = document.createElement('form');
form.classList.add('form');

const input = document.createElement('input');
input.setAttribute('type', 'text');

const submitBtn = document.createElement('input');
submitBtn.classList.add('submit');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Search');

export default function buildHTMLContent() {
  form.appendChild(input);
  form.appendChild(submitBtn);
  container.appendChild(form);
}
