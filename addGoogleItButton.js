// ==UserScript==
// @name     Add GoogleIt Button
// @version  1
// @grant    none
// @include  https://duckduckgo.com/*
// ==/UserScript==

var input=document.createElement("input");
input.type="button";
input.value="Google It";
input.onclick = goToGoogle;
input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
document.body.appendChild(input);


var url_string = location.href
var url = new URL(url_string);
var q = url.searchParams.get("q");


function goToGoogle(){
	window.location.replace("http://google.com/search?q=" + c);
}
