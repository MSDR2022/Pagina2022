<?php
$emps = json_decode($_POST['completo'],true);
foreach($emps as $emp){
    print_r($emp['0']);
}
?>