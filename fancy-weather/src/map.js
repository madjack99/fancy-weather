import config from './config';

const { mapBoxKey } = config;

export function showMap(longitude, latitude) {
  mapboxgl.accessToken = mapBoxKey;
  /* eslint-disable-next-line */
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 11
  });
}
