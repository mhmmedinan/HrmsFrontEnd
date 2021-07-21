import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import SchoolService from '../../services/SchoolService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function SchoolUpdate({schoolId,school,resumeId}) {
    let schoolService = new SchoolService();

    const formik = useFormik({
        initialValues:{
            schoolId:schoolId,
            resumeId:resumeId,
            schoolName:school.schoolName,
            schoolEpisode:school.schoolEpisode,
            startDate:school.startDate,
            endDate:school.endDate
        },

        onSubmit:(values)=>{
            schoolService.update(values).then((result)=>{
                toast.success("Eğitim bilgisi güncellendi")
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
                          <label>Okul</label>
                          <Input
                          value={formik.values.schoolName}
                          onChange={formik.handleChange}
                            name="schoolName"
                            placeholder="Okul"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Bölüm</label>
                            <Input
                              value={formik.values.schoolEpisode}
                              onChange={formik.handleChange}
                              name="schoolEpisode"
                              placeholder="Bölüm"
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
