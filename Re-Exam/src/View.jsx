import React from 'react';

const View = ({ 
    record, 
    editData, 
    deleteUser, 
    handleStatus, 
    multiplestatusupdate, 
    handlechangestatus, 
    handleAllDelete, 
    handleCheckboxChange, 
    multipleUpdateStatus 
}) => {
    return (
        <div className="table-container">
            <table className="custom-table" border={2}>
                <thead>
                    <tr className="table-header">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>
                            <button onClick={handleAllDelete} className="action-btn delete-btn">
                                Delete Selected
                            </button>
                        </th>
                        <th>
                            <button onClick={multiplestatusupdate} className="action-btn update-btn">
                                Update Status
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item) => {
                        const { id, name, email, password, city, salary, designation, status } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td>{city}</td>
                                <td>{salary}</td>
                                <td>{designation}</td>
                                <td>
                                    <button
                                        onClick={() => handleStatus(id, status)}
                                        className={`status-btn ${status === 'Deactive' ? 'deactive' : 'active'}`}
                                    >
                                        {status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(id)}
                                        className="action-btn delete-btn"
                                    >
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button
                                        onClick={() => editData(id)}
                                        className="action-btn edit-btn"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange(id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={multipleUpdateStatus.includes(id)}
                                        onChange={(e) => handlechangestatus(id, e.target.checked)}
                                    />
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default View;