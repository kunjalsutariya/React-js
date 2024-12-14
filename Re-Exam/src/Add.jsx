import React, { useEffect, useState } from "react";
import View from "./View";
import "./Add.css";

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [salary, setSalary] = useState("");
    const [designation, setDesignation] = useState("");
    const [record, setRecord] = useState([]);
    const [editid, setEditId] = useState("");
    const [multipleDelete, setMultipleDelete] = useState([]);
    const [multipleUpdateStatus, setMultipleUpdateStatus] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !city || !salary || !designation) {
            alert("Please fill in all fields.");
            return;
        }

        let newRecord;
        if (editid) {
            newRecord = record.map((val) =>
                val.id === editid
                    ? { ...val, name, email, password, city, salary, designation }
                    : val
            );
            alert("Record updated successfully!");
        } else {
            const obj = {
                id: Date.now(),
                name,
                email,
                password,
                city,
                salary,
                designation,
                status: "Deactive",
            };
            newRecord = [...record, obj];
            alert("Record added successfully!");
        }

        localStorage.setItem("user", JSON.stringify(newRecord));
        setRecord(newRecord);
        resetForm();
    };

    const resetForm = () => {
        setEditId("");
        setName("");
        setEmail("");
        setPassword("");
        setCity("");
        setSalary("");
        setDesignation("");
    };

    const deleteUser = (id) => {
        const updatedRecord = record.filter((val) => val.id !== id);
        localStorage.setItem("user", JSON.stringify(updatedRecord));
        setRecord(updatedRecord);
        alert("Record deleted successfully!");
    };

    const handleStatus = (id, status) => {
        const updatedRecord = record.map((val) =>
            val.id === id ? { ...val, status: status === "Deactive" ? "Active" : "Deactive" } : val
        );
        localStorage.setItem("user", JSON.stringify(updatedRecord));
        setRecord(updatedRecord);
        alert("Status updated successfully!");
    };

    const editData = (id) => {
        const itemToEdit = record.find((val) => val.id === id);
        setEditId(itemToEdit.id);
        setName(itemToEdit.name);
        setEmail(itemToEdit.email);
        setPassword(itemToEdit.password);
        setCity(itemToEdit.city);
        setSalary(itemToEdit.salary);
        setDesignation(itemToEdit.designation);
    };

    const handleCheckboxChange = (id, checked, updateState) => {
        const updatedState = checked
            ? [...updateState, id]
            : updateState.filter((val) => val !== id);
        return updatedState;
    };

    const handleAllDelete = () => {
        if (multipleDelete.length > 0) {
            const updatedRecord = record.filter((val) => !multipleDelete.includes(val.id));
            localStorage.setItem("user", JSON.stringify(updatedRecord));
            setRecord(updatedRecord);
            setMultipleDelete([]);
            alert("Selected records deleted successfully!");
        } else {
            alert("Select at least one record to delete.");
        }
    };

    const handleMultiStatusUpdate = () => {
        const updatedRecord = record.map((val) =>
            multipleUpdateStatus.includes(val.id)
                ? { ...val, status: val.status === "Active" ? "Deactive" : "Active" }
                : val
        );
        localStorage.setItem("user", JSON.stringify(updatedRecord));
        setRecord(updatedRecord);
        setMultipleUpdateStatus([]);
        alert("Statuses updated successfully!");
    };

    return (
        <div className="app-container">
            <h1>CRUD OPERATIONS</h1>
            <form onSubmit={handleSubmit} className="crud-form">
                {["Name", "Email", "Password", "City", "Salary", "Designation"].map((field) => (
                    <div className="form-group" key={field}>
                        <label>{field}:</label>
                        <input
                            type="text"
                            placeholder={`Enter your ${field.toLowerCase()}...`}
                            value={eval(field.toLowerCase())}
                            onChange={(e) => eval(`set${field}(e.target.value)`)}
                            required
                        />
                    </div>
                ))}
                <button type="submit">{editid ? "Update Record" : "Add Record"}</button> 
            </form>

            <View
                record={record}
                editData={editData}
                deleteUser={deleteUser}
                handleStatus={handleStatus}
                handleAllDelete={handleAllDelete}
                handleMultiStatusUpdate={handleMultiStatusUpdate}
                handleCheckboxChange={handleCheckboxChange}
                multipleDelete={multipleDelete}
                multipleUpdateStatus={multipleUpdateStatus}
            />
        </div>
    );
};

export default App;
