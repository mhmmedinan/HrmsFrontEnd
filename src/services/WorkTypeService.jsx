import axios from "axios"

export default class WorkTypeService{

    getWorkType(){
        return axios.get("http://localhost:8080/api/worktypes/getall");}
    

    add(worktype){
        return axios.post("http://localhost:8080/api/worktypes/add",worktype);
    }
}