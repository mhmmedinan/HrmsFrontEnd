import axios from "axios";

export default class JobExperienceService {
  add(jobExperience) {
    return axios.post(
      "http://localhost:8080/api/jobexperiences/add",
      jobExperience
    );
  }

  update(jobExperience) {
    return axios.post(
      "http://localhost:8080/api/jobexperiences/update",
      jobExperience
    );
  }

  delete(id) {
    return axios.post(
      "http://localhost:8080/api/jobexperiences/delete?id=" + id
    );
  }

  getResumeId(resumeId) {
    return axios.get(
      `http://localhost:8080/api/jobexperiences/getbyresumeId?resumeId=${resumeId}`
    );
  }
}
