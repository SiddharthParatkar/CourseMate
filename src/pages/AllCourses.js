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
import { SearchBar } from 'react-native-elements';

const AllCourses = () => {
    const navigation = useNavigation();

    const courses = [{code: "15213", name: "Intro to Computer Systems"}, 
                    {code: "15251", name: "Great Ideas in Theoretical Computer Science"}, 
                    {code: "15210", name: "Parallel and Sequential Data Structures"}]; //fill with all CMU courses but then .filter(not in user.courses)
    
    const [currCourses, setCourse] = useState(courses);
    const [search, updateSearch] = useState('');

    searchFilterFunction = (text) => {    
        const newData = courses.filter(item => {      
            const itemData = item.code + item.name.toUpperCase();
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setCourse(newData);
    }
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Add a Course</Text>
        <TouchableOpacity onPress={() => navigation.navigate('courses')}>
        <Text style={{
            fontSize: 20,
            marginVertical: 20,
            color: "cornflowerblue",
        }}>Go Back</Text></TouchableOpacity>
        <SearchBar
                searchIcon={{ size: 15 }} 
                inputStyle={{paddingHorizontal: 10}}
                containerStyle={{backgroundColor: '#37474f', width: "100%",}}
                placeholder="Search by number or name"              
                round        
                onChangeText={(text) => {updateSearch(text); searchFilterFunction(text)}}
                autoCorrect={false}       
                value={search}      
            />
        <FlatList
            keyExtractor = {item => item.code} 
            data={currCourses}
            renderItem = {({item}) => <View style={styles.coursebox}>
                <Text style={styles.course}
                onPress={() => {Alert.alert('Course Added')}}//add to user.courses in the database
                >{item.code}: {item.name}</Text></View>}   
        />
        </View>
    );
}

export default AllCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
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
});
