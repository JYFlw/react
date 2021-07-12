import React, { Component } from 'react'
import Header from './components/Headers'
import List from './components/List'
import Footer from './components/Footers'

export default class App extends Component {
  //初始化状态
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'洗衣服',done:true},
      {id:'001',name:'拖地',done:false},
    ]
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}
