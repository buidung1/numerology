<?php

    function OpenCon()
    {
        $dbhost = "108.179.232.142";
        $dbuser = "anthangs_alexd";
        $dbpass = "YiosD&0k5$@74l0dTht";
        $db = "anthangs_numerology";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

        return $conn;
    }

    function CloseCon($conn)
    {
        $conn -> close();
    }

    function fetch($conn){
        $myquery = "
        SELECT * FROM  `num_meaning`
        ";

        $query = mysqli_query($conn, $myquery);
        if ( ! $query ) {
            echo mysqli_error();
            die;
        }
        else{
            echo "Successfully";
        }
        
        $data = array();

        while($row = $query->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Summary: " . $row["summary"]. " - numerology " . $row["numerology"]. " - life " . $row["life"]. " - strengths " . $row["strengths"]. " - weaknesses " . $row["weaknesses"]. " - personality " . $row["personality"]. "<br>";
        }
        
        for ($x = 0; $x < mysqli_num_rows($query); $x++) {
            $data[$x] = mysqli_fetch_assoc($query);
        }
        return $data;
    }


    function getSummary($conn, $num){
        $myquery = "
        SELECT summary FROM  `num_meaning`
        WHERE id = $num
        ";

        $query = mysqli_query($conn, $myquery);
        if ( ! $query ) {
            echo mysqli_error();
            die;
        }
        else{
            echo "Successfully";
        }
        
        $data = array();

        while($row = $query->fetch_assoc()) {
            echo " Summary: " . $row["summary"]. "<br>";
        }
        
        return $row;
    }


    // // code goes here.
    // $username = "108.179.232.142"; // use your username  
    // $password = "anthangs_alexd";      // use your password
    // $host = "YiosD&0k5$@74l0dTht";         // use your host name or address 
    // $database="anthangs_numerology";        // use your database name

    // // connect to database
    // $conn = mysqli_connect($host, $username, $password, $database);

    // // Check connection
    // if (mysqli_connect_errno()) {
    //     echo "Failed to connect to MySQL: " . mysqli_connect_error();
    //     exit();
    // }

    // $myquery = "
    // SELECT * FROM  `num_meaning`
    // ";

    // $query = mysql_query($myquery);
    // if ( ! $query ) {
    //     echo mysql_error();
    //     die;
    // }

    // $data = array();

    // for ($x = 0; $x < mysql_num_rows($query); $x++) {
    //     $data[] = mysql_fetch_assoc($query);
    // }

    // echo json_encode($data);

?>
