function makeCurrentLocationPromise() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default async function getCurrentLocationObject() {
  const locationObject = await makeCurrentLocationPromise();
  return locationObject;
}
