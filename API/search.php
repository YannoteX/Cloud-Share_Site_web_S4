<?php
    include("db.php");

    //Pour aller chercher une Image

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    if ($_SERVER["REQUEST_METHOD"] === "GET"){
        $name = "";
        $tags = "";

        $types = "";
        $tab_mysql_parameter = array();

        if (isset($_GET["name"])) {
            $name = mysqli_real_escape_string($client, $_GET["name"]);
        }

        if (isset($_GET["tags"])) {
            $tags = mysqli_real_escape_string($client, $_GET["tags"]);
        }

        $query = "SELECT NAME, src FROM images WHERE ";

        if ($name !== ""){
            $query .= "NAME LIKE ?";
            $types .= "s";
            array_push($tab_mysql_parameter , "%$name%");
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
                    $query .= " tags LIKE ?";
                    $types .= "s";
                    array_push($tab_mysql_parameter, "%$tag%");
                    $or = true;
                }
            }
            $query .= ");";

        }

        $results = get_results($query, $types, $tab_mysql_parameter);

        if ($results != false){
            $rows = array();
            $temp = array();

            while($row = fetch_results($results)){
                $temp["NAME"] = utf8_encode($row['NAME']);
                $temp["src"] = utf8_encode($row['src']);
                $rows[] = $temp;
            }

        echo json_encode($rows);

        }
        else {
            echo "null";
        }
    }

?>