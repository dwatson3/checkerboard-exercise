// Your JS goes here
for (var i = 0; i < 81; i++) {
var newDiv = document.createElement("div");

document.body.appendChild(newDiv);
newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.padding = "0 0 11.1% 0";
newDiv.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);

// (newDiv)+(Math.random()*0xFFFFFF<<0).toString(16);
}

// for (var i = 0; i < 81; i++) {
// var newDiv = document.createElement("div");

// document.body.appendChild(newDiv);
// // newDiv.style.backgroundColor = "red";
// newDiv.style.width = "11.1%";
// newDiv.style.float = "left";
// newDiv.style.padding = "0 0 11.1% 0";

// 	if (i % 2 === 0) {
// 		newDiv.style.backgroundColor = "red";
// 	}
// 	else {
// 		newDiv.style.backgroundColor = "black";
// 	}
// }