import axios from "axios";

export default class EmployerService{

    getById(employerId){
        return axios.get("http://localhost:8080/api/employers/getbyid?id="+employerId)
    }

    getByUpdate(){
        return axios.get("http://localhost:8080/api/employers/getbyisactivatedupdate")
    }

    update(employer){
        return axios.post("http://localhost:8080/api/employers/update",employer)
    }

}