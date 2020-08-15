import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
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
  connectionButton: {
      backgroundColor: "#37474f",
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 25,
      borderWidth: 1,
      marginHorizontal: 30,
  },
  connection: {
      color: "white",     
  },
  addButton: {
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 5,
  },
  addText: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
  },
  backButton: {
    fontSize: 20,
    marginVertical: 30,
    fontWeight: "500",
    paddingBottom: 10,
    color: "#B7670F",
  }
});

const Connections = () => {

  const connections = [{name: "Ihita"}]

  return (
        <View style={styles.container}>
        <Text style={styles.title}>My Connections</Text>
        <TouchableOpacity
          style={styles.addButton}
        >
        <Text style={styles.addText}>Add a Connection</Text>
        </TouchableOpacity>
        <FlatList
            style={{flexGrow: 0}}
            data={connections}
            renderItem = {({item}) => <View style={styles.connectionButton}>
                <Text style={styles.connection}
                >{item.name}</Text></View>}  
        />
        <TouchableOpacity >
          <Text style={styles.backButton}>Go Back</Text></TouchableOpacity>
        </View>
    );
}

export default Connections;