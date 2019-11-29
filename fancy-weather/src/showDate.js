import config from './config';
import { insertDataIntoNode } from './helper';

const { MONTHS, WEEKDAYS } = config;

export default function showDate(dateObj) {
  const month = MONTHS[dateObj.getMonth()];
  const date = dateObj.getDate();
  const day = WEEKDAYS[dateObj.getDay()];

  insertDataIntoNode(`${day} ${date} ${month}`, '.date-box');
}
