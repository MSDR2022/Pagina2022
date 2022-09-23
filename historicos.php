<?php
include 'varia.php';
$Fechainicial = echo $_POST['Fechainicial'];
$Fechafinal = echo $_POST['Fechafinal'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '$Fechainicial 00:00:00' AND '$Fechafinal 00:00:00'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($fila);
?>