$(document).ready(function()
{
	console.log($.get("http://localhost/API/image.php?name="+getImageName()).src);
	$.get("http://localhost/API/image.php?name="+getImageName() ,function(data){
		console.log(data);
		if(data==="null")
		{
			$("#Cont_img").html("<p> Nous n'avons rien trouver...</p>");
		}
		else{
			
			data=data.replace(/\}\,\{/gm,"};{");
			data=data.replace("[","");
			data=data.replace("]","");

			var array = data.split(";");
			var arrayJson = [];  
			var dict;

			for(let i=0; i<array.length; i++){
				dict = $.parseJSON(array[i]);
				arrayJson.push(dict);

			}
			console.log(dict.OWNER);
			console.log(dict);
			$("#ici").attr("src",dict.src);
			$("#name").text(dict.NAME);
			$("#owner").attr("href","http://localhost/user/"+dict.OWNER);
			$("#owner").text(dict.OWNER);
			$("#dl").attr("download",dict.src);

			
			


		}
			

	});

	



});

function getImageName(){
	//from current url//
	return window.location.href.match("[\%a-zA-Z0-9_\-]+[^\/]$")[0];
} 


