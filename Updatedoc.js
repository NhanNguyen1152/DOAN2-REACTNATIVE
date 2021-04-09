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

export default class Updatedoc extends Component {
  state = {
    email: ' ',
    lop: ' ',
    mssv: ' ',
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
          email: doc.data().Email,
          lop: doc.data().Lop,
          mssv: doc.data().Mssv,
          // Ngaysinh:  doc.data().Ngaysinh,
          hoten: doc.data().Hoten,
        });
      });
  }
  
  getten = async () => {
    const data = firestore()
      .collection('sinhvien')
      .doc('1800081')
      .get()
      .then(snap => console.log(snap.data()));
  };

  luu = async () => {
    firestore()
  .collection('sinhvien')
  .doc('1800081')
  .update({
    Email: this.state.email,
    Hoten: this.state.hoten,
    Lop: this.state.lop,
    Mssv: this.state.mssv
  })
  .then(() => {
   alert("Thay đổi thành công !")
   const {navigate} = this.props.navigation; 
   navigate('FirebaseApp')
  });
  };

  trolai = async => {
    const {navigate} = this.props.navigation; 
    navigate('FirebaseApp')
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./hinhanh/Thaydoithongtin.png')}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <View style={styles.header}>
            <View style={styles.notthing}></View>
          </View>
          <View style={styles.body}>
            <View style={styles.container_infor}>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Họ Tên: </Text>
                <TextInput style={styles.text_infor}   onChangeText={hoten => this.setState({hoten})}>{this.state.hoten}</TextInput>
              </View>
              {/* <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Ngày Sinh: </Text>
                <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
              </View> */}
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
                <TextInput style={styles.text_infor} editable={false}  onChangeText={mssv => this.setState({mssv})}>{this.state.mssv}</TextInput>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Lớp: </Text>
                <TextInput style={styles.text_infor}   onChangeText={lop => this.setState({lop})}>{this.state.lop}</TextInput>
              </View>
              <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Email: </Text>
                <TextInput style={styles.text_infor}   onChangeText={email => this.setState({email})}>{this.state.email}</TextInput>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.btn_logouts}>
              <TouchableOpacity style={styles.btn_logout} onPress={this.luu}>
                <Text style={{color: 'white'}}>Lưu thông tin</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn_logouts}>
              <TouchableOpacity style={styles.btn_logout} onPress={this.trolai}>
                <Text style={{color: 'white'}}>Trở lại</Text>
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
    backgroundColor: 'white',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 1
  },
  view_infors: {
      flex:1,
    padding: 5,
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
    backgroundColor: 'red'
  },
  btn_logout: {
    elevation: 5,
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  view_uc_pass: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    color: 'grey',
    marginTop: 10,
    fontSize: 18,
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
});
