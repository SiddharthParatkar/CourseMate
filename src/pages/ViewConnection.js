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

import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C8CBC",
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
  sectHeader: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffff",
  },
  socialMedia: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    color: "#ffff",
  },
  courses: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    color: "#ffff",
  },
  backButton: {
    fontSize: 20,
    marginVertical: 30,
    fontWeight: "500",
    paddingBottom: 10,
    color: "#B7670F",
  }
});

const ViewConnection = () => {
  const person = "Ihita" 

  const courses = [{code: "15213", name: "Intro to Computer Systems"},
                  {code: "15251", name: "Great Ideas in Theoretical Computer Science"}, 
                  {code: "15210", name: "Parallel and Sequential Data Structures"}]

  const socialMedia = [{type: "Snapchat", username: "ihita93"},{type:"Facebook", username: "ihita"}]
    return (
        <ScrollView style={{color: "#6C8CBC"}}>
        <View style={styles.container}>
        <Text style={styles.title}>{person}</Text>
        <Text style={styles.sectHeader}>Courses</Text>
        <FlatList
            style={{flexGrow: 0}}
            data={courses}
            renderItem = {({item}) => <Text
            style={styles.courses}>{item.code}: {item.name}</Text>} />
        <Text style={styles.sectHeader}>Social Media</Text>
        <FlatList
            style={{flexGrow: 0}}
            data={socialMedia}
            renderItem = {({item}) => <Text
            style={styles.socialMedia}>{item.type}: {item.username}</Text>} />
        <TouchableOpacity >
          <Text style={styles.backButton}>Go Back</Text></TouchableOpacity>
        </View>
        </ScrollView>
    );
}

export default ViewConnection;