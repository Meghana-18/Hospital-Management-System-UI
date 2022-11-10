import React, { useState, useEffect } from "react";
import PatientHttpService from "../../Services/patienthttpservice";
import {Link, Outlet} from 'react-router-dom';

const Patient = () => {

    const [patients, setPatients] = useState([]);
    const [responseReceived, setResponseReceived] = useState(false);

    const serv = new PatientHttpService();

    useEffect(() => {
        
        loadData();
    }, []);

    const loadData = () => {
        serv.getData()
            .then((response) => {
                // console.log(response.data);
                setPatients(response.data);
                setResponseReceived(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getDeletePatient=(pat)=>{
        console.log(pat["PatientId"]);
        serv.deleteData(pat["PatientId"])
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
            <Link to="/addpatient" ><button style={{ marginBottom: "20px"}} className="btn btn-dark" >Add New Patient</button></Link>
            {responseReceived && 
            
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    {Object.keys(patients[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((pat, index)=>(
                        <tr key={index}>
                        {
                            Object.keys(pat).map((header, index) => (
                            
                                typeof pat[header] === "boolean" ? <td key={index}>{String(pat[header])}</td>: <td key={index}>{pat[header]}</td>  
                               
                            ))
                            
                        }
                        <td><button type="button" class="btn btn-danger" onClick={()=>getDeletePatient(pat)}>Delete</button></td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>}
        </div>
    );

};

export default Patient;