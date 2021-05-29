import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Beginpage from './Beginpage';
import Chamdiem from './Chamdiem';
import Choose from './Choose';
import FormCham from './component/FormCham';
import PopUp from './component/PopUp';
import screen2 from './component/screen2';
import Createacc from './Createacc';
import FirebaseApp from './FirebaseApp';
import Infor from './Infor';
import Insertdoc from './Insertdoc';
import Login from './Login';
import allReducers from './reducers/quanlyreducer';
import Updatedoc from './Updatedoc';


const store = createStore(allReducers);
const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="FirebaseApp">
          <Stack.Screen name="Beginpage" component={Beginpage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Infor" component={Infor} />
          <Stack.Screen name="FirebaseApp" component={FirebaseApp} />
          <Stack.Screen name="Updatedoc" component={Updatedoc} />
          <Stack.Screen name="Createacc" component={Createacc} />
          <Stack.Screen name="Choose" component={Choose} />
          <Stack.Screen name="Insertdoc" component={Insertdoc} />
          <Stack.Screen name="Chamdiem" component={Chamdiem} />
          <Stack.Screen name="screen2" component={screen2} />
          <Stack.Screen name="FormCham" component={FormCham} />
          <Stack.Screen name="PopUp" component={PopUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
