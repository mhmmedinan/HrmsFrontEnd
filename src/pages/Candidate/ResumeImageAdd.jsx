import React from 'react'
import { toast } from 'react-toastify';
import ResumeService from '../../services/ResumeService';
import { Card, Button } from "semantic-ui-react";
import { Component } from 'react';

export default class ResumeImageAdd extends Component {

    state = {
        selectedFile: null,
      };

     fileSelectedHandler=(event)=>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }

     fileUpload=()=>{
        const formData= new FormData()
        formData.append("multipartFile",this.state.selectedFile,this.state.selectedFile.name)
        let resumeService = new ResumeService();
        resumeService.uploadphoto(this.props.resumeId,formData).then((result)=>{
            toast.success("Resim yüklendi")
        })
    }
    render(){
    return (
        <div>
            <Card fluid>
                <Card.Content header="Resim Yükle"/>
                <Card.Content>
                <input
              style={{ display: "none" }}
              type="file"
              onChange={this.fileSelectedHandler}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
                <Button className="ui button" onClick={() => this.fileInput.click()}>Dosya Seç</Button>
                <Button onClick={this.fileUpload}>Yükle</Button>
                </Card.Content>
            </Card>
        </div>
    )
}
}