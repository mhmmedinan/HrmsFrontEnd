import React from 'react'
import Filter from '../layouts/Filter'
import { Grid } from "semantic-ui-react";
import JobAdvertList from './JobAdvertList';
export default function JobAdverts() {
    return (
        <div style={{margin: "20px"}}>
                 <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filter></Filter>
          </Grid.Column>
          <Grid.Column width={9} >
           <JobAdvertList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
