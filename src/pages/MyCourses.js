import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const MyCourses = () => {
    const navigation = useNavigation();

    const courses = [{code: "15213", name: "Intro to Computer Systems"}]; //change to user.courses
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>My Courses</Text>
        <TouchableOpacity
          style={styles.submitButton2}
          onPress={() => navigation.navigate('allCourses')}
        >
        <Text style={styles.submitButtonText2}>Add a Course</Text>
        </TouchableOpacity>
        <FlatList
            style={{flexGrow: 0}}
            keyExtractor = {item => item.code} 
            data={courses}
            renderItem = {({item}) => <View style={styles.coursebox}>
                <Text style={styles.course}
                onPress={() => navigation.navigate('course')}
                >{item.code}: {item.name}</Text></View>}  
        />
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={{
            fontSize: 20,
            marginVertical: 20,
            fontWeight: "500",
            paddingBottom: 10,
            color: "cornflowerblue",
          }}>Go Back</Text></TouchableOpacity>
        </View>
    );
}

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
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
  coursebox: {
      backgroundColor: "#37474f",
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 25,
      borderWidth: 1,
      marginHorizontal: 30,
  },
  course: {
      color: "white",     
  },
  submitButton2: {
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 5,
  },
  submitButtonText2: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
  },
});
