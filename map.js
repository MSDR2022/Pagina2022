      //Mapa
      var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
      var polylinePoints;
      var polyline;
      var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores    

      //Declaracion del mapa
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
      //Estilo del mapa
      var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
function mark  (){
      //Marcador
      var marker = L.marker([data.Latitud, data.Longitud]).addTo(map)

    }
mark()
setInterval(mark, 4900)