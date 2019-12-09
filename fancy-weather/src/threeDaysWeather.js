import translations from './translations';
import { insertDataIntoNode, insertIcon } from './helper';

export default function showThreeDaysWeather(weatherObj, lang) {
  for (let i = 1; i <= 3; i++) {
    const dayObj = weatherObj.daily.data[i];
    const dayName = getName(dayObj, lang);
    const dayTemp = getTemp(dayObj);
    const dayIcon = dayObj.icon;

    let dayNumber;
    if (i === 1) dayNumber = 'one';
    if (i === 2) dayNumber = 'two';
    if (i === 3) dayNumber = 'three';

    insertDataIntoNode(dayName, `.day-${dayNumber}__name`);
    insertDataIntoNode(dayTemp, `.day-${dayNumber}__temperature`);
    insertIcon(dayIcon, `.day-${dayNumber}__icon`);
  }
}

function getTemp(dayObj) {
  return Math.trunc(
    (dayObj.apparentTemperatureHigh + dayObj.apparentTemperatureLow) / 2
  );
}

function getName(dayObj, lang) {
  const dateObj = new Date(dayObj.time * 1000);
  return translations[lang].WEEKDAYS[dateObj.getDay()];
}
