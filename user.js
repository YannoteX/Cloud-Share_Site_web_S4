$(document).ready(function()
{
	console.log(getUserName());
	$.get("http://localhost/API/user.php?username="+getUserName(), function(data){
		console.log(data);
		if (data !== "null "){
			$('#not-user').hide();
			var user = $.parseJSON(data);
			var images = user.images.replace(/\}\,\{/gm,"};{").replace("[","").replace("]","").split(";");
			for(let i = 0 ; i < images.length ; i++){
				images[i] = $.parseJSON(images[i]);
			}
			delete user.images;
			
			var name = "<p class='name'> Peusdo : "+ user.NAME +"</p>";
			var icon = "<img class='icon' alt='user_"+user.NAME+"' src='"+ user.icon+"'/>";
			var bio = "<p class='bio'> Bio : "+ user.bio +"</p>";
			var email = "<p class='mail'>";
			if (user.contactable === 1){
				email += user.mail;
			}
			else{
				email += user.NAME + " n'a pas souhaité communiquer ses coordonnées.";
			}

			email+= "</p>";
			$("head>title").text("Cloud Share - "+user.NAME)
			$("#content").append(name);
			$("#content").append(icon);
			$("#content").append(bio);
			$("#content").append(email);



			console.log(images[0].src);

			for (var i = 0; i < images.length; i++) {
				var imageI ='<img src="'+images[i].src+'"alt="'+images[i].NAME+'"/>';
				var image = '<div class="image">'+imageI+'</div>';
				$("#affichage").append(image);
			}

		}
		else{
			$('#not-user').show();
		}
	})

});



function getUserName(){
	//from current url//
	return window.location.href.match("[\%a-zA-Z0-9_\-]+[^\/]$")[0];
} 
