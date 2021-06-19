import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import EmployerCategories from "./EmployerCategories";
import JobAdvertAdd from "../pages/Employers/JobAdvertAdd";
import AllJobAdverts from "../pages/Employers/AllJobAdverts";
export default function Employer() {
  return (
    <div style={{ margin: "20px" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <EmployerCategories></EmployerCategories>
          </Grid.Column>
          <Grid.Column width={9}>
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
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
