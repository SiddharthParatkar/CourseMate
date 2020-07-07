import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EDDFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "60%",
  },
  input: {
    height: 40,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    width: "90%",
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#FACC8D",
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 40,
    width: '90%',
  },
  submitButtonText: {
    color: "#761714",
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
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };

  render() {
    //add logo if/when we make one
    return (
      <View style={styles.container}>
        <Text //change color + font
          style={styles.login}
        >
          Welcome to CourseMate!
        </Text>
        <TextInput //email validation
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText = {this.handleEmail}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText = {this.handlePassword}
          value={this.state.password}
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
