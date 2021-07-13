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
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            // <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMose(true)}>
            //     <label>
            //         <input type="checkbox" />
            //     </label>
            // </li>
            <li style={{background:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMose(true)} onMouserLeave={this.handleMose(false)}>
                <label>
                    <input type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
