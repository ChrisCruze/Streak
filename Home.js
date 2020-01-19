import React, { Component } from "react";
import {
  Container,
  Footer,
  FooterTab,
  H1,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  ListItem,
  CheckBox,
  Content,
  Card,
  CardItem,
  Spinner
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const Home = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <H1>Header One</H1>

        <Spinner />

        <Grid>
          <Col style={{ backgroundColor: "#635DB7", height: 200 }}></Col>
          <Col style={{ backgroundColor: "#00CE9F", height: 200 }}></Col>
        </Grid>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <Card>
          <CardItem>
            <Body>
              <Text>//Your text here</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Text>Apps</Text>
          </Button>
          <Button>
            <Text>Camera</Text>
          </Button>
          <Button active>
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default Home;
