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

const ProfileAnon = () => {
  const navigation = useNavigation();

  const courses = [{id: "15213", name: "Intro to Computer Systems"}] //change this to user.courses

  const [about, setAbout] = useState('Hello. My name is Siddharth Paratkar.');//change this to user.about
  const [social, setSocial] = useState([{format: "LinkedIn", account: "Siddharth Paratkar", id: 0}]);//change this to user.social

//change David to user.name and my e-mail to user.e-mail
    return (
        <ScrollView style={{backgroundColor: "#4b636e"}}>
        <View style={styles.container}>
        <Text style={styles.title}>Siddharth Paratkar</Text>
        <Text style={styles.email}>sparatka@andrew.cmu.edu</Text>
        <Text style={styles.sectHeader}>Contact Info</Text>
        <FlatList
            style={{flexGrow: 0}}
            keyExtractor = {item => item.format} 
            data={social}
            renderItem = {({item}) => 
              <Text style={styles.contactInfo}>{item.format}: {item.account}</Text>
            }/>
        <Text style={styles.sectHeader}>About Me</Text>
        <Text style={styles.input2}>Hello, my name is Sid.</Text>
        <Text style={styles.sectHeader}>Courses</Text>
        <FlatList
            style={{flexGrow: 0}}
            keyExtractor = {item => item.format} 
            data={courses}
            renderItem = {({item}) => <Text style={styles.contactInfo}>{item.id}: {item.name}</Text>} />
        <TouchableOpacity
          style={styles.submitButton2}
          onPress={() => {Alert.alert("Friend added.")}}//create an actual function that saves this info to the database
        >
        <Text style={styles.submitButtonText2}>Add Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={{
            fontSize: 20,
            marginVertical: 10,
            fontWeight: "500",
            paddingBottom: 10,
            color: "cornflowerblue",
          }}>Go Back</Text></TouchableOpacity>
        </View>
        </ScrollView>
    );
}

export default ProfileAnon;

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
    marginBottom: 10,
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