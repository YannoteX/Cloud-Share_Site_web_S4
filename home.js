$(document).ready(function()
{
	console.log("test");

	

	$(".Search").keyup(function(){
		$.get("http://localhost/API/search.php?tags=%$city",function(data){

			var dict= $.parseJSON(data) ;
			$("#test").attr(src , data.src );

		});

		

	});



});