import axios from "axios";

export default class EmployeeService{

    getById(employeeId){
        return axios.get("http://localhost:8080/api/employees/getbyid?id="+employeeId)
    }

    update(employeeId,firstName,lastName,email,password,passwordRepeat){
        return axios.post(`http://localhost:8080/api/employees/update?id=${employeeId}&firstName=${firstName}&lastName=${lastName}
        &email=${email}&password=${password}&passwordRepeat=${passwordRepeat}`)
    }

    updateIsActiveEmployer(employerId){
        return axios.post("http://localhost:8080/api/employees/confirmupdateemployer?employerId="+employerId)
    }
}