import React, { useState, useEffect, Fragment } from "react";
import IpdPatientHttpService from "../../Services/ipdpatienthttpservice";
import ReportHttpService from "../../Services/reporthttpservice";
import {useNavigate} from 'react-router-dom';
const IpdComponent = () => {
    
    const [ipdPatients, setIpdPatients] = useState([]);
    const [statusMessage, setStatusMessage] = useState('');
    const [responseReceived, setResponseReceived] = useState(false);
    const [bill, setBill] = useState(0);
    //Need to take specialization input
    const serv = new IpdPatientHttpService();
    const billServ = new ReportHttpService();
    const navigate = useNavigate();
    useEffect(() => {
        
        getIpdPatient();
    }, []);

    const ipdPatientBill = (id) => {
        billServ.calcIpdBill(id).then((response) => {
            setBill(response.data);
            setResponseReceived(true);
            setStatusMessage("Data received successfully");
        })
        .catch(error => {
            setStatusMessage(error.message);
        })
    }

    const getIpdPatient = () => {
        serv.getData()
            .then((response) => {
                setIpdPatients(response.data);
                let ipddata=response.data;
                setIpdPatients(ipddata.map((ipd)=>Object.keys(ipd).slice(0, 10).reduce((result, key) => {
                    result[key] = ipd[key];
            
                    return result;
                }, {})));
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    // const getIpdPatientbyId = (id) => {
    //     serv.getDatabyId(id)
    //         .then((response) => {
    //             setIpdPatients(response.data);
    //             setResponseReceived(true);
    //             setStatusMessage("Data is received successfully");
    //         })
    //         .catch((error => {
    //             setStatusMessage(error.message);
    //         }));
    // };

    const postIpdPatient = (id) => {
        serv.postData(id)
            .then((response) => {
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const putIpdPatient = (patient) => {
        serv.putData(patient.id, patient)
            .then((response) => {
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const deleteIpdPatient = (ipdpatient) => {
        serv.deleteData(ipdpatient["PatientId"])
            .then((response) => {
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const IpdObsPatient = (ipdpatient) => {
        console.log(ipdpatient);
        navigate("/ipdobservations",{state:ipdpatient});
        // <IPDObservation value={ipdpatient}></IPDObservation>
    };

    return (
        <Fragment>
            <h2>Ipd Patients</h2>
            
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
                            
                                Object.keys(ipdPatients[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ipdPatients.map((ipdPatient, index) => (
                                <tr key={index}>
                                    {
                                        Object.keys(ipdPatient).map((header, index) => (
                                            typeof ipdPatient[header] === "boolean" ? <td key={index}>{String(ipdPatient[header])}</td>: <td key={index}>{ipdPatient[header]}</td>  
                                        ))
                                    }
                                    {
                                        <td>
                                            <button type="button" className="btn btn-warning" onClick={() => IpdObsPatient(ipdPatient)}>Record Observation</button>
                                        </td>
                                    }   
                                    {
                                        <td>
                                            <button type="button" className="btn btn-warning" onClick={() => ipdPatientBill(ipdPatient.id)}>Calculate Bill</button>
                                        </td>
                                    }  
                                    {
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteIpdPatient(ipdPatient)}>Delete</button>
                                        </td>
                                    } 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </Fragment>
    );
    
};

export default IpdComponent;