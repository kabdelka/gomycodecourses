// Slection 

let resultBar = document.querySelector('.result-content');
let btn = document.querySelectorAll('.btn');
let result = document.querySelector('.res');
console.log(btn);
console.log(btn[1])

// Show element in resultBar

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click',() => {
		switch(btn[i].innerText) {
			case "C":
			resultBar.innerHTML = "";
			break;
			case "mod":
			resultBar.innerHTML = resultBar.innerHTML + "%"
			break;
			case "del":
			resultBar.innerHTML = resultBar.innerHTML.substring(0, bar.innerHTML.length -1);
			break;
			default:
			resultBar.innerHTML = resultBar.innerHTML + btn[i].innerHTML;
		}
	})

}

// Evalute the result 

result.addEventListener('click', () => {
try{
	resultBar.innerHTML = eval(resultBar.innerHTML);
}
catch(error) {
	resultBar.innerHTML = "ErrOr";
}
})