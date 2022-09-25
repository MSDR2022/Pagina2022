<?php
$dat = ["success" => false];
$post1 = json_decode (file_get_contents('php://input'),true);
if(isset($_post['texto']))
    $dat = ["success" => true];
    echo $post1;
die(json_encode($dat));
print_r($post1);
?>