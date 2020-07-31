import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from "react-native";

import Logo from "../components/Logo";
import Form from '../components/Form'

export default class LoginPage extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: "#4b636e"}}>
        <Logo />
        <Form />
      </ScrollView>
    );
  }
}
