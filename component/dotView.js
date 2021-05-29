import React from 'react';
import {
    View , Text , StyleSheet
}   from 'react-native';

export default DotView = ({ data }) => {
    return (
        <View style={{flexDirection: 'row', height: 64}}>
            {
                data.map((_, i) => {
                    return <View style={[StyleSheet.dot, {width: 10}]} key={i.tostring()}></View>;
                }
                )}
        </View>
    )
}
const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black'
    }
})