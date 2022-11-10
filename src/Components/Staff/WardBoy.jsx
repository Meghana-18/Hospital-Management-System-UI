import React, { useState, useEffect } from "react";
import WardBoyHttpService from "../../Services/wardboyhttpservice";
import {Link, Outlet} from 'react-router-dom';


const WardBoy = () => {

    const [wardboys, setWardBoys] = useState([]);
    const [responseReceived, setResponseReceived] = useState(false);

    const serv = new WardBoyHttpService();

    useEffect(() => {
        
        loadData();
    }, []);

    const loadData = () => {
        serv.getData()
            .then((response) => {
                console.log(response.data);
                setWardBoys(response.data);
                setResponseReceived(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getDeleteWardBoy=(wb)=>{
        console.log(wb["StaffId"]);
        serv.deleteData(wb["StaffId"])
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
              <h2>Ward Boys</h2>
            {/* <Link to="/addpatient" ><button style={{ marginBottom: "20px"}} className="btn btn-dark" >Add New Patient</button></Link> */}
            {responseReceived && 
            
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    {Object.keys(wardboys[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {wardboys.map((wb, index)=>(
                        <tr key={index}>
                        {
                            Object.keys(wb).map((header, index) => (
                            
                                typeof wb[header] === "boolean" ? <td key={index}>{String(wb[header])}</td>: <td key={index}>{wb[header]}</td>  
                               
                            ))
                            
                        }
                        <td><button type="button" class="btn btn-danger" onClick={()=>getDeleteWardBoy(wb)}>Delete</button></td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>}
        </div>
    );

};

export default WardBoy;