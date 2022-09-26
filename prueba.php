<?php
$valorf = $_POST['valorf'];
$datos[] = [$valorf];
print_r($valorf);
echo json_encode($datos);
?>