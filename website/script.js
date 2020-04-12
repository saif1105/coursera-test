var myVar;
var loader;

function loadNow() {
	myVar = setTimeout(displayContent, 3000);

}

function displayContent() {
    document.getElementById("loader").style.display = "none";
    document.getElementById('content').style.display = 'block';
}