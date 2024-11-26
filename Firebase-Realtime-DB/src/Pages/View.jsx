import { useEffect } from "react";


const View = () =>{
    const ViewUser = () => {};

    useEffect(()=>{
        ViewUser();
    },[]);

    return(
        <div>
            <h2>ViewUser</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(users).map(([key,value]) =>{
                        return(
                            <tr>
                                <td>{key}</td>
                                <td>{value.name}</td>
                                <td>{value.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default View;