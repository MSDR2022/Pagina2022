<?php
$dat = ["success" => false];
$post1 = json_decode (file_get_contents('php://input'),true);
if(isset($_post['texto']))
    $dat = ["success" => true];
die(json_encode($dat));
echo json_encode($post1);
print_r($post1);
?>