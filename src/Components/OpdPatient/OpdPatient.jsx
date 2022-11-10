import React, { useState, useEffect, Fragment } from "react";
import OpdPatientHttpService from "../../Services/opdpatienthttpservice";
import ReportHttpService from "../../Services/reporthttpservice";
import OPDObservation from "./RecordOpdObservation";
import {useNavigate} from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';

const OpdComponent = () => {
    
    const [opdPatients, setOpdPatients] = useState([]);
    const [statusMessage, setStatusMessage] = useState('');
    const [responseReceived, setResponseReceived] = useState(false);
    const [bill, setBill] = useState(0);
    //Need to take specialization input
    const serv = new OpdPatientHttpService();
    const billServ = new ReportHttpService();
    const navigate = useNavigate();
    useEffect(() => {
        
        getOpdPatient();
    }, []);
    const opdPatientBill = (id) => {
        billServ.calcOpdBill(id).then((response) => {
            setBill(response.data);
            setResponseReceived(true);
            setStatusMessage("Data received successfully");
        })
        .catch(error => {
            setStatusMessage(error.message);
        })
    }
    const getOpdPatient = () => {
        serv.getData()
            .then((response) => {
                setOpdPatients(response.data);
                let opddata=response.data;
                setOpdPatients(opddata.map((opd)=>Object.keys(opd).slice(0, 10).reduce((result, key) => {
                    result[key] = opd[key];
            
                    return result;
                }, {})));
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };
    // const getOpdPatientbyId = (id) => {
    //     serv.getDatabyId(id)
    //         .then((response) => {
    //             setOpdPatients(response.data);
    //             setResponseReceived(true);
    //             setStatusMessage("Data is received successfully");
    //         })
    //         .catch((error => {
    //             setStatusMessage(error.message);
    //         }));
    // };
    // const postOpdPatient = (id) => {
    //     serv.postData(id)
    //         .then((response) => {
    //             setOpdPatients(response.data);
    //             setResponseReceived(true);
    //             setStatusMessage("Data is received successfully");
    //         })
    //         .catch((error => {
    //             setStatusMessage(error.message);
    //         }));
    // };
    // const putOpdPatient = (patient) => {
    //     serv.putData(patient.id, patient)
    //         .then((response) => {
    //             setOpdPatients(response.data);
    //             setResponseReceived(true);
    //             setStatusMessage("Data is received successfully");
    //         })
    //         .catch((error => {
    //             setStatusMessage(error.message);
    //         }));
    // };
    const deleteOpdPatient = (opdpatient) => {
        serv.deleteData(opdpatient["PatientId"])
            .then((response) => {
                setOpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const OpdObsPatient = (opdpatient) => {
        console.log(opdpatient);
        navigate("/opdobservations",{state:opdpatient});

        // <OPDObservation value={opdpatient}></OPDObservation>
    };

    // setOpdPatients(opdPatients.map((opd)=>Object.keys(opd).slice(0, 10).reduce((result, key) => {
    //     result[key] = opd[key];
    //     return result;
    // }, {})));
    // console.log("filtered opd", opdPatients)
    return (
        <Fragment>
            <h2>Opd Patients</h2>
            
            <strong>
                {statusMessage}
            </strong>
            <br /><br />
            {
                responseReceived &&
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                            
                                Object.keys(opdPatients[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            opdPatients.map((opdPatient, index) => (
                                <tr key={index}>
                                    {
                                        Object.keys(opdPatient).map((header, index) => (
                                            typeof opdPatient[header] === "boolean" ? <td key={index}>{String(opdPatient[header])}</td>: <td key={index}>{opdPatient[header]}</td>  
                                        ))
                                    }
                                
                                        <td>
                                          <button type="button" className="btn btn-warning" onClick={() => OpdObsPatient(opdPatient)}>Record Observation</button>
                                        </td>
                                    
                                
                                        <td>
                                            <button type="button" className="btn btn-warning" onClick={() => opdPatientBill(opdPatient.id)}>Calculate Bill</button>
                                        </td>
                                    
                                
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteOpdPatient(opdPatient)}>Delete</button>
                                        </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </Fragment>
    );
    // if(doctors === undefined || doctors === null || doctors.length === 0){
    //     return (<div className="container">
    //         <strong>
    //             No Data to Display
    //         </strong>
    //     </div>);
    // }
    // else
    // {
    // }
};
export default OpdComponent;