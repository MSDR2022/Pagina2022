<?php
$fechaini = $_POST['fechaini'];
$fechafin = $_POST['fechafin'];

$datos[] = [$fechaini, $fechafin];
echo json_encode($datos);
?>