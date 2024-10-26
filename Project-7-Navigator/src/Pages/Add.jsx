import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GrView } from "react-icons/gr";

const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let data = JSON.parse(localStorage.getItem('user')) || [];
  const [record, setRecord] = useState(data);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      toast.error("All fields are required.");
      return;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      description
    };

    let all = [...record, obj];
    localStorage.setItem('user', JSON.stringify(all));
    setRecord(all);
    toast("Record added successfully.");
    setName("");
    setDescription("");
    setTimeout(() => {
      navigation("/");
    }, 2000);
  };

  return (
    <div  >
      <div style={{ width: "20%" }} className="col-lg-12 mx-auto mt-5">
        <Link to='/' className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
          <GrView className="me-2" />
          View Records
        </Link>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="p-5 bg-white shadow rounded">
              <h4 className="text-center mb-4">Add New Record</h4>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label fw-bold">Name</label>
                <input style={{boxShadow:"none",border:"1px solid #C0C0C0"}}
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="descriptionInput" className="form-label fw-bold">Description</label>
                <textarea
                  className="form-control" style={{boxShadow:"none",border:"1px solid #C0C0C0"}}
                  id="descriptionInput"
                  rows="3"
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-block" style={{backgroundColor:"#999999"}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}

export default Add;
