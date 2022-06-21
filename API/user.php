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

        $contactable = fetch_results(get_results("SELECT contactable FROM users WHERE NAME = ?", "s", ["$username"]));

        if ($contactable != false){
            $contactable = $contactable["contactable"];

            $query .= ", contactable";

            if ($contactable == 1){
                $query .= ", mail";
            }
        }

        $query .= " FROM users WHERE NAME = ?";

        $results = get_results($query, "s", ["$username"]);

        

        if ($results != false){
            $image_results = get_results("SELECT images.src, images.NAME FROM users JOIN images ON users.NAME = images.OWNER WHERE users.NAME = ?", "s", ["$username"]);
            $images = array();
            $image = array();

            while($row = fetch_results($image_results)){
                $image["NAME"] = utf8_encode($row['NAME']);
                $image["src"] = utf8_encode($row['src']);

                $images[] = $image;
            }
            if (sizeof($images) != 0) {

            $images = json_encode($images);
            $results = fetch_results($results);
            $results["images"] = $images;
            echo json_encode($results);
            }
            else{
                echo "null";
            }
        }
        else{
            echo "null";
        }

    }

    //SELECT images.src, images.NAME FROM users JOIN images ON users.NAME = images.OWNER WHERE users.NAME = "website"//
?> 