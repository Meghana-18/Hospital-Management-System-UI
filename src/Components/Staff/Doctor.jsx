import React, { useState, useEffect } from "react";
import PatientHttpService from "../../Services/patienthttpservice";
import {Link, Outlet} from 'react-router-dom';
import DoctorHttpService from "../../Services/doctorhttpservice";

const Doctor = () => {

    const [doctors, setDoctors] = useState([]);
    const [responseReceived, setResponseReceived] = useState(false);

    const serv = new DoctorHttpService();

    useEffect(() => {
        
        loadData();
    }, []);

    const loadData = () => {
        serv.getData()
            .then((response) => {
                // console.log(response.data);
                setDoctors(response.data);
                setResponseReceived(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getDeleteDoctor=(doc)=>{
        console.log(doc["StaffId"]);
        serv.deleteData(doc["StaffId"])
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
              <h2>Doctors</h2>
            {/* <Link to="/addpatient" ><button style={{ marginBottom: "20px"}} className="btn btn-dark" >Add New Patient</button></Link> */}
            {responseReceived && 
            
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    {Object.keys(doctors[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doc, index)=>(
                        <tr key={index}>
                        {
                            Object.keys(doc).map((header, index) => (
                            
                                typeof doc[header] === "boolean" ? <td key={index}>{String(doc[header])}</td>: <td key={index}>{doc[header]}</td>  
                               
                            ))
                            
                        }
                        <td><button type="button" class="btn btn-danger" onClick={()=>getDeleteDoctor(doc)}>Delete</button></td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>}
        </div>
    );

};

export default Doctor;