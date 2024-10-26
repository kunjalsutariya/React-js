import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [editid, setEditid] = useState("")

    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditid(location?.state?.id)
    }, [location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        let up = allrecord.map((val, i) => {
            if (val.id == editid) {
                val.name = name,
                    val.phone = phone
            }
            return val;
        })
        localStorage.setItem("users", JSON.stringify(up))
        alert("record apdate")
        navigate("/")
    }

    return (
        <div align="center">
            <h2>Edit User React Router</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name:-</td>
                        <td> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:-</td>
                        <td> <input type="text" value={phone} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <input type="submit" /></td>
                    </tr>
                </table>
            </form>
            <link to={`/`}>View</link>
        </div>
    )
}
export default Edit;