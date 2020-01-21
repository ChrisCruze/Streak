import React, { Fragment, Component, useState, useEffect } from "react";
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
  Spinner,
  Form,
  Input,
  Item
} from "native-base";
import useAuth from "../../Hooks/useAuth";

const MainTemplate = ({ navigate }) => {
  const firebase_auth = useAuth();
  const email = firebase_auth["firebase_auth"]["email"];
  const uid = firebase_auth["firebase_auth"]["uid"];

  console.log({ firebase_auth });

  return (
    <Fragment>
      <Container>
        <Header>
          <Text>WELCOME TO STREAK {uid}</Text>
        </Header>
        <Content>
          <Body></Body>
          <Text>holla</Text>
        </Content>
      </Container>
    </Fragment>
  );
};
export default MainTemplate;
