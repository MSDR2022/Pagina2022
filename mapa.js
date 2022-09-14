
var container = L.DomUtil.get("map");

if(container != null){
container._leaflet_id = null;
}



    xhttp.open("GET", "datadb.php");  // documento que estamos llamando
    xhttp.send();


  //Funcion para el delay
  setInterval(
    function () {   //creamos un intervalo para realizar el mismo request del archivo que genera la conexión con la base de datos
      table();
    }, 5000); // Cada 5 segundos
