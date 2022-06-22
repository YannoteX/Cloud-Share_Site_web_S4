$(document).ready(function()
{

	$("#recherche").click(function(){
		$.get('http://localhost/API/search.php?name='+$(".Search").val()  ,function(data){
			$("#images").html("");

			
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



			for(let v=0; v<arrayJson.length;v++){
				var imageI ='<img src="'+arrayJson[v].src+'"alt="'+arrayJson.name+'"/>';
				var image = '<div class="image">'+imageI+'</div>';
				$("#images").append(image);


			}

			

		});

		

	});

	$(".button").click(function(){
		$.get('http://localhost/API/search.php?tags=%$'+$(this).text()  ,function(data){
			console.log(data);

			$(this).css("background-color","cyan");


			$("#images").html("");

			
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



			for(let v=0; v<arrayJson.length;v++){
				var imageI ='<img src="'+arrayJson[v].src+'"alt="'+arrayJson.name+'"/>';
				var image = '<div class="image">'+imageI+'</div>';
				$("#images").append(image);


			}

			

		});

		

	});

	$(".image").click(function(){
		if($(this).hasClass())







	});



});