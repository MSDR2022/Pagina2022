var container = L.DomUtil.get("map");
import { Latitud } from './index.html';
import { Longitud } from './index.html';
import { Fecha } from './index.html';

if(container != null){
container._leaflet_id = null;
}

if(map) {
map.invalidateSize(); // Si hay un mapa, lo elimina para recrearlo y que se pueda cambiar actualmente la posición ##
}

var L = window.L;

var map = L.map("map").
setView(["Latitud", "Longitud"],
        16);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 17
}).addTo(map);

L.control.scale().addTo(map);

L.marker(["Latitud", "Longitud"]).addTo(map);