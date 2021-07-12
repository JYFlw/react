import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Headers extends Component {
    //对接受的props进行： 类型、必要性的限制
    // static propTypes = {
    //     addTodo: PropTypes.func.isRequired
    // }
    // handleKeyUp = event => {
        
    // }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车确认" />
            </div>
        )
    }
}
