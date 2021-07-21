import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertList from '../../pages/Employee/JobAdvertList';
import EmployeeCategories from '../Employee/EmployeeCategories';
import { ToastContainer } from "react-toastify";
import EmployeeNavi from './EmployeeNavi';
import EmployeeProfile from '../../pages/Employee/EmployeeProfile';
import EmployerActiveUpdate from '../../pages/Employee/EmployerActiveUpdate';
export default function Employee() {
    return (
        <div style={{ margin: "20px" }}>
          
          <ToastContainer position="bottom-right"/>
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <EmployeeCategories></EmployeeCategories>
          </Grid.Column>
          <Grid.Column width={13}>
          <EmployeeNavi/>
            <Switch>
              <Route
                exact
                path="/employee/jobadvertlists"
                component={JobAdvertList}
              />

              <Route
                exact
                path="/employee/employeeProfile"
                component={EmployeeProfile}
              />

                <Route
                exact
                path="/employee/employerActiveUpdate"
                component={EmployerActiveUpdate}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}
