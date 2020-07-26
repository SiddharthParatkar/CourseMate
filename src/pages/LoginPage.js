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
      <ScrollView>
        <Logo />
        <Form />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
