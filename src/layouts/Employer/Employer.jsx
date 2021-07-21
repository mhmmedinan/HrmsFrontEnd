import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import EmployerCategories from "../Employer/EmployerCategories";
import JobAdvertAdd from "../../pages/Employers/JobAdvertAdd";
import AllJobAdverts from "../../pages/Employers/AllJobAdverts";
import { ToastContainer } from "react-toastify";
import EmployerNavi from "./EmployerNavi";
import EmployerProfile from "../../pages/Employers/EmployerProfile";
export default function Employer() {
  return (
    <div style={{ margin: "20px" }}>
      <EmployerNavi></EmployerNavi>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <EmployerCategories></EmployerCategories>
          </Grid.Column>
          <Grid.Column width={12}>
            
            <Switch>
              <Route
                exact
                path="/employer/jobadvertadd"
                component={JobAdvertAdd}
              />
              <Route
                exact
                path="/employer/alljobadverts"
                component={AllJobAdverts}
              />

              <Route
                exact
                path="/employer/employerProfile"
                component={EmployerProfile}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
