import React, {Component, useState} from 'react';
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
  TouchableOpacity,
} from 'react-native';
//import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-community/picker';
import {StackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import {color} from 'react-native-reanimated';
import colors from './assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Choose() {

  const [hocki, sethocki ] = useState('');
  const [nienkhoa, setnienkhoa] = useState('');

  taohk = async () => {
    const tao = await firestore()
    .collection('bangdiem').doc(mssv1)
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
  }

  chamdiem = async () => {
    const {navigate} = this.props.navigation;
    navigate('Chamdiem');
  };
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/backgrounds/infor.png')}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <View style={styles.header}>
            <View style={styles.notthing}>
              <View style={{marginTop: 100}}>
                <Text style={styles.title_header}> Xin Chào ! </Text>
              </View>
              <View
                style={{
                  marginTop: 7,
                  marginLeft: 30,
                  backgroundColor: colors.background_btn_icon,
                  borderRadius: 9,
                  padding: 1,
                }}>
                {/* <Text style={styles.title_headers}>{this.state.hoten}</Text> */}
              </View>
            </View>
            <View style={styles.avatar}>
              <Image
                style={styles.tinyLogo}
                source={require('./assets/logo/Đại_học_Kỹ_thuật_-_Công_nghệ_Cần_Thơ.png')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.container_infor}>
            {/* <View> <TextInput
                  style={styles.text_infor}
                  onChangeText={mssv1 => this.setState({mssv1})}></TextInput>
            </View> */}
            <View>
              <Picker
                selectedValue={hocki}
                style={{height: 50, width: 100}}
                onValueChange={hocki => sethocki(hocki)}>
                <Picker.Item label="HK1" value="HK1" />
                <Picker.Item label="HK2" value="HK2" />
              </Picker>
              </View>
              <View>
              <Picker
                selectedValue={nienkhoa}
                style={{height: 50, width: 129}}
                onValueChange={nienkhoa => setnienkhoa(nienkhoa)}>
                <Picker.Item label="2020-2021" value="2020-2021" />
                <Picker.Item label="2021-2022" value="2021-2022" />
                {/* <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" /> */}
              </Picker>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.btn_logouts}>
              <TouchableOpacity
                style={styles.btn_logout}
                onPress={chamdiem}>
                <Text style={{color: 'white'}}>Bắt đầu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 5,
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
    // backgroundColor: 'red'
  },
  title_header: {
    fontSize: 30,
    fontFamily: 'Tinos-Bold',
    marginLeft: 5,
  },
  title_headers: {
    fontSize: 15,
    fontFamily: 'Tinos-Italic',
    margin: 5,
  },
  avatar: {
    flex: 1,
  },
  tinyLogo: {
    resizeMode: 'contain',
    width: 135,
    height: 155,
    marginLeft: 25,
  },
  container_infor: {
    flex: 1,
    margin: 25,
    backgroundColor: 'white',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
    justifyContent: 'center',
  },
  view_inforss: {
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: colors.background_btn_icon,
    // justifyContent: 'center'
  },
  view_infors: {
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: colors.background_btn_icon,
    // justifyContent: 'center'
  },
  title_infor: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Tinos-Bold',
    marginLeft: 10,
  },
  btn_infor: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn_icon: {
    fontSize: 20,
    marginLeft: 10,
  },
  btn_logouts: {
    flexDirection: 'row-reverse',
    padding: 25,
  },
  btn_logout: {
    elevation: 5,
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text_infor: {
    fontSize: 17,
    textAlign: 'left',
    borderBottomWidth: 0.5,
    fontFamily: 'Tinos-Regular',
  },
});
