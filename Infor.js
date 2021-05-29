import React, { Component } from 'react';
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
import { StackNavigator } from 'react-navigation';
import { create } from 'react-test-renderer';
import { color } from 'react-native-reanimated';
import colors from './assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {  useSelector, useDispatch, connect } from 'react-redux';

 export default function Infor(props) {
    // state = {
    //     Email: ' ',
    //     Lop: ' ',
    //     Masosinhvien: ' ',
    //     Ngaysinh: ' ',
    //     hoten: ' ',
    // };
    // constructor(props) {
    //     super(props);
    //     this.getten();
    //     this.subscriber = firestore()
    //         .collection('sinhvien')
    //         .doc('1800081')
    //         .onSnapshot(doc => {
    //             this.setState({
    //                 Email: doc.data().Email,
    //                 Lop: doc.data().Lop,
    //                 Masosinhvien: doc.data().Mssv,
    //                 // Ngaysinh:  doc.data().Ngaysinh,
    //                 hoten: doc.data().Hoten,
    //             });
    //         });
    // }

    thongtin = async () => {
        const { navigate } = this.props.navigation;
        navigate('FirebaseApp');
    };

    getten = async () => {
        const data = firestore()
            .collection('sinhvien')
            .doc('1800081')
            .get()
            .then(snap => console.log(snap.data()));
    };

    dangxuat = async () => {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }

    
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/backgrounds/infor.png')}
                    style={styles.image}
                    imageStyle={{ borderRadius: 15 }}>
                    <View style={styles.header}>
                        <View style={styles.notthing}>
                            <View style={{marginTop: 100}}>
                            <Text style={styles.title_header} > Xin Chào ! </Text>
                            </View>
                            <View style={{marginTop: 7 , marginLeft: 30, backgroundColor: colors.background_btn_icon,borderRadius: 9, padding:1}}> 
                            <Text style={styles.title_headers}>{dangxuat}</Text>
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
                        <View style={styles.view_inforss}>
                                <TouchableOpacity style={styles.btn_infor} onPress={props.fetch_data}>
                                    <AntDesign name="copy1" style={styles.btn_icon} />
                                    <Text style={styles.title_infor} >Chấm điểm rèn luyện</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view_infors}>
                                <TouchableOpacity style={styles.btn_infor} onPress={thongtin}>
                                    <AntDesign name="profile" style={styles.btn_icon} />
                                    <Text style={styles.title_infor} >Thông tin cá nhân</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view_infors}>
                                <TouchableOpacity style={styles.btn_infor} onPress={dangxuat}>
                                    <AntDesign name="tags" style={styles.btn_icon} />
                                    <Text style={styles.title_infor} >Thống kê bảng đánh giá</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view_infors}>
                                <TouchableOpacity style={styles.btn_infor} onPress={dangxuat}>
                                    <AntDesign name="unlock" style={styles.btn_icon} />
                                    <Text style={styles.title_infor} >Đổi mật khẩu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view_infors}>
                                <TouchableOpacity style={styles.btn_infor} onPress={dangxuat}>
                                    <AntDesign name="contacts" style={styles.btn_icon} />
                                    <Text style={styles.title_infor} >Phản hồi ý kiến</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.btn_logouts}>
                            <TouchableOpacity style={styles.btn_logout} onPress={this.dangxuat}>
                                <Text style={{ color: 'white' }}>Đăng Xuất</Text>
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
    title_header:{
        fontSize: 30,
        fontFamily: 'Tinos-Bold',
        marginLeft: 5
    },
    title_headers:{
        fontSize: 15,
        fontFamily: 'Tinos-Italic',
        margin: 5
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
        shadowOffset: { width: 0, height: 12 },
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
        marginLeft: 10
    },
    btn_infor: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn_icon: {
        fontSize: 20,
        marginLeft: 10
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

// const dispatch = useDispatch();
// const mapStateToProps = (dispatch) => {
//     return {
//         fetch_data: () => dispatch({type: 'FETCH_DATA'})
//     }
//   };
  
//   export default connect(mapStateToProps)(Infor);