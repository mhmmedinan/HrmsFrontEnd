import axios from "axios";

export default class LanguageService {

    add(language){
        return axios.post("http://localhost:8080/api/languages/add",language)
    }

    update(language){
        return axios.post("http://localhost:8080/api/languages/update",language)
    }


    delete(id){
        return axios.post("http://localhost:8080/api/languages/delete?id="+id)
    }

    getResumeId(resumeId) {
        return axios.get(`http://localhost:8080/api/languages/getresumeid?resumeId=${resumeId}`)
    }
}