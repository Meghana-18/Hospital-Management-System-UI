import axios from "axios";

class ReportHttpService {
    constructor(){
        this.url = "http://localhost:5262/api/Report";
    }

    async calcOpdBill(id){
        let response = await axios.get(`${this.url}/OPDBill/${id}`);
        return response;
    }

    async calcIpdBill(id){
        let response = await axios.get(`${this.url}/IPDBill/${id}`);
        return response;
    }

    async getBySpecialization(spec){
        let response = await axios.get(`${this.url}/DoctorsBySpecialization/${spec}`);
        return response;
    }

    async getEmployeeDoctors(){
        let response = await axios.get(`${this.url}/EmployeeDoctors`);
        return response;
    }

    async getVisitingDoctors(){
        let response = await axios.get(`${this.url}/VisitingDoctors`);
        return response;
    }

    async getPatientsPerDoctor(DID){
        let response = await axios.get(`${this.url}/PatientsPerDoctor/${DID}`);
        console.log("doc", response);
        return response;
    }

    async getPatientsPerNurse(NID){
        let response = await axios.get(`${this.url}/PatientsPerNurse/${NID}`);
        return response;
    }

    async getPatientsPerWard(ward){
        let response = await axios.get(`${this.url}/PatientsPerWard/${ward}`);
        console.log(response);
        return response;
    }

    async getTotalCollection(){
        let response = await axios.get(`${this.url}/TotalCollection`);
        return response;
    }

}

export default ReportHttpService;