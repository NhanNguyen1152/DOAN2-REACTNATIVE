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
    Dimensions
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { StackNavigator } from 'react-navigation';
import { create } from 'react-test-renderer';
import { color } from 'react-native-reanimated';
import colors from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { version } from '@babel/core';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class Screen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                            <Text style={styles.text_content_numberleft}>5</Text>
                        </View>
                        <View style={styles.view_numberright}>
                            <Text style={styles.text_content_numberright}> </Text>
                        </View>
                    </View>
                    <View style={styles.view_3}>
                        <View style={styles.view_content}>
                            <Text style={styles.text_content}> d, Có tinh thần vượt khó, phấn đấu vươn lên trong học tập </Text>
                        </View>
                        <View style={styles.view_numberleft}>
                            <Text style={styles.text_content_numberleft}>5</Text>
                        </View>
                        <View style={styles.view_numberright}>
                            <Text style={styles.text_content_numberright}></Text>
                        </View>
                    </View>
                    <View style={styles.view_4}>
                        <View style={styles.view_content}>
                            <Text style={styles.text_content}> đ, Đạt kết quả cao trong học tập</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: screenWidth,
        // height: screenHeight
    },
    container_infor: {
        flex: 1,
        backgroundColor: colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        // justifyContent: 'center',
        // alignContent: 'center',
        paddingHorizontal: 2,
        // paddingBottom: 35,
        // borderRadius: 15
    },
    view_content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5
    },
    view_numberleft: {
        flex: 0.2,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 2,
        textAlign: 'center'
    },
    view_numberright: {
        flex: 0.2,
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
        paddingHorizontal: 5
    }
    ,
    text_content_numberright: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'center'
    }
});
