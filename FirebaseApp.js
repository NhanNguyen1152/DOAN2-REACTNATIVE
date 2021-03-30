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

  //const data1 = {route.}
  data() {
    this.getdata();
    firestore()
      .collection('sinhvien')
      .doc(this.state.tam)
      .get()
      .then(snap => {
        console.log(snap.data());
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
    const {navigation} = this.props;
    const user_name = navigation.getParam('data1');
    this.data();
    return (
      <View>
        <Text> Họ tên: {this.state.hoten} </Text>
        {/* <Text> Ngày sinh: {this.state.Ngaysinh} </Text> */}
        <Text> Mã số sinh vien: {this.state.Masosinhvien} </Text>
        <Text> Lớp: {this.state.Lop} </Text>
        <Text> Email: {this.state.Email} </Text>
        <Text style={styles.textStyle}>
          User Name: {JSON.stringify(user_name)}
        </Text>
      </View>
    );
  }
}
