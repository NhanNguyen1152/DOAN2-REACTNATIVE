import React from 'react';
import {StackNavigation} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';
import {Login} from './Login';


const Stack = createStackNavigation();
export default function LoginStack() {
  return(
    <NavigationContainer>
    <StackNavigation>
      <Stack.Sreen 
      name = "Logins"
      component = {Login}
      />
    </StackNavigation>
    </NavigationContainer>
  )

}