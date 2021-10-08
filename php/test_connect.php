<?php
    include 'connect.php';
    $conn = OpenCon();
    echo "Connected Successfully";
    $data = fetch($conn);
    echo $data;
    echo "            
       
    ";
    $test = getSummary($conn, 1);
    echo "               
    
    ";

    echo $test;
    print($test);
    CloseCon($conn);
?>