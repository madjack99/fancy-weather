export default function showTime(dateObj) {
  const hoursElem = document.querySelector('.time-box__hours');
  const minutesElem = document.querySelector('.time-box__minutes');
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  hoursElem.innerText = `${hours} : `;
  const adjustedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  minutesElem.innerText = `${adjustedMinutes}`;

  setInterval(() => {
    let intervalMinutes = +minutesElem.innerText + 1;
    let intervalHours = +hoursElem.innerText.split(' ')[0];
    if (intervalMinutes === 60) {
      intervalMinutes = 0;
      intervalHours += 1;
    }
    const adjustedIntervalMinutes =
      intervalMinutes < 10 ? `0${intervalMinutes}` : intervalMinutes;

    const adjustedIntervalHours = intervalHours === 24 ? 0 : intervalHours;

    minutesElem.innerText = adjustedIntervalMinutes;
    hoursElem.innerText = `${adjustedIntervalHours} : `;
  }, 60000);
}
