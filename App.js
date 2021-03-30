//import * as React from 'react';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirebaseApp from './FirebaseApp';
import Login from './Login';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FirebaseApp" component={FirebaseApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
