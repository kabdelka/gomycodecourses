import React from 'react' 
import './todoelement.css'

const TodoElement = ({title,description,list,setList,todo }) => {

	const handelDelete = () => {
setList(list.filter(elem=>elem.id !== todo.id))
console.log("deleted")
}


return (
	<div className="todo-element">
	<div className="todo-element-title">{title}</div>
	<div className="todo-element-description">{description}</div>
	<div className="todo-element-options">
	<div className="todo-element-delete"><button onClick={handelDelete}>Delete</button></div>
	</div>
	</div>
	)
}

export default TodoElement;