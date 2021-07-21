import axios from "axios";

export default class SchoolService {
  add(school) {
    return axios.post("http://localhost:8080/api/schools/add", school);
  }

  getResumeId(resumeId) {
    return axios.get(
      `http://localhost:8080/api/schools/getbyschoolresumeId?resumeId=${resumeId}`
    );
  }

  delete(id) {
    return axios.post("http://localhost:8080/api/schools/delete?id=" + id);
  }

  update(school) {
    return axios.post(
      "http://localhost:8080/api/schools/update",school
    );
  }
}
