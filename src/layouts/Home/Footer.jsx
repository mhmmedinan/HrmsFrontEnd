import React from 'react'
import { Grid ,Segment,Container,List,Header,Icon} from "semantic-ui-react";
export default function Footer() {
    return (
        <div>
            <Segment
        color="purple"
        inverted
        vertical
        style={{
          padding: "5em 5em",
          marginTop:"15em",
          marginLeft:"-20px",
          width: "2000px",
        }}
      >
        <Container fluid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <List link inverted>
                  <List.Item as="a">Gizlilik Politikası</List.Item>
                  <List.Item as="a">Hakkımızda </List.Item>
                  <List.Item as="a">İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                  <Header style={{ marginTop: "-1.2em" }} as="h2">
                    <Container>
                      <Icon name="users" color="blue" size="big" />
                    </Container>
                    <Header.Content>
                      <font color="#f5f5f5">
                        Human Resources Management System
                      </font>
                    </Header.Content>
                  </Header>
                  <Container>
                    © 2021 Human Resources Management System 
                  </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
        </div>
    )
}
