import React, { useEffect, useState } from 'react'
import EmployerService from '../../services/EmployerService';
import {
    Table,
    Modal,
    Button
  } from "semantic-ui-react";
import EmployerUpdate from './EmployerUpdate';
export default function EmployerProfile() {

    const [employers,setEmployers]=useState([]);

    useEffect(()=>{
        let employeeService = new EmployerService();
        employeeService.getById(26).then(result=>setEmployers(result.data.data))
    },[])
    return (
        <div style={{marginTop:"50px"}}>
        <Table basic="very" celled >
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>ŞİRKET ADI</Table.HeaderCell>
           <Table.HeaderCell>WEB ADRESİ</Table.HeaderCell>
           <Table.HeaderCell>TELEFON NUMARASI</Table.HeaderCell>
           <Table.HeaderCell>EMAİL</Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE </Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE TEKRARI</Table.HeaderCell>
           <Table.HeaderCell>GÜNCELLE</Table.HeaderCell>
           <Table.HeaderCell>DURUM</Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       <Table.Body>
     {employers.map((employer) => (
       <Table.Row key={employer.id}>
         <Table.Cell>{employer.companyName}</Table.Cell>
         <Table.Cell>{employer.webAddress}</Table.Cell>
         <Table.Cell>{employer.phoneNumber}</Table.Cell>
         <Table.Cell>{employer.email}</Table.Cell>
         <Table.Cell>{employer.password}</Table.Cell>
         <Table.Cell>{employer.passwordRepeat}</Table.Cell>
         <Table.Cell> <Modal
                     trigger={
                       <Button
                         icon="pencil"
                         color="gray"
                      
                       ></Button>
                     }
                   >
                     <EmployerUpdate employerId={employer.id} employer={employer} ></EmployerUpdate>
                   </Modal></Table.Cell>
        <Table.Cell>{(employer.activated).toString()==="false"?<Button color="black" disabled>Onay bekleniyor</Button>:<Button color="green" disabled>Güncellendi</Button>}</Table.Cell>
       </Table.Row>
     ))}
   </Table.Body>
     </Table>
        </div>
    )
}
