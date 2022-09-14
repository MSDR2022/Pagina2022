var container = L.DomUtil.get("map");

if (container != null) {
    container._leaflet_id = null;
}

var L = window.L;


const xhttp = new XMLHttpRequest();  //creando el objeto para trabajar
xhttp.onload = function () {
    var data = this.responseText
    data = JSON.parse(data);
    document.getElementById("lat").innerHTML = data.Latitud
    document.getElementById("lng").innerHTML = data.Longitud
    document.getElementById("date").innerHTML = data.Fecha

    var map = L.map("map").
        setView([data.Latitud, data.Longitud],

            13);
}

xhttp.open("GET", "datadb.php");  // documento que estamos llamando
xhttp.send();


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

