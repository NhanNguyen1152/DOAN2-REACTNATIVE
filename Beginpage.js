import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationInjectedProps} from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
import {color} from 'react-native-reanimated';

export default class Login extends React.Component {
  //static navigationOptions = {header: null}

  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      email: '',
      pass: '',
      tam: '',
    };
  }

  shoot = async () => {
    const {navigate} = this.props.navigation;
    navigate('Login');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('./hinhanh/TrangBatDau1.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containerlogin}>
            <TouchableOpacity style={styles.button} onPress={this.shoot}>
              <Text>Bắt đầu !</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  containerlogin: {
    marginLeft: 200,
    marginTop: 450
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#27AEEE',
    padding: 10,
    borderRadius: 20,
    marginTop: 150,
  },
  image: {
    flex: 1,
  },
});
