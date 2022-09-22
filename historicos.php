<?php
include 'varia.php';
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$rows = mysqli_query($conn, "SELECT * FROM Gps.db WHERE Fecha BETWEEN '2022-09-14 04:06:02' AND '2022-09-23 12:30:40'") or die("database error:". mysqli_error($conn)); // genera el query a SQL
while($row = mysqli_fetch_array($rows)) {
    $fila[] = array(
    'Latitud' => $row['Latitud'],
    'Longitud' => $row['Longitud'],
    'Fecha' => $row['Fecha']
    );
echo json_encode($fila);
?>