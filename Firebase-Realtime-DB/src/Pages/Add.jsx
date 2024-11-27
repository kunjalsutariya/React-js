import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone,
        });
        alert("Record added successfully!");
        setName("");
        setPhone("");
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div
                    className="card border-0 shadow"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <div
                        className="card-header text-center"
                        style={{
                            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                            color: "#fff",
                            padding: "1.5rem",
                            borderBottom: "0",
                        }}
                    >
                        <h2 style={{ fontWeight: "bold", letterSpacing: "1px" }}>
                            Add New Record
                        </h2>
                    </div>
                    <div
                        className="card-body"
                        style={{
                            backgroundColor: "#f9f9f9",
                            padding: "2rem",
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                    style={{
                                        fontWeight: "500",
                                        color: "#333",
                                    }}
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Enter your name"
                                    style={{
                                        borderRadius: "12px",
                                        border: "1px solid #ddd",
                                        padding: "10px",
                                        boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                                    }}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="form-label"
                                    style={{
                                        fontWeight: "500",
                                        color: "#333",
                                    }}
                                >
                                    Phone Number:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    placeholder="Enter your phone number"
                                    style={{
                                        borderRadius: "12px",
                                        border: "1px solid #ddd",
                                        padding: "10px",
                                        boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                                    }}
                                    required
                                />
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        background: "linear-gradient(135deg, #2575fc, #6a11cb)",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        borderRadius: "30px",
                                        padding: "10px",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    Add Record
                                </button>
                            </div>
                        </form>
                    </div>
                    <div
                        className="card-footer text-center"
                        style={{
                            backgroundColor: "#fff",
                            padding: "1rem",
                            borderTop: "1px solid #ddd",
                        }}
                    >
                        <Link
                            to={`/`}
                            className="btn btn-link text-decoration-none"
                            style={{
                                fontWeight: "bold",
                                color: "#2575fc",
                                fontSize: "1rem",
                            }}
                        >
                            View Records
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default Add;