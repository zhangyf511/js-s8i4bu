// Import stylesheets
import './style.css';
import { Map, TileLayer, layerGroup, Control, Marker, Icon } from 'leaflet';

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
const tdtoneLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdttwoLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdtthrLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?layer=img&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
// layer.addTo(map);
// map.setView([39.958, 116.395], 16);
tdtoneLayer.addTo(map); //默认展示第一个
map.setView([39.9522, 116.3949], 16);

const items = document.getElementsByName('base');
items.forEach((item) => {
  item.onclick = (evt) => {
    switch (evt.target.value) {
      case 'amap':
        tdttwoLayer.removeFrom(map);
        tdtthrLayer.removeFrom(map);
        tdtoneLayer.addTo(map);
        break;
      case 'tdt':
        tdtoneLayer.removeFrom(map);
        tdtthrLayer.removeFrom(map);
        tdttwoLayer.addTo(map);
        break;
      case 'tdtyx':
        tdtoneLayer.removeFrom(map);
        tdttwoLayer.removeFrom(map);
        tdtthrLayer.addTo(map);
        break;
    }
  };
});

const layerControl = new Control.Layers(
  { 一: tdtoneLayer, 二: tdttwoLayer, 三: tdtthrLayer },
  {},
  { collapsed: false }
);
layerControl.addTo(map);
const marker = new Marker([39.9522, 116.3949], {
  icon: new Icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
});
marker.addTo(map);
