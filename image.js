$(document).ready(function()
{
	$.get("http://localhost/API/image.php?name="+getImageName(),function(data){
        console.log(data);
	});
});

function getImageName(){
	//from current url//
	return window.location.href.match("[\%a-zA-Z0-9_\-]+[^\/]$")[0];
} 
