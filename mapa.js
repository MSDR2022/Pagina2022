var container = L.DomUtil.get("map");

if(container != null){
container._leaflet_id = null;
}

if(map) {
map.invalidateSize(); // Si hay un mapa, lo elimina para recrearlo y que se pueda cambiar actualmente la posición ##
}

var L = window.L;

var map = L.map("map").
setView([Late, Longe],
        16);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 17
}).addTo(map);

L.control.scale().addTo(map);

L.marker([Late, Longe]).addTo(map).bindPopup('<b>' + Fece + '</b>' + '<br />' + Late + ' ' + Longe).openPopup();;