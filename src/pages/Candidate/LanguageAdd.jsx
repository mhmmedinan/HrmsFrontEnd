import React from 'react'
import LanguageService from '../../services/LanguageService'
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
export default function LanguageAdd({resumeId}) {
    let languageService = new LanguageService()
    const languageAddSchema=Yup.object({
        name:Yup.string().required("Boş olamaz"),
        level:Yup.string().required("Boş olamaz"),
    })

    const initialValues={
        resumeId:resumeId,
        name:"",
        level:""
    }

   

    return (
        <div style={{height:"18em"}}>
        <Card fluid style={{ width: "63em", marginLeft: "10px",marginTop:"2em" }}>
        <Card.Content header="Yabancı Dil Ekle"></Card.Content>
        <Card.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={languageAddSchema}
            onSubmit={(values) => {
              let languageAdd = {
                resumeId:values.resumeId,
                name: values.name,
                level:values.level
              };
              languageService.add(languageAdd).then((result) => {
                toast.success("Yabancı dil  eklendi");
              });
            }}
          >
            {({ handleSubmit }) => (
              <Form className="ui form" onSubmit={handleSubmit}>
                <Form.Field style={{ marginBottom: "1rem" }}>
                  <Grid stackable>
                    <Grid.Column width={8}>
                      <label>Yabancı dil</label>
                      <HrmsTextInput
                        as="input"
                        name="name"
                        placeholder="Yabancı dil"
                      />
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <label>Seviye</label>
                      <HrmsTextInput
                        as="input"
                        name="level"
                        placeholder="Seviye"
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
