<?php
include 'varia.php';
$logFile = "view.log";
$Fechainicial = $_POST['Fechainicial'];
$Fechafinal = $_POST['Fechafinal'];
file_put_contents($logFile, $Fechainicial, $Fechafinal);
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '14/09/2022' AND '23/09/2022'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
//echo json_encode($fila);
echo $Fechainicial;
echo $Fechafinal;
?>