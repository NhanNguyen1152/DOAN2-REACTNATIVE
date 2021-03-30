import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
export default class Login extends React.Component {
  //static navigationOptions = {header: null}
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      email: '',
      pass: '',
    };
  }

  shoot = async () => {
    const {navigate} = this.props.navigation;
    const {Username} = this.state;
    const data = await firestore()
      .collection('VerifyLogin')
      .doc(Username)
      .get()
      .then(snap => {
        console.log(snap.data());
        this.setState({
          email: snap.data().Email,
          pass: snap.data().Pass,
        });
      });
    if (this.state.Username != null && this.state.Password != null) {
      if (
        this.state.Username == this.state.email &&
        this.state.Password == this.state.pass
      ) {
        alert('Dang nhap thanh cong');
        this.props.navigation.navigate('FirebaseApp', {
          data1: this.state.Username,
        });
        //const {navigate} = this.props.navigation;
        navigate('FirebaseApp');
      } else {
        alert('Sai ten dang nhap hoac mat khau');
      }
    } else {
      alert('Xin nhap du thong tin');
    }
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.Username}
            placeholder="Tên đăng nhập"
            style={styles.Input}
            onChangeText={Username => this.setState({Username})}
          />
          <TextInput
            value={this.state.Password}
            placeholder="Mật khẩu "
            style={styles.Input}
            secureTextEntry={true}
            onChangeText={Password => this.setState({Password})}
          />
          <Button
            onPress={() => {
              this.shoot,
                this.props.navigation.navigate('FirebaseApp', {
                  data1: this.state.Email,
                });
            }}
            title="Go"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    margin: 50,
  },
  textInput: {
    height: 50,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 25,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: '#111111',
  },
});
