import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C8CBC",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
  },
  sectHeader: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
  },
});

export default class Settings extends React.Component{

  state = {toggleProfile: false, toggleSM: false};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <Text style={styles.sectHeader}> Profile Visibility </Text>
        <Switch
          onValueChange={(value) => this.setState({toggleProfile:value})}
          value={this.state.toggleProfile} >
        </Switch>
        <Text style={styles.sectHeader}> Social Media Visibility </Text>
        <Switch
          onValueChange={(value) => this.setState({toggleSM:value})}
          value={this.state.toggleSM} >
        </Switch>
      </View>
    );
  }
}