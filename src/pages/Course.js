import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Profile = () => {
  const navigation = useNavigation();

  const people = [{name: "Sid"}] //change to a user.filter(user.courses includes this course)

  const deleteSocial = (id) => {
    const newArr = social.filter((item) => item.id !== id);
    setSocial(newArr);
  }

  const description = "15213 is a CS course." //probably put in the description on the website.

    return (
        <ScrollView style={{backgroundColor: "#4b636e"}}>
        <View style={styles.container}>
        <Text style={styles.title}>15-213: Intro to Computer Systems</Text>
        <Text style={styles.sectHeader}>Description</Text>
        <Text style={styles.input2}>{description}</Text>
        <Text style={styles.sectHeader}>People</Text>
        <FlatList
            style={{flexGrow: 0}}
            data={people}
            renderItem = {({item}) => <Text onPress={() => navigation.navigate('publicProfile')}
            style={styles.contactInfo}>{item.name}</Text>} />
        <TouchableOpacity onPress={() => navigation.navigate('courses')}>
          <Text style={{
            fontSize: 20,
            marginVertical: 30,
            fontWeight: "500",
            paddingBottom: 10,
            color: "cornflowerblue",
          }}>Go Back</Text></TouchableOpacity>
        </View>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingTop: 100,
    paddingBottom: 50,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
  },
  email: {
      fontSize: 20,
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
  contactInfo: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    color: "#ffff",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 25,
    fontSize: 10,
    width: 150,
  },
  input2: {
    color: "#ffff",
    fontSize: 10,
    width: 200,
    maxHeight: 150,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 2,
  },
  submitButtonText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
  },
  submitButton2: {
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 5,
  },
  submitButtonText2: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
  },
});