import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import TechnologieService from '../../services/TechnologieService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function TechnologieUpdate({resumeId,techId,tech}) {
    let technologieService = new TechnologieService();

    const formik = useFormik({
        initialValues:{
            id:techId,
            resumeId:resumeId,
            name:tech.name
        },

        onSubmit:(values)=>{
            technologieService.update(values).then((result)=>{
                toast.success("Teknoloji güncellendi")
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
                    <label>Teknoloji</label>
                    <Input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                      name="name"
                      placeholder="Teknoloji"
                    />
                    
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
