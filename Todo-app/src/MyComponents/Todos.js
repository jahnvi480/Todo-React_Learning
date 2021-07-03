import React from 'react'
import { TodoItem } from './TodoItem'

export default function Todos(props) {
    let Style = {
        minHeight: "70vh"
    }
    return (
        <div className="container my-3" style={Style}>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length===0?"No Todos to display":props.todos.map((todo)=>{
                return (
                <TodoItem  todo={todo} key={todo.srno} onDelete={props.onDelete}/> 
                )
            })}
            
        </div>
    )
}
