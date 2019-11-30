import config from './config';
import { insertDataIntoNode, insertIcon } from './helper';

const { WEEKDAYS } = config;

export default function showThreeDaysWeather(weatherObj) {
  const dayOneObj = weatherObj.daily.data[1];
  const dayTwoObj = weatherObj.daily.data[2];
  const dayThreeObj = weatherObj.daily.data[3];

  const dayOneName = getName(dayOneObj);
  const dayTwoName = getName(dayTwoObj);
  const dayThreeName = getName(dayThreeObj);

  const dayOneTemp = getTemp(dayOneObj);
  const dayTwoTemp = getTemp(dayTwoObj);
  const dayThreeTemp = getTemp(dayThreeObj);

  const dayOneIcon = dayOneObj.icon;
  const dayTwoIcon = dayTwoObj.icon;
  const dayThreeIcon = dayThreeObj.icon;

  insertDataIntoNode(dayOneName, '.day-one__name');
  insertDataIntoNode(dayOneTemp, '.day-one__temperature');
  insertIcon(dayOneIcon, '.day-one__icon');

  insertDataIntoNode(dayTwoName, '.day-two__name');
  insertDataIntoNode(dayTwoTemp, '.day-two__temperature');
  insertIcon(dayTwoIcon, '.day-two__icon');

  insertDataIntoNode(dayThreeName, '.day-three__name');
  insertDataIntoNode(dayThreeTemp, '.day-three__temperature');
  insertIcon(dayThreeIcon, '.day-three__icon');
}

function getTemp(dayObj) {
  return Math.trunc(
    (dayObj.apparentTemperatureHigh + dayObj.apparentTemperatureLow) / 2
  );
}

function getName(dayObj) {
  const dateObj = new Date(dayObj.time * 1000);
  return WEEKDAYS[dateObj.getDay()];
}
