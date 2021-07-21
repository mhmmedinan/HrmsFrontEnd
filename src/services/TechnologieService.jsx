import axios from "axios";

export default class TechnologieService{

    add(technologie){
        return axios.post("http://localhost:8080/api/technologies/add",technologie)
    }

    update(technologie) {
        return axios.post(
          "http://localhost:8080/api/technologies/update",technologie
        );
      }
    
    delete(id){
        return axios.post("http://localhost:8080/api/technologies/delete?id="+id)
    }

    getResumeId(resumeId){
        return axios.get(`http://localhost:8080/api/technologies/getbyresumeid?resumeId=${resumeId}`)
    }
}