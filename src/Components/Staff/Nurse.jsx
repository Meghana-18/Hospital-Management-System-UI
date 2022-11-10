import React, { useState, useEffect } from "react";
import NurseHttpService from "../../Services/nursehttpservice";
import {Link, Outlet} from 'react-router-dom';


const Nurse = () => {

    const [nurses, setNurses] = useState([]);
    const [responseReceived, setResponseReceived] = useState(false);

    const serv = new NurseHttpService();

    useEffect(() => {
        
        loadData();
    }, []);

    const loadData = () => {
        serv.getData()
            .then((response) => {
                // console.log(response.data);
                setNurses(response.data);
                setResponseReceived(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getDeleteNurse=(nur)=>{
        console.log(nur["StaffId"]);
        serv.deleteData(nur["StaffId"])
            .then((response)=>{
                loadData();
                console.log("deleteddd", response);
                // setStatusMessage("Data is deleted succsessfully");
            })
             .catch((error)=>{
                // setStatusMessage(error);
             });
    }
 

    return (
        <div style={{ paddingTop: "50px", paddingLeft: "5px", alignContent: "center" }}>
              <h2>Nurses</h2>
            {/* <Link to="/addpatient" ><button style={{ marginBottom: "20px"}} className="btn btn-dark" >Add New Patient</button></Link> */}
            {responseReceived && 
            
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    {Object.keys(nurses[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {nurses.map((nur, index)=>(
                        <tr key={index}>
                        {
                            Object.keys(nur).map((header, index) => (
                            
                                typeof nur[header] === "boolean" ? <td key={index}>{String(nur[header])}</td>: <td key={index}>{nur[header]}</td>  
                               
                            ))
                            
                        }
                        <td><button type="button" class="btn btn-danger" onClick={()=>getDeleteNurse(nur)}>Delete</button></td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>}
        </div>
    );

};

export default Nurse;