$(document).ready(function()
{

	$("#recherche").click(function(){
		$.get('http://localhost/API/search.php?name='+$(".Search").val()  ,function(data){
			console.log($(".Search").val());

			
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
				var image = '<div class="image">'+imageI+'</div>';
				$("#images").append(image);


			}

		});

		

	});



});