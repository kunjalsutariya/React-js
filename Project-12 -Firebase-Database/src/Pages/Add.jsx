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
        <div align="center">
    <header style={{ backgroundColor: "#1976D2", padding: "15px", maxWidth: "60%", marginTop: "20px", borderRadius: "8px" }}>
        <div className="header d-flex justify-content-center align-items-center">
            <div className="logo">
                <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: "bold", letterSpacing: "1px" }}>Todo List</h2>
            </div>
        </div>
    </header>

    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12 mt-4 p-4 shadow" style={{ maxWidth: "920px", backgroundColor: "#FAFAFA", borderRadius: "12px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex align-items-center">
                        <input 
                            type="text" 
                            className="form-control rounded-3 shadow-sm" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            style={{ marginRight: "10px", padding: "12px", fontSize: "16px", border: "1px solid #D1D1D1" }} 
                        />
                        <button 
                            type="submit" 
                            className="btn rounded-3" 
                            style={{ 
                                backgroundColor: "#1976D2", 
                                color: "#fff", 
                                padding: "8px 20px", 
                                fontSize: "16px", 
                                transition: "background-color 0.3s" 
                            }} 
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#145DA0")} 
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#1976D2")}
                        >
                            Submit
                        </button>
                        <div className="d-flex justify-content-end" style={{ marginLeft: "10px" }}>
                            <Link 
                                to={`/view`} 
                                className="btn rounded-3" 
                                style={{ 
                                    width: "80px", 
                                    backgroundColor: "#F1F1F1", 
                                    border: "1px solid #D1D1D1", 
                                    display: "flex", 
                                    justifyContent: "center", 
                                    alignItems: "center", 
                                    transition: "all 0.3s" 
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#E0E0E0"; 
                                    e.target.style.borderColor = "#C1C1C1";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "#F1F1F1"; 
                                    e.target.style.borderColor = "#D1D1D1";
                                }}
                            >
                                <GrView style={{ color: "#1976D2", fontSize: "22px" }} />
                            </Link>
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


