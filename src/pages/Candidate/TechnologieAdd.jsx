import React from 'react'
import TechnologieService from '../../services/TechnologieService'
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

export default function TechnologieAdd({resumeId}) {
    let technologieService = new TechnologieService();
    const technologieAddSchema=Yup.object({
        name:Yup.string().required("Boş olamaz"),
    })

    const initialValues={
        resumeId:resumeId,
        name:""
    }
    return (
        <div style={{height:"18em"}}>
        <Card fluid style={{ width: "63em", marginLeft: "10px",marginTop:"2em" }}>
        <Card.Content header="Teknoloji Ekle"></Card.Content>
        <Card.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={technologieAddSchema}
            onSubmit={(values) => {
              let technologieAdd = {
                resumeId:values.resumeId,
                name: values.name,
              };
              technologieService.add(technologieAdd).then((result) => {
                toast.success("Teknoloji eklendi");
              });
            }}
          >
            {({ handleSubmit }) => (
              <Form className="ui form" onSubmit={handleSubmit}>
                <Form.Field style={{ marginBottom: "1rem" }}>
                  <Grid stackable>
                    <Grid.Column width={8}>
                      <label>Teknoloji</label>
                      <HrmsTextInput
                        as="input"
                        name="name"
                        placeholder="Teknoloji"
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
