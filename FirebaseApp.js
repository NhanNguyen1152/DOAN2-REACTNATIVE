import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
//import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationSreenOptionS, NavigationParams} from 'react-navigation';
import Login from "./Login";
import {StackNavigator} from 'react-navigation';


export default class FirebaseApp extends React.Component {
  state = {
    Email: ' ',
    Lop: ' ',
    Masosinhvien: ' ',
    Ngaysinh: ' ',
    hoten: ' ',
    tam: '',
  };


  data = async () => {
  // const {navigation} = this.props.navigation;
  //  const {tam} =  navigation.getParam('data1');
    //this.getdata();
  const data = await firestore()
      .collection('sinhvien')
      .doc('1800081')
      .get()
      .then(snap => {
        console.log(snap.data())
        this.setState({
          Email: snap.data().Email,
          Lop: snap.data().Lop,
          Masosinhvien: snap.data().Mssv,
          Ngaysinh: snap.data().Ngaysinh,
          hoten: snap.data().Hoten,
        });
      });
  }
  render() {
    // const { navigation } = this.props;
    // tam: navigation.getParam('data1', 'NO-ID');
     this.data;
    return (
      <View>
        <Text> Họ tên: {this.state.hoten} </Text>
        {/* <Text> Ngày sinh: {this.state.Ngaysinh} </Text> */}
        <Text> Mã số sinh vien: {this.state.Masosinhvien} </Text>
        <Text> Lớp: {this.state.Lop} </Text>
        <Text> Email: {this.state.Email} </Text>
      </View>
    );
  }
}
