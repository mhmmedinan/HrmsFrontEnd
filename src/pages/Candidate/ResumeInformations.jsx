import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ResumeService from "../../services/ResumeService";
import {
  Button,
  Card,
  Image,
  Grid,
  Icon,
  Modal,
  Form,
  Table,
} from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import HrmsTextInput from "../../utilities/CustomFormControls/HrmsTextInput";
import ResumeImageAdd from "./ResumeImageAdd";
import ResumeUpdate from "./ResumeUpdate";
import SchoolInformations from "./SchoolInformations";
import TechnologieInformations from "./TechnologieInformations";
import LanguageInformations from "./LanguageInformations";
import JobExperienceInformations from "./JobExperienceInformations";

export default function ResumeInformations() {
  const [resumes, setResumes] = useState([]);
  let resumeService = new ResumeService();
  useEffect(() => {
    resumeService
      .getByCandidateId(34)
      .then((result) => setResumes(result.data.data));
  }, []);

  const resumeAddSchema = Yup.object({
    coverLetter: Yup.string().required("Boş bırakılamaz"),
    githubAddress: Yup.string().required("Boş bırakılamaz"),
    linkedinAddress: Yup.string().required("Boş bırakılamaz"),
  });

  const initialValues = {
    coverLetter: "",
    githubAddress: "",
    linkedinAddress: "",
  };
  return (
    <div style={{ marginTop: "10px" }}>
      {resumes.length > 0 ? (
        <Card.Group>
          {resumes.map((resume) => (
            <Card fluid color="purple" key={resume.id}>
              <Card.Content>
                <Grid>
                  <Grid.Column width={3}>
                    <Image
                      floated="left"
                      size="medium"
                      src={resume.url}
                      wrapped
                    ></Image>

                    <Modal
                      trigger={
                        <Button
                          icon="pencil"
                          color="gray"
                          style={{ marginTop: "17em", marginLeft: "10em" }}
                        ></Button>
                      }
                    >
                      <ResumeImageAdd resumeId={resume.id}></ResumeImageAdd>
                    </Modal>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Card fluid color="purple">
                      <Card.Content header="Kişisel Bilgiler"></Card.Content>
                      <Card.Content>
                        <b>Adı: </b>
                        {resume.candidate?.firstName}
                      </Card.Content>
                      <Card.Content>
                        <b>Soyadı: </b>
                        {resume.candidate?.lastName}
                      </Card.Content>
                      <Card.Content>
                        <b>Doğum Yılı: </b>
                        {resume.candidate?.birthOfYear}
                      </Card.Content>
                      <Card.Content>
                        <b>Email: </b>
                        {resume.candidate?.email}
                      </Card.Content>
                      <Card.Content>
                        <a
                          href={resume.githubAddress}
                          style={{ color: "black" }}
                        >
                          <Icon name="github" size="big" />
                          <b>{resume.githubAddress}</b>
                        </a>
                      </Card.Content>
                      <Card.Content>
                        <a
                          href={resume.linkedinAddress}
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <Icon name="linkedin" color="blue" size="big" />
                          <b>Linkedin</b>
                        </a>
                      </Card.Content>
                    </Card>
                    <Card fluid color="purple">
                      <Card.Content header="Ön Yazı"></Card.Content>
                      <Card.Description>{resume.coverLetter}</Card.Description>
                    </Card>
                    <Modal
                      trigger={
                        <Button
                          icon="pencil"
                          color="gray"
                          style={{ marginLeft: "55em" }}
                        ></Button>
                      }
                    >
                      <ResumeUpdate resumeId={resume.id} resume={resume}></ResumeUpdate>
                    </Modal>
                  </Grid.Column>
                </Grid>
              </Card.Content>
              <Card fluid>
                <Card.Content header="Eğitim Bilgileri"></Card.Content>
                <Card.Content>
                  <SchoolInformations resumeId={resume.id}></SchoolInformations>
                </Card.Content>
              </Card>

              <Grid>
                <Grid.Column width={7}>
                  <Card fluid>
                    <Card.Content header="Kullandığı Teknolojiler"></Card.Content>
                    <Card.Content>
                      <TechnologieInformations
                        resumeId={resume.id}
                      ></TechnologieInformations>
                    </Card.Content>
                  </Card>
                </Grid.Column>

                <Grid.Column width={9}>
                  <Card fluid>
                    <Card.Content header="Yabancı Diller"></Card.Content>
                    <Card.Content>
                      <LanguageInformations
                        resumeId={resume.id}
                      ></LanguageInformations>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>

              <Card fluid>
                    <Card.Content header="İş Tecrübeleri"></Card.Content>
                    <Card.Content>
                      <JobExperienceInformations
                        resumeId={resume.id}
                      ></JobExperienceInformations>
                    </Card.Content>
                  </Card>
            </Card>
          ))}
        </Card.Group>
      ) : (
        <Modal
          trigger={
            <Button color="purple" style={{ marginLeft: "55em" }}>
              Cv Ekle
            </Button>
          }
        >
          <Modal.Header>Cv Ekle</Modal.Header>
          <Card fluid style={{ width: "63em", marginLeft: "10px" }}>
            <Card.Content>
              <Formik
                initialValues={initialValues}
                validationSchema={resumeAddSchema}
                onSubmit={(values) => {
                  let resumeAdd = {
                    candidate: {
                      id: 34,
                    },
                    coverLetter: values.coverLetter,
                    githubAddress: values.githubAddress,
                    linkedinAddress: values.linkedinAddress,
                  };
                  resumeService.add(resumeAdd).then((result) => {
                    toast.success("cv eklendi");
                  });
                }}
              >
                {({ handleSubmit }) => (
                  <Form className="ui form" onSubmit={handleSubmit}>
                    <Form.Field style={{ marginBottom: "1rem" }}>
                      <Grid stackable>
                        <Grid.Column width={8}>
                          <label>Ön Yazı</label>
                          <HrmsTextInput
                            as="textarea"
                            name="coverLetter"
                            placeholder="Ön Yazı"
                          />
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <label>Github Adresi</label>
                          <HrmsTextInput
                            as="input"
                            name="githubAddress"
                            placeholder="Github Adresi"
                          />
                          <Grid.Column width={6} style={{ marginTop: "10px" }}>
                            <label>Linkedin Adresi</label>
                            <HrmsTextInput
                              as="input"
                              name="linkedinAddress"
                              placeholder="Linkedin Adresi"
                            />
                          </Grid.Column>
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
        </Modal>
      )}
    </div>
  );
}
