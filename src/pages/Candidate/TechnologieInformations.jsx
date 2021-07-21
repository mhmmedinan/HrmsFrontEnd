import React, { useState } from 'react'
import { useEffect } from 'react'
import TechnologieService from '../../services/TechnologieService'
import {
    Button,
    Modal,
    Table
  } from "semantic-ui-react";
import TechnologieAdd from './TechnologieAdd';
import { toast } from 'react-toastify';
import TechnologieUpdate from './TechnologieUpdate';

export default function TechnologieInformations({resumeId}) {

    const[technologies,setTechnologies] = useState([])
    let technologieService = new TechnologieService()

     
  let techDelete = (id) => {
    technologieService.delete(id);
    toast.success("Teknoloji silindi");
  };

    useEffect(() => {
        technologieService
        .getResumeId(resumeId)
        .then((result) => setTechnologies(result.data.data));
    },[]);
    return (
        <div>
            <Table basic="very"  celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>TEKNOLOJİ</Table.HeaderCell>
               
                <Table.HeaderCell> <Modal
                          trigger={
                            <Button
                              icon="add"
                              color="gray"
                           
                            ></Button>
                          }
                        >
                          <TechnologieAdd resumeId={resumeId}></TechnologieAdd>
                        </Modal></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
          {technologies.map((technologie) => (
            <Table.Row key={technologies.id}>
              <Table.Cell>{technologie.name}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => techDelete(technologie.id)}
                  color="red"
                  icon="trash"
                >
               
                </Button> 
                <Modal trigger={<Button icon="pencil" color="gray"></Button>}>
                <TechnologieUpdate resumeId={resumeId} techId={technologie.id} tech={technologie}></TechnologieUpdate>
                </Modal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
          </Table>
        </div>
    )
}
