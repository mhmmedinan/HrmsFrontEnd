import axios from "axios"

export default class WayOfWorkingService{

    getWayOfWorkings(){
        return axios.get("http://localhost:8080/api/workings/getall");}
    

    add(workings){
        return axios.post("http://localhost:8080/api/workings/add",workings);
    }
}