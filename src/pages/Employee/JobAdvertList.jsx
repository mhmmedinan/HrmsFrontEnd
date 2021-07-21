import React, { useEffect, useState } from 'react'
import { Button, Table,Icon} from 'semantic-ui-react';
import JobAdvertService from '../../services/JobAdvertService';
import {toast} from "react-toastify";
import moment from "moment";
export default function JobAdvertList() {
    let jobAdvertService = new JobAdvertService()
    let jobAdvertTrueIsActive= (id)=>{
        jobAdvertService.jobAdvertTrueIsActive(id).then(result=>{
          toast.success("İş ilanı onaylandı")
        }).catch(result=>{
          toast.info("İş ilanı onaylanmış")
        })
     
    }

    let jobAdvertDelete = (id)=>{
        jobAdvertService.delete(id)
        toast.success("İş ilanı silindi")
    }

    const [jobAdverts,setJobAdverts] = useState([]);

    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllSorted().then(result=>setJobAdverts(result.data.data))
    },[])
    return (
        <div>
              <Table basic="very" celled style={{marginTop:"40px"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İşlemler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.ofWorking.workTime}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{moment(jobAdvert.createDate).format("DD-MM-YYYY")}</Table.Cell>
              <Table.Cell>{moment(jobAdvert.lastApplyDate).format("DD-MM-YYYY")}</Table.Cell>
              <Table.Cell>{(jobAdvert.active).toString()==="false"?<Button onClick={()=> jobAdvertTrueIsActive(jobAdvert.id)} color="green"><Icon name="check"/></Button>:<Button color="black" disabled>Onaylandı</Button>}
<Button onClick={()=> jobAdvertDelete(jobAdvert.id)}  color="red"><Icon name="trash"/></Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
