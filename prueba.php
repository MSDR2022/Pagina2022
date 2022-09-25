<?php
$dat = ["success" => false];
$post1 = json_decode (file_get_contents('php://input'),true);
if(isset($_post['texto']))
    $dat = ["success" => true];
die(json_encode($dat));
echo $post1;
?>