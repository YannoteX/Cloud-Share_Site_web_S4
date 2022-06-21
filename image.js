$(document).ready(function()
{
	console.log(getImageName())

});

function getImageName(){
	//from current url//
	return window.location.href.match("[\%a-zA-Z0-9_\-]+[^\/]$")[0];
} 
