import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginPage from "./src/pages/LoginPage";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>Welcome to CourseMate!</Text>
        <StatusBar backgroundColor="#37474f" barStyle="light-content" />
      </View>
      //<LoginPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffff",
  },
})
