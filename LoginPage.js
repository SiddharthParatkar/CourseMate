import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 50,
    fontWeight: "bold",
  },
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  }
});

export default class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput 
          style={styles.input}
          placeholder="Username"
          onChangeText={username => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Log in"/>
      </View>
    );
  }
}