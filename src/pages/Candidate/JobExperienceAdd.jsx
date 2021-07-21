import React from 'react'
import JobExperienceService from '../../services/JobExperienceService'
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from 'react-toastify';
import {
    Button,
    Card,
    Grid,
    Form,
  } from "semantic-ui-react";
import HrmsTextInput from '../../utilities/CustomFormControls/HrmsTextInput';
export default function JobExperienceAdd({resumeId}) {
    let jobExperienceService = new JobExperienceService()

    const jobExperienceAddSchema=Yup.object({
        businessName:Yup.string().required("Boş olamaz"),
        position:Yup.string().required("Boş olamaz"),
        startDate:Yup.string().required("Boş olamaz"),
        
    })

    const initialValues={
        resumeId:resumeId,
        businessName:"",
        position:"",
        startDate:"",
        endDate:""
    }

    return (
        <div style={{height:"23em"}}>
        <Card fluid style={{ width: "63em", marginLeft: "10px",marginTop:"2em" }}>
        <Card.Content header="Okul Ekle"></Card.Content>
        <Card.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={jobExperienceAddSchema}
            onSubmit={(values) => {
              let jobExperienceAdd = {
                resumeId:values.resumeId,
                businessName: values.businessName,
                position: values.position,
                startDate: values.startDate,
                endDate:values.endDate
              };
              jobExperienceService.add(jobExperienceAdd).then((result) => {
                toast.success("İş tecrübesi eklendi");
              });
            }}
          >
            {({ handleSubmit }) => (
              <Form className="ui form" onSubmit={handleSubmit}>
                <Form.Field style={{ marginBottom: "1rem" }}>
                  <Grid stackable>
                    <Grid.Column width={8}>
                      <label>Şirket Adı</label>
                      <HrmsTextInput
                        as="input"
                        name="businessName"
                        placeholder="Şirket Adı"
                      />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <label>Pozisyon</label>
                      <HrmsTextInput
                        as="input"
                        name="position"
                        placeholder="Pozisyon"
                      />
                     
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <label>Başlama Tarihi</label>
                        <HrmsTextInput
                          as="input"
                          name="startDate"
                          placeholder="Başlama Tarihi"
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <label>Bitiş Tarihi</label>
                        <HrmsTextInput
                          as="input"
                          name="endDate"
                          placeholder="Bitiş Tarihi"
                        />
                      </Grid.Column>
                    
                    
                  </Grid>
                </Form.Field>
                <Button color="purple" type="submit" onClick={handleSubmit}>
                  Ekle
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Content>
      </Card>
        </div>
    )
}
