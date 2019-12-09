import getWeather from './weather';

jest.mock('./weather');

test('get weather object props', async () => {
  const data = await getWeather();
  expect(Object.keys(data)).toContain('currently');
});
