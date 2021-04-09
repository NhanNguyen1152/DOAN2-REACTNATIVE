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
  ImageBackground, Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationInjectedProps} from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
import {color} from 'react-native-reanimated';

const heightS = Dimensions.get("screen").height;

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
    //const {navigate} = this.props.navigation; 
    const {Username, Password, email, pass} = this.state;
    if (this.state.Username.trim() && this.state.Password.trim()) {
      const data = await firestore()
        .collection('VerifyLogin')
        .doc(Username)
        .get()
        .then(snap => {
          console.log(snap.data());
          this.setState({
            email: snap.data().Email,
            pass: snap.data().Pass,
          });
        });
      // if(this.state.Username != null && this.state.Password != null){
      if (
        this.state.Username === this.state.email &&
        this.state.Password === this.state.pass
      ) {
        alert('Dang nhap thanh cong');
        const {navigate} = this.props.navigation;
        navigate('FirebaseApp');
        //console.log("thanh cong");
      } else {
        alert('Sai ten dang nhap hoac mat khau');
      }
    } else {
      alert('Xin nhap du thong tin');
    }
  };

  taomoi = async =>{
    const {navigate} = this.props.navigation; 
    navigate('Createacc');
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
        resizeMode= 'cover'
        source={require('./hinhanh/TrangDangNhap6.png')} 
        style={{width:'100%', height:heightS, flex:1}}>
        <View style={styles.container}>
            <View style={styles.containerlogin}>
              <View style={styles.view_uc_pass}>
                <Image
                  style={styles.searchIcon}
                  source={require('./hinhanh/iconusername.png')}
                />
                <TextInput
                  value={this.state.Username}
                  placeholder="Tài khoản"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  onChangeText={Username => this.setState({Username})}
                />
              </View>
              <View style={styles.view_uc_pass}>
                <Image
                  style={styles.searchIcon}
                  source={require('./hinhanh/iconpassword.png')}
                />
                <TextInput
                  value={this.state.Password}
                  placeholder="Mật khẩu"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  secureTextEntry={true}
                  onChangeText={Password => this.setState({Password})}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={this.shoot}>
                  <Text>Đăng nhập</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text  style={styles.forget}>
                  {'Quên mật khẩu'}
                </Text>
                <Text  style={styles.forget} onPress={this.taomoi}>
                  {'Thêm tài khoản'}
                </Text>
              </View>
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
    flex: 0.5,
    paddingHorizontal: 10,
    marginTop: 340,
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
  searchIcon: {
    padding: 10,
    margin: 0,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#27AEEE',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    elevation: 5,
  },
  textclick: {
    alignItems: 'flex-end',
    backgroundColor: '#27AEEE',
    padding: 15,
    marginTop: 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  forget: {
    textAlign: 'right',
    color: '#AAA',
    fontSize: 21,
    marginTop: 5,
  },
  copy: {
    textAlign: 'center',
    fontSize: 15,
    color: 'red',
  },
});
