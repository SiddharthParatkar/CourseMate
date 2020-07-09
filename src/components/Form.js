import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default class Logo extends React.Component {
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
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
          placeholderTextColor="#fff"
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
        <Text style={styles.signupText}>Don't have an account? Sign Up!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 25,
    fontSize: 30,
    width: "110%",
  },
  submitButton: {
    backgroundColor: "#37474f",
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 7,
    width: "30%",
    marginBottom: "30%",
  },
  submitButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  signupText: {
    fontSize: 20,
    color: "#fff",
  },
});
