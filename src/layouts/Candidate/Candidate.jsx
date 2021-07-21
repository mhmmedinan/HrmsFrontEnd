import React from 'react'
import { ToastContainer } from "react-toastify";
import CandidateCategories from './CandidateCategories';
import { Grid } from "semantic-ui-react";
import { Switch,Route } from 'react-router';
import ResumeInformations from '../../pages/Candidate/ResumeInformations';


export default function Candidate() {
    return (
        <div> 
          <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <CandidateCategories></CandidateCategories>
          </Grid.Column>
          <Grid.Column width={13}>
            
          <Switch>
              <Route
                path="/home/candidate/resumeInformations"
                component={ResumeInformations}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}
