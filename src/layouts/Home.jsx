import React from 'react'
import Filter from './Filter'
import { Grid } from "semantic-ui-react";
import JobAdvertIsActiveList from '../pages/JobAdverts/JobAdvertIsActiveList';
import Head from './Head';

export default function Home() {
    return (
        <div >
          <Head></Head>
          <div style={{margin: "20px"}}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filter></Filter>
          </Grid.Column>
          <Grid.Column width={9} >
           <JobAdvertIsActiveList></JobAdvertIsActiveList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
        </div>
    )
}
