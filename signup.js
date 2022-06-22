$(document).ready(function(){

    $("form").submit(function (event){
        event.preventDefault();

        var ID = "";
        var email = "";
        var password = "";

        ID = $("#signID").val();
        email = $("#signMail").val();
        password = $("#signPass").val();

        console.log(checkID(ID));
        console.log(checkMail(email));
        console.log(checkPassword(password));
        

        /*$.post("http://localhost/API/auth.php", {"ID":ID,"email":email,"password":password}, function(data){
            if (data !== "error"){
                $.post("http://localhost/API/session.php", $.parseJSON(data), function(data){
                    window.location.replace("http://localhost/user");
                })
            }
            else{
                $('.error').text('Votre identifiant ou votre mot de passe est incorrect');
            }
        })*/
    })
});

function checkID(ID){
    var regex = new RegExp("")
    return 
}

function checkMail(mail){
    return /^(?=.{1,64}@)((?:[A-Za-z0-9!#\$%&'\*\+\-/=\?\^_`\{\|\}~]+|"(?:\\"|\\\\|[A-Za-z0-9\.!#\$%&'\*\+\-/=\?\^_`\{\|\}~ \(\),:;<>@\[\]\.])+")(?:\.(?:[A-Za-z0-9!#\$%&'\*\+\-/=\?\^_`\{\|\}~]+|"(?:\\"|\\\\|[A-Za-z0-9\.!#\$%&'\*\+\-/=\?\^_`\{\|\}~ \(\),:;<>@\[\]\.])+"))*)@(?=.{1,255}\.)((?:[A-Za-z0-9]+(?:(?:[A-Za-z0-9\-]*[A-Za-z0-9])?)\.)+[A-Za-z]{2,})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|)])$/gm.test(mail);
}

function checkPassword(password){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(password);
}