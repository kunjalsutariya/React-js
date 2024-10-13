import React from "react";

const Table = ({alluser,deletedata}) =>{
    console.log(alluser);
    
    return(
        <div>
            <h2>View users</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Srno</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Phone}</td>
                                    <td><button onClick={() =>{deletedata(user.id)}}>Delete</button></td>
                                </tr>
                            )  
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table;
