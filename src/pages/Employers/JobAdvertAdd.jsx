import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import JobAdvertService from "../../services/JobAdvertService";
import { useHistory } from "react-router-dom";
import WayOfWorkingService from "../../services/WayOfWorkingService";
import JobTitleService from "../../services/JobTitleService";
import {
  Button,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import EducationLevelService from "../../services/EducationLevelService";
import WorkTypeService from "../../services/WorkTypeService";
import CityService from "../../services/CityService";
import HrmsTextInput from "../../utilities/CustomFormControls/HrmsTextInput";
import {toast} from "react-toastify";

export default function JobAdvertAdd() {
  const [workTypes, setWorkTypes] = useState([]);
  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);


  useEffect(() => {
    let workTypeService = new WorkTypeService();
    let wayOfWorkingService = new WayOfWorkingService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();
    let educationLevelService = new EducationLevelService();

    workTypeService
      .getWorkType()
      .then((result) => setWorkTypes(result.data.data));
    wayOfWorkingService
      .getWayOfWorkings()
      .then((result) => setWayOfWorkings(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
    educationLevelService
      .getEducationLevels()
      .then((result) => setEducationLevels(result.data.data));
  }, []);

  const JobAdvertAddSchema = Yup.object({
    lastDate  : Yup.date().nullable().required("Son başvuru tarih alanı boş bırakılamaz"),
    description: Yup.string().required("Açıklama alanı boş bırakılamaz"),
    educationLevelId: Yup.string().required("Eğitim seviyesi alanı boş bırakılamaz"),
    jobTitleId: Yup.string().required("İş poziyonu alanı boş bırakılamaz"),
    workTimeId: Yup.string().required("Çalışma zamanı alanı boş bırakılamaz"),
    workTypeId: Yup.string().required("Çalışma türü alanı boş bırakılamaz"),
    openPositionCount: Yup.string()
      .required("Posizyon sayısı alanı boş bırakılamaz")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Şehir alanı boş bırakılamaz"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Minimum maaş alanı zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Maximum maaş alanı zorunludur"),
  });

  const history = useHistory();
  const  initialValues= {
      lastDate: "",
      description: "",
      jobTitleId: "",
      workTimeId: "",
      workTypeId: "",
      openPositionCount: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      educationLevelId: "",
    }

  return (
    <div>
      <Card fluid style={{marginTop:"10px"}}>
        <Card.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={JobAdvertAddSchema}
            onSubmit={(values) => {
              let jobAdvertAdd={
               jobTitle:{
                 jobTitleId:values.jobTitleId
                  },
                  employer:{
                      id:25
                  },
                  city:{
                      id:values.cityId
                  },
                  ofWorking:{
                      id:values.workTimeId
                  },
                  workType:{
                      id:values.workTypeId
                  },
                  educationLevel:{
                     id:values.educationLevelId
                  },
                  description:values.description,
                  openPositionCount:values.openPositionCount,
                  lastApplyDate:values.lastDate,
                  minSalary:values.minSalary,
                  maxSalary:values.maxSalary,
              }
         
              let jobAdvertService = new JobAdvertService();
              jobAdvertService.add(jobAdvertAdd).then((result)=>{
               toast.success("İş İlanı Eklendi")
              })
              history.push("/employer")
             }}
          >
              {({ handleSubmit}) => (
            <Form className="ui form" onSubmit={handleSubmit} >
              <Form.Field style={{ marginBottom: "1rem" }}>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>İş Pozisyonu</label>
                    <HrmsTextInput as="select" name="jobTitleId">
                      {jobTitles.map((jobTitle) => (
                        <option
                          key={jobTitle.jobTitleId}
                          value={jobTitle.jobTitleId}
                        >
                          {jobTitle.title}
                        </option>
                      ))}
                    </HrmsTextInput>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Eğitim Seviyesi</label>
                    <HrmsTextInput as="select" name="educationLevelId">
                      {educationLevels.map((educationLevel) => (
                        <option
                          key={educationLevel.id}
                          value={educationLevel.id}
                        >
                          {educationLevel.educationLevel}
                        </option>
                      ))}
                    </HrmsTextInput>
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Şehir</label>
                    <HrmsTextInput as="select" name="cityId">
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </HrmsTextInput>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Çalışma Şekli</label>
                    <HrmsTextInput as="select" name="workTypeId">
                      {workTypes.map((workType) => (
                        <option key={workType.id} value={workType.id}>
                          {workType.workType}
                        </option>
                      ))}
                    </HrmsTextInput>
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Çalışma Süresi</label>
                    <HrmsTextInput as="select" name="workTimeId">
                      {wayOfWorkings.map((wayOfWorking) => (
                        <option
                          key={wayOfWorking.id}
                          value={wayOfWorking.id}
                        >
                          {wayOfWorking.workTime}
                        </option>
                      ))}
                    </HrmsTextInput>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Açık İş Pozisyonu Adedi</label>
                    <HrmsTextInput
                      as="input"
                      name="openPositionCount"
                      placeholder="0"
                    />
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Minimum Maaş Aralığı</label>
                    <HrmsTextInput
                      as="input"
                      name="minSalary"
                      placeholder="0"
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Maximum Maaş Aralığı</label>
                    <HrmsTextInput
                      as="input"
                      name="maxSalary"
                      placeholder="0"
                    />
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column >
                    <label>Son Başvuru Tarihi</label>
                    <HrmsTextInput
                      as="input"
                      name="lastDate"
                      
                    />
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column>
                    <label>Açıklama</label>
                    <HrmsTextInput
                      as="textarea"
                      name="description"
                    />
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Button
                content="Ekle"
                onClick={handleSubmit}
                inverted
                color="purple"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Form>
                 )}
          </Formik>
        </Card.Content>
      </Card>
    </div>
  );
}
