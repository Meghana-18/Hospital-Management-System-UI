import React from "react";

import {Routes, Route} from 'react-router-dom';
import AddIPDPatient from "../Patient/AddIPDPatient";
import AddNewPatient from "../Patient/AddNewPatient";
import AddOPDPatient from "../Patient/AddOPDPatient";
import Patient from "../Patient/Patient";
import ReportsComponent from "../Reports/ReportsComponent";
import HomePage from "./HomePage";
// import OpdComponent from "../Patient/OpdPatient";
import Doctor from "../Staff/Doctor";
import Nurse from "../Staff/Nurse";
import WardBoy from "../Staff/WardBoy";
import OpdComponent from "../OpdPatient/OpdPatient";
import OPDObservation from "../OpdPatient/RecordOpdObservation";
import IpdComponent from "../IpdPatient/IpdPatient";
import IPDObservation from "../IpdPatient/RecordIpdObservation";

const RoutingComponent = ()=>{

    return(
        <div>
            <HomePage />
            <Routes>
                <Route path="/" />
                <Route path="/patient" element={<Patient />} />
                <Route path="/addpatient"element={<AddNewPatient />} />
                <Route path="/reports"element={<ReportsComponent />} />
                <Route path="/addopdpatient"element={<AddOPDPatient />} />
                <Route path="/addipdpatient"element={<AddIPDPatient />} />
                <Route path="/opdpatient"element={<OpdComponent />} />
                <Route path="/doctor"element={<Doctor />} />
                <Route path="/nurse"element={<Nurse />} />
                <Route path="/wardboy"element={<WardBoy />} />
                <Route path="/opdobservations"element={<OPDObservation />} />
                <Route path="/ipdpatient"element={<IpdComponent />} />
                <Route path="/ipdobservations"element={<IPDObservation />} />
            </Routes>
        </div>
    );

};

export default RoutingComponent;