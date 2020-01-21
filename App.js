import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import Login from "./Components/Pages/Login";
import Main from "./Components/Pages/Main";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
 
});
export default createAppContainer(AppNavigator);


// export default function App() {
//   return <Login ></Login >
// }
