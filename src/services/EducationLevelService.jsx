import axios from "axios"

export default class EducationLevelService{

    getEducationLevels(){
        return axios.get("http://localhost:8080/api/educationlevels/getall");}
    

    add(level){
        return axios.post("http://localhost:8080/api/educationlevels/add",level);
    }
}