export default function showTime(dateObj) {
  const hoursElem = document.querySelector('.time-box__hours');
  const minutesElem = document.querySelector('.time-box__minutes');
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  hoursElem.innerText = `${hours} : `;
  minutesElem.innerText = `${minutes < 10 ? '0' + minutes : minutes}`;

  setInterval(() => {
    minutesElem.innerText === '59'
      ? (minutesElem.innerText = '0')
      : (minutesElem.innerText = +minutesElem.innerText + 1);

    minutesElem.innerText === '0'
      ? (hoursElem.innerText = +hoursElem.innerText + 1)
      : null;

    if (hoursElem.innerText === '24') {
      hoursElem.innerText = '0';
    }
  }, 60000);
}
