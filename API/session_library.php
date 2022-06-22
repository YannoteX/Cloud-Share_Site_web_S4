<?php
    function start_new_session(){
        session_start();
    }
    function check_session(){
        if (session_id() !== ""){
            return true;
        }
        else {
            return false;
        }
    }

    function session_set($key, $value){
        if (session_id() != ""){
            $_SESSION[$key] = $value;
        }
        else {
            return false;
        }
    }
?>