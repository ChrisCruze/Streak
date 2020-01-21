import React, { Fragment, Component, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import LoginTemplate from "../Templates/LoginTemplate";



class Login extends React.Component {
  navigate = (page, params) => {
    this.props.navigation.navigate(page, params);
  };

  render() {
    return (<LoginTemplate navigate={(page, params) => {
    this.props.navigation.navigate(page, params);
  }}></LoginTemplate>)
  }
}
export default Login;
   