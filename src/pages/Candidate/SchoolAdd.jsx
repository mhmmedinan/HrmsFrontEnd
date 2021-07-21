import React from 'react'
import SchoolService from '../../services/SchoolService'
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

export default function SchoolAdd({resumeId}) {
    let schoolService = new SchoolService();
    const schoolAddSchema=Yup.object({
        schoolName:Yup.string().required("Boş olamaz"),
        schoolEpisode:Yup.string().required("Boş olamaz"),
        startDate:Yup.string().required("Boş olamaz"),
    })

    const initialValues={
        resumeId:resumeId,
        schoolName:"",
        schoolEpisode:"",
        startDate:"",
        endDate:"",
    }
    return (
        <div style={{height:"23em"}}>
            <Card fluid style={{ width: "63em", marginLeft: "10px",marginTop:"2em" }}>
            <Card.Content header="Okul Ekle"></Card.Content>
            <Card.Content>
              <Formik
                initialValues={initialValues}
                validationSchema={schoolAddSchema}
                onSubmit={(values) => {
                  let schoolAdd = {
                    resumeId:values.resumeId,
                    schoolName: values.schoolName,
                    schoolEpisode: values.schoolEpisode,
                    startDate: values.startDate,
                    endDate:values.endDate
                  };
                  schoolService.add(schoolAdd).then((result) => {
                    toast.success("Okul eklendi");
                  });
                }}
              >
                {({ handleSubmit }) => (
                  <Form className="ui form" onSubmit={handleSubmit}>
                    <Form.Field style={{ marginBottom: "1rem" }}>
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <label>Okul Adı</label>
                          <HrmsTextInput
                            as="input"
                            name="schoolName"
                            placeholder="Okul Adı"
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <label>Bölüm</label>
                          <HrmsTextInput
                            as="input"
                            name="schoolEpisode"
                            placeholder="Bölüm"
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
