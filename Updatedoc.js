import React, {Component, useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {StackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import {color} from 'react-native-reanimated';
import colors from './assets/colors/colors';
import HOTEN from './component/HOTEN';
// import stores from './reducers/stores';
import {useSelector, useDispatch, connect} from 'react-redux';
import {Provider} from 'react-redux';

function Luu({emeo}) {
  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() =>
        firestore()
          .collection('sinhvien')
          .doc('1800081')
          .update({
            Email: emeo,
            // Hoten: this.state.hoten,
            // Lop: this.state.lop,
            // Mssv: this.state.mssv
          })
          .then(() => {
            alert('Thay đổi thành công !');
          })
      }>
      <Text style={styles.text_btn}>Lưu thông tin</Text>
    </TouchableOpacity>
  );
}

function GoToButton({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() => navigation.navigate(screenName)}>
      <Text style={styles.text_btn}>Trở lại</Text>
    </TouchableOpacity>
  );
}

function Updatedoc(props) {
  const [email, setemail] = useState('');
  const [lop, setlop] = useState('');
  const [mssv, setmssv] = useState('');
  //const [Ngaysinh, setNgaysinh] = useState('');
  const [hoten, sethoten] = useState('');

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
  //       setemail(doc.data().Email),
  //         setlop(doc.data().Lop),
  //         setmssv(doc.data().Mssv),
  //         // Ngaysinh:  doc.data().Ngaysinh,
  //         sethoten(doc.data().Hoten);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/backgrounds/thaytt.png')}
        style={styles.image}
        imageStyle={{borderRadius: 15, resizeMode: 'stretch'}}>
        <View style={styles.header}>
          <View style={styles.notthing}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.container_infor}>
            {/* <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
              <Text style={styles.text_infor}>{mssv}</Text>
            </View> */}
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Họ Tên:</Text>
              <Text style={styles.text_infor}>{hoten}</Text>
            </View>
            {/* <View style={styles.view_infors}>
                <Text style={styles.title_infor}> Ngày Sinh: </Text>
                <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
              </View> */}
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Ngày Sinh: </Text>
              <FlatList
                data={props.giatri}
                renderItem={({item}) => <Text>{item.Ngaysinh}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
                {/* <Text style={styles.text_infor}>{item.Ngaysinh}</Text> */}
            </View>
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Lớp: </Text>
              <Text style={styles.text_infor}>{lop}</Text>
            </View>
            <View style={styles.view_infors}>
              <Text style={styles.title_infor}> Email: </Text>
              <TextInput
                style={styles.text_infor}
                onChangeText={email => setemail(email)}
                defaultValue={email}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.view_btn}>
            <Luu emeo={email} />
            {/* <GoToButton screenName={'stores'} /> */}
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
    justifyContent: 'center',

    //backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
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
    marginTop: 1,
  },
  view_infors: {
    flex: 1,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    flexBasis: 1,
  },
  title_infor: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Tinos-Bold',
  },
  text_infor: {
    fontSize: 17,
    textAlign: 'left',
    borderBottomWidth: 0.5,
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
});

// function map(state) {
//   return {
//     tasks: state.data,
//   };
// }
// export default connect(map)(Updatedoc);

// const map = (state) => {
//   const { tasks } = state
//   return { tasks }
// };

// export default connect(map)(Updatedoc);
const mapStateToProps = (state) => {
  return {
      giatri: state.data
  }
};

export default connect(mapStateToProps)(Updatedoc);

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

// export default class Updatedoc extends Component {
//   state = {
//     email: ' ',
//     lop: ' ',
//     mssv: ' ',
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
//           email: doc.data().Email,
//           lop: doc.data().Lop,
//           mssv: doc.data().Mssv,
//           // Ngaysinh:  doc.data().Ngaysinh,
//           hoten: doc.data().Hoten,
//         });
//       });
//   }

//   getten = async () => {
//     const data = firestore()
//       .collection('sinhvien')
//       .doc('1800081')
//       .get()
//       .then(snap => console.log(snap.data()));
//   };

//   luu = async () => {
//     firestore()
//   .collection('sinhvien')
//   .doc('1800081')
//   .update({
//     Email: this.state.email,
//     Hoten: this.state.hoten,
//     Lop: this.state.lop,
//     Mssv: this.state.mssv
//   })
//   .then(() => {
//    alert("Thay đổi thành công !")
//    const {navigate} = this.props.navigation;
//    navigate('FirebaseApp')
//   });
//   };

//   trolai = async => {
//     const {navigate} = this.props.navigation;
//     navigate('FirebaseApp')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageBackground
//           source={require('./assets/backgrounds/thaytt.png')}
//           style={styles.image}
//           imageStyle={{borderRadius: 15, resizeMode: 'stretch'}}>
//           <View style={styles.header}>
//             <View style={styles.notthing}></View>
//           </View>
//           <View style={styles.body}>
//             <View style={styles.container_infor}>
//             <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Mã Số Sinh Viên: </Text>
//                 <TextInput style={styles.text_infor} editable={false}  onChangeText={mssv => this.setState({mssv})}>{this.state.mssv}</TextInput>
//               </View>
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Họ Tên:</Text>
//                 <TextInput style={styles.text_infor} label="full name" onChangeText={hoten => this.setState({hoten})}>{this.state.hoten}</TextInput>
//               </View>
//               {/* <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Ngày Sinh: </Text>
//                 <Text style={styles.text_infor}>{this.state.Ngaysinh}</Text>
//               </View> */}
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Lớp: </Text>
//                 <TextInput style={styles.text_infor}   onChangeText={lop => this.setState({lop})}>{this.state.lop}</TextInput>
//               </View>
//               <View style={styles.view_infors}>
//                 <Text style={styles.title_infor}> Email: </Text>
//                 <TextInput style={styles.text_infor}   onChangeText={email => this.setState({email})}>{this.state.email}</TextInput>
//               </View>
//             </View>
//           </View>
//           <View style={styles.footer}>
//             <View style={styles.view_btn}>
//               <TouchableOpacity style={styles.btn_logout} onPress={this.luu}>
//                 <Text style={styles.text_btn}>Lưu thông tin</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.btn_logout} onPress={this.trolai}>
//                 <Text style={styles.text_btn}>Trở lại</Text>
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
//     justifyContent: 'center',

//     //backgroundColor: 'yellow',
//   },
//   image: {
//     flex:1,
//     resizeMode: 'cover'
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
//     marginTop: 1,
//   },
//   view_infors: {
//     flex:1,
//     padding: 5,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 12},
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,
//     elevation: 24,
//     flexBasis: 1,
//   },
//   title_infor: {
//     fontSize: 18,
//     textAlign: 'left',
//     fontFamily: 'Tinos-Bold',
//   },
//   text_infor: {
//     fontSize: 17,
//     textAlign: 'left',
//     borderBottomWidth: 0.5,
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
