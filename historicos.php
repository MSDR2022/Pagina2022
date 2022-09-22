<?php
$var_1 = $_POST["var_1"];
$var_2 = $_POST["var_2"];
$var_3 = $_POST["var_3"];
$var_4 = $_POST["var_4"];
include 'varia.php';
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '2022-09-14 04:06:02' AND '2022-09-23 12:30:40'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($fila);
?>