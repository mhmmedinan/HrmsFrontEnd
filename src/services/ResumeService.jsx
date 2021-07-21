import axios from "axios";

export default class ResumeService{

    getByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/resumes/getcandidateid?candidateId=${candidateId}`)

    }

    add(resume){
        return axios.post("http://localhost:8080/api/resumes/add",resume)
    }

    uploadphoto(candidateId,file){
        return axios.post(`http://localhost:8080/api/resumes/addcvphoto?candidateCvId=${candidateId}`,file)

    }

    update(resumeId,coverLetter,githubAddress,linkedinAddress){
        return axios.post(`http://localhost:8080/api/resumes/update?resumeId=${resumeId}&coverLetter=${coverLetter}&githubAddress=${githubAddress}&linkedinAddress=${linkedinAddress}`)
    }
}