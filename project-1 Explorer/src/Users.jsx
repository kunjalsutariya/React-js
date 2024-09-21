import { Component } from "react";
import './Users.css'

class Users extends Component {
    constructor(props) {
        super();
        console.log(props);

    }
    render() {
        return (
            <div className="user-list-container">
                <h2  className="title" align="center">STUDENT LIST</h2>
                <table className="user-table" align="center" border={3}  cellPadding={5}  cellSpacing={0}> 
                    <thead>
                        <tr>
                            <th>GRID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>COURSE</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.kunjal.map((user, i) => {
                                const { grid, name, email, password, course, city } = user;
                                return (
                                    <tr key={i}>
                                        <td>{grid}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{course.join(" , ")}</td>
                                        <td>{city}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users;