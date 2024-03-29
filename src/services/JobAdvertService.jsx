import axios from "axios"

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getbylastapplydate")
    }

    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/add",jobAdvert);
    }

    
    delete(id){
        return axios.post("http://localhost:8080/api/jobadverts/delete?id="+id);
    }

    getAllSorted(){
        return axios.get("http://localhost:8080/api/jobadverts/getallsorted")
    }

    jobAdvertTrueIsActive(id){
        return axios.post("http://localhost:8080/api/jobadverts/trueisactive?id="+id)
    }

    jobAdvertFalseIsActive(id){
        return axios.post("http://localhost:8080/api/jobadverts/falseisactive?id="+id)
    }

    getFilterAndPage(pageNo,pageSize,filterOption){
        return axios.post(`http://localhost:8080/api/jobadverts/getfilterandpage?pageNo=${pageNo}&pageSize=${pageSize}`,filterOption)
    }
}