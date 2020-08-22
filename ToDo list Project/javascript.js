let input = document.querySelector('input');
let add = document.getElementById('add');
let listContainer = document.querySelector('.list-container');


function addToList () {
	let todoInput = input.value;
	let todoContainer = document.createElement("div");
	todoContainer.id = "todo-container"
	let todoElement = document.createElement("div");
	todoElement.id = "todo-element";
	let todoOptions = document.createElement("div");
	todoOptions.id = "todo-options"
	let todoCheckbox = document.createElement("div");
	todoCheckbox.id = "todo-checkbox"
	let todoDelete = document.createElement("div");
	todoDelete.id = "todo-delete";
	listContainer.appendChild(todoContainer);
	todoContainer.appendChild(todoElement);
	todoContainer.appendChild(todoOptions);
	todoOptions.appendChild(todoCheckbox);
	todoOptions.appendChild(todoDelete);
	let userInput = document.createTextNode(todoInput);
	todoElement.appendChild(userInput);
	let checkbox = document.createElement('input');
	checkbox.setAttribute("type", "checkbox");
	todoCheckbox.appendChild(checkbox);
	// let trash = document.createElement('i');
	// trash.class = 'fa fa-trash-o fa-lg';
	let deleteBox = document.createTextNode('Delete');
	todoDelete.appendChild(deleteBox);
	// deleteBox.appendChild(trash);
	todoDelete.addEventListener('click', deleteFromList)
	checkbox.addEventListener('click', checkedOrNot);

}

let todoDelete = document.getElementById('todo-delete');
function deleteFromList () {

	this.parentElement.parentElement.remove();
}

let todoElement = document.getElementById('todo-element');
function checkedOrNot () {
	if (this.checked) {
		this.parentElement.parentElement.parentElement.style.backgroundColor = 'green';
	} else {
		this.parentElement.parentElement.parentElement.style.backgroundColor = '#FFAAAA';
	}
}


add.addEventListener('click', addToList);
if (todoDelete != null) {
	listContainer.removeChild(todoElement);
}
