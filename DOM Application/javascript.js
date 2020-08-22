let h1 = document.createElement('h1');
let node = document.createTextNode("This is a H1 made with JS")
let elementDiv = document.getElementById('div');

let button = document.getElementById('btn');
function changeColor() {
	h1.style.backgroundColor = "red";
}

button.addEventListener("click", changeColor);

h1.appendChild(node);
elementDiv.appendChild(h1);

