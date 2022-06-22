$(document).ready(function()
{
	$.get('http://localhost/API/search.php?name=c'  ,function(data){
		$("#images").html("");
		if(data==="null")
		{
			$("#images").html("<p> Nous n'avons rien trouver...</p>");
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



			for(let v=0; v<arrayJson.length;v++){
				var imageI ='<img src="'+arrayJson[v].src+'"alt="'+arrayJson[v].NAME+'"/>';
				var image = '<a class="image" href="http://localhost/image/'+arrayJson[v].NAME+'">'+imageI+'</a>';
				$("#images").append(image);


			}
		}
			

	});



			


	$("#recherche").click(function(){
		$.get('http://localhost/API/search.php?name='+$(".Search").val()  ,function(data){
			$("#images").html("");
			if(data==="null")
			{
				$("#images").html("<p> Nous n'avons rien trouver...</p>");
			}
			else {
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
					var imageI ='<img src="'+arrayJson[v].src+'"alt="'+arrayJson[v].NAME+'"/>';
					var image = '<a class="image" href="http://localhost/image/'+arrayJson[v].NAME+'">'+imageI+'</a>';
					$("#images").append(image);


				}

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
				var imageI ='<img src="'+arrayJson[v].src+'"alt="'+arrayJson[v].NAME+'"/>';
				var image = '<a class="image" href="http://localhost/image/'+arrayJson[v].NAME+'">'+imageI+'</a>';
				$("#images").append(image);


			}

			

		});

		

	});

	


});