// Your JS goes here

// for (var i = 0; i < 81; i++) {

var newDiv = document.createElement("div");

document.body.appendChild(newDiv);
// newDiv.style.backgroundColor = "red";
newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.padding = "0 0 11.1% 0";

for (var i = 0; i < 81; i++) {
for (var j = 0; j < 81; j++) {
	if (i % 2 === 0) {
		newDiv.style.backgroundColor = (0, 244, 0, 1);
	}
	else {
		newDiv.style.backgroundColor = "#66cdaa";
	}
	}
	}
}