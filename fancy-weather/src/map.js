import config from './config';

const { mapBoxKey } = config;

export function showMap(coords) {
  console.log(+coords[0], +coords[1]);
  mapboxgl.accessToken = mapBoxKey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [+coords[0], +coords[1]],
    zoom: 11
  });
}
