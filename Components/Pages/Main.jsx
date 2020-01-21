import React, { Fragment, Component, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";


class Main extends React.Component {
  navigate = (page, params) => {
    this.props.navigation.navigate(page, params);
  };
  render() {
    return (<View><Text>we here</Text></View>)
  }
}
export default Main;
