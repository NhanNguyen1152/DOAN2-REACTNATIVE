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
  TouchableOpacity,
} from 'react-native';
//import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {StackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import {color} from 'react-native-reanimated';
import colors from './assets/colors/colors';

export default class FirebaseApp extends Component {
  state = {
    Email: ' ',
    Lop: ' ',
    Masosinhvien: ' ',
    Ngaysinh: ' ',
    hoten: ' ',
  };
  constructor(props) {
    super(props);
    this.getten();
    this.subscriber = firestore()
      .collection('sinhvien')
      .doc('1800081')
      .onSnapshot(doc => {
        this.setState({
          Email: doc.data().Email,
          Lop: doc.data().Lop,
          Masosinhvien: doc.data().Mssv,
          // Ngaysinh:  doc.data().Ngaysinh,
          hoten: doc.data().Hoten,
        });
      });
  }
  
  chinhsua = async () => {
    const {navigate} = this.props.navigation; 
    navigate('Updatedoc');
  };

  getten = async () => {
    const data = firestore()
      .collection('sinhvien')
      .doc('1800081')
      .get()
      .then(snap => console.log(snap.data()));
  };

  dangxuat = async () => {
    const {navigate} = this.props.navigation; 
    navigate('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/backgrounds/TrangThongTinCaNhan111.png')}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <View style={styles.header}>
            <View style={styles.notthing}></View>
            <View style={styles.avatar}>
              <Image
                style={styles.tinyLogo}
                source={require('./assets/imgs/anhthe.png')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.container_infor}>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Họ Tên: </Text>
                <Text style={styles.text_infor}>{this.state.hoten}</Text>
              </View>
              {/* <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Ngày Sinh: </Text>
                <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
              </View> */}
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
                <Text style={styles.text_infor}>{this.state.Masosinhvien}</Text>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Lớp: </Text>
                <Text style={styles.text_infor}>{this.state.Lop}</Text>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Email: </Text>
                <Text style={styles.text_infor}>{this.state.Email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.btn_logouts}>
              <TouchableOpacity style={styles.btn_logout} onPress={this.dangxuat}>
                <Text style={{color: 'white'}}>Đăng Xuất</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn_logouts}>
              <TouchableOpacity style={styles.btn_logout} onPress={this.chinhsua}>
                <Text style={{color: 'white'}}>Sửa thông tin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
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
    flex: 1,
    margin: 25,
   // backgroundColor: 'black',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
    justifyContent: 'center',
  },
  view_infors: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    flexDirection: 'row',
  },
  title_infor: {
    fontSize: 18,
    textAlign: 'left',
    borderBottomWidth: 0.5,
    fontFamily: 'Tinos-Bold',
  },
  text_infor: {
    fontSize: 17,
    textAlign: 'right',
    borderBottomWidth: 0.5,
    fontFamily: 'Tinos-Regular',
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
});
