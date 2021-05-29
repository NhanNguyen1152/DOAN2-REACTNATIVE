import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import colors from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function FromCham() {
    return (
        // <ScrollView showsVerticalScrollIndicator={true} pagingEnable={true}>
        <View style={styles.container}>
            <View style={styles.container_infor}>
                <View style={styles.view_1}>
                    <View style={styles.view_content}>
                        <Text style={styles.text_content}> Nội dung đánh giá</Text>
                    </View>
                    <View style={styles.view_numberleft}>
                        <Text style={styles.text_content_numberleft}> Điểm tối đa </Text>
                    </View>
                    <View style={styles.view_numberright}>
                        <Text style={styles.text_content_numberright}> Điểm chấm</Text>
                    </View>
                </View>
                <View style={styles.view_1}>
                    <View style={styles.view_content}>
                        <Text style={styles.text_content}> - Bị nhắc nhở khi thi, kiểm tra </Text>
                    </View>
                    <View style={styles.view_numberleft}>
                        <Text style={styles.text_content_numberleft}>7</Text>
                    </View>
                    <View style={styles.view_numberright}>
                        <Text style={styles.text_content_numberright}>V</Text>
                    </View>
                </View>
            </View>
        </View>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    container_infor: {
        flex: 0.5,
        backgroundColor: colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        justifyContent: 'center',
        paddingHorizontal: 2,
        borderRadius: 15,
    },
    view_content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,

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
        textAlign: 'left',
        flex: 1
    },
    text_content: {
        fontFamily: 'Tinos-Regular',
        fontSize: 17,
        textAlign: 'left',
        flex: 1
    },

    text_content_numberleft: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 5,
        flex: 1
    }
    ,
    text_content_numberright: {
        fontFamily: 'Tinos-Bold',
        fontSize: 18,
        textAlign: 'center',
        flex: 1
    }
});