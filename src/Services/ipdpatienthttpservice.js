import axios from 'axios';

class IpdPatientHttpService {
    constructor(){
        this.url = "http://localhost:5262/api/IpdPatient";
    }

    async getData(){
       let response = await axios.get(this.url);
       return response;  
    }
    // async getDataById(id){
    //     let response = await axios.get(`${this.url}/${id}`);
    //     return response;
    // }
    async postData(patient){
        console.log("In req",JSON.stringify(patient));
        patient=JSON.stringify(patient);
        let response =  await axios.post(this.url, patient, {
             headers: {
                'Content-Type':'application/json'
             }   
        }).catch((error)=>{
            // console.log(error);
            console.log("error", error);
         });
        console.log("response", response);
        return response;
    }
    // async putData(id,emp){
    //     let response =  await axios.put(`${this.url}/${id}`, emp, {
    //         headers: {
    //            'Content-Type':'application/json'
    //         }   
    //    });
    //    return response;
    // }
    // async deleteData(id){
    //     let response = await axios.delete(`${this.url}/${id}`);
    //     return response;
    // }
    // async searchData(data){
    //     let response = await axios.get(`${this.url}/${data}/searchemps`);
    //     console.log(response);
    //     return response;
    // }


}

export default IpdPatientHttpService;