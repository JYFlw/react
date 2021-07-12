import React, { Component } from 'react'
import Item  from '../Item'

export default class List extends Component {
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map( todo =>{
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
                        })
                    }
                </ul>
            </div>
        )
    }
}
