import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 90 }} //resize as needed
          source={require("../images/Placeholder.png")} //get an actual logo
        />
        <Text style={styles.title}>Welcome to CourseMate!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 40,
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
  },
});
