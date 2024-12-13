import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './Table.css'

const Table = () => {
    const navigate = useNavigate();
    let data = JSON.parse(localStorage.getItem('users')) || [];
    const [record, setRecord] = useState(data);
    // const [mdelete, setMdelete] = useState([]);
    const [status, setStatus] = useState("");
    const [filRecord, setFilRecord] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const deleteUser = (id) => {
        let updatedRecords = record.filter((val) => val.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedRecords));
        setFilRecord(updatedRecords);
        alert("Record deleted");
    };

    // const handlechangedelete = (id, checked) => {
    //     setMdelete(checked ? [...mdelete, id] : mdelete.filter(val => val !== id));
    // };

    // const multipleDelete = () => {
    //     if (mdelete.length > 0) {
    //         let md = record.filter(val => !mdelete.includes(val.id));
    //         localStorage.setItem("users", JSON.stringify(md));
    //         setFilRecord(md);
    //     } else {
    //         alert("Select at least one user");
    //     }
    // };

    const updateStatus = (id) => {
        const updatedRecords = record.map(user =>
            user.id === id ? { ...user, status: user.status === "Active" ? "Deactive" : "Active" } : user
        );
        const updatedUser = updatedRecords.find(user => user.id === id);
        setRecord(updatedRecords);
        setFilRecord(updatedRecords);
        localStorage.setItem("users", JSON.stringify(updatedRecords));
    
        alert(`Status changed to ${updatedUser.status} for ${updatedUser.name}`);
    };
    

    useEffect(() => {
        let filtered = [...record];
        if (status) filtered = filtered.filter(val => val.status === status);
        if (search) filtered = filtered.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));
        if (sort) {
            filtered = filtered.sort((a, b) => sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        }
        setFilRecord(filtered);
    }, [status, search, sort, record]);

    const resetRecord = () => {
        setFilRecord(record);
        setSearch("");
        setStatus("");
        setSort("");
    };

    return (
        <div className="container-fluid mt-5 shadow p-5">
            <div className="row">
                <div className="col-lg-3 mb-5">
                    <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                    </select>
                </div>

                <div className="col-lg-3 mb-5">
                    <input type="search" className="form-control" placeholder="Search here..." onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>

                <div className="col-lg-3 mb-5">
                    <select className="form-control" onChange={(e) => setSort(e.target.value)} value={sort}>
                        <option value="">Select Sort</option>
                        <option value="asc">A - Z</option>
                        <option value="dsc">Z - A</option>
                    </select>
                </div>

                <div className="col-lg-3 mb-5">
                    <button className="btn btn-reset" onClick={resetRecord}>Reset</button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Join Date</th>
                                <th>Action</th>
                                <th>Status</th>
                                
                                <th>
                                    <Link to={`/add`}>
                                        <button className="btn btn-success btn-sm">Add</button>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filRecord.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.course}</td>
                                    <td>{val.date}</td>
                                    <td>
                                        <button onClick={() => deleteUser(val.id)} className="btn"><MdDelete /></button>
                                        <button onClick={() => navigate(`/edit`, { state: val })} className="btn"><FaEdit /></button>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => updateStatus(val.id)} 
                                            style={{ color: val.status === "Active" ? "green" : "red", border: 0, background: "none", fontWeight: 700 }}
                                        >
                                            {val.status}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
