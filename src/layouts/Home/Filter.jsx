import React, { useState, useEffect } from "react";
import { Segment, Checkbox, Button, Dropdown } from "semantic-ui-react";
import CityService from "../../services/CityService";
import WorkTypeService from "../../services/WorkTypeService";
import WayOfWorkingService from "../../services/WayOfWorkingService";
import JobTitleService from "../../services/JobTitleService";

export default function Filter({ clickEvent }) {
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkType()
      .then((result) => setWorkTypes(result.data.data));

    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService
      .getWayOfWorkings()
      .then((result) => setWayOfWorkings(result.data.data));

    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  const [cityIndex, setCityIndex] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value);
  };

  const [jobTitleIndex] = useState([]);
  const handleChangeJobTitle = (e, { value, checked }) => {
    if (checked) {
      jobTitleIndex.push(value);
    } else {
      let index = jobTitleIndex.indexOf(value);
      if (index > -1) {
        jobTitleIndex.splice(index, 1);
      }
    }
  };

  const [workTypeIndex] = useState([]);
  const handleChangeWorkType = (e, { value, checked }) => {
    if (checked) {
      workTypeIndex.push(value);
    } else {
      let index = workTypeIndex.indexOf(value);
      if (index > -1) {
        workTypeIndex.splice(index, 1);
      }
    }
  };

  const [workTimeIndex] = useState([]);
  const handleChangeWorkTime = (e, { value, checked }) => {
    if (checked) {
      workTimeIndex.push(value);
    } else {
      let index = workTimeIndex.indexOf(value);
      if (index > -1) {
        workTimeIndex.splice(index, 1);
      }
    }
  };
  return (
    <div>
      <Segment.Group>
        <Segment as="h3">Şehir</Segment>
        <Segment>
          <Dropdown
            placeholder="Şehir seçiniz"
            search
            selection
            clearable
            multiple
            options={cities.map((city, index) => {
              return { text: city.name, key: city.index, value: city.id };
            })}
            onChange={handleChangeCity}
            value={cityIndex}
          />
        </Segment>
      </Segment.Group>

      <Segment.Group as="h3" attached="top">
        <Segment as="h3">Çalışma Şekli</Segment>
        {workTypes.map((workType) => (
          <Segment textAlign="left">
            <Checkbox
            onChange={handleChangeWorkType}
              key={workType.id}
              label={workType.workType}
              value={workType.id}
            />
          </Segment>
        ))}
      </Segment.Group>

      <Segment.Group as="h3" attached="top">
        <Segment as="h3">Çalışma Türü</Segment>
        {wayOfWorkings.map((wayOfWorking) => (
          <Segment textAlign="left">
            <Checkbox
            onChange={handleChangeWorkTime}
              key={wayOfWorking.id}
              label={wayOfWorking.workTime}
              value={wayOfWorking.id}
            />
          </Segment>
        ))}
      </Segment.Group>

      <Segment.Group as="h3" attached="top">
        <Segment as="h3">İş Pozisyonu</Segment>
        {jobTitles.map((jobTitle) => (
          <Segment textAlign="left">
            <Checkbox
              onChange={handleChangeJobTitle}
              key={jobTitle.jobTitleId}
              label={jobTitle.title}
              value={jobTitle.jobTitleId}
            />
          </Segment>
        ))}
      </Segment.Group>

      <Button
        type="Button"
        fluid
        color="purple"
        onClick={() =>
          clickEvent({ cityId: cityIndex, jobTitleId: jobTitleIndex,workTypeId:workTypeIndex,workTimeId:workTimeIndex })
        }
      >
        Filtrele
      </Button>
    </div>
  );
}
