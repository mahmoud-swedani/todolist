import React, { Component } from 'react'
import './View.css'
export default class View extends Component {
    render() {
        const {data, deleteItems} =this.props;
        const length = data.length
        const data_to = length ? (data.map(u=> 
            <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td className="clickDe" onClick={() => deleteItems(u.id)}>&times;</td>
            </tr>
            )):(<p>no iten in DB</p>);


        return (
            <div className="table">
                <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    {data_to}
                </tbody>

                </table>

            </div>
        )
    }
}
