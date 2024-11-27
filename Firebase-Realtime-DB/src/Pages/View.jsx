import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../Firebase'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState("");

    const db = getDatabase(app)

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data)
        })

    }

    useEffect(() => {
        viewData();
    }, [])

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users);
        alert("record delete");
        viewData();
    }

    return (
        <div align="center" style={{ padding: "40px 0", backgroundColor: "#f8f9fa" }}>
    <h2 style={{
        fontSize: "2rem", 
        fontWeight: "bold", 
        marginBottom: "20px", 
        color: "#495057"
    }}>
        View User Records
    </h2>

    <div style={{
        width: "75%",
        maxWidth: "1100px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "30px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e3e3e3",
    }}>
        <table style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "30px",
            fontSize: "1rem",
            textAlign: "left",
            borderRadius: "10px",
            overflow: "hidden"
        }}>
            <thead style={{
                padding: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
            }}>
                <tr>
                    <th style={{ padding: "12px", fontWeight: "600" }}>Srno</th>
                    <th style={{ padding: "12px", fontWeight: "600" }}>Name</th>
                    <th style={{ padding: "12px", fontWeight: "600" }}>Phone</th>
                    <th style={{ padding: "12px", fontWeight: "600" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {record && Object.entries(record).map(([key, val], index) => {
                    return (
                        <tr key={key} style={{
                            backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffffff",
                            borderBottom: "1px solid #e0e0e0"
                        }}>
                            <td style={{ padding: "12px", color: "#333" }}>{index + 1}</td>
                            <td style={{ padding: "12px", color: "#333" }}>{val.name}</td>
                            <td style={{ padding: "12px", color: "#333" }}>{val.phone}</td>
                            <td style={{ padding: "12px" }}>
                                <button
                                    onClick={() => deleteUser(key)}
                                    style={{
                                       
                                        color: "black",
                                        background:"white",
                                        padding: "5px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                        fontWeight: "500",
                                        marginRight: "8px",
                                        
                                    }}
                                                    >
                                    <MdDelete />
                                </button>
                                <button
                                    onClick={() => navigate(`/edit`, { state: [key, val] })}
                                    style={{
                                        color: "black",
                                        padding: "5px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                        fontWeight: "500",
                                    }}
                                   
                                >
                                    <FaEdit />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

        <div style={{ textAlign: "center" }}>
            <Link
                to={`/add`}
                style={{
                    display: "inline-block",
                    backgroundColor: "#28a745",
                    color: "#ffffff",
                    padding: "12px 40px",
                    borderRadius: "25px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s, transform 0.2s",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
            >
                Add New User
            </Link>
        </div>
    </div>
</div>

    )
}

export default View