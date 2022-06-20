<?php
    $client = mysqli_connect('localhost', 'root', 'root', 'projet_site_web') or die('MySQL connect failed : ' . mysqli_connect_error() . "'");

    function get_results($query, $types, $params) {

        global $client;
        $stmt = mysqli_prepare($client, $query);

        mysqli_stmt_bind_param($stmt, $types, ...$params);

        
        $ok = mysqli_stmt_execute($stmt);
        if($ok == false) {
            return false;
        }

        return mysqli_stmt_get_result($stmt);
    
    }

    function fetch_results($result) {
        return mysqli_fetch_assoc($result);
    }

    function close_client(){
        global $client;
        mysqli_close($client);
    }
?>