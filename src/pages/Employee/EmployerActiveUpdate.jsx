import React, { useEffect, useState } from 'react'
import EmployerService from '../../services/EmployerService';
import {
    Button,
    Table
  } from "semantic-ui-react";
import EmployeeService from '../../services/EmployeeService';
import { toast } from 'react-toastify';
export default function EmployerActiveUpdate() {
    const[employers,setEmployers] = useState([]);
    let employerService = new EmployerService();
    useEffect(()=>{
        employerService.getByUpdate().then(result=>setEmployers(result.data.data))
    })

    const employerUpdate = (employerId)=>{
        let employeeService = new EmployeeService();
        employeeService.updateIsActiveEmployer(employerId).then(result=>{
            toast.success("Güncelleme işlemi onaylandı.")
        })
       
    }
    return (
        <div style={{marginTop:"50px"}}>
        <Table basic="very" celled >
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>ŞİRKET ADI </Table.HeaderCell>
           <Table.HeaderCell>WEB SİTESİ</Table.HeaderCell>
           <Table.HeaderCell>TELEFON NUMARASI</Table.HeaderCell>
           <Table.HeaderCell>EMAİL</Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE</Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE TEKRARI</Table.HeaderCell>
           <Table.HeaderCell>İŞLEM</Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       <Table.Body>
     {employers.map((employer) => (
       <Table.Row key={employer.id}>
         <Table.Cell>{employer.history.companyName}</Table.Cell>
         <Table.Cell>{employer.history.webAddress}</Table.Cell>
         <Table.Cell>{employer.history.phoneNumber}</Table.Cell>
         <Table.Cell>{employer.history.email}</Table.Cell>
         <Table.Cell>{employer.history.password}</Table.Cell>
         <Table.Cell>{employer.history.passwordRepeat}</Table.Cell>
         <Table.Cell><Button color="green" onClick={()=>employerUpdate(employer.id)}>Onayla</Button></Table.Cell>
       </Table.Row>
     ))}
   </Table.Body>
     </Table>
        </div>
    )
}
