import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 90 }}
          source={require("../images/Placeholder.png")} //get an actual logo
        />
        <Text style={styles.title}>Welcome to CourseMate!</Text>
      </View>
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
});
