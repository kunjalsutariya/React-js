import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Table = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [filterData, setfilterData] = useState([])


    const allusers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    const userDelete = (id) => {
        let d = record.filter(val => val.id != id);
        localStorage.setItem("users", JSON.stringify(d));
        setRecord(d);
        alert("record delete");
    }

    const changeStatus = (id, st) => {
        if (st == "active") {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "deactive"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("status successfully changed");
        }
        else {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "active"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("status successfully changed");
        }
    }

    useEffect(() => {
        let filtered = [...allusers]

        if (status != "") {
            filtered = filtered.filter(val => val.status == status);
        } else {
            setfilterData(allusers)
        }

        if (search !== "") {
            filtered = filtered.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));
        } else {
            setfilterData(allusers)
        }

        if (sort != "") {
            filtered.sort((a, b) => {
                if (sort == "asc") {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                } else if (sort === "dsc") {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
                }
            });
        }
        else {
            setfilterData(allusers)
        }
        setfilterData(filtered)
    }, [status, search, sort]);

    const reset = () => {
        setfilterData(allusers);
        setStatus("");
        setSearch("");
        setSort("");
    }


    return (
        <div align="center">
            <h2>View User</h2>

            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="">---Select Status---</option>
                <option value="active">Active</option>
                <option value="inactive">Deactive</option>
            </select>

            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="search here" />

            <select onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="">---Select Sort---</option>
                <option value="active">A-Z</option>
                <option value="inactive">Z-A</option>
            </select>


            <button onClick={() => reset()}> Reset</button>
            <br></br> <br></br>

            <table cellPadding={5} border={1} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        filterData.length !== 0 ? (
                            <>
                                {
                                recor.map((u, i) => {
                                    const { id, name, phone, status } = u;
                                    return (
                                        <tr key={i}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{phone}</td>
                                            <td>
                                                {
                                                    status == "active" ? (
                                                        <button onClick={() => changeStatus(id,status)} style={{backgroundColor:"green"}}>{status}</button>
                                                    ):(
                                                        <button onClick={() => changeStatus(id,status)} style={{backgroundColor:"red"}}>{status}</button>
                                                    )
                                                }
                                            </td>
                                            <td>
                                                <span onClick={() => userDelete(id)}><i className=''><MdDelete style={{color:"orange"}}/></i></span>&nbsp;&nbsp;
                                                <span onClick={() => navigate(`/edit`,{state:u})}><i><Mdedit style={{color:"blue"}}/></i></span>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </>
                        ) : (
                           <>
                             {
                                filterData.map((u, i) => {
                                    const { id, name, phone, status } = u;
                                    return (
                                        <tr key={i}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{phone}</td>
                                            <td>
                                                {
                                                    status == "active" ? (
                                                        <button onClick={() => changeStatus(id,status)} style={{backgroundColor:"green"}}>{status}</button>
                                                    ):(
                                                        <button onClick={() => changeStatus(id,status)} style={{backgroundColor:"red"}}>{status}</button>
                                                    )
                                                }
                                            </td>
                                            <td>
                                                <span onClick={() => userDelete(id)}><i className=''><MdDelete style={{color:"orange"}}/></i></span>&nbsp;&nbsp;
                                                <span onClick={() => navigate(`/edit`,{state:u})}><i><Mdedit style={{color:"blue"}}/></i></span>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                           </>
                        )
                    }
                </tbody>
            </table>
            <Link to={`/add`}>Add</Link> 
        </div>
    )
}
export default Table;