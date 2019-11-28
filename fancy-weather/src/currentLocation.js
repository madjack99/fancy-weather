function makeCurrentLocationPromise() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default async function getCurrentLocation() {
  const { coords } = await makeCurrentLocationPromise();
  const { latitude, longitude } = coords;
  return `${latitude},${longitude}`;
}
