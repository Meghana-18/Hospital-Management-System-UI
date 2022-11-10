import { Button } from "bootstrap";
import React, { useState, Fragment } from "react";
import doctorhttpservice from "../../Services/reporthttpservice";
import SearchBoxComponent from "./SearchBoxComponent";

const ReportsComponent = () => {
    const [doctors, setDoctors] = useState([]);
    // const [doctor, setDoctor] = useState({ DID: 0, DFirstName: '', DMiddleName: '', DLastName: '', DMobile: '', DEmailID: '', DHouseNo: '', DSociety: '', DArea: '', DCity: '', DState: '', DDOB: '2001-06-18', DGender: '', DSpecialization: '', DSalary: 0.0, DVisiting: false, DFees: 0.0, DCharges: 0.0 });
    const [ipdPatients, setIpdPatients] = useState([]);
    // const [ipdPatient, setIpdPatient] = useState({ PID: 0, DID: 0, NID: 0, RID: 0, IWard: '', IRoom: 0, });
    const [totalCollection, setTotalCollection] = useState(0.0);
    const [statusMessage, setStatusMessage] = useState('');
    // const [specialization, setSpecialization] = useState('ONCOLOGY');
    // const [DID, setDID] = useState(12);
    // const [NID, setNID] = useState(2);
    // const [ward, setWard] = useState('GENERAL');
    const [searchData, setSearchData] = useState();
    const [searchDataType, setSearchDataType] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    const [responseReceived, setResponseReceived] = useState(false);
    const [isDoctor, setIsDoctor] = useState(true);
    const [isTotColl, setIsTotColl] = useState(false);
    //Need to take specialization input

    const serv = new doctorhttpservice();

    // useEffect(() => {
    //     getBySpec();
    // }, []);

    const pullData = (data) => {
        setSearchData(data);
    };

    const showInputBoxSpec = () => {
        setResponseReceived(false);
        setButtonClicked(true);
        setSearchDataType("Specialization");
    };

    const showInputBoxPerDoc = () => {
        setResponseReceived(false);
        setButtonClicked(true);
        setSearchDataType("Patients Per Doctor");
    };

    const showInputBoxPerNurse = () => {
        setResponseReceived(false);
        setButtonClicked(true);
        setSearchDataType("Patients Per Nurse");
    };

    const showInputBoxPerWard = () => {
        setResponseReceived(false);
        setButtonClicked(true);
        setSearchDataType("Patients Per Ward");
    };

    const searchLogic = () => {
        //logic for deciding which API to call
        if (searchDataType === "Specialization")
            getBySpec();
        else if (searchDataType === "Patients Per Doctor")
            getPatientsPerDoc();
        else if (searchDataType === "Patients Per Nurse")
            getPatientsPerNurse();
        else if (searchDataType === "Patients Per Ward")
            getPatientsPerWard();
    }

    const getBySpec = () => {
        serv.getBySpecialization(searchData)
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(true);
                setDoctors(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getEmpDocs = () => {
        serv.getEmployeeDoctors()
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(true);
                setButtonClicked(false);
                setDoctors(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getVisitingDocs = () => {
        serv.getVisitingDoctors()
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(true);
                setButtonClicked(false);
                setDoctors(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getPatientsPerDoc = () => {
        serv.getPatientsPerDoctor(searchData)
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(false);
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getPatientsPerNurse = () => {
        serv.getPatientsPerNurse(searchData)
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(false);
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getPatientsPerWard = () => {
        serv.getPatientsPerWard(searchData)
            .then((response) => {
                setIsTotColl(false);
                setIsDoctor(false);
                setIpdPatients(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    const getTotCollection = () => {
        serv.getTotalCollection()
            .then((response) => {
                setIsDoctor(false);
                setIsTotColl(true);
                setButtonClicked(false);
                setTotalCollection(response.data);
                setResponseReceived(true);
                setStatusMessage("Data is received successfully");
            })
            .catch((error => {
                setStatusMessage(error.message);
            }));
    };

    return (
        <Fragment>
            <h2>Reports</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <button className="btn btn-dark" onClick={showInputBoxSpec}>Doctors by Specialization</button>
                        </td>
                        {/* not a problem */}
                        <td>
                            <button className="btn btn-dark" onClick={getEmpDocs}>Employee Doctors</button>
                        </td>
                        {/* not a problem */}
                        <td>
                            <button className="btn btn-dark" onClick={getVisitingDocs}>Visiting Doctors</button>
                        </td>
                        <td>
                            <button className="btn btn-dark" onClick={showInputBoxPerDoc}>Patients Per Doctor</button>
                        </td>
                        <td>
                            <button className="btn btn-dark" onClick={showInputBoxPerNurse}>Patients Per Nurse</button>
                        </td>
                        <td>
                            <button className="btn btn-dark" onClick={showInputBoxPerWard}>Patients Per Ward</button>
                        </td>
                        {/* not a problem */}
                        <td>
                            <button className="btn btn-dark" onClick={getTotCollection}>Total Collection</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <br /> */}

            {/* <div className="Search">
                    <label><strong>Enter Employee Name or Designation</strong></label>
                    <input type="text" className="form-control" onChange={(event) => setEmpNameorDesig(event.target.value)} onKeyDown={(event) => getByNameorDesigFun(event)}></input>
                </div> 

            <br />*/}

            <strong>
                {statusMessage}
            </strong>
            <br />

            {
                buttonClicked &&
                // <input type="text" class="form-control" id="input" onChange={(evt)=>setSpecialization(evt.target.value)}/>
                <div><SearchBoxComponent func={pullData}></SearchBoxComponent>
                    <button type="button" onClick={searchLogic}>Search</button>
                </div>
            }

            {
                responseReceived &&

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {

                                isDoctor && !isTotColl &&

                                Object.keys(doctors[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                            {
                                !isDoctor && !isTotColl &&
                                Object.keys(ipdPatients[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                            {
                                !isDoctor && isTotColl &&
                                <th>Total Collection</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            isDoctor && !isTotColl &&

                            doctors.map((doc, index) => (
                                <tr key={index}>
                                    {
                                        Object.keys(doc).map((header, index) => (
                                            <td key={index}>{doc[header]}</td>
                                        ))
                                    }
                                </tr>

                            ))
                        }
                        {
                            !isDoctor && !isTotColl &&

                            ipdPatients.map((ipdPatient, index) => (
                                <tr key={index}>
                                    {
                                        Object.keys(ipdPatient).map((header, index) => (
                                            <td key={index}>{ipdPatient[header]}</td>
                                        ))
                                    }
                                </tr>

                            ))
                        }
                        {
                            !isDoctor && isTotColl &&

                            <tr><td>{totalCollection}</td></tr>
                        }

                    </tbody>
                </table>
            }

            {/* {JSON.stringify(employees)} */}

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

export default ReportsComponent;