import React from "react";
import { useState } from "react";
import PatientHttpService from "../../Services/patienthttpservice";
import {useNavigate} from 'react-router-dom';

const AddNewPatient = (props) => {

  const [patient, setPatient] = useState({ FirstName: '', MiddleName: '', LastName: '', MobileNo: '', EmailID: '', HouseNo: '', Society: '', Area: '', City: '', State: '', DOB: '', Gender: '', AgeType: '', Admit: false });
  const [displayMessage, setDisplayMessage] = useState("");
  const [requestExecuted, setRequestExecuted] = useState(false);
  const serv = new PatientHttpService();
  const navigate = useNavigate();

  const getSavePatient = () => {

    let curr_patient = patient;

    serv.postData(curr_patient)
      .then((response) => {

        setDisplayMessage("Basic data is added succsessfully");
        setRequestExecuted(true);
        if(curr_patient["Admit"]===true)
        {
          navigate("/addipdpatient");
        }
        else
        {
          navigate("/addopdpatient");
        }
        
      
       
      })
      .catch((error) => {
        
        setDisplayMessage("Basic data is addition unsuccsessfull");
        // console.log(error);
        setRequestExecuted(false);
      });
  };



  return (
    <div>
      <form style={{ paddingTop: "50px", paddingLeft: "100px", paddingRight: "400px", alignContent: "center" }} >
        <h2>Enter Patient Details</h2>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <input type="text" class="form-control" id="validationDefault01" placeholder="First name" onChange={(evt) => setPatient({ ...patient, FirstName: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="Middle name" onChange={(evt) => setPatient({ ...patient, MiddleName: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="Last name" onChange={(evt) => setPatient({ ...patient, LastName: evt.target.value })} required/>
          </div>
        </div>
        <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
          <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile No.</label>
          <div class="col-sm-10">
            <input type="text" style={{ width: "180px" }} class="form-control" id="inputPassword3" placeholder="Mobile No." onChange={(evt) => setPatient({ ...patient, MobileNo: evt.target.value })} required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" style={{ width: "180px" }} class="form-control" id="inputEmail3" placeholder="Email" onChange={(evt) => setPatient({ ...patient, EmailID: evt.target.value })} required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <input type="text" class="form-control" id="inputEmail3" placeholder="House No" onChange={(evt) => setPatient({ ...patient, HouseNo: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="Society" onChange={(evt) => setPatient({ ...patient, Society: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="Area" onChange={(evt) => setPatient({ ...patient, Area: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="City" onChange={(evt) => setPatient({ ...patient, City: evt.target.value })} required/>
            <input type="text" class="form-control" id="inputEmail3" placeholder="State" onChange={(evt) => setPatient({ ...patient, State: evt.target.value })} required/>
          </div>
        </div>
        <div class="form-group row" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
          <label for="inputPassword3" class="col-sm-2 col-form-label">DOB</label>
          <div class="col-sm-10">
            <input type="date" style={{ width: "180px" }} class="form-control" id="inputPassword3" onChange={(evt) => setPatient({ ...patient, DOB: evt.target.value })} required/>
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" onChange={(evt) => { if (evt.target.checked) setPatient({ ...patient, Gender: evt.target.value }) }} required/>
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female" onChange={(evt) => { if (evt.target.checked) setPatient({ ...patient, Gender: evt.target.value }) }} required/>
                <label class="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>

            </div>
          </div>
        </fieldset>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Age Type</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios1" id="gridRadios1" value="Major" onChange={(evt) => { if (evt.target.checked) setPatient({ ...patient, AgeType: evt.target.value }) }} required/>
                <label class="form-check-label" for="gridRadios1">
                  Major
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios1" id="gridRadios2" value="Minor" onChange={(evt) => { if (evt.target.checked) setPatient({ ...patient, AgeType: evt.target.value }) }} required/>
                <label class="form-check-label" for="gridRadios2">
                  Minor
                </label>
              </div>

            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Admit Patient</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(evt) => { evt.target.checked ? setPatient({ ...patient, Admit: true }) : setPatient({ ...patient, Admit: false }) }} required/>

            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="button" class="btn btn-primary" onClick={getSavePatient}>Add</button>
          </div>
        </div>
        {requestExecuted && displayMessage}
      </form>



    </div>
  );

}

export default AddNewPatient;