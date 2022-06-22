$(document).ready(function(){

    $.get("http://localhost/API/session.php", function (data){

        if (data !== 'null'){
            generateIDHeader($.parseJSON(data));
        }
        else{
            generateGenericHeader();
        }
    });

});

function generateGenericHeader(){
    var connexion = '<a href="http://localhost/login">connexion</a>';
    var inscription = '<a href="http://localhost/signup">inscription</a>';
    var header ='<div class="header"><a href="http://localhost/" class="logo">Cloud Share</a><div class="header-right">'+inscription+connexion+'</div></div>';

    $('#header').html(header);
}

function generateIDHeader(json){
    var logo = '<p><img alt=icon-"' + json.NAME + '" src="' + json.icon + '"/></p>';
    var nom = '<p>' + json.NAME + '</p>';
    var deconnexion = '<p id="deconnexion"><a>deconnexion</a></p>'
    var header ='<div class="header"><a href="http://localhost/" class="logo">Cloud Share</a><div class="header-right"><a href="http://localhost/profile">'+nom+logo+'</a>'+deconnexion+'</div></div>';
    $('#header').html(header);
    $('#deconnexion').click(function () {
        $.post("http://localhost/API/session.php", {}, function (data) {
           generateHeader();
           console.log
        });
    });
}

function generateHeader(){
    $.get("http://localhost/API/session.php", function (data){
        console.log(data);
        if (data !== 'null'){
            generateIDHeader($.parseJSON(data));
        }
        else{
            generateGenericHeader();
        }
    });
}