import axios from "axios"

export default class JobTitleService{
    getJobTitles(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }

    add(jobtitle){
        return axios.post("http://localhost:8080/api/jobtitles/add",jobtitle);
    }
}