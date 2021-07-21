import React from "react";
import { Link } from 'react-router-dom'
import { Container, Menu,Button} from "semantic-ui-react";
import CandidateSignedOut from "../Candidate/CandidateSignedOut";
import EmployerSignedOut from "../Employer/EmployerSignedOut";
import FavoriteSummary from "./FavoriteSummary";

export default function Navi() {

  return (
    <Menu inverted color="purple" >
      <Container >
        <Menu.Item >
          <Button color="purple" as={Link} to={"/"}>
            <Button.Content visible inverted color="purple">Hrms.Net</Button.Content>
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button color="purple">
            <Button.Content visible >İş Ara</Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Menu position="right">
         <FavoriteSummary/>
          <CandidateSignedOut></CandidateSignedOut>
          <EmployerSignedOut></EmployerSignedOut>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
