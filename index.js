// Import stylesheets
import './style.css';
import {
  Map,
  TileLayer,
  layerGroup,
  Control,
  Marker,
  Icon,
  GeoJSON,
} from 'leaflet';

// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const map = new Map('map');
console.log(1);
const layer = new TileLayer(
  'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
  {
    subdomains: '1234',
  }
);
const tdttwoLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdtoneLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdtthrLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?layer=img&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
// layer.addTo(map);
// map.setView([39.958, 116.395], 16);
tdtoneLayer.addTo(map); //默认展示第一个
// map.setView([39.9522, 116.3949], 10);
map.setView([39.97146345961307, 116.39722824096622], 14);
const layerControl = new Control.Layers(
  { 一: tdtoneLayer, 二: tdttwoLayer, 三: tdtthrLayer },
  {},
  { collapsed: false }
);
layerControl.addTo(map);

const geoData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: '北京化工大学',
        type: '学校',
      },
      geometry: {
        type: 'Point',
        coordinates: [116.41508102416992, 39.97014789511233],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '安贞医院',
        type: '医院',
      },
      geometry: {
        type: 'Point',
        coordinates: [116.39722824096622, 39.97146345961307],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '光熙门地铁',
        type: '地铁',
      },
      geometry: {
        type: 'Point',
        coordinates: [116.4255952835083, 39.966957546049215],
      },
    },
  ],
};
const svg1 =
  '<svg t="1655526918955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10151" width="200" height="200"><path d="M488.6 651.5c4.3 2 9.3 2 13.7 0l234.1-111v159c0 6.1-3.4 11.7-8.9 14.5L502.6 827.4c-4.5 2.3-9.8 2.3-14.4 0L203.5 714.1c-5.5-2.7-8.9-8.3-8.9-14.5V540.5l294 111zM836 359v440.1c0 16.5-13.4 29.9-29.9 29.9s-29.9-13.4-29.9-29.9V371.4l-39.7 9.3v110.4l-241 114.2-300.9-114.2V377l-78-25.2c-6.2-2.4-10.3-8.4-10.3-15s4.1-12.6 10.3-15l372.9-149c3.8-1.5 8-1.5 11.8 0l373 149c6.1 2.5 10.2 8.4 10.2 15s-4 12.6-10.2 15L836 359z" p-id="10152" fill="#0061b0"></path></svg>';

const svg2 =
  '<svg t="1655527081569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14224" width="200" height="200"><path d="M0 505.6c0-60.8 22.4-115.2 67.2-163.2 9.6-9.6 19.2-22.4 25.6-32C153.6 233.6 224 166.4 297.6 102.4c22.4-19.2 41.6-38.4 64-54.4 32-25.6 70.4-41.6 115.2-48 76.8-9.6 144 12.8 201.6 67.2 22.4 19.2 44.8 38.4 70.4 57.6 73.6 64 140.8 131.2 198.4 208 9.6 12.8 22.4 25.6 32 41.6 35.2 51.2 48 112 38.4 172.8-6.4 51.2-28.8 92.8-64 131.2L896 745.6c-41.6 48-83.2 92.8-131.2 134.4-25.6 22.4-51.2 41.6-76.8 64-16 12.8-28.8 25.6-44.8 35.2-54.4 35.2-112 48-176 38.4-51.2-6.4-92.8-28.8-131.2-64-9.6-9.6-19.2-16-32-25.6-64-51.2-124.8-108.8-179.2-172.8-19.2-25.6-41.6-48-60.8-73.6-3.2-9.6-16-25.6-25.6-41.6C12.8 601.6 0 556.8 0 505.6z m425.6 92.8V800c0 22.4 12.8 35.2 35.2 35.2h102.4c6.4 0 12.8-3.2 16-6.4 12.8-12.8 19.2-28.8 19.2-48v-176c0-6.4 0-6.4 6.4-6.4h201.6c16 0 28.8-12.8 32-28.8v-105.6c0-6.4-3.2-12.8-6.4-19.2-6.4-9.6-19.2-12.8-32-12.8h-201.6v-6.4-195.2c0-25.6-12.8-38.4-38.4-38.4h-96c-6.4 0-12.8 0-19.2 3.2-12.8 6.4-19.2 19.2-19.2 32v201.6H224c-22.4 0-35.2 12.8-35.2 35.2v99.2c0 9.6 3.2 16 6.4 22.4 6.4 9.6 19.2 12.8 32 12.8h198.4z" fill="#d81e06" p-id="14225"></path></svg>';

const svg3 =
  '<svg t="1655527477391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14688" width="200" height="200"><path d="M913.45 846.22L838 791.77v-527.8c0-71.21-50.58-121.8-121.79-121.8h-406c-71.21 0-121.79 50.59-121.79 121.8v527.79l-73.57 54.45c-10.17 10.17-10.17 20.34 0 30.52 0 5.09 5.09 5.09 10.18 5.09 5.08 0 10.17 0 15.26-5.09l129.33-84.97c2.31 1.16 51.82-1.15 487.19 0l121.05 84.97c5.09 5.09 10.17 5.09 15.26 5.09s10.17 0 15.26-5.09c10.16-10.17 10.16-20.34 5.07-30.51zM308.04 703.79c-30.53 0-50.87-25.44-50.87-50.87 0-30.52 25.44-50.87 50.87-50.87 30.52 0 50.86 25.43 50.86 50.87 5.09 30.52-20.34 50.87-50.86 50.87z m76.3-178.04c-71.22 0-127.17-10.27-127.17-71.31V322.1c-0.02-61.03 52.92-99.71 115.08-99.2 6.97 3.33 262.75 0.48 304.76 1.27 31.78-0.75 89.08 41.97 89.01 97.93v96.84c0 55.95-55.95 106.82-127.16 106.82H384.34z m335.91 178.04c-30.53 0-50.87-25.44-50.87-50.87 0-30.52 25.44-50.87 50.87-50.87 30.51 0 50.86 25.43 50.86 50.87 0.01 30.52-20.34 50.87-50.86 50.87z" p-id="14689" fill="#19fa28"></path></svg>';
//根据data的type 点位使用不同的图标
const layerGroup2 = new GeoJSON(geoData, {
  pointToLayer: (geoJsonPoint, latlng) => {
    switch (geoJsonPoint.properties['type']) {
      case '学校':
        return new Marker(latlng, {
          icon: new Icon({
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg1),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          }),
        });

      case '医院':
        return new Marker(latlng, {
          icon: new Icon({
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg2),
            iconSize: [18, 41],
            iconAnchor: [9, 40],
          }),
        });

      case '地铁':
        return new Marker(latlng, {
          icon: new Icon({
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg3),
            iconSize: [25, 41],
            iconAnchor: [12, 40],
          }),
        });
    }
  },
});
layerGroup2.addTo(map);
