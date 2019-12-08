import translations from './translations';
import { insertDataIntoNode } from './helper';

export default function showDate(dateObj, lang) {
  console.log(lang);
  const month = translations[lang].MONTHS[dateObj.getMonth()];
  const date = dateObj.getDate();
  const day = translations[lang].WEEKDAYS[dateObj.getDay()];

  insertDataIntoNode(`${day} ${date} ${month}`, '.date-box');
}
