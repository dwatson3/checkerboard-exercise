// Your JS goes here
// newDiv.innerHTML = "";

for (var i = 0; i < 81; i++) {
var newDiv = document.createElement("div");

document.body.appendChild(newDiv);
// newDiv.style.backgroundColor = "red";
newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.padding = "0 0 11.1% 0";

	if (i % 2 === 0) {
		newDiv.style.backgroundColor = "red";
	}
	else {
		newDiv.style.backgroundColor = "black";
	}
}


// newDiv.style.float = "left";

// var blackDiv = document.createElement("div");
// blackDiv.innerHTML = "square";

// document.body.appendChild(newDiv)