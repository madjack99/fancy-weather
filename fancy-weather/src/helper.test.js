import { getSeason, getPartOfTheDay } from './helper';

test('Get season - winter', () => {
  const newDate = new Date('2019-12-09');
  expect(getSeason(newDate)).toBe('winter');
});

test('Get season - autumn', () => {
  const newDate = new Date('2019-9-09');
  expect(getSeason(newDate)).toBe('autumn');
});

test('Get season - summer', () => {
  const newDate = new Date('2019-8-09');
  expect(getSeason(newDate)).toBe('summer');
});

test('Get season - spring', () => {
  const newDate = new Date('2019-4-09');
  expect(getSeason(newDate)).toBe('spring');
});

test('get part of the day - morning', () => {
  const newDate = new Date('2019-12-09T06:00');
  expect(getPartOfTheDay(newDate)).toBe('morning');
});

test('get part of the day - day', () => {
  const newDate = new Date('2019-12-09T10:00');
  expect(getPartOfTheDay(newDate)).toBe('day');
});

test('get part of the day - evening', () => {
  const newDate = new Date('2019-12-09T16:00');
  expect(getPartOfTheDay(newDate)).toBe('evening');
});

test('get part of the day - night', () => {
  const newDate = new Date('2019-12-09T23:00');
  expect(getPartOfTheDay(newDate)).toBe('night');
});
