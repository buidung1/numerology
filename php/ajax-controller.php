<?php
$functionName = $_POST["func"]; // func parameter should be sent in AJAX, determines which function to run

    if (function_exists($functionName)) { // check if function exists
         $functionName(); // run function
    }
?>