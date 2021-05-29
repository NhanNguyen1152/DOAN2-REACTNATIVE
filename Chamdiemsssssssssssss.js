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
    ScrollView,
    Dimensions,
    AppRegistry
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { StackNavigator } from 'react-navigation';
import { create } from 'react-test-renderer';
import { color } from 'react-native-reanimated';
import colors from './assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { version } from '@babel/core';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Chamdiem extends Component {
    render() {
        return (

            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/backgrounds/Chamdiem.png')}
                    style={styles.image}
                    imageStyle={{}}>
                    <View style={styles.header}>
                        <View style={styles.notthing}>
                            <View style={{}}>

                                <TouchableOpacity onPress={this.chinhsua}>
                                    <MaterialIcons name="list" size={44} style={styles.btn_list} />
                                </TouchableOpacity>

                                <Text style={styles.title_header} > Điểm rèn luyện học kì I  </Text>
                                <Text style={styles.title_header} > Năm học: 2021 -2022 </Text>
                            </View>
                        </View>
                        <View style={styles.view_logo}>
                            <Image
                                style={styles.logo}
                                source={require('./assets/logo/Đại_học_Kỹ_thuật_-_Công_nghệ_Cần_Thơ.png')}
                            />
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={true} pagingEnable={true}>
                        <View style={styles.body}>
                            <View style={styles.container_infor}>
                                <View style={styles.view_1}>
                                    <View style={styles.view_text_hello}>
                                        <Text style={styles.text_hello}>
                                            Xin chào , Trần Quốc Thái
                                </Text>
                                    </View>
                                </View>
                                <View style={styles.view_2}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content_header}> Nội dung đánh giá </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> Điểm tối đa</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> Điểm tự chấm</Text>
                                    </View>
                                </View>
                                <View style={styles.view_3}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content_header}> 1, Đánh giá về ý thức học tập	 </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}></Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}></Text>
                                    </View>
                                </View>
                                <View style={styles.view_4}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> a, Ý thức, thái độ trong học tập. (Nghỉ học 1 buổi không phép trừ 1 điểm; đi muộn hoặc bỏ tiết mỗi 3 lần trừ 1 điểm)</Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 7</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_5}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> b, Tham gia các câu lạc bộ học thuật; các hoạt động học thuật; hoạt động ngoại khóa; hoạt động nghiên cứu khoa học</Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 2</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_6}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}>c, Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 4</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_7}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> - Bị nhắc nhở khi thi, kiểm tra </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 2</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}></Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.container_infor}>
                                {/* <View style={styles.view_1}>
                                    <View style={styles.view_text_hello}>
                                        <Text style={styles.text_hello}>
                                           
                                </Text>
                                    </View>
                                </View> */}
                                <View style={styles.view_2}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> - Bị lập biên bản xử lý khi thi và kiểm tra </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}></Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}></Text>
                                    </View>
                                </View>
                                <View style={styles.view_3}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> d, Có tinh thần vượt khó, phấn đấu vươn lên trong học tập</Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}></Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}></Text>
                                    </View>
                                </View>
                                <View style={styles.view_4}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}>đ, Đạt kết quả cao trong học tập</Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 7</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_5}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}>- Loại Trung bình: Điểm số từ 2.0 đến 2.49</Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 2</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_6}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}>c, Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc thi </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 4</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}> </Text>
                                    </View>
                                </View>
                                <View style={styles.view_7}>
                                    <View style={styles.view_content}>
                                        <Text style={styles.text_content}> - Bị nhắc nhở khi thi, kiểm tra </Text>
                                    </View>
                                    <View style={styles.view_numberleft}>
                                        <Text style={styles.text_content_numberleft}> 2</Text>
                                    </View>
                                    <View style={styles.view_numberright}>
                                        <Text style={styles.text_content_numberright}></Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={styles.footer}>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header: {
        flex: 0.7,
        flexDirection: 'row',
        paddingTop: 14,
        paddingHorizontal: 11,
        marginBottom: 1,
        // backgroundColor: 'pink'
    },
    body: {
        flex: 3,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        // height: 
        // backgroundColor: 'yellow'
    },
    footer: {
        // marginTop: 5,
        backgroundColor: 'green'
    },
    notthing: {
        flex: 1,
        // backgroundColor: 'red'
    },
    btn_list: {
        marginTop: -17,
        marginLeft: -12,
        marginBottom: 12
    }
    ,
    title_header: {
        fontSize: 25,
        fontFamily: 'Tinos-Bold',
        textAlign: 'center'
    },
    view_logo: {
        flex: 0,
        // backgroundColor: 'green'
    },
    logo: {
        resizeMode: 'contain',
        width: 135,
        height: 155,
    },
    container_infor: {
        flex: 1,
        // marginTop: 15,
        backgroundColor: colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 2,
        // paddingBottom: 35
    },
    view_text_hello: {
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    }
    ,
    view_content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    view_numberleft: {
        flex: 0.2,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 2,
        backgroundColor: 'white'
    },
    view_numberright: {
        flex: 0.2,
        backgroundColor: 'pink',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
    ,
    view_1: {
        flex: 0.4,
        // backgroundColor: 'red',
        flexDirection: 'row-reverse',
        marginBottom: 1,
    },
    view_2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,
    },
    view_3: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,

    },
    view_4: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,

    },
    view_5: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,

    },
    view_6: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,

    },
    view_7: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginBottom: 1,

    },
    text_hello: {
        fontFamily: 'Tinos-Bold',
        fontSize: 20,
        marginRight: 10
    },
    text_content_header: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'left'
    },
    text_content: {
        fontFamily: 'Tinos-Regular',
        fontSize: 17,
        textAlign: 'left'
    },

    text_content_numberleft: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: -19
    }
    ,
    text_content_numberright: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'center'
    }
});
