import { Component } from "react";

class Users extends Component {
    constructor(props) {
        super();
        console.log(props);
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                {
                    this.props.kunjal.map((user, i) => {
                        const { id, name, age , course } = user

                        return (
                            <div>
                                <span>{name}</span> &nbsp;&nbsp;
                                <span>{course.join(" , ")}</span>
                            </div>
                        )
                    })
                }
                <div>
                    <h2>Country</h2>
                    {
                        this.props.cou.map((c) => {
                            return (
                                <h3>{c}</h3>
                            )
                        })

                    }

                </div>

                <div>
                    <h2>Color</h2>
                    {
                        this.props.color.map((c)=>{
                            return(
                                <h3 style={{color:c,}}>{c}</h3>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Users;