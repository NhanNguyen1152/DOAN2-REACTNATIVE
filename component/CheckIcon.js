import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import colors from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function IconCheck() {
    return (
        <View style={styles.centeredView}>
            <TouchableOpacity style={styles.btn_logout}>
                <Text style={{color: 'red'}}> <AntDesign name="checkcircleo" size={44} style={[styles.check]}> </AntDesign></Text>
              </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 0.1,
        flexDirection: 'column-reverse',
        alignItems: "flex-end",
        marginTop: -160,
        marginBottom: 200
    },
    check:{

    },
    btn_logout: {
        // elevation: 5,
        // backgroundColor: colors.button,
        borderRadius: 360,
        // paddingVertical: 10,
        // // paddingHorizontal: 12,
      },
});