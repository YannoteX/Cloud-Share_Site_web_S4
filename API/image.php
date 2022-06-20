<?php
    include("db.php");


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    if ($_SERVER["REQUEST_METHOD"] === "GET"){

        $name = "";

        if (isset($_GET["name"])){
            $name = $_GET["name"];
        }

        $query = "SELECT NAME, src, OWNER, tags FROM images WHERE NAME = ?";

        $results = get_results($query, "s", ["$name"]);

        if ($results != false){
            echo json_encode(fetch_results($results));
        }
        else{
            echo "null"
        }

    }
?>