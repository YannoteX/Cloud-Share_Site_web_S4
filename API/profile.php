<?php
    include("db.php");


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    if ($_SERVER["REQUEST_METHOD"] === "GET"){

        $username = "";

        if (isset($_GET["username"])){
            $username = $_GET["username"];
        }

        $query = "SELECT NAME, bio, icon";

        $query .= " FROM users WHERE NAME = ?";

        $results = fetch_results(get_results("SELECT NAME, bio, mail, icon FROM users WHERE NAME=?", "s", ["$username"]));

        echo json_encode($results);

    }

?> 