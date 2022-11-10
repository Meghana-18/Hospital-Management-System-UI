import React from "react";
import { useState } from "react";
import OpdPatientHttpService from "../../Services/opdpatienthttpservice";

const AddOPDPatient = () => {

    const [patient, setPatient] = useState({   PatientId: 0,DoctorId: 0, OpdFees: 0, DiagnoseFees: 0, Dressing: false,  Ecg: false,BloodTest: false, MedicineCharges: 0, BillAmount: 0, BillPaid: false, 
        FirstName: "string",
    MiddleName: "string",
    LastName: "string",
    MobileNo: "string",
    EmailID: "string",
    HouseNo: "string",
    Society: "string",
    Area: "string",
    City: "string",
    State: "string",
    DOB: "string",
    Gender: "string",
    AgeType: "string",
    Admit: true,
   });
    const [displayMessage, setDisplayMessage] = useState("");
    const [requestExecuted, setRequestExecuted] = useState(false);
    const serv = new OpdPatientHttpService();


    const getSaveOPDPatient = () => {

        let curr_patient = patient;
    
        serv.postData(curr_patient)
          .then((response) => {
            // console.log("eee");
            //setEmps([...employees, response.data]);
            if(response.status==200)
            {
                console.log("Data is posted succsessfully");
                setDisplayMessage("OPD details added succsessfully");
                setRequestExecuted(true);
            }
            else
            {
            setDisplayMessage("OPD details addition unsuccsessfull");
            console.log("errrr");
            setRequestExecuted(false);
            }
            // console.log("Data is posted succsessfully");
            // setDisplayMessage("OPD details added succsessfully");
            // setRequestExecuted(true);
    
            // console.log(requestExecuted);
          })
          .catch((error) => {
            // console.log(error);
            setDisplayMessage("OPD details addition unsuccsessfull");
            console.log("errrr",error);
            setRequestExecuted(false);
          });
      };

    return (
        <div>
            <form style={{ paddingTop: "50px", paddingLeft: "100px", alignContent: "center" }} >
                <h2>Enter OPD Details</h2>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Patient ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Patient Id" onChange={(evt) => setPatient({ ...patient, PatientId: parseInt(evt.target.value )})} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Doctor ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Doctor Id" onChange={(evt) => setPatient({ ...patient, DoctorId: parseInt(evt.target.value )})} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label" >OPD Fees</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="OPD fees" onChange={(evt) => setPatient({ ...patient, OpdFees: parseInt(evt.target.value )})} disabled/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Diagnose Fees</label>
                    <div class="col-sm-10">
                        <input type="email" style={{ width: "180px" }} class="form-control" id="inputEmail3" placeholder="Diagnose fees" onChange={(evt) => setPatient({ ...patient, DiagnoseFees: parseInt(evt.target.value )})} disabled/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Dressing</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, Dressing: true }) : setPatient({ ...patient, Dressing: false }) }} disabled/>

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Blood Test</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, BloodTest: true }) : setPatient({ ...patient, BloodTest: false }) }} disabled/>

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">ECG</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, Ecg: true }) : setPatient({ ...patient, Ecg: false }) }} disabled/>

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Medicine Charges</label>
                    <div class="col-sm-10">
                        <input type="email" style={{ width: "180px" }} class="form-control" id="inputEmail3" placeholder="Medicine charges" onChange={(evt) => setPatient({ ...patient, MedicineCharges: parseInt(evt.target.value )})} disabled/>
                    </div>
                </div>
                {/* <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Bill Amount</label>
                    <div class="col-sm-10">
                        <input type="email" style={{ width: "180px" }} class="form-control" id="inputEmail3" placeholder="Bill amount" onChange={(evt) => setPatient({ ...patient, BillAmount: parseInt(evt.target.value )})} />
                    </div>
                </div> */}
                <div class="form-group row">
                    <div class="col-sm-2">Bill Paid</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, BillPaid: true }) : setPatient({ ...patient, BillPaid: false }) }} disabled/>

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="button" class="btn btn-primary" onClick={getSaveOPDPatient}>Add</button>
                    </div>
                </div>


                {requestExecuted && displayMessage}
                {!requestExecuted && displayMessage}
            </form>



        </div>
    );

};

export default AddOPDPatient;