import React, { useEffect } from 'react'
import moment from "moment";
import { useState } from 'react'
import JobExperienceService from '../../services/JobExperienceService';
import {
    Button,
    Modal,
    Table
  } from "semantic-ui-react";
import JobExperienceAdd from './JobExperienceAdd';
import { toast } from 'react-toastify';
import JobExperienceUpdate from './JobExperienceUpdate';
export default function JobExperienceInformations({resumeId}) {

    const[jobExperiences,setJobExperiences]=useState([])
    let jobExperienceService = new JobExperienceService();

    let experienceDelete = (id) => {
      jobExperienceService.delete(id);
      toast.success("İş tecrübesi silindi");
    };
    useEffect(() => {
        jobExperienceService
        .getResumeId(resumeId)
        .then((result) => setJobExperiences(result.data.data));
    },[]);

    return (
        <div>
        <Table basic="very"  celled >
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>ÇALIŞTIĞI ŞİRKET</Table.HeaderCell>
           <Table.HeaderCell>POZİSYON</Table.HeaderCell>
           <Table.HeaderCell>BAŞLAMA TARİHİ</Table.HeaderCell>
           <Table.HeaderCell>BİTİŞ TARİHİ</Table.HeaderCell>
           <Table.HeaderCell> <Modal
                     trigger={
                       <Button
                         icon="add"
                         color="gray"
                      
                       ></Button>
                     }
                   >
                     <JobExperienceAdd resumeId={resumeId}></JobExperienceAdd>
                   </Modal></Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       <Table.Body>
     {jobExperiences.map((jobExperience) => (
       <Table.Row key={jobExperience.id}>
         <Table.Cell>{jobExperience.businessName}</Table.Cell>
         <Table.Cell>{jobExperience.position}</Table.Cell>
         <Table.Cell>{moment(jobExperience.startDate).format("DD-MM-YYYY")}</Table.Cell>
         <Table.Cell>{jobExperience.endDate===null?"Devam ediyor":moment(jobExperience.endDate).format("DD-MM-YYYY")}</Table.Cell>
         <Table.Cell>
                <Button
                  onClick={() => experienceDelete(jobExperience.id)}
                  color="red"
                  icon="trash"
                >
                 
                </Button>

                <Modal
                     trigger={
                       <Button
                         icon="pencil"
                         color="gray"
                      
                       ></Button>
                     }
                   >
                     <JobExperienceUpdate resumeId={resumeId} experienceId={jobExperience.id} experience={jobExperience}></JobExperienceUpdate>
                   </Modal>
              </Table.Cell>
       </Table.Row>
     ))}
   </Table.Body>
     </Table>
        </div>
    )
}
