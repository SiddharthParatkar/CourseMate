import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const storeData = async (username, password) => {
    try {
      console.log(username + password)
      await AsyncStorage.setItem(username, password)
    } catch (e) {
      // saving error
    }
  }

  const getData = async (username) => {
    try {
      const value = await AsyncStorage.getItem(username);
      return value;
    } catch(e) {
      // error reading value
    }
  }

  const signup = async (email, pass) => {
    const storedPass = await getData(email);
    if (storedPass != null) {
      alert("User already exists.")
    } else if (!email.endsWith("@andrew.cmu.edu")) { 
      alert("Must be an @andrew.cmu.edu address.")
    } else {
      storeData(email, pass);
      alert("Signup successful.\nEmail: " + email + "\nPassword: " + pass);
      navigation.navigate("home");
    }
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
          onPress={() => signup(email, pass)}
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
