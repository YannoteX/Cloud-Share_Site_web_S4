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
            echo "null";
        }

    }

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        if(isset($_FILES['file']['name'])){

            /* Getting file name */
            $filename = $_FILES['file']['name'];
         
            /* Location */
            $location = "../IMG/".$filename;
            $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
            $imageFileType = strtolower($imageFileType);
         
            /* Valid extensions */
            $valid_extensions = array("jpg","jpeg","png");
         
            $response = 0;
            /* Check file extension */
            if(in_array(strtolower($imageFileType), $valid_extensions)) {
               /* Upload file */
               if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
                  $response = $location;
               }
            }
         
            echo $response;
            exit;
         }
    }
?> 
