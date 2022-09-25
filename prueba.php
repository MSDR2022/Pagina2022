<?php
include 'varia.php';
$valori = $_POST['val1'];
$valorf = $_POST['val2'];

$datos[] = [$valori,$valorf];
echo json_encode($datos);
?>