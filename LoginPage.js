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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EDDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "50%",
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    width: "90%",
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#FACC8D",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  submitButtonText: {
    color: "#761714",
  },
  setColorOrange: {
    color: "#3C8C44",
  },
});

export default class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    //add logo if/when we make one
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text //change font
          style={[styles.login, styles.setColorOrange]}
        >
          Welcome to CourseMate!
        </Text>
        <TextInput //email validation + can't actually login
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          onChangeText={this.handleEmail}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
          returnKeyType="go"
          onChangeText={this.handlePassword}
          value={this.state.password}
          ref={(input) => (this.passwordInput = input)}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
