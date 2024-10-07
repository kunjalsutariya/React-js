import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaTrashAlt } from "react-icons/fa";

function App() {
  const [input, setInput] = useState([
    { id: Math.floor(Math.random() * 10000), Name: "", Email: "", Salary: "" },
  ]);

  const addMore = () => {
    let newField = {
      id: Math.floor(Math.random() * 10000),
      Name: "",
      Email: "",
      Salary: "",
    };
    setInput([...input, newField]);
  };

  const deleteRow = (id) => {
    let d = input.filter((val) => val.id !== id);
    setInput(d);
  };

  const handleChange = (index, event) => {
    const values = [...input];
    values[index][event.target.name] = event.target.value;
    setInput(values);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Dynamic Form</h1>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Salary</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
              {input.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="Name"
                      value={item.Name}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      name="Email"
                      value={item.Email}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Salary"
                      name="Salary"
                      value={item.Salary}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    {index === 0 ? (
                      <button
                        className="btn btn-success"
                        onClick={addMore}
                      >
                        <FaPlus />
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteRow(item.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
