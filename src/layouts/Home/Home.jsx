import React from 'react'
import { Grid} from "semantic-ui-react";
import Navi from '../Home/Navi'
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from "react-router-dom";
import FavoriteJobAdvert from '../../pages/JobAdverts/FavoriteJobAdvert';
import JobAdvertIsActive from '../../pages/JobAdverts/JobAdvertIsActive';
import Candidate from '../Candidate/Candidate';

export default function Home() {
    return (
        <div>
           <Navi/>
           <ToastContainer position="bottom-right"/>
        <Grid>
          <Grid.Row>
          <Grid.Column width={16} >
          <Switch>
              <Route
                path="/home/candidate"
                component={Candidate}
              />
              <Route
                exact
                path="/home/favoriteJobAdvert"
                component={FavoriteJobAdvert}
              />
             
              <Route
                exact
                path="/"
                component={JobAdvertIsActive}
              />
            </Switch>
          </Grid.Column>
          </Grid.Row>
      </Grid>
      <Footer></Footer>
        </div>
    )
}
