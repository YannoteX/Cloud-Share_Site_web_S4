<?php
    include("db.php");

    //Pour aller chercher une Image

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    if ($_SERVER["REQUEST_METHOD"] === "GET"){
        $name = "";
        $tags = "";

        if (isset($_GET["name"])) {
            $name = mysqli_real_escape_string($client, $_GET["name"]);
        }

        if (isset($_GET["tags"])) {
            $tags = mysqli_real_escape_string($client, $_GET["tags"]);
        }

        $query = "SELECT NAME, src FROM images WHERE ";

        if ($name !== ""){
            $query .= "NAME like '%$name%'";
        }

        if ($name !== "" && $tags !== ""){
            $query .= " and";
        }

        if ($tags !== ""){
            $or = false;
            $skip = true;

            $query .= " (";
            foreach(explode("%", $tags) as $tag){
                if ($or == true){
                    $query .= " or";
                }
                
                if ($skip == true){
                    $skip = false;
                }
                else {
                    $query .= " tags LIKE '%$tag%'";
                    $or = true;
                }
            }
            $query .= ")";
        }

        $result = new_query($query);

        $rows = array();

        while($row = fetch_result($result)){
            $rows[] = $row;
        }

        echo json_encode($rows);
    }

?>