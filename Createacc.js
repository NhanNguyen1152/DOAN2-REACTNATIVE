import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {StackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import {color} from 'react-native-reanimated';
import colors from './assets/colors/colors';

const heightS = Dimensions.get('screen').height;

export default class Createacc extends Component {

  state = {
      mssv1: ' ',
      matkhau2: ' ',
      temp3: ' ',
    };
  

  luuthongtin = async () => {
    const {mssv1, matkhau2, temp3} = this.state;
    if (
      this.state.mssv1.trim() &&
      this.state.matkhau2.trim() &&
      this.state.temp3.trim()
    ) {
      if (this.state.matkhau2 == this.state.temp3) {
        const luu = firestore()
          .collection('VerifyLogin').doc(mssv1)
          .set({
            Email: this.state.mssv1,
            Pass: this.state.matkhau2
          })
          .then(() => {
            //console.log('User added!');
            alert('Đăng ký thành công!');
            const {navigate} = this.props.navigation;
            navigate('Insertdoc');
          });
      } else {
        alert('Mật khẩu nhập không đúng !');
      }
    } else {
      alert('Hãy nhập đủ thông tin !');
    }
  };

  trolai = async => {
    const {navigate} = this.props.navigation;
    navigate('Login');
  };

  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('./hinhanh/Themtaikhoan.png')}
        style={{width: '100%', height: heightS, flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.notthing}></View>
          </View>
          <View style={styles.body}>
            <View style={styles.container_infor}>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Mã số sinh viên: </Text>
                <TextInput
                  style={styles.text_infor}
                  onChangeText={mssv1 => this.setState({mssv1})}></TextInput>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Mật khẩu: </Text>
                <TextInput
                  style={styles.text_infor}
                  secureTextEntry={true}
                  onChangeText={matkhau2 =>
                    this.setState({matkhau2})
                  }></TextInput>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}>Xác nhận mật khẩu: </Text>
                <TextInput
                  style={styles.text_infor}
                  secureTextEntry={true}
                  onChangeText={temp3 => this.setState({temp3})}></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.btn_logouts}>
              <TouchableOpacity
                style={styles.btn_logout}
                onPress={this.luuthongtin}>
                <Text style={{color: 'white'}}>Lưu thông tin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_logout} onPress={this.trolai}>
                <Text style={{color: 'white'}}>Trở lại</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.btn_logouts}>
              <TouchableOpacity style={styles.btn_logout} onPress={this.trolai}>
                <Text style={{color: 'white'}}>Trở lại</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 5,
    //backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flex: 1.2,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    marginBottom: 1,
  },
  body: {
    flex: 3,
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    borderRadius: 10,
    marginTop: 1,
  },
  notthing: {
    flex: 1,
  },
  avatar: {
    flex: 1,
  },
  tinyLogo: {
    resizeMode: 'contain',
    width: 135,
    height: 155,
    marginLeft: 30,
  },
  container_infor: {
    flex: 0.7,
    //margin: 25,
    backgroundColor: 'white',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
  },
  view_infors: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    flexDirection: 'row',
    //backgroundColor: 'red'
  },
  title_infor: {
    fontSize: 18,
    textAlign: 'left',
    borderBottomWidth: 0.5,
    fontFamily: 'Tinos-Bold',
    marginTop: 10,
    fontSize: 18,
  },
  text_infor: {
    flex: 1,
    fontSize: 17,
    textAlign: 'right',
    borderBottomWidth: 0.5,
    fontFamily: 'Tinos-Regular',
  },
  btn_logouts: {
    flexDirection: 'row-reverse',
    padding: 25,
    //backgroundColor: 'red',
  },
  btn_logout: {
    elevation: 5,
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor:'red'
  },
  // view_uc_pass: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 10,
  // },
  // textInput: {
  //   flex: 1,
  //   textAlign: 'center',
  //   color: 'grey',
  //   marginTop: 10,
  //   fontSize: 18,
  //   height: 40,
  //   borderColor: '#000000',
  //   borderBottomWidth: 1,
  // },
});
