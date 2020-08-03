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

import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const storeData = async (username, password) => {
    try {
      await AsyncStorage.setItem(username, JSON.stringify({password: password, courses: [], friends: [], contactInfo: {}, preferences: {}}))
    } catch (e) {
      // saving error
    }
  }

  const getData = async (username) => {
    try {
      const value = await AsyncStorage.getItem(username);
      return JSON.parse(value).password;
    } catch(e) {
      // error reading value
    }
  }

  const signup = async (email, pass) => {
    const storedPass = await getData(email);
    if (storedPass != null) {
      alert("User already exists.")
    } else if (!email.endsWith("@andrew.cmu.edu")) { 
      alert("Must be an Andrew email address.")
    } else {
      storeData(email, pass);
      alert("Signup successful.\nEmail: " + email + "\nPassword: " + pass);
      navigation.navigate("home");
    }
  };

    return (
      <ScrollView style={{backgroundColor: "#4b636e"}}>
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
          <Text style={styles.signupText}>Already made an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.signupButton}>Log In!</Text></TouchableOpacity>
        </View>
      </ScrollView>
    );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingTop: 250,
  },
  title: {
    fontSize: 40,
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginVertical: 15,
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
    marginBottom: 80,
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
  signupButton: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 10,
    color: "#8eacbb",
  },
});
