//import * as React from 'react';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirebaseApp from "./FirebaseApp";
import Login from "./Login";
import Login2 from "./Login2";
import Beginpage from "./Beginpage"
// import {Provider} from 'react-redux';
// import store from "./src/redux/store";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= 'none' initialRouteName="Beginpage" >
        <Stack.Screen name="Beginpage" component={Beginpage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FirebaseApp" component={FirebaseApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
