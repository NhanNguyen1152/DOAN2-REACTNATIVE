import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirebaseApp from "./FirebaseApp";
import Login from "./Login";
import Beginpage from "./Beginpage"
import Updatedoc from "./Updatedoc"
import Createacc from "./Createacc"
import Insertdoc from "./Insertdoc"

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= 'none' initialRouteName="Login" >
        <Stack.Screen name="Beginpage" component={Beginpage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FirebaseApp" component={FirebaseApp} />
        <Stack.Screen name="Updatedoc" component={Updatedoc} />
        <Stack.Screen name="Createacc" component={Createacc} />
        <Stack.Screen name="Insertdoc" component={Insertdoc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
