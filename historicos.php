<?php
include 'varia.php';
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $Bname);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM bdesign.Basedatos WHERE Fecha BETWEEN '2022-09-21 04:06:02' AND '2022-09-23 12:30:40'"); // genera el query a SQL
$fila = mysqli_fetch_assoc($rows);
echo json_encode($fila);
?>