<?php
include 'varia.php';
$valori = $_POST['val1'];
$valorf = $_POST['val2'];
echo json_encode($valori,$valorf);
?>