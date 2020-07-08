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

//add logo if/when we make one
//change font
//email validation + can't actually login
//make a good theme and stick to it
//for future style and making a new page: https://www.youtube.com/watch?v=_K41vd_W2qE
//

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
    color: "#761714",
    fontSize: 20,
  },
  setColorOrange: {
    color: "#3C8C44",
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
        <Text style={[styles.login, styles.setColorOrange]}>
          Welcome to CourseMate!
        </Text>
        <TextInput
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
          <Text style={styles.signupText}>Don't have an account? Click Me!</Text>
        </View>
      </View>
    );
  }
}
