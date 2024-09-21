import { Component } from "react";
class Header extends Component {

    constructor() {
        super();
        this.record = [
            { id: 1, name: "John",phone:123456 },
            { id: 2, name: "Jane", phone:123456 },
            { id: 3, name: "Bob",phone:9876542 },
        ]
    }
    render() {
        return (
            <div>
                <h2 align="center">
                    View Users
                </h2>
                <table align="center" border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                
                <tbody>
                    {
                        this.record.map((val, index) => {
                            return (
                                <tr>
                                    <td>{++index}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </div>
        )
    }
}
export default Header