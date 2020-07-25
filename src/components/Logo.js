import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const Logo = () => {
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

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    paddingTop: "40%",
    paddingBottom: "10%",
  },
  title: {
    fontSize: 40,
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
  },
});
