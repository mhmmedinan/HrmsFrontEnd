import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import EmployerService from '../../services/EmployerService'
import {
    Button,
    Card,
    Grid,
    Form,
    Input,
  } from "semantic-ui-react";
export default function EmployerUpdate({employerId,employer}) {
    let employerService = new EmployerService();
    const formik = useFormik({
        initialValues:{
            id:employerId,
            companyName:employer.companyName,
            webAddress:employer.webAddress,
            phoneNumber:employer.phoneNumber,
            email:employer.email,
            password:employer.password,
            passwordRepeat:employer.passwordRepeat
        },
        onSubmit:(values)=>{
            employerService.update(values).then(result=>{
                toast.info("Sistem personelinin onayından sonra güncellenecektir")
            })
        }
    })
    return (
        <div style={{height:"28em",width: "65em"}}>
        <Card style={{ width: "60em", marginLeft: "25px",marginTop:"1em",height:"27em" }}>
            <Card.Content header="Güncelle"></Card.Content>
      <Card.Content>
     
         
            <Form className="ui form" onSubmit={formik.handleSubmit}>
             
                <Grid stackable>
                    <Form.Field style={{ marginTop: "15px" }}>
                  <Grid.Column width={8}>
                    <label>Şirket </label>
                    <Input
                      name="companyName"
                      placeholder="Şirket"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                    />
                    <Grid.Column width={8} style={{ marginTop: "15px" }}  >
                    <label>Telefon Numarası </label>
                    <Input
                      name="phoneNumber"
                      placeholder="Telefon Numarası "
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                    />
                  </Grid.Column>
                  </Grid.Column>
                  </Form.Field>
                  <Form.Field style={{ marginTop: "15px" }} >
                  <Grid.Column width={6} style={{ marginLeft: "10px" }}>
                    <label>Web Adresi</label>
                    <Input
                    value={formik.values.webAddress}
                    onChange={formik.handleChange}
                      name="webAddress"
                      placeholder="Web Adresi"
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
                  <Form.Field  >
                  <Grid.Column width={6} >
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
              
              <Button style={{marginLeft:"25em"}} color="green" type="submit">
                Güncelle
              </Button>
            </Form>
          
      
      </Card.Content>
    </Card>
  </div>
    )
}
