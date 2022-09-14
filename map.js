      //Mapa
      var container = L.DomUtil.get('map')

      //Mapas if
      if (container != null) {
        container._leaflet_id = null;
      }


    /*  if (map) {
        map.invalidateSize(); // Si hay un mapa, lo elimina para recrearlo y que se pueda cambiar actualmente la posición ##
      }*/

      //Declaracion del mapa
      var map = L.map('map');

      map = L.map('map').setView([data.Latitud, data.Longitud], 13);

      //Estilo del mapa
      var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
function mark  (){
      //Marcador
      var marker = L.marker([data.Latitud, data.Longitud]).addTo(map)
        .bindPopup('<b>' + data.Fecha + '</b>' + '<br />' + data.Latitud + ' ' + data.Longitud).openPopup();
    }
mark()
setInterval(mark, 4900)