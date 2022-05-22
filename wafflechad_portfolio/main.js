function getCollapserPreview(collapserElement) {
	return collapserElement.parentElement.nextElementSibling;
}

var collapsers = document.getElementsByClassName("streamable_toggle_button");
for (var i = 0; i < collapsers.length; i++) {
	var collapser = collapsers[i];
	var contentDiv = getCollapserPreview(collapser)
	collapser.innerText = "show";
	contentDiv.style.display === "none";
	collapser.addEventListener("click", function() {
		var contentDiv = getCollapserPreview(this)
		if(contentDiv.style.display === "block") {
			contentDiv.style.display = "none";
			this.innerText = "show";
		} else {
			contentDiv.style.display = "block";
			this.innerText = "hide";
		}	
	});
}