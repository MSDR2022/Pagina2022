<?php
include 'varia.php';
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.dbtest WHERE ID = 1 ORDER BY Fecha DESC LIMIT 1"); // genera el query a SQL
$rows2 = mysqli_query($conn, "SELECT * FROM Gps.dbtest WHERE ID = 2 ORDER BY Fecha DESC LIMIT 1"); // genera el query a SQL
$fila = mysqli_fetch_assoc($rows);
$fila2 = mysqli_fetch_assoc($rows2);
echo json_encode($fila);
echo json_encode($fila2);
?>