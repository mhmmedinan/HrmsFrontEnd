import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertList from '../pages/Employee/JobAdvertList';
import EmployeeCategories from './EmployeeCategories';
export default function Employee() {
    return (
        <div style={{ margin: "20px" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <EmployeeCategories></EmployeeCategories>
          </Grid.Column>
          <Grid.Column width={9}>
            <Switch>
              <Route
                exact
                path="/employee/jobadvertlists"
                component={JobAdvertList}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}
