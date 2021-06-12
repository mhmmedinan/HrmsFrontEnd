import React from "react";
import { Container, Menu,Button} from "semantic-ui-react";
import CandidateSignedOut from "./CandidateSignedOut";
import EmployerSignedOut from "./EmployerSignedOut";

export default function navi() {
  return (
    <Menu inverted color="purple" >
      <Container>
        <Menu.Item>
          <Button color="purple">
            <Button.Content visible>Hrms.Net</Button.Content>
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button color="purple">
            <Button.Content visible >İş Ara</Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Menu position="right">
          <CandidateSignedOut></CandidateSignedOut>
          <EmployerSignedOut></EmployerSignedOut>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
