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
        console.log(this.props)
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMose(true)}>
                <label>
                    <input type="checkbox" />
                </label>
            </li>
        )
    }
}
