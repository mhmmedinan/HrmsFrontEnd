import React from "react";
import SchoolAdd from "./SchoolAdd";
import moment from "moment";
import { Button, Modal, Table } from "semantic-ui-react";
import { useState } from "react";
import SchoolService from "../../services/SchoolService";
import { useEffect } from "react";
import { toast } from "react-toastify";
import SchoolUpdate from "./SchoolUpdate";

export default function SchoolInformations({ resumeId }) {
  const [schools, setSchools] = useState([]);
  let schoolService = new SchoolService();

  
  let schoolDelete = (id) => {
    schoolService.delete(id);
    toast.success("Eğitim bilgisi silindi");
  };
  useEffect(() => {
    schoolService
      .getResumeId(resumeId)
      .then((result) => setSchools(result.data.data));
  }, []);
  return (
    <div>
      <Table basic="very" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>OKUL</Table.HeaderCell>
            <Table.HeaderCell>BÖLÜM</Table.HeaderCell>
            <Table.HeaderCell>BAŞLAMA TARİHİ</Table.HeaderCell>
            <Table.HeaderCell>BİTİŞ TARİHİ</Table.HeaderCell>
            <Table.HeaderCell>
              {" "}
              <Modal trigger={<Button icon="add" color="gray"></Button>}>
                <SchoolAdd resumeId={resumeId}></SchoolAdd>
              </Modal>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {schools.map((school) => (
            <Table.Row key={school.id}>
              <Table.Cell>{school.schoolName}</Table.Cell>
              <Table.Cell>{school.schoolEpisode}</Table.Cell>
              <Table.Cell>
                {moment(school.startDate).format("DD-MM-YYYY")}
              </Table.Cell>
              <Table.Cell>
                {school.endDate === null
                  ? "Devam ediyor"
                  : moment(school.endDate).format("DD-MM-YYYY")}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => schoolDelete(school.id)}
                  color="red"
                  icon="trash"
                >
                  
                </Button>
                <Modal trigger={<Button icon="pencil" color="gray"></Button>}>
                <SchoolUpdate resumeId={resumeId} schoolId={school.id} school={school}></SchoolUpdate>
              </Modal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
