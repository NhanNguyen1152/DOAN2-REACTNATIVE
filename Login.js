import React, {Component, useState, useEffect} from 'react';
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
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth, {firebase} from '@react-native-firebase/auth';
import {StackNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationInjectedProps} from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
import {color} from 'react-native-reanimated';
import {  useSelector, useDispatch, connect } from 'react-redux';
import store from './reducers/fetchreducer';
import { fetchdata } from './action/actioncreator';


const heightS = Dimensions.get('screen').height;

function Taomoi({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() => navigation.navigate(screenName)}>
      <Text style={styles.signup}>Tạo mới</Text>
      {/* <AntDesign name="setting" /> */}
    </TouchableOpacity>
  );
}

function mapStateToProps(state) {
  return { }
}

export default function Login(props) {
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [Email, setEmail] = useState('');
  const [Lop, setLop] = useState('');
  const [Masosinhvien, setMasosinhvien] = useState('');
  //const [Ngaysinh, setNgaysinh] = useState('');
  const [hoten, sethoten] = useState('');
  const themdulieu1 = props.themdulieu1;
  const themdulieu2 = props.themdulieu2;
  const themdulieu3 = props.themdulieu3;
  const themdulieu4 = props.themdulieu4;
  const navigation = useNavigation();
  
  const __doLogin = async () => {
    if (email.trim() && password.trim()) {
      return await  __doSingIn(email, password);
    } else {
     alert('Xin nhap du thong tin');
    }
  };

  const __doSingIn = async (email, password) => {
     try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        alert('Đăng nhập thành công !')

        // useEffect(() => {
        //   firestore()
        //     .collection('sinhvien')
        //     .doc('1800081')
        //     .get()
        //     .then(snap => console.log(snap.data()));
        //   this.subscriber = firestore()
        //     .collection('sinhvien')
        //     .doc('1800081')
        //     .onSnapshot(doc => {
        //       setEmail(doc.data().Email),
        //         setLop(doc.data().Lop),
        //         setMasosinhvien(doc.data().Mssv),
        //         // Ngaysinh:  doc.data().Ngaysinh,
        //         sethoten(doc.data().Hoten);
        //     });
        // }, []);

        // useEffect(() => {        
        //     themdulieu1(Email),
        //     themdulieu2(Lop),
        //     themdulieu3(Masosinhvien),
        //     themdulieu4(hoten)
        // }, []);

        return await navigation.navigate('FirebaseApp');
      }
    } catch (e) {
      // console.error(e.message);
      alert('Sai mật khẩu !')
    }
  };


  return (
    <ImageBackground
      resizeMode="cover"
      source={require('./hinhanh/TrangDangNhap6.png')}
      style={{width: '100%', height: heightS, flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerlogin}>
          <View style={styles.view_uc_pass}>
            <Image
              style={styles.searchIcon}
              source={require('./hinhanh/iconusername.png')}
            />
            <TextInput
              placeholder="Tài khoản"
              placeholderTextColor="grey"
              style={styles.textInput}
              onChangeText={email => setemail(email)}
            />
          </View>
          <View style={styles.view_uc_pass}>
            <Image
              style={styles.searchIcon}
              source={require('./hinhanh/iconpassword.png')}
            />
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="grey"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={password => setpassword(password)}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={__doLogin}>
              <Text style={{color: 'white'}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.forget}>{'Quên mật khẩu ?'}</Text>
          </View>
          <View>
            <Taomoi screenName="Createacc" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
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
    borderRadius: 25,
    marginTop: 20,
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
    fontSize: 15,
    marginTop: 15,
    color: 'red',
  },
  signup: {
    textAlign: 'right',
    color: '#AAA',
    fontSize: 15,
    marginTop: 15,
    color: 'red',
  },
  copy: {
    textAlign: 'center',
    fontSize: 15,
    color: 'red',
  },
});

//action 
// const themdulieu = (mail, classs, id, nname) => {
//   return {
//     type: 'FETCH_DATA',
//     Email: mail,
//     Lop: classs,
//     Masosinhvien: id,
//     hoten: nname
//   }
// } 

// export default connect(
//   state => {
//     return {

//     }
//   },
//   dispatch => {
//     return {
//       onthemdulieu1: (mail) => dispatch(themdulieu1(mail)),
//       onthemdulieu2: (classs) => dispatch(themdulieu2(classs)),
//       onthemdulieu3: (id) => dispatch(themdulieu3(id)),
//       onthemdulieu4: (nname) => dispatch(themdulieu4(nname))
//     }
//   }
// )(Login); 

  //const [pass, setpass] = useState('');

  // shoot = async () => {
  //   //const { Username, Password, email, pass } = Username;
  //   if (Username.trim() && Password.trim()) {
  //     const data = await firestore()
  //       .collection('VerifyLogin')
  //       .doc(Username)
  //       .get()
  //       .then(snap => {
  //         console.log(snap.data()),
  //           setemail(snap.data().Email),
  //           setpass(snap.data().Pass);
  //       });

  //     // this.subscriber = firestore()
  //     // .collection('VerifyLogin')
  //     // .doc(Username)
  //     // .onSnapshot(doc => {

  //     // })
  //     // setemail: snap.data().Email,
  //     // setpass: snap.data().Pass,

  //     if (Username === email && Password === pass) {
  //       alert('Dang nhap thanh cong');
  //       const {navigate} = this.props.navigation;
  //       navigate('Infor');
  //       //console.log("thanh cong");
  //     } else {
  //       alert('Sai ten dang nhap hoac mat khau');
  //     }
  //   } else {
  //     alert('Xin nhap du thong tin');
  //   }
  // };

  // taomoi = async => {
  //   const { navigate } = this.props.navigation;
  //   navigate('Createacc');
  // }

  // const { navigate } = this.props.navigation;

  // const __doSignUp = () => {
  //   if (!email) {
  //     setError("Email required *")
  //     setValid(false)
  //     return
  //   } else if (!password && password.trim() && password.length > 6) {
  //     setError("Weak password, minimum 5 chars")
  //     setValid(false)
  //     return
  //   } else if (!__isValidEmail(email)) {
  //     setError("Invalid Email")
  //     setValid(false)
  //     return
  //   }

  //   __doCreateUser(email, password)
  // }

  // const __doCreateUser = async (email, password) => {
  //   try {
  //     let response = await auth().createUserWithEmailAndPassword(email, password)
  //     if (response) {
  //       console.log(tag, "?", response)
  //     }
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }