import getCurrentLocationObject from './currentLocation';

jest.mock('./currentLocation.js');

test('get location object', async () => {
  const data = await getCurrentLocationObject();
  expect(typeof data).toBe('object');
});
