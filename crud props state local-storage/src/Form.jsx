import React, { useState } from "react";

const Form = ({addrecord}) =>{

    const [Name,setName] = useState('');
    const [Phone,setPhone] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        let obj = {
            id : Math.floor(Math.random() * 1000),
            Name:Name,
            Phone:Phone,
        }
        addrecord(obj)
        alert("Record add");
        
        setName("")
        setPhone("")
    }
    return(
        <div>
            <h2>Add users</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={Name}/></td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td><input type="text"  onChange={(e) => setPhone(e.target.value)} value={Phone}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="Submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default Form;