import React from 'react'
import TodoElement from '../todoElement';

const TodoList = ({list, handelDelete ,setList}) => {
	return (
		<div className="todo-list">
		{list.map((todo,index)=>{
			return (
				<TodoElement key={index} title={todo.title} description={todo.description} list={list} setList={setList} todo={todo}/>
				)
		})}
		</div>
		)
}

export default TodoList;