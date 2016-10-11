window.addEventListener("load", iniciar);
function iniciar(){
	var link = document.querySelectorAll(".span3 ul li a");
	for(var i = 0; i < link.length; i++){
		var url = link[i].getAttribute("href");
		var thumb = youtube.generateThumbnailUrl(url);
		var imagen = document.createElement("img");
		imagen.setAttribute("src", thumb);
		link[i].appendChild(imagen)
	}
}