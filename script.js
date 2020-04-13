function activeTab(tab){
	var active_tab = document.querySelector(tab);
	active_tab.style.background = "rgba(128, 128, 128, 0.2)";
}

var btt = document.getElementById('btt'),
offset = 100,
body = document.body,
docElement = document.documentElement,
scrollPos, docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElement.clientHeight, docElement.scrollHeight, docElement.offsetHeight);
if(docHeight!= 'undefined'){
	offset = docHeight/4;
}
window.addEventListener("scroll", function(){
	scrollPos = body.scrollTop || docElement.scrollTop;
	btt.className = (scrollPos > offset)? 'visible' : '';
});
btt.addEventListener("click", function(){
	event.preventDefault();
	docElement.scrollTop = 0;
	body.scrollTop = 0;
});	





