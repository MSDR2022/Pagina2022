var container = L.DomUtil.get("map");

if(container != null){

container._leaflet_id = null;
}

if(map) {
map.invalidateSize(); // Si hay un mapa, lo elimina para recrearlo y que se pueda cambiar actualmente la posición ##
}

var L = window.L;

var map = L.map("map").
    setView([41.66, -4.72],
        15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

L.marker([41.66, -4.71],{draggable: true}).addTo(map);