import {FETCH_DATA} from '../action/actionType';

const appState = {
  data : [
    { email: " ", lop: " ", masosinhvien: 0, hoten: " " , ngaysinh:"11/05/2000"}
  ]
}
const taskReducer = (state = appState, action) => {
    switch (action.type) 
    {
        case FETCH_DATA:
            return [
                ...state,
                {
                    email: action.email,
                    lop: action.lop, 
                    masosinhvien: action.masosinhvien, 
                    hoten: action.hoten, 
                    ngaysinh: action.ngaysinh
                }
            ]
        default:
            return state
         }
    }

export default taskReducer;
    








 //  case 'FETCH_DATA':
     //   return {  
 
     //             // firestore()
     //             // .collection('sinhvien')
     //             // .doc('1800081')
     //             // .get()
     //             // .then(snap => console.log(snap.data()));
     //             // this.subscriber = firestore()
     //             // .collection('sinhvien')
     //             // .doc('1800081')
     //             // .onSnapshot(doc => {
     //             //    appState.data.map(email(doc.data().Email)),
     //             //     setLop(doc.data().Lop),
     //             //     setMasosinhvien(doc.data().Mssv),
     //             //     // Ngaysinh:  doc.data().Ngaysinh,
     //             //     sethoten(doc.data().Hoten);
     //             // })
     //     // }
                
     //   }






// import React, { Component } from 'react';
// import { createStore } from 'redux';
// import { StackNavigator, TabNavigator } from 'react-navigation';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import FirebaseApp from '../FirebaseApp';
// import Updatedoc from "../Updatedoc";
// import HOTEN from "../component/HOTEN"
// import Login from '../Login';
// // state

// let appState = {
//   data : [
//     { Email: " ", Lop: " ", Masosinhvien: 0, hoten: " " , Ngaysinh:" 11/05/2000"}
//   ]
// }

// // action

// // const getData = () => {
// //   return {
// //     type : 'FETCH_DATA'
// //   }
// // }

// // reducer

// const taskReducer = (state = appState, action) => {
//   switch(action.type) {
//     case 'FETCH_DATA':''
//       const newData = { Email: action.one, Lop: action.hai, Masosinhvien: action.ba, hoten: action.bon };
//       return {...state, data: [...state.data, newData]};
//   }
//   return state;
// }

// // store

// const store = createStore(taskReducer, appState);


// // dieu phoi sreen

// // const Tabs = TabNavigator({
// //   Login: {
// //     screen: Login
// //   },
// //   Firebase: {
// //     screen: FirebaseApp
// //   }
// // });

// // const Stack = StackNavigator({
// //   dangnhap: {
// //     screen: Login
// //   },
// //   hiendata: {
// //     screen: FirebaseApp
// //   }
// // });

// export default function stores() {
//   return (
//     <Provider store={store}>
//           <HOTEN />
//     </Provider>
//   );
// }


