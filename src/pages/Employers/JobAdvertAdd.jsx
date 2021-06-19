import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import JobAdvertService from "../../services/JobAdvertService";
import { useHistory } from "react-router-dom";
import WayOfWorkingService from "../../services/WayOfWorkingService";
import JobTitleService from "../../services/JobTitleService";
import { Button, Card,Form, Grid, Input, Message, TextArea } from "semantic-ui-react";
import EducationLevelService from "../../services/EducationLevelService";
import WorkTypeService from "../../services/WorkTypeService";
import CityService from "../../services/CityService";


export default function JobAdvertAdd() {
  
  const JobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date().nullable().required("Bu alan boş bırakılamaz"),
    description: Yup.string().required("Bu alan boş bırakılamaz"),
    educationLevelId: Yup.string().required("Bu alan boş bırakılamaz"),
    jobTitleId: Yup.string().required("Bu alan boş bırakılamaz"),
    workTimeId: Yup.string().required("Bu alan boş bırakılamaz"),
    workTypeId: Yup.string().required("Bu alan boş bırakılamaz"),
    openPositionCount: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alan boş bırakılamaz"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      lastDate: "",
      description: "",
      jobTitleId: "",
      workTimeId: "",
      workTypeId: "",
      openPositionCount: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      educationLevelId:"",
    },
    validation: JobAdvertAddSchema,
    onSubmit: (values) => {
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
     jobAdvertService.add(jobAdvertAdd).then((result)=>console.log(result))
     alert("Başarılı")
     history.push("/employer")
    },
  });

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
    let educationLevelService = new EducationLevelService()

    workTypeService.getWorkType().then((result)=>setWorkTypes(result.data.data))
    wayOfWorkingService
      .getWayOfWorkings()
      .then((result) => setWayOfWorkings(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
      educationLevelService.getEducationLevels().then((result)=>setEducationLevels(result.data.data))
  }, []);

  const handleChangeSemantic = (value, field) => {
    formik.setFieldValue(field, value);
  };

  const workTypeOptions = workTypes.map((workType,index)=>({
    key:index,
    text:workType.workType,
    value:workType.id
}))

  const educationLevelOption = educationLevels.map((educationLevel,index)=>({
      key:index,
      text:educationLevel.educationLevel,
      value:educationLevel.id
  }))
  const cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const wayOfWorkingOption = wayOfWorkings.map((wayOfWorking, index) => ({
    key: index,
    text: wayOfWorking.workTime,
    value: wayOfWorking.id,
  }));

  const jobTitleOptions = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.jobTitleId,
  }));
  
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
                <Grid stackable>
                    <Grid.Column  width={8}>
              <label>İş Pozisyonu</label>
              <Form.Dropdown
                clearable
                item
                placeholder="İş Pozisyonu"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "jobTitleId");
                }}
                onBlur={formik.onBlur}
                id="jobTitleId"
                value={formik.values.jobTitleId}
                options={jobTitleOptions}
              />
              {formik.errors.jobTitleId && formik.touched.jobTitleId ? (
                <Message color="red">{formik.errors.jobTitleId}</Message>
              ) : null}
              </Grid.Column>
              <Grid.Column  width={8}>
              <label>Eğitim Seviyesi</label>
              <Form.Dropdown
                clearable
                item
                placeholder="Eğitim Seviyesi"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "educationLevelId");
                }}
                onBlur={formik.onBlur}
                id="educationLevelId"
                value={formik.values.educationLevelId}
                options={educationLevelOption}
              />
              {formik.errors.educationLevelId && formik.touched.educationLevelId ? (
                <Message color="red">{formik.errors.educationLevelId}</Message>
              ) : null}
              </Grid.Column>
              </Grid>
            </Form.Field>
         
              
             
            <Form.Field>
                <Grid stackable>
                    <Grid.Column  width={8}>
              <label>Şehir</label>
              <Form.Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "cityId");
                }}
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOptions}
              />
              {formik.errors.cityId && formik.touched.cityId ? (
                <Message color="red">{formik.errors.cityId}</Message>
              ) : null}
              </Grid.Column>
              <Grid.Column  width={8}>
              <label>Çalışma Şekli</label>
              <Form.Dropdown
                clearable
                item
                placeholder="Çalışma Şekli"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "workTypeId");
                }}
                onBlur={formik.onBlur}
                id="workTypeId"
                value={formik.values.workTypeId}
                options={workTypeOptions}
              />
              {formik.errors.workTypeId && formik.touched.workTypeId ? (
                <Message color="red">{formik.errors.workTypeId}</Message>
              ) : null}
              </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <label>Çalışma Süresi</label>
              <Form.Dropdown
                clearable
                item
                placeholder="Çalışma Süresi"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "workTimeId");
                }}
                onBlur={formik.onBlur}
                id="workTimeId"
                value={formik.values.workTimeId}
                options={wayOfWorkingOption}
              />
              {formik.errors.workTimeId && formik.touched.workTimeId ? (
                <Message color="red">{formik.errors.workTimeId}</Message>
              ) : null}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label>Minimum Maaş Aralığı</label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Minimum Maaş Aralığı"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label>Maximum Maaş Aralığı</label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maximum Maaş Aralığı"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                <label>Açık İş Pozisyonu Sayısı</label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Açık İş Pozisyonu Sayısı"
                    value={formik.values.openPositionCount}
                    name="openPositionCount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.openPositionCount}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label>Son Başvuru Tarihi</label>
                  <Input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Son Başvuru Tarihi"
                    value={formik.values.lastDate}
                    name="lastDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.lastDate && formik.touched.lastDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastDate}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                onClick={formik.handleSubmit}
                inverted
                color="purple"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
