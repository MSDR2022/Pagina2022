var map = map('map').setView([11.064, -74.553], 16);
var marker = L.marker([11.064, -74.553]).addTo(map) //Añade marcadores    
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([11.064, -74.553])
function movemark  (){
marker.setLatLng([11.064, -74.553])       
}
movemark()
setInterval(movemark, 4900)