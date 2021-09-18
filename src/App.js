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

    deleteItems = (item) => {
    let data = this.state.data.filter(u => {
      return u.id !== item
    })
    this.setState({data})
  }  
  addItem = (e)=>{
    e.id = Math.random();
    const datas = this.state.data
    datas.push(e)
    this.setState({data:datas})
  } 
  render() {
    return (
      <div className="body">
        <div className="container">
            <h1>ToDo List </h1>
            <div className="row">
                <div className="a">
                  <Add addItems={this.addItem}/>
                </div>
                <div className="b">
                  <View data={this.state.data} deleteItems={this.deleteItems}/>
                </div>
            </div>
          </div>
            

      </div>
    )
  }
}
