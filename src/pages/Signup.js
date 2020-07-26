import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };

    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Thanks for joining us!</Text>
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
          <Text style={styles.submitButtonText}> Sign Up </Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already made an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.signupButton}>Log In!</Text></TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  title: {
    fontSize: 40,
    marginVertical: "85%",
    marginBottom: "20%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
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
    marginVertical: 10,
    paddingVertical: 7,
    width: 150,
    marginBottom: "30%",
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
