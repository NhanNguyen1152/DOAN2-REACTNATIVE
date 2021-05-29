import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { actions , store } from './src';
import {  useSelector, useDispatch, connect } from 'react-redux';

function GoToButton({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() => navigation.navigate(screenName)}>  
      <Text style={{color: 'white'}}>
        <AntDesign name="setting" />
      </Text>
    </TouchableOpacity>
  );
}

function Dangxuat({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() => navigation.navigate(screenName)}>
      <Text style={styles.text_btn}>Đăng Xuất</Text>
      {/* <AntDesign name="setting" /> */}
    </TouchableOpacity>
  );
}

 function FirebaseApp(props) {
  // const [Email, setEmail] = useState('');
  // const [Lop, setLop] = useState('');
  // const [Masosinhvien, setMasosinhvien] = useState('');
  // //const [Ngaysinh, setNgaysinh] = useState('');
  // const [hoten, sethoten] = useState('');

  // const dispatch = useDispatch();

  // const number = useSelector((state) => state.count);

  // const incrementClicked = () => {
  //   dispatch(increment());
  // }

  // const decrementClicked = () => {
  //   dispatch(decrement())
  // }

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
            <View style={styles.btn_edit}>
              <GoToButton screenName="Updatedoc" />
            </View>
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Họ Tên: </Text>
              {/* <Text style={styles.text_infor}>{hoten}</Text> */}
            </View>
            {/* <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Ngày Sinh: </Text>
                <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
              </View> */}
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
              {/* <Text style={styles.title_infor}>{props.Masosinhvien}</Text> */}
              <FlatList 
                  data={props.state}
                  renderItem={({ item }) => <Text>{item.masosinhvien}</Text>}
                  keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Lớp: </Text>
              {/* <Text style={styles.text_infor}>{Lop}</Text> */}
            </View>
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Email: </Text>
              {/* <Text style={styles.text_infor}>{Email}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.view_btn}>
            <Dangxuat screenName="Login" />
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
    backgroundColor: 'white',
  },
  btn_edit: {
    marginTop: -30,
    flexDirection: 'row-reverse',
  },
  view_infors: {
    borderWidth: 0.1,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginTop: 20,
  },
  title_infor: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Tinos-Bold',
  },
  text_infor: {
    fontSize: 17,
    textAlign: 'right',
    fontFamily: 'Tinos-Regular',
  },
  view_btn: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 10,
  },
  btn_logout: {
    elevation: 5,
    backgroundColor: colors.button,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  text_btn: {
    fontFamily: 'Tinos-Regular',
    color: 'azure',
    fontSize: 17,
  },
})


// function map(state) {
//   return {
//     giatri: state.data
//   };
// }
// export default connect(map)(FirebaseApp);
const mapStateToProps = (state) => {
  return {
      state: state.data
  }
};

export default connect(mapStateToProps)(FirebaseApp);

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// //import { View, Text, Button } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import {StackNavigator} from 'react-navigation';
// import {create} from 'react-test-renderer';
// import {color} from 'react-native-reanimated';
// import colors from './assets/colors/colors';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default class FirebaseApp extends Component {
//   state = {
//     Email: ' ',
//     Lop: ' ',
//     Masosinhvien: ' ',
//     Ngaysinh: ' ',
//     hoten: ' ',
//   };
//   constructor(props) {
//     super(props);
//     this.getten();
//     this.subscriber = firestore()
//       .collection('sinhvien')
//       .doc('1800081')
//       .onSnapshot(doc => {
//         this.setState({
//           Email: doc.data().Email,
//           Lop: doc.data().Lop,
//           Masosinhvien: doc.data().Mssv,
//           // Ngaysinh:  doc.data().Ngaysinh,
//           hoten: doc.data().Hoten,
//         });
//       });
//   }

//   chinhsua = async () => {
//     const {navigate} = this.props.navigation;
//     navigate('Updatedoc');
//   };

//   getten = async () => {
//     const data = firestore()
//       .collection('sinhvien')
//       .doc('1800081')
//       .get()
//       .then(snap => console.log(snap.data()));
//   };

//   dangxuat = async () => {
//     const {navigate} = this.props.navigation;
//     navigate('Login');
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageBackground
//           source={require('./assets/backgrounds/TrangThongTinCaNhan111.png')}
//           style={styles.image}
//           imageStyle={{borderRadius: 15}}>
//           <View style={styles.header}>
//             <View style={styles.notthing}></View>
//             <View style={styles.avatar}>
//               <Image
//                 style={styles.tinyLogo}
//                 source={require('./assets/imgs/anhthe.png')}
//               />
//             </View>
//           </View>
//           <View style={styles.body}>
//             <View style={styles.container_infor}>
//             <View style={styles.btn_edit}>
//               <TouchableOpacity style={styles.btn_logout} onPress={this.chinhsua}>
//                 <Text style={{color: 'white'}}><AntDesign name="setting"/></Text>
//               </TouchableOpacity>
//             </View>
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Họ Tên: </Text>
//                 <Text style={styles.text_infor}>{this.state.hoten}</Text>
//               </View>
//               {/* <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Ngày Sinh: </Text>
//                 <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
//               </View> */}
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
//                 <Text style={styles.text_infor}>{this.state.Masosinhvien}</Text>
//               </View>
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Lớp: </Text>
//                 <Text style={styles.text_infor}>{this.state.Lop}</Text>
//               </View>
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Email: </Text>
//                 <Text style={styles.text_infor}>{this.state.Email}</Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.footer}>
//             <View style={styles.view_btn}>
//               <TouchableOpacity style={styles.btn_logout} onPress={this.dangxuat}>
//                 <Text style={styles.text_btn}>Đăng Xuất</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     borderRadius: 15,
//     paddingVertical: 5,
//     //backgroundColor: 'yellow',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   header: {
//     flex: 1.2,
//     flexDirection: 'row',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 1,
//   },
//   body: {
//     flex: 3,
//     borderRadius: 10,
//   },
//   footer: {
//     flex: 1,
//     borderRadius: 10,
//     marginTop: 1,
//   },
//   notthing: {
//     flex: 1,
//   },
//   avatar: {
//     flex: 1,
//   },
//   tinyLogo: {
//     resizeMode: 'contain',
//     width: 135,
//     height: 155,
//     marginLeft: 30,
//   },
//   container_infor: {
//     flex: 1,
//     margin: 25,
//     backgroundColor: 'white',
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 12},
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,
//     elevation: 24,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   btn_edit: {
//     marginTop: -30,
//     flexDirection: 'row-reverse'

//   },
//   view_infors: {
//     borderWidth: 0.1,
//     borderRadius: 10,
//     padding: 10,
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   title_infor: {
//     fontSize: 18,
//     textAlign: 'left',
//     fontFamily: 'Tinos-Bold',
//   },
//   text_infor: {
//     fontSize: 17,
//     textAlign: 'right',
//     fontFamily: 'Tinos-Regular',
//   },
//   view_btn: {
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//     padding: 15,
//     marginHorizontal:10
//   },
//   btn_logout: {
//     elevation: 5,
//     backgroundColor: colors.button,
//     borderRadius: 50,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     textAlign: 'center',
//   },
//   text_btn: {
//     fontFamily: 'Tinos-Regular',
//     color: 'azure',
//     fontSize: 17
//   }

// });
