import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const View = () => {
    let data = JSON.parse(localStorage.getItem('user')) || [];
    const [record, setRecord] = useState(data);
    const [mDelete, setMDelete] = useState([]);
    const [editData, setEditData] = useState({ id: null, name: '', description: '' });

    const handleDelete = (id) => {
        let remove = record.filter(val => val.id !== id);
        localStorage.setItem('user', JSON.stringify(remove));
        setRecord(remove);
        toast("Record deleted...");
    };

    const multiDeleteBtn = () => {
        if (mDelete.length === 0) {
            toast.error("At least one row should be selected");
            return;
        }
        let deleteRecord = record.filter(val => !mDelete.includes(val.id));
        localStorage.setItem('user', JSON.stringify(deleteRecord));
        setRecord(deleteRecord);
        setMDelete([]);
        toast("Records deleted...");
    };

    const multiDelete = (id, checked) => {
        let old = [...mDelete];
        if (checked) {
            old.push(id);
        } else {
            old = old.filter(val => val !== id);
        }
        setMDelete(old);
    };

    const changeStatus = (id, status) => {
        let updatedRecord = record.map((val) => {
            if (val.id === id) {
                val.status = status === "active" ? "deactive" : "active";
            }
            return val;
        });
        localStorage.setItem('user', JSON.stringify(updatedRecord));
        setRecord(updatedRecord);
        toast(`Status changed to ${status === "active" ? "deactive" : "active"}`);
    };

    const handleEdit = (id) => {
        const selectedRecord = record.find(val => val.id === id);
        setEditData({ ...selectedRecord });
    };

    const handleSave = () => {
        const updatedRecords = record.map(val => val.id === editData.id ? editData : val);
        setRecord(updatedRecords);
        localStorage.setItem('user', JSON.stringify(updatedRecords));
        setEditData({ id: null, name: '', description: '' }); 
        toast("Record updated successfully!");
    };

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to='/Add' className="btn btn-primary d-flex align-items-center">
                    <IoIosAddCircle size={24} className="me-2" />
                    Add New Record
                </Link>
                <button onClick={multiDeleteBtn} className="btn btn-danger d-flex align-items-center">
                    <MdDelete size={20} className="me-2" /> Delete Selected
                </button>
            </div>

            <div className="table-responsive rounded shadow-sm">
                <table className="table table-hover text-center align-middle bg-white">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="py-3">ID</th>
                            <th className="py-3">Name</th>
                            <th className="py-3">Description</th>
                            <th className="py-3">Status</th>
                            <th className="py-3">Actions</th>
                            <th className="py-3">
                                <input type="checkbox" onClick={() => setMDelete(record.map(r => r.id))} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.length > 0 ? (
                            record.map((val) => (
                                <tr key={val.id} className="border-bottom">
                                    <td className="py-3">{val.id}</td>
                                    <td className="py-3">
                                        {editData && editData.id === val.id ? (
                                            <input
                                                type="text"
                                                name="name"
                                                value={editData.name}
                                                onChange={handleChange}
                                                className="form-control form-control-sm"
                                            />
                                        ) : (
                                            val.name
                                        )}
                                    </td>
                                    <td className="py-3">
                                        {editData && editData.id === val.id ? (
                                            <input
                                                type="text"
                                                name="description"
                                                value={editData.description}
                                                onChange={handleChange}
                                                className="form-control form-control-sm"
                                            />
                                        ) : (
                                            val.description
                                        )}
                                    </td>
                                    <td className="py-3">
                                        <button
                                            onClick={() => changeStatus(val.id, val.status)}
                                            className={`btn btn-sm ${val.status === "active" ? 'btn-outline-success' : 'btn-outline-secondary'}`}
                                        >
                                            {val.status}
                                        </button>
                                    </td>
                                    <td className="py-3">
                                        {editData && editData.id === val.id ? (
                                            <button onClick={handleSave} className="btn btn-sm btn-success">Save</button>
                                        ) : (
                                            <>
                                                <button onClick={() => handleEdit(val.id)} className="btn btn-sm btn-primary me-2">
                                                    <FaEdit />
                                                </button>
                                                <button onClick={() => handleDelete(val.id)} className="btn btn-sm btn-danger">
                                                    <MdDelete />
                                                </button>
                                            </>
                                        )}
                                    </td>
                                    <td className="py-3">
                                        <input type="checkbox" onChange={(e) => multiDelete(val.id, e.target.checked)} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-muted py-3">No records found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default View;
