import React, { useEffect, useState } from "react";
import View from "./View";
import "./Add.css"

const Curd = () => {
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


    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: Date.now(),
            name,
            email,
            password,
            city,
            salary,
            designation,
            status: "Deactive",
        };

        if (!name || !email || !password || !city || !salary || !designation) {
            alert("Please fill in all fields.");
            return;
        }

        if (editid) {
            let newRecord = [...record];
            let UpD = newRecord.map((val) => {
                if (val.id === editid) {
                    return {
                        ...val,
                        name: name,
                        email: email,
                        password: password,
                        city: city,
                        salary: salary,
                        designation: designation,
                    };
                }
                return val;
            });

            localStorage.setItem("user", JSON.stringify(UpD));
            setRecord(UpD);
            setEditId("");
            setName("");
            setEmail("");
            setPassword("");
            setCity("");
            setSalary("");
            setDesignation("");
            alert("Your Record Successfully Update..!");
        } else {
            let allR = [...record, obj];
            localStorage.setItem("user", JSON.stringify(allR));
            setRecord(allR);
            setName("");
            setEmail("");
            setPassword("");
            setCity("");
            setSalary("");
            setDesignation("");
            alert("Your Record is Added !");
        }
    };


    useEffect(() => {
        const data = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : [];
        setRecord(data);
    }, []);


    const deleteUser = (id) => {
        let d = record.filter(val => val.id != id);
        localStorage.setItem('users', JSON.stringify(d));
        setRecord(d)
        alert("successfully Deleted")
    }

    const handleStatus = (id, status) => {
        let upStatus = record.map((val) => {
            if (val.id === id) {
                return {
                    ...val,
                    status: status === "Deactive" ? "Active" : "Deactive",
                };
            }
            return val;
        });
        localStorage.setItem("user", JSON.stringify(upStatus));
        setRecord(upStatus);
        alert("Status Update Successfully...!");
    };


    const editData = (id) => {
        let editItem = record.find((val) => val.id === id);
        setEditId(editItem.id);
        setName(editItem.name);
        setEmail(editItem.email);
        setPassword(editItem.password);
        setCity(editItem.city);
        setSalary(editItem.salary);
        setDesignation(editItem.designation);
    };


    const handleCheckboxChange = (id, checked) => {
        let updatedmultipleDelete = [...multipleDelete];
        if (checked) {
            updatedmultipleDelete.push(id);
        } else {
            updatedmultipleDelete = updatedmultipleDelete.filter((val) => val !== id);
        }
        setMultipleDelete(updatedmultipleDelete);
    };


    const handleAllDelete = () => {
        if (multipleDelete.length > 0) {
            let updatedRecord = record.filter((Val) => !multipleDelete.includes(Val.id));
            localStorage.setItem("user", JSON.stringify(updatedRecord));
            setRecord(updatedRecord);
            setMultipleDelete([]);
            alert("Selected Records Are Deleted...!");
        } else {
            alert("Select at least one record to delete..!");
        }
    };


    const handlechangestatus = (id, checked) => {
        let all = [...multipleUpdateStatus];
        if (checked) {
            all.push(id);
        } else {
            all = all.filter((val) => val !== id);
        }
        setMultipleUpdateStatus(all);
    };



    const multiplestatusupdate = () => {
        let multipleStatusUpdate = record.map((val) => {
            if (multipleUpdateStatus.includes(val.id)) {
                val.status = val.status === "Active" ? "Deactive" : "Active";
            }
            return val;
        });
        localStorage.setItem("user", JSON.stringify(multipleStatusUpdate));

        setRecord(multipleStatusUpdate);
        setMultipleUpdateStatus([]);
        alert("Multiple Status Changed!");

    };

    return (
        <div className="container">
            <h1 style={{ fontFamily: "cursive" }}>Crud operation</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name...!"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="Email">email:</label>
                    <input
                        type="text"
                        placeholder="Enter Your email...!"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="password">password:</label>
                    <input
                        type="text"
                        placeholder="Enter Your password...!"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="City">city:</label>
                    <input
                        type="text"
                        placeholder="Enter Your city...!"
                        id="city"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="Salary">salary:</label>
                    <input
                        type="text"
                        placeholder="Enter Your salary...!"
                        id="salary"
                        onChange={(e) => setSalary(e.target.value)}
                        value={salary}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label style={{
                        fontSize: "18px",
                        color: "white"
                    }} htmlFor="Designation">designation:</label>
                    <input
                        type="text"
                        placeholder="Enter Your designation...!"
                        id="designation"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                        required
                        className="input-field"
                    />
                </div>


                <button type="submit" className="submit-btn">{editid ? "Update" : "Add"}</button>

               
            </form>


            
            <View record={record} editData={editData}
                deleteUser={deleteUser}
                handleStatus={handleStatus} multiplestatusupdate={multiplestatusupdate}
                handlechangestatus={handlechangestatus} handleAllDelete={handleAllDelete} handleCheckboxChange={handleCheckboxChange}
                multipleUpdateStatus={multipleUpdateStatus} />
        </div>
    );
};

export default Curd;