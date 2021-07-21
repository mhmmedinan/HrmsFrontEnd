import axios from "axios"

export default class CandidateService{
    getById(candidateId){
        return axios.get(`http://localhost:8080/api/candidates/getbyid?id=${candidateId}`)
    }
}