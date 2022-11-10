import React from "react";
import { useState } from "react";
import AddPatient from "../Patient/AddPatient";
import AddNewPatient from "../Patient/AddNewPatient";
import AddOPDPatient from "../Patient/AddOPDPatient";
import AddIPDPatient from "../Patient/AddIPDPatient";
import ReportsComponent from "../Reports/ReportsComponent";
import {Link, Outlet} from 'react-router-dom';

const HomePage=()=>{

    // const [displayForm, setdDisplayForm]=useState(false);
    // const [addPatient, setAddPatient]=useState(false);
    // const [addOPDPatient, setAddOPDPatient]=useState(false);
    // const [addIPDPatient, setAddIPDPatient]=useState(false);
    // const [admitValue, setAdmitValue]=useState(0);
    // const [displayReports, setDisplayReports]=useState(false);

    // const getNewForm=()=>{
    //   setDisplayReports(false);
    //   setAddOPDPatient(false);
    //   setAddIPDPatient(false);
    //   setAddPatient(!addPatient)

    // };

    // const getOPDForm=()=>{
    //   setDisplayReports(false);
    //   setAddIPDPatient(false);
    //   setAddPatient(false);
    //   setAddOPDPatient(true);
  
    // };
    // const getIPDForm=()=>{
    //   setDisplayReports(false);
    //   setAddPatient(false);
    //   setAddOPDPatient(false);
    //   setAddIPDPatient(true);
     
  
    // };

    // const getReports=()=>{

    //   setAddPatient(false);
    //   setAddOPDPatient(false);
    //   setAddIPDPatient(false);
    //   setDisplayReports(true);
    // };

    // const getAdmitValue =(admitval)=>{
    //   console.log("admitval",admitval);

    //   if(admitval)
    //   {
    //     getIPDForm();
    //   }
    //   else
    //   {
    //     getOPDForm();
    //   }

    // };

    return(
        // <div style={{padding:"50px 200px"}}>
        //     <div style={{display:"flex", justifyContent:"center"}}><button type="button" onClick={()=>setdDisplayForm(!displayForm)} > Add Patient </button><br /></div>
        //     {displayForm && <div><AddNewPatient /></div>}
        // </div>
        <div><nav class="navbar navbar-dark  navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">Healthcare App</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/patient" >Patient</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/opdpatient" >OPD Patient</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/ipdpatient" >IPD Patient</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/doctor">Doctor</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/nurse">Nurse</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/wardboy">Ward Boy</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/reports">Reports</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
           
             {/* {displayForm && <div style={{padding:"10px 200px", margin:"0px 50px"}}><AddOPDPatient /></div>
  } */}
         {/* {addPatient && <div 
        //  style={{padding:"50px 200px"}}
         >
            <div><AddNewPatient getAdmitValue={getAdmitValue}/></div>
         </div>}
         {addOPDPatient && <div >
             <div><AddOPDPatient/></div>
         </div>}
         {addIPDPatient &&  <div >
          <div><AddIPDPatient/></div>
         </div>}
         {displayReports && <div>
          <div><ReportsComponent /></div>
          </div>} */}
      </div>
           
    );

};

export default HomePage;