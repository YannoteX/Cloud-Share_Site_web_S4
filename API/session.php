<?php

    include("session_library.php");

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    if ($_SERVER["REQUEST_METHOD"] === "GET"){
        if (check_session() === false){
            start_new_session();
        }
        
        if (count($_SESSION) == 0){
            echo 'null';
        }
        else{
            echo json_encode($_SESSION);
        }
    }

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        if (check_session() === false){
            start_new_session();
        }
        
        foreach($_SESSION as $key => $value){
            unset($_SESSION[$key]);
        }

        foreach($_POST as $key => $value){
            session_set($key, $value);
        }

        if (count($_SESSION) == 0){
            echo 'null';
        }
        else{
            echo json_encode($_SESSION);
        }
    }

?>