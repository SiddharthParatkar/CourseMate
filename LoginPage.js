import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: '100%',
    
  },
  input: {
    height: 40,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    width: '90%',
    color: "#000",
  }
});

export default class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  }

  render() { //add logo if/when we make one
    return (
      <View style={styles.container}>
        <Text //change color + font
          style={styles.login}>Welcome to CourseMate!
        </Text>
        <TextInput //email validation
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='#000'
          onChangeText={username => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='#000'
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Log in" color='#E7821E'/>
      </View>
    );
  }
}
