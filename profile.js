$(document).ready(function()
{
    $.get("http://localhost/API/session.php", function (data){
        if (isConnected(data)){
            var session = $.parseJSON(data);
            $.get("http://localhost/API/profile.php?username="+session.NAME, function(data){

                var user = $.parseJSON(data);

                var name = "<p class='name'>"+ user.NAME +"</p>";
			    var icon = "<p class='icon'><img alt='user_"+user.NAME+"' src='"+ user.icon+"'/>";
			    var bio = "<p class='bio'>"+ user.bio +"</p>";
			    var email = "<p class='mail'>" + user.mail + "</p>";
                
                $("head>title").text("Cloud Share - profil - "+user.NAME)
                $("#content").append(name);
                $("#content").append(icon);
                $("#content").append(bio);
                $("#content").append(email);
            });
        }
        else {
            window.location.replace("http://localhost/login");
        }
    });

});


function isConnected(data){
    return data !== "null";
}