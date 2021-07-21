import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import JobExperienceService from '../../services/JobExperienceService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function JobExperienceUpdate({resumeId,experienceId,experience}) {
    let jobExperienceService = new JobExperienceService();

    const formik = useFormik({
        initialValues:{
            id:experienceId,
            resumeId:resumeId,
            businessName:experience.businessName,
            position:experience.position,
            startDate:experience.startDate,
            endDate:experience.endDate
        },
        onSubmit:(values)=>{
            jobExperienceService.update(values).then((result)=>{
                toast.success("İş tecrübesi güncellendi")
            })
        }
    })
    return (
        <div style={{height:"23em"}}>
              <Card style={{ width: "63em", marginLeft: "10px",marginTop:"1em" }}>
                  <Card.Content header="Güncelle"></Card.Content>
            <Card.Content>
           
               
                  <Form className="ui form" onSubmit={formik.handleSubmit}>
                   
                      <Grid stackable>
                          <Form.Field style={{ marginTop: "15px" }}>
                        <Grid.Column width={8}>
                          <label>Resume Id</label>
                          <Input
                            name="resumeId"
                            placeholder="Resume Id"
                            value={formik.values.resumeId}
                            onChange={formik.handleChange}
                          />
                        </Grid.Column>
                        </Form.Field>
                        <Form.Field style={{ marginTop: "15px" }} >
                        <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                          <label>Şirket</label>
                          <Input
                          value={formik.values.businessName}
                          onChange={formik.handleChange}
                            name="businessName"
                            placeholder="Şirket"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Pozisyon</label>
                            <Input
                              value={formik.values.position}
                              onChange={formik.handleChange}
                              name="position"
                              placeholder="Pozisyon"
                            />
                          </Grid.Column>
                        </Grid.Column>
                        </Form.Field>
                        <Form.Field style={{ marginTop: "15px" }} >
                        <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                          <label>Başlama Tarihi</label>
                          <Input
                          value={formik.values.startDate}
                          onChange={formik.handleChange}
                            name="startDate"
                            placeholder="Başlama Tarihi"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Bitiş Tarihi</label>
                            <Input
                              value={formik.values.endDate}
                              onChange={formik.handleChange}
                              name="endDate"
                              placeholder="Bitiş Tarihi"
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
