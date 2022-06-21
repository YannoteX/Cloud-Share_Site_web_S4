$(document).ready(function()
{

	$(".Search").keyup(function(){
		$.get('http://localhost/API/search.php?NAME='+$(this).val()  ,function(data){
			console.log($(this).val());

			
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
				var imageI ='<img src="'+arrayJson.src+'"alt="'+arrayJson.NAME+'"/>';
				var image = '<div class="image">'+imageI+'</div>';
				$("#images").append(image);


			}

			console.log(arrayJson);

		});

		

	});



});