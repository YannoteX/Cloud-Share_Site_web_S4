<?php

    include("session_library.php");
    include("db.php");

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");    
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        
        $data = $_POST;
        $params = array();

        $query = "SELECT NAME, icon FROM users WHERE ";

        if($data['ID'] !== ""){
            $query .= "NAME = ?";
            array_push($params, $data['ID']);
        }
        else{
            $query .= "mail = ?";
            array_push($params, $data['email']);
        }

        $query .= " and passwd = ?";

        array_push($params, $data['password']);

        if (sizeof(fetch_results(get_results($query, "ss", $params))) === 2){
            echo json_encode(fetch_results(get_results($query, "ss", $params)));
        }
        else{
            echo "error";
        }
    }
?>