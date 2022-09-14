function todo() {
  function table() {
    const xhttp = new XMLHttpRequest();  //creando el objeto para trabajar
    xhttp.onload = function () {
      var data = this.responseText
      data = JSON.parse(data);

      document.getElementById("lat").innerHTML = data.Latitud
      document.getElementById("lng").innerHTML = data.Longitud
      document.getElementById("date").innerHTML = data.Fecha



    xhttp.open("GET", "datadb.php");  // documento que estamos llamando
    xhttp.send();
  }


  //Funcion para el delay
  setInterval(
    function () {   //creamos un intervalo para realizar el mismo request del archivo que genera la conexión con la base de datos
      table();
    }, 5000); // Cada 5 segundos
  }
}