// JavaScript

/*var iniciar = function(){
	var link = document.querySelectorAll(".span3 ul li a");
	for(var i = 0; i < link.length; i++){
		var url = link[i].getAttribute("href");
		var thumb = youtube.generateThumbnailUrl(url);
		var imagen = document.createElement("img");
		imagen.setAttribute("src", thumb);
		link[i].appendChild(imagen)
	}
};
window.addEventListener("load", iniciar);*/

// jQuery

var iniciar = function(){
	var $enlaces = $("a");
	$enlaces.each(interar);
}
var interar = function(index, element){
	var $element = $(element);
	var linkVideo = $element.attr("href");
	var linkImagen = youtube.generateThumbnailUrl(linkVideo);
	var $imagen = $("<img>");
	$imagen.attr("src", linkImagen);
	$element.append($imagen);
}
$(document).ready(iniciar);