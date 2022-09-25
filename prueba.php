<?php
include 'varia.php';
$valori = $_POST['val1'];
$valorf = $_POST['val2'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN $valori and $valorf"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($valor);
?>