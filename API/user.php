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

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $data = $_POST;

        
        if ($data["function"] === "insert"){

            
            if (sizeof(fetch_results(get_results("SELECT ID FROM users WHERE NAME=? and mail=? and passwd=?", "sss", [$data["ID"], $data["email"], $data["password"]]))) === 0){
                $tab_id = fetch_results(get_results("SELECT count(ID) FROM users WHERE ?", "i", [1]));
                $id = $tab_id['count(ID)'] + 1 ;
                
                $query = fetch_results(get_results("INSERT IGNORE INTO users(ID, NAME, mail, passwd) VALUES (?, ?, ?, ?)", "isss", [$id, $data["ID"], $data["email"], $data["password"]]));
                print_r($query);
            }
            else{
                echo "error";
            }
        }
    }


?> 