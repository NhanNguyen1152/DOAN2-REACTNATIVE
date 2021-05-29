import React from 'react';
import {
    FlatList, StyleSheet,

    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
function HOTEN(props) {
  return (
    <View style={styles.view_infors}>
      <Text style={styles.title_infor}> Ngày Sinh: </Text>
      <FlatList
        data={props.giatri}
        renderItem={({item}) => <Text>{item.Ngaysinh}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
});
function map(state) {
  return {
    giatri: state.data,
  };
}
export default connect(map)(HOTEN);
