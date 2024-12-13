import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewUser, deleteUser } from '../Redux/Action/action';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


const View = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewUser());
    }, [dispatch]);

    const users = useSelector(state => state.crud1.user);


    

    const deleteRecord = (id) => {
        dispatch(deleteUser(id));
        alert("Record deleted  Successfully...");
    };

    return (
        <div align="center">
        <header 
            className='d-flex justify-content-between align-items-center' 
            style={{ 
                backgroundColor: "#1976D2", 
                padding: "15px", 
                maxWidth: "924.66px", 
                marginTop: "20px", 
                borderRadius: "10px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
            }}>
            <div className="header align-items-center">
                <div className="logo">
                    <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: "bold", letterSpacing: "1px" }}>Todo List</h2>
                </div>
            </div>
            <div>
                <Link 
                    to={`/`} 
                    className="btn justify-content-end" 
                    style={{ 
                        color: "#fff", 
                        backgroundColor: "#145DA0", 
                        padding: "5px 10px", 
                        borderRadius: "8px", 
                        transition: "background-color 0.3s" 
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#0D47A1")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#145DA0")}
                >
                    <IoAddCircle style={{ fontSize: "30px" }} />
                </Link>
            </div>
        </header>
    
        <div className="container">
            <div 
                className="row mt-5 shadow rounded" 
                style={{ 
                    backgroundColor: "#F5F5F5", 
                    maxWidth: "924.66px", 
                    border: "1px solid #D1D1D1", 
                    padding: "15px" 
                }}>
                {users.map((val) => {
                    return (
                        <div 
                            className="main-box d-flex align-items-center justify-content-between text-start p-3 border-bottom" 
                            key={val.id} 
                            style={{ 
                                borderBottom: "1px solid #E0E0E0", 
                                backgroundColor: "#FFFFFF", 
                                borderRadius: "8px", 
                                marginBottom: "10px", 
                                padding: "10px 15px", 
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" 
                            }}>
                            <div className="col-8">
                                <div className="text-box" style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>{val.name}</div>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <button 
                                    onClick={() => deleteRecord(val.id)} 
                                    className='btn' 
                                    style={{ 
                                        fontSize: "16px", 
                                        color: "#D32F2F", 
                                        backgroundColor: "transparent", 
                                        border: "none", 
                                        cursor: "pointer", 
                                        transition: "color 0.3s" 
                                    }}
                                    onMouseOver={(e) => (e.target.style.color = "#B71C1C")}
                                    onMouseOut={(e) => (e.target.style.color = "#D32F2F")}
                                >
                                    <MdDelete style={{ fontSize: "24px" }} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    
    );
};

export default View;
