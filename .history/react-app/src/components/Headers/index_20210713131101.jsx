import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Headers extends Component {
    //对接受的props进行： 类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    //键盘事件的回调
    handleKeyUp = event => {
        console.log(event)
        const {keyCode,target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert('输入不能为空')
        }
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车确认" />
            </div>
        )
    }
}
