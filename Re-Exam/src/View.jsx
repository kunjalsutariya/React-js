import React from "react";
import "./View.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const View = ({
    record,
    editData,
    deleteUser,
    handleStatus,
    handleAllDelete,
    handleMultiStatusUpdate,
    handleCheckboxChange,
    multipleDelete,
    multipleUpdateStatus,
}) => (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    {["Id", "Name", "Email", "City", "Salary", "Designation", "Status", "Actions"].map((heading) => (
                        <th key={heading}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {record.map(({ id, name, email, city, salary, designation, status }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{city}</td>
                        <td>{salary}</td>
                        <td>{designation}</td>
                        <td>
                            <button onClick={() => handleStatus(id, status)}>{status}</button>
                        </td>
                        <td>
                            <button onClick={() => editData(id)}><FaEdit />
                            </button>
                            <button onClick={() => deleteUser(id)}><MdDeleteForever /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default View;
