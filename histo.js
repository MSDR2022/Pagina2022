function tableh() {
    const xhttp = new XMLHttpRequest();  //creando el objeto para trabajar
    xhttp.onload = function () {

        var datah = this.responseText
        datah = JSON.parse(datah);
        document.getElementById("lath").innerHTML = datah.Latitud
        document.getElementById("lngh").innerHTML = datah.Longitud
        document.getElementById("dateh").innerHTML = datah.Fecha

    }

    xhttp.open("GET", "historicos.php");  // documento que estamos llamando
    xhttp.send();
}

setInterval(function () {   //creamos un intervalo para realizar el mismo request del archivo que genera la conexión con la base de datos
    tableh();
}, 100); // Cada 1 segundos
