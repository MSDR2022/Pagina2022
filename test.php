<?php
$logFile = "view.log";
$id = $_POST['id'];
file_put_contents($logFile, $id);
echo $id;
?>