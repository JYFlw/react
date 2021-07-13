import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    //标识鼠标移入、移出的
    state = {mouse:false} //标识鼠标移入、移出
    handleMose = flag => {
        return () => {
            this.setState({mouse:flag})
        }
    }
    handleCheck = id => {
        console.log(event)
    }
    handleDelete = id =>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{background:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMose(true)} onMouseLeave={this.handleMose(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
