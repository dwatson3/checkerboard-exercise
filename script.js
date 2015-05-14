// Your JS goes here
set Timeout(function(newDiv) {
	document.body.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
}, 5000);

for (var i = 0; i < 81; i++) {
var newDiv = document.createElement("div");

document.body.appendChild(newDiv);
newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.padding = "0 0 11.1% 0";
newDiv.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
// (newDiv)+(Math.random()*0xFFFFFF<<0).toString(16)
}
