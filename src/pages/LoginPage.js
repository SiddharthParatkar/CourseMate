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
  input: {
    height: 40,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 25,
    fontSize: 20,
    width: "90%",
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#FACC8D",
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    width: "30%",
  },
  submitButtonText: {
    fontSize: 20,
  },
  signupText: {
    fontSize: 20,
    marginVertical: 10,
    padding: 20,
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
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={[styles.title]}>Welcome to CourseMate!</Text>
        <StatusBar backgroundColor="#37474f" barStyle="light-content" />
        {/* <TextInput
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
        <View>
          <Text style={styles.signupText}>
            Don't have an account? Click Me!
          </Text>
        </View> */}
      </View>
    );
  }
}
