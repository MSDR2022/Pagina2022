//Contenedor del mapa
var container = L.DomUtil.get("map");

if(container != null){
container._leaflet_id = null;
}

if(map) {
map.invalidateSize(); // Si hay un mapa, lo elimina para recrearlo y que se pueda cambiar actualmente la posición ##
}

var L = window.L;

//Declaro el mapa
var map = L.map("map"). 
setView([11.0249, -74.8551],
        17);

//Atributos del mapa
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

//Control del mapa
L.control.scale().addTo(map);

//Marcador
L.marker([11.0249, -74.8551],{draggable: true}).addTo(map);