import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import JobAdvertService from '../../services/JobAdvertService';

export default function AllJobAdverts() {
  let jobAdvertService = new JobAdvertService()
  let jobAdvertFalseIsActive= (id)=>{
    
    jobAdvertService.jobAdvertFalseIsActive(id)
    alert("İş ilanı pasif duruma getirildi")
}



let jobAdvertDelete = (id)=>{
  jobAdvertService.delete(id)
  alert("İş ilanı silindi")
}

    const [jobAdverts,setJobAdverts] = useState([]);

    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAll().then(result=>setJobAdverts(result.data.data))
    },[])


    return (
        <div>
             <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Eğitim Seviyesi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açık İş Pozisyonu Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Durum</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.educationLevel.educationLevel}</Table.Cell>
              <Table.Cell>{jobAdvert.ofWorking.workTime}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.createDate}</Table.Cell>
              <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell><Button  onClick={()=> jobAdvertFalseIsActive(jobAdvert.id)} inverted color="purple">Pasif duruma getir</Button></Table.Cell>
              <Table.Cell><Button onClick={()=>jobAdvertDelete(jobAdvert.id)} inverted color="purple">Sil</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        
      </Table>
        </div>
    )
}
