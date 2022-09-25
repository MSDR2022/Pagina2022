<?php
$valori = $_POST['valori'];
$valorf = $_POST['valorf'];

$datos[] = [$valori,$valorf];
echo json_encode($datos);
?>