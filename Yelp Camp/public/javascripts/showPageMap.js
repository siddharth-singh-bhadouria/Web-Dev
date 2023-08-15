mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: JSON.parse(campground).geometry.coordinates, // starting position [lng, lat]
    zoom: 8, // starting zoom
})

const marker = new mapboxgl.Marker()
    .setLngLat(JSON.parse(campground).geometry.coordinates)
    .addTo(map);

