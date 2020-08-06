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

  const courses = [{id: 15213, name: "Intro to Computer Systems"}] //change this to user.courses

  const [about, setAbout] = useState('Hello. My name is David Lyons.');
  const [social, setSocial] = useState([{format: "YouTube", account: "DLPikachu8000", id: 0}]);
  const [len, incr] = useState(1);

  const addSocial = (type, elem) => {
    const newArr = social;
    const newIdx = newArr.push({format: type, account: elem, id: len});
    incr(newIdx);
    setSocial(newArr);
    //add database stuff to update the user's data
  }

  const deleteSocial = (id) => {
    const newArr = social.filter((item) => item.id !== id);
    setSocial(newArr);
  }
  

  const [tempFormat, setTempFormat] = useState('');
  const [tempAcct, setTempAcct] = useState('');

    return (
        <ScrollView style={{backgroundColor: "#4b636e"}}>
        <View style={styles.container}>
        <Text style={styles.title}>David Lyons</Text>
        <Text style={styles.email}>dalyons@andrew.cmu.edu</Text>
        <Text style={styles.sectHeader}>Contact Info</Text>
        <FlatList
            style={{flexGrow: 0}}
            keyExtractor = {item => item.format} 
            data={social}
            renderItem = {({item}) => 
              <Text onPress={() => {Alert.alert(
                item.format + ": " + item.account + " selected",
                "What would you like to do?",
                [{
                  text: 'Nothing',
                  onPress: () => {}
                },
                {
                  text: 'Delete',
                  onPress: () => deleteSocial(item.id),
                  style: 'cancel'
                }]
              )}}
              style={styles.contactInfo}>{item.format}: {item.account}</Text>
            }/>
        <TextInput
          style={styles.input}
          placeholder="Twitter, Facebook, etc."
          placeholderTextColor="#fff"
          returnKeyType="next"
          keyboardType="email-address"
          onChangeText={setTempFormat}
          autoCapitalize="none"
          autoCorrect={false}
          value={tempFormat}
        />
        <TextInput
          style={styles.input}
          placeholder="@your_name, etc."
          placeholderTextColor="#fff"
          returnKeyType="go"
          autoCapitalize="none"
          onChangeText={setTempAcct}
          value={tempAcct}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => addSocial(tempFormat, tempAcct)}
        >
        <Text style={styles.submitButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.sectHeader}>About Me</Text>
        <TextInput
          style={styles.input2}
          placeholderTextColor="#fff"
          returnKeyType="next"
          onChangeText={setAbout}
          autoCapitalize="none"
          multiline={true}
          autoCorrect={false}
          value={about}
        />
        <TouchableOpacity
          style={styles.submitButton2}
          onPress={() => {}}//create an actual function that saves this info to the database
        >
        <Text style={styles.submitButtonText2}>Save Changes</Text>
        </TouchableOpacity>
        <Text style={styles.sectHeader}>Courses</Text>
        <FlatList
            style={{flexGrow: 0}}
            keyExtractor = {item => item.format} 
            data={courses}
            renderItem = {({item}) => <Text style={styles.contactInfo}>{item.id}: {item.name}</Text>} />
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
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