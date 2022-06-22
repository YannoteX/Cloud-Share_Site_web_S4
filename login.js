$(document).ready(function(){

    $("form").submit(function (event){
        event.preventDefault();

        var ID = "";
        var email = "";
        var password = "";

        if(/@/gm.test($("#fID").val()) == true){
            email = $("#fID").val();
        }
        else{
            ID = $("#fID").val();
        }

        password = $("#fpass").val();

        $.post("http://localhost/API/auth.php", {"ID":ID,"email":email,"password":password}, function(data){
            if (data !== "error"){
                $.post("http://localhost/API/session.php", $.parseJSON(data), function(data){
                    window.location.replace("http://localhost/user");
                })
            }
            else{
                $('.error').text('Votre identifiant ou votre mot de passe est incorrect');
            }
        })
    })
});