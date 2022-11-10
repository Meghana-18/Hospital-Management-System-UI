import React from "react";

const AddPatient =()=>{

    return(
        <div className="container" style={{display: "flex", justifyContent: "center"}}>
            <form style={{display: "flex", justifyContent: "flex-start"}}>
            <h2>Enter Patient Details</h2><br />
            <div className="form-row">
                <div className="col" style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>Name</label>
                <input type="text" style={{width:"180px", margin:"2px"}} className="form-control col-md-6" placeholder="First name" />
                <input type="text" style={{width:"180px", margin:"2px"}} className="form-control col-md-6" placeholder="Middle name" />
                <input type="text" style={{width:"180px", margin:"2px"}} className="form-control col-md-6" placeholder="Last name" />
                </div>
                <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-start"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>Mobile No. </label>
                    <input type="text" style={{width:"180px", margin:"2px"}} className="form-control col-md-6" placeholder="Mobile No." />
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>Email ID</label>
                <input type="email" style={{width:"180px", margin:"2px"}} className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>Address</label>
                    <input type="text" style={{width:"100px", margin:"2px"}} className="form-control col-md-6" placeholder="House No." />
                <input type="text" style={{width:"100px", margin:"2px"}} className="form-control col-md-6" placeholder="Society" />
                <input type="text" style={{width:"100px", margin:"2px"}} className="form-control col-md-6" placeholder="Area" />
                <input type="text" style={{width:"100px", margin:"2px"}} className="form-control col-md-6" placeholder="City" />
                <input type="text" style={{width:"100px", margin:"2px"}} className="form-control col-md-6" placeholder="State" />
                </div >
                <div style={{display: "flex", flexDirection: "row"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>DOB</label>
                <input type="date" />
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                <label style={{fontSize:"20px", margin:"2px"}}> Gender</label>
                    <input type="radio" name="gender"/>Male
                    <input type="radio" name="gender"/>Female
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                <label style={{fontSize:"20px", margin:"2px"}}>Age Type</label>
                    <input type="radio" name="age-type"/>Major
                    <input type="radio" name="age-type"/>Minor
                </div>
            </div>
            </form>
            
        </div>
    
    );

};

export default AddPatient;