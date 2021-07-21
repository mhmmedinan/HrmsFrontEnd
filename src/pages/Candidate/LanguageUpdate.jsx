import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import LanguageService from '../../services/LanguageService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function LanguageUpdate({resumeId,langId,lang}) {

    let languageService = new LanguageService();

    const formik = useFormik({
        initialValues:{
            id:langId,
            resumeId:resumeId,
            name:lang.name,
            level:lang.level
        },

        onSubmit:(values)=>{
            languageService.update(values).then((result)=>{
                toast.success("Yabancı dil güncellendi")
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
                    <label>Yabancı Dil</label>
                    <Input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                      name="name"
                      placeholder="Yabancı Dil"
                    />
                    
                  </Grid.Column>
                  </Form.Field>
                      <Form.Field style={{ marginTop: "15px" }} >
                  <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                    <label>Seviye</label>
                    <Input
                    value={formik.values.level}
                    onChange={formik.handleChange}
                      name="level"
                      placeholder="Seviye"
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
