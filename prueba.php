<?php

$_post = json_decode (file_get_contents('php://input'),true);
if(isset($_post['texto']))
    $dat = ["success" => true];
die(json_encode($dat));

?>