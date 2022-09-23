<?php
include 'varia.php';
$Fechainicial = mysql_real_escape_string($_POST['Fechainicial']);
$Fechafinal = mysql_real_escape_string($_POST['Fechafinal']);
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '$Fechainicial' AND '$Fechafinal'"); // genera el query a SQL
$fila = mysqli_fetch_all($rows, MYSQLI_ASSOC);
echo json_encode($fila);
?>