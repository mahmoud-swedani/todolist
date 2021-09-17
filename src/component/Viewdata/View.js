import React, { Component } from 'react'
import './View.css'
export default class View extends Component {
    render() {
        const {data} =this.props;
        const data_to =data.map(u=> 
            <tr key={Math.random()}>
                <td>{u.name}</td>
                <td>{u.age}</td>
            </tr>
            );


        return (
            <div className="table">
                <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                    </tr>
                    {data_to}
                </tbody>

                </table>

            </div>
        )
    }
}
