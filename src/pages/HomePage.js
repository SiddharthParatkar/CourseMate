import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4b636e",
    paddingLeft: "5%",
  },
  courses: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: "10%",
  },
  connections: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: "60%",
  },
  profileButton: {
    backgroundColor: "#8eacbb",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  coursesButton: {
    backgroundColor: "#8eacbb",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: "25%",
  },
  connectionsButton: {
    backgroundColor: "#8eacbb",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: "25%",
  },
  settingsButton: {
    backgroundColor: "#8eacbb",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  buttonText: {
    color: "#761714",
    fontSize: 10,
  },
});

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.courses}>Courses</Text>
          <Text style={styles.connections}>Connections</Text>
        </ScrollView>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.buttonText}> Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.buttonText}> Connections </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesButton}>
          <Text style={styles.buttonText}> Courses </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.connectionsButton}>
          <Text style={styles.buttonText}> Settings </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
