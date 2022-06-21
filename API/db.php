<?php
    $client = mysqli_connect('localhost', 'root', 'root', 'projet_site_web') or die('MySQL connect failed : ' . mysqli_connect_error() . "'");

    function new_query($query){
        /*
        Effectue une nouvelle requête, ne fetch pas le résultat
        in : $query => String (nouvelle requête)
             global $client => client mysql
        out : le résultat de la requête ou true , false si echec
        */
        global $client;
        $result = mysqli_query($client, $query) or die(mysqli_error($client));
        return $result;
    }

    function fetch_result($result){
        return mysqli_fetch_assoc($result);
    }

    function close_client(){
        global $client;
        mysqli_close($client);
    }
?>