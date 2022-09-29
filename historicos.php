<?php
include 'varia.php';
$fechaini = $_POST['fechaini'];
$fechafin = $_POST['fechafin'];
$horaini = $_POST['horaini'];
$horafin = $_POST['horafin'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM $Bdatabase WHERE Fecha BETWEEN '$fechaini $horaini' AND '$fechafin $horafin'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($fila);
?>