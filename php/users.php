<?php 
    session_start();
    include_once "config.php";
    $sql = mysqli_query($conn, "SELECT * FROM users");
    $output = "";

    if(mysqli_num_rows($sql) == 1){
        $output .= "NO users are available to chat";
    }
    else{
       include_once "data.php";
    }

    echo $output;

?>