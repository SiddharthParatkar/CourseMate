import { StatusBar } from "expo-status-bar";
import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";

import LoginPage from "./src/pages/LoginPage";
import Signup from "./src/pages/Signup";
import HomePage from "./src/pages/HomePage";
import Profile from "./src/pages/Profile";
import AllCourses from "./src/pages/AllCourses";
import MyCourses from "./src/pages/MyCourses";
import Course from "./src/pages/Course";
import ProfileAnon from "./src/pages/ProfileAnon";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="courses" component={MyCourses} />
        <Stack.Screen name="course" component={Course} />
        <Stack.Screen name="allCourses" component={AllCourses} />
        <Stack.Screen name="publicProfile" component={ProfileAnon} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b636e",
    alignItems: "center",
    justifyContent: "center",
  },
});
