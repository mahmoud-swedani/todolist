import React, { Component } from 'react'
import './AddItem.css'
export default class Add extends Component {
    state = {
        name:'',
        age: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
        })}
    handelSubmit =(item) => {
        item.preventDefault();
            this.props.addItems(this.state)
            this.setState({
                name:'',
                 age: ''
            })

    }
    render() {
        return (
            <div className="forma"> 
                <h2>Add Data</h2>

                <form onSubmit={this.handelSubmit}>

                    <input id="name" type="text" placeholder="Enter your text: " onChange={this.handelChange} value={this.state.name} />
                    <input id="age" type="number" placeholder="Enter your number: " onChange={this.handelChange} value={this.state.age} />
                    <input className="subbtn" type="submit"  value="submit" />
                    </form>
            </div>

        )
    }
}
