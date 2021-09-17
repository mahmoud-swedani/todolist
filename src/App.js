import './App.css';
import View from './component/Viewdata/View';
import React, { Component } from 'react'
import Add from './component/AddItem/AddItem';


export default class App extends Component {
  
   state = {
      data:[
        {id:1, name:"mahmoud-s",age:23},
        {id:2, name:"ahmad-s",age:25},
        {id:3, name:"ahmad-m",age:23},
      ]
    };
  addItem = (e)=>{
    const datas = this.state.data
    datas.push(e)
    this.setState({data:datas})
  } 
  render() {
    return (
      <div className="container">
          <h1>ToDo List </h1>
        <Add addItems={this.addItem}/>
        <View data={this.state.data}/>

      </div>
    )
  }
}
