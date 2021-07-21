import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import EmployeeService from '../../services/EmployeeService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function EmployeeUpdate({employeeId,employee}) {
    let employeeService = new EmployeeService();
    const formik = useFormik({
        initialValues:{
            firstName:employee.firstName,
            lastName:employee.lastName,
            email:employee.email,
            password:employee.password,
            passwordRepeat:employee.passwordRepeat
        },
        onSubmit:(values)=>{
            employeeService.update(employeeId,values.firstName,values.lastName,values.email,values.password,values.passwordRepeat).then((result)=>{
                toast.success("Profil bilgileri güncellendi")
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
                          <label>Adı </label>
                          <Input
                            name="firstName"
                            placeholder="Adı"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                          />
                        </Grid.Column>
                        </Form.Field>
                        <Form.Field style={{ marginTop: "15px" }} >
                        <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                          <label>Soyadı</label>
                          <Input
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                            name="lastName"
                            placeholder="Soyadı"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Email</label>
                            <Input
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              name="email"
                              placeholder="Email"
                            />
                          </Grid.Column>
                        </Grid.Column>
                        </Form.Field>
                        <Form.Field style={{ marginTop: "15px" }} >
                        <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                          <label>Şifre</label>
                          <Input
                          value={formik.values.password}
                          onChange={formik.handleChange}
                            name="password"
                            placeholder="Şifre"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px",marginBottom:"1em" }}>
                            <label>Şifre Tekrarı</label>
                            <Input
                              value={formik.values.passwordRepeat}
                              onChange={formik.handleChange}
                              name="passwordRepeat"
                              placeholder="Şifre Tekrarı"
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
