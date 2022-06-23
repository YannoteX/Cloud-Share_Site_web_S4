$(document).ready(function(){

    $("#signID").keyup(function(){
        if (checkID($(this).val()) === false){
            $("#errorsignID").text("Le nom d'utilisateur doit faire entre 1 et 25 charactères parmis : a-z, A-Z, 0-9, .-_")
        }
        else{
            $("#errorsignID").text("")
        }
    })

    $("#signMail").keyup(function(){
        if (checkMail($(this).val()) === false){
            $("#errorsignMail").text("Ceci n'est pas un mail valide.")
        }
        else{
            $("#errorsignMail").text("")
        }
    })

    $("#signPass").keyup(function(){
        if (checkPassword($(this).val()) === false){
            $("#errorsignPass").text("Le mot de passe doit contenir entre 8 et 16 charactères avec au moins une lettre majuscule et minuscule, un chiffre, et un charactère spécial")
        }
        else{
            $("#errorsignPass").text("")
        }
    })

    
    $("form").submit(function (event){
        event.preventDefault();

        var ID = "";
        var email = "";
        var password = "";

        ID = $("#signID").val();
        email = $("#signMail").val();
        password = $("#signPass").val();

        if (checkID(ID) && checkMail(email) && checkPassword(password)){

            $.post("http://localhost/API/user.php", {"function":"insert","ID":ID,"email":email,"password":password}, function(data){

                
                if (data !== "error"){
                    $.post("http://localhost/API/session.php", {"NAME":ID, "icon":"/ICON/default.png"} , function(data){
                        window.location.replace("http://localhost/profile");
                    });
                }
                else{
                    $('.error').text('Le nom d\'utilisateur ou l\'email existe déjà.');
                }
            })
        }
    });
});

function checkID(ID){
    return /[a-zA-Z0-9\-\_\.]{1,25}/gm.test(ID);
}

function checkMail(mail){
    return /^(?=.{1,64}@)((?:[A-Za-z0-9!#\$%&'\*\+\-/=\?\^_`\{\|\}~]+|"(?:\\"|\\\\|[A-Za-z0-9\.!#\$%&'\*\+\-/=\?\^_`\{\|\}~ \(\),:;<>@\[\]\.])+")(?:\.(?:[A-Za-z0-9!#\$%&'\*\+\-/=\?\^_`\{\|\}~]+|"(?:\\"|\\\\|[A-Za-z0-9\.!#\$%&'\*\+\-/=\?\^_`\{\|\}~ \(\),:;<>@\[\]\.])+"))*)@(?=.{1,255}\.)((?:[A-Za-z0-9]+(?:(?:[A-Za-z0-9\-]*[A-Za-z0-9])?)\.)+[A-Za-z]{2,})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|)])$/gm.test(mail);
}

function checkPassword(password){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/gm.test(password);
}