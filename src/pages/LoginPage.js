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
} from "react-native";

import Logo from "../components/Logo";
import Form from '../components/Form'

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
