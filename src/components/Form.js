import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Form = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const getData = async (username) => {
    try {
      const value = await AsyncStorage.getItem(username);
      return value;
    } catch(e) {
      // error reading value
    }
  }

  const login = async (email, pass) => {
    const storedPass = await getData(email);
    if (storedPass === null) {
      alert("User does not exist. Did you make sure to type the full e-mail address and use your Andrew email?")
    } else if (storedPass != pass) {
      alert("Password is incorrect.")
    } else {
      alert("Login successful.\nEmail: " + email + "\nPassword: " + pass);
      navigation.navigate("home");
    }
  };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          returnKeyType="next"
          keyboardType="email-address"
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
          returnKeyType="go"
          autoCapitalize="none"
          onChangeText={setPass}
          value={pass}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => login(email, pass)}
        >
          <Text style={styles.submitButtonText}> Log In </Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text
            style={styles.signupButton}>Sign Up!</Text></TouchableOpacity>
        </View>
      </View>
    );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "10%",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 25,
    fontSize: 20,
    width: 300,
  },
  submitButton: {
    backgroundColor: "#37474f",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    marginTop: "5%",
    paddingVertical: 10,
    width: 150,
    marginBottom: "25%",
  },
  submitButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  signupText: {
    fontSize: 20,
    color: "#fff",
    alignItems: "flex-end",
  },
  signupTextCont: {
    paddingBottom: "10%",
    alignItems: "center",
  },
  signupButton: {
    fontSize: 20,
    fontWeight: "500",
    color: "#8eacbb",
  },
});
