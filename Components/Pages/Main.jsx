import React, { Fragment, Component, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import MainTemplate from "../Templates/MainTemplate";

class Main extends React.Component {
  render() {
    return (
      <MainTemplate
        navigate={(page, params) => {
          this.props.navigation.navigate(page, params);
        }}
      ></MainTemplate>
    );
  }
}
export default Main;
