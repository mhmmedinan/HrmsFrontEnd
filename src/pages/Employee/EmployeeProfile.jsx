import React, { useEffect } from 'react'
import { useState } from 'react';
import EmployeeService from '../../services/EmployeeService';
import {
    Table,
    Modal,
    Button
  } from "semantic-ui-react";
import EmployeeUpdate from './EmployeeUpdate';
export default function EmployeeProfile() {

    const [employees,setEmployees]=useState([]);

    useEffect(()=>{
        let employeeService = new EmployeeService();
        employeeService.getById(37).then(result=>setEmployees(result.data.data))
    },[])
    return (
        <div style={{marginTop:"50px"}}>
        <Table basic="very" celled >
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>ADI</Table.HeaderCell>
           <Table.HeaderCell>SOYADI</Table.HeaderCell>
           <Table.HeaderCell>EMAİL ADRESİ</Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE</Table.HeaderCell>
           <Table.HeaderCell>ŞİFRE TEKRARI</Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       <Table.Body>
     {employees.map((employee) => (
       <Table.Row key={employee.id}>
         <Table.Cell>{employee.firstName}</Table.Cell>
         <Table.Cell>{employee.lastName}</Table.Cell>
         <Table.Cell>{employee.email}</Table.Cell>
         <Table.Cell>{employee.password}</Table.Cell>
         <Table.Cell>{employee.passwordRepeat}</Table.Cell>
         <Table.Cell> <Modal
                     trigger={
                       <Button
                         icon="pencil"
                         color="gray"
                      
                       ></Button>
                     }
                   >
                     <EmployeeUpdate employeeId={employee.id} employee={employee} ></EmployeeUpdate>
                   </Modal></Table.Cell>
       </Table.Row>
     ))}
   </Table.Body>
     </Table>
        </div>
    )
}
