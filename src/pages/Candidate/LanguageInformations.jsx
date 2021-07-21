import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
    Button,
    Modal,
    Table
  } from "semantic-ui-react";
import LanguageService from '../../services/LanguageService';
import LanguageAdd from './LanguageAdd';
import LanguageUpdate from './LanguageUpdate';
export default function LanguageInformations({resumeId}) {

    const [languages,setLanguages] = useState([])
    let languageService = new LanguageService()

    let langDelete = (id) => {
      languageService.delete(id);
      toast.success("Yabancı dil silindi");
    };
    useEffect(() => {
        languageService
        .getResumeId(resumeId)
        .then((result) => setLanguages(result.data.data));
    },[]);
    return (
        <div>
             <Table basic="very"  celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>YABANCI DİL</Table.HeaderCell>
                <Table.HeaderCell>SEVİYE</Table.HeaderCell>
               
                <Table.HeaderCell> <Modal
                          trigger={
                            <Button
                              icon="add"
                              color="gray"
                           
                            ></Button>
                          }
                        >
                          <LanguageAdd resumeId={resumeId}></LanguageAdd>
                        </Modal></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
          {languages.map((language) => (
            <Table.Row key={language.id}>
              <Table.Cell>{language.name}</Table.Cell>
              <Table.Cell>{language.level}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => langDelete(language.id)}
                  color="red"
                  icon="trash"
                >
                  
                </Button>
                <Modal trigger={<Button icon="pencil" color="gray"></Button>}>
                <LanguageUpdate resumeId={resumeId} langId={language.id} lang={language}></LanguageUpdate>
              </Modal>
              </Table.Cell>
               
            </Table.Row>
          ))}
        </Table.Body>
          </Table>
        </div>
    )
}
