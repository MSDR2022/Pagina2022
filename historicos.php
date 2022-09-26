<?php
include 'varia.php';
$fechaini = $_POST['fechaini'];
$fechafin = $_POST['fechafin'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '$fechaini' AND '$fechafin'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($fila);
?>