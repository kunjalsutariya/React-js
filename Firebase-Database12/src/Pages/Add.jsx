import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/Action/action'
import { GrView } from "react-icons/gr";

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            name: name,
        }
        dispatch(addUser(obj))
        alert("record added Successfully...")
        navigate('/')
        setName('')
    }

    return (
        <div align="center" >
            <header style={{ backgroundColor: "#444444", padding: "10px", maxWidth: "60.2%", marginTop: "20px" }} >
                <div className="header d-flex justify-content-center align-items-center"   >
                    <div className=" logo   ">
                        <h2 style={{ color: "#fff", fontSize: "30px" }} >Todo List</h2>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-lg-12  mt-5 p-3    shadow  "  style={{maxWidth:"924.67px"}}   >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2  d-flex     ">
                                <input type="text" className="form-control  rounded-0  shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
                                <button type="submit" className="btn rounded-0" style={{ backgroundColor: "rgb(68 68 68)", color: "#fff" }}>Submit</button>
                                <div className="  d-flex justify-content-end">
                                    <Link to={`/view`} className="btn  rounded-0" style={{  width: "80px" }}><GrView  style={{color:"black" , fontSize:"25px"}}/></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add


