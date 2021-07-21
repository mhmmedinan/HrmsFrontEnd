import React from 'react'
import ResumeService from '../../services/ResumeService'
import {
    Button,
    Card,
    Grid,
    Form,
    TextArea,
    Input,
  } from "semantic-ui-react";
import { useFormik } from "formik";
import { toast } from 'react-toastify';


export default function ResumeUpdate({resumeId,resume}) {
    let resumeService = new ResumeService();
    const formik = useFormik({
      initialValues : {
        coverLetter: resume.coverLetter,
        githubAddress: resume.githubAddress,
        linkedinAddress: resume.linkedinAddress,
      },
    onSubmit:(values) => {
      resumeService.update(resumeId,values.coverLetter,values.githubAddress,values.linkedinAddress).then((result) => {
        toast.success("cv güncellendi");
      });
    }}
    
    )
    return (
        <div style={{height:"23em"}}>
              <Card style={{ width: "63em", marginLeft: "10px",marginTop:"1em" }}>
                  <Card.Content header="Güncelle"></Card.Content>
            <Card.Content>
           
               
                  <Form className="ui form" onSubmit={formik.handleSubmit}>
                   
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <label>Ön Yazı</label>
                          <TextArea
                            name="coverLetter"
                            placeholder="Ön Yazı"
                            value={formik.values.coverLetter}
                            onChange={formik.handleChange}
                          />
                        </Grid.Column>
                        <Form.Field style={{ marginTop: "15px" }} >
                        <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                          <label>Github Adresi</label>
                          <Input
                          value={formik.values.githubAddress}
                          onChange={formik.handleChange}
                            name="githubAddress"
                            placeholder="Github Adresi"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Linkedin Adresi</label>
                            <Input
                              value={formik.values.linkedinAddress}
                              onChange={formik.handleChange}
                              name="linkedinAddress"
                              placeholder="Linkedin Adresi"
                            />
                          </Grid.Column>
                        </Grid.Column>
                        </Form.Field>
                      </Grid>
                    
                    <Button color="green" type="submit">
                      Güncelle
                    </Button>
                  </Form>
                
            
            </Card.Content>
          </Card>
        </div>
    )
}
