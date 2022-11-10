import React from "react";
import { useState } from "react";
import IpdPatientHttpService from "../../Services/ipdpatienthttpservice";
import {useLocation} from 'react-router-dom';

const IPDObservation = () => {

    const [patient, setPatient] = useState({ PatientId:0, DoctorId: 0, NurseId: 0, RoomTypeId: 0, Ward: "", RoomNo: 0, AdvancePaid: false, AdmittedDate: "", DischargeDate: "", NoOfDoctorVisits: 0, MedicineCharges: 0, BloodCheck: false, Radiology: false, Injection: false, LaundryCharges: 0, FoodCharges: 0, BillAmount: 0, BillPaid: false,
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
    Admit: true });
    const [displayMessage, setDisplayMessage] = useState("");
    const [requestExecuted, setRequestExecuted] = useState(false);
    const serv = new IpdPatientHttpService();
    const location = useLocation();
    console.log("Location", location.state);



    const getSaveIPDPatient = () => {

        let curr_patient = patient;

        serv.putData(curr_patient)
          .then((response) => {
            if(response.status==200)
            {
                console.log("Data is posted succsessfully");
                setDisplayMessage("IPD details updated succsessfully");
                setRequestExecuted(true);
            }
            else
            {
            setDisplayMessage("IPD details addition unsuccsessfull");
            console.log("errrr");
            setRequestExecuted(false);
            }
          })
          .catch((error) => {
            setDisplayMessage("IPD details addition unsuccsessfull");
            console.log("errrr",error);
            setRequestExecuted(false);
          });
      };

    return (
        <div>
            <form style={{ paddingTop: "50px", paddingLeft: "100px", alignContent: "center" }} >
                <h2>Record Observations</h2>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Patient ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" value={location.state.PatientId} disabled onChange={(evt) => setPatient({ ...patient, PatientId: parseInt(evt.target.value )})} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Doctor ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" value={location.state.DoctorId} disabled onChange={(evt) => setPatient({ ...patient, DoctorId: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Nurse ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" value={location.state.NurseId} disabled onChange={(evt) => setPatient({ ...patient, NurseId: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Room Type ID</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" value={location.state.RoomTypeId} disabled onChange={(evt) => setPatient({ ...patient, RoomTypeId: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Ward</label>
                    <div class="col-sm-10" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputEmail3" placeholder="Ward" value={location.state.Ward} disabled onChange={(evt) => setPatient({ ...patient, Ward: evt.target.value })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Room No</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Room No" value={location.state.RoomNo} disabled onChange={(evt) => setPatient({ ...patient, RoomNo: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Advance Paid</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" value={location.state.AdvancePaid} disabled onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, AdvancePaid: true }) : setPatient({ ...patient, AdvancePaid: false }) }} />

                        </div>
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Admit Date</label>
                    <div class="col-sm-10">
                        <input type="date" style={{ width: "180px" }} class="form-control" id="inputPassword3" value={location.state.AdmittedDate} disabled onChange={(evt) => setPatient({ ...patient, AdmittedDate: evt.target.value })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Discharge Date</label>
                    <div class="col-sm-10">
                        <input type="date" style={{ width: "180px" }} class="form-control" id="inputPassword3" onChange={(evt) => setPatient({ ...patient, DischargeDate: evt.target.value })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Doctor Visit Count</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Doctor Visit Count" onChange={(evt) => setPatient({ ...patient, NoOfDoctorVisits: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Medicine Charges</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Medicine Charges" onChange={(evt) => setPatient({ ...patient, MedicineCharges: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Bood Check</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, BloodCheck: true }) : setPatient({ ...patient, BloodCheck: false }) }} />

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Radiology</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, Radiology: true }) : setPatient({ ...patient, Radiology: false }) }} />

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Injection</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, Injection: true }) : setPatient({ ...patient, Injection: false }) }} />

                        </div>
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Laundary Charges</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Laundary Charges" onChange={(evt) => setPatient({ ...patient, LaundryCharges: parseInt(evt.target.value) })} />
                    </div>
                </div>
                <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Food Charges</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Food Charges" onChange={(evt) => setPatient({ ...patient, FoodCharges: parseInt(evt.target.value) })} />
                    </div>
                </div>
                {/* <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Bill Amount</label>
                    <div class="col-sm-10">
                        <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Bill Amount" onChange={(evt) => setPatient({ ...patient, BillAmount: parseInt(evt.target.value) })} />
                    </div>
                </div> */}
                <div class="form-group row">
                    <div class="col-sm-2">Bill Paid</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, BillPaid: true }) : setPatient({ ...patient, BillPaid: false }) }} />

                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="button" class="btn btn-primary" onClick={getSaveIPDPatient}>Record Observation</button>
                    </div>
                </div>

                {/* {displayMessage} */}
                {requestExecuted && displayMessage}
                {!requestExecuted && displayMessage}
            </form>



        </div>
    );

};

export default IPDObservation;