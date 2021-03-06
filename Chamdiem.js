import React, {Component, useState} from 'react';
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
  Modal,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {StackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import {color} from 'react-native-reanimated';
import colors from './assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {version} from '@babel/core';
import Screen2 from './component/screen2';
import FromCham from './component/FormCham';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
import FormCham from './component/FormCham';
import CheckIcon from './component/CheckIcon';

export default function Chamdiem() {
  const [modalOpen, SetModelOpen] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={true} pagingEnable={true}>
      <View style={styles.container}>
        {/* <ImageBackground
                    source={require('./assets/backgrounds/Chamdiem.png')}
                    style={styles.image}
                    imageStyle={{}}> */}
        <Modal visible={modalOpen} animationType="slide" style={{flex: 1}}>
          <FromCham></FromCham>
          <View style={styles.centeredView}>
            <TouchableOpacity style={styles.btn_logouts}>
              <Text style={{color: 'red'}}>
                {' '}
                <AntDesign
                  name="checkcircleo"
                  size={44}
                  style={[styles.check]}
                  onPress={() => SetModelOpen(false)}>
                  {' '}
                </AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
          {/* <CheckIcon onPress={() => SetModelOpen(false)}></CheckIcon> */}
          {/* <View style={styles.container_infors}>
                        <View style={styles.view_modal}>
                            <View style={styles.view_content}>
                                <Text style={styles.text_content}> b, Tham gia c??c c??u l???c b??? h???c thu???t; c??c ho???t ?????ng h???c thu???t; ho???t ?????ng ngo???i kh??a; ho???t ?????ng nghi??n c???u khoa h???c</Text>
                            </View>
                            <View style={styles.view_numberleft}>
                                <Text style={styles.text_content_numberleft}> 2</Text>
                            </View>
                            <View style={styles.view_numberright}>
                                <Text style={styles.text_content_numberright}> </Text>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <TouchableOpacity style={styles.btn_logout}>
                                <Text style={{ color: 'red' }}> <AntDesign name="checkcircleo" size={44} style={[styles.check]}> </AntDesign></Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
        </Modal>
        <View style={styles.header}>
          <View style={styles.notthing}>
            <View style={{}}>
              <TouchableOpacity>
                <MaterialIcons name="list" size={44} style={styles.btn_list} />
              </TouchableOpacity>

              <Text style={styles.title_header}> ??i???m r??n luy???n h???c k?? I </Text>
              <Text style={styles.title_header}> N??m h???c: 2021 -2022 </Text>
            </View>
          </View>
          <View style={styles.view_logo}>
            <Image
              style={styles.logo}
              source={require('./assets/logo/?????i_h???c_K???_thu???t_-_C??ng_ngh???_C???n_Th??.png')}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.container_infor}>
            <View style={styles.view_1}>
              <View style={styles.view_text_hello}>
                <Text style={styles.text_hello}>Xin ch??o , Tr???n Qu???c Th??i</Text>
              </View>
            </View>

            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  {' '}
                  N???i dung ????nh gi??{' '}
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft_header}>
                  {' '}
                  ??i???m t???i ??a
                </Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}>
                  {' '}
                  ??i???m t??? ch???m
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  {' '}
                  1, ????nh gi?? v??? ?? th???c h???c t???p{' '}
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => SetModelOpen(true)}>
              <View style={styles.view}>
                <View style={styles.view_content}>
                  <Text style={styles.text_content}>
                    {' '}
                    a, ?? th???c, th??i ????? trong h???c t???p. (Ngh??? h???c 1 bu???i kh??ng
                    ph??p tr??? 1 ??i???m; ??i mu???n ho???c b??? ti???t m???i 3 l???n tr??? 1 ??i???m)
                  </Text>
                </View>
                <View style={styles.view_numberleft}>
                  <Text style={styles.text_content_numberleft}>7</Text>
                </View>
                <View style={styles.view_numberright}>
                  <Text style={styles.text_content_numberright}> </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  {' '}
                  b, Tham gia c??c c??u l???c b??? h???c thu???t; c??c ho???t ?????ng h???c thu???t;
                  ho???t ?????ng ngo???i kh??a; ho???t ?????ng nghi??n c???u khoa h???c
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  c, ?? th???c th???c hi???n t???t quy ch??? khi tham gia c??c k??? thi, cu???c
                  thi{' '}
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>4</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  {' '}
                  - B??? nh???c nh??? khi thi, ki???m tra{' '}
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - B??? l???p bi??n b???n x??? l?? khi thi v?? ki???m tra
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>0</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}> </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  d, C?? tinh th???n v?????t kh??, ph???n ?????u v????n l??n trong h???c t???p
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  ??, ?????t k???t qu??? cao trong h???c t???p
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>5</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - Lo???i Trung b??nh: ??i???m s??? t??? 2.0 ?????n 2.49
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - Lo???i Kh??: ??i???m s??? t??? 2.5 ?????n 3.19
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>3</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - Lo???i Gi???i: ??i???m s??? t??? 3.2 ?????n 3.59
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>4</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - Lo???i Xu???t s???c: ??i???m s??? t??? 3.6 ?????n 4.0
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>5</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_red}>
                  ??i???m t???i ??a n???i dung 1 l?? 20 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  2, ????nh gi?? v??? ?? th???c v?? k???t qu??? ch???p h??nh n???i quy, quy ch???,
                  quy ?????nh trong nh?? tr?????ng
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  a, ?? th???c ch???p h??nh c??c v??n b???n ch??? ?????o c???a ng??nh, c???a c?? quan
                  ch??? ?????o c???p tr??n ???????c th???c hi???n trong nh?? tr?????ng.
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>15</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - B??? nh???c nh??? trong vi???c th???c hi???n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>10</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - B??? x??? l?? k??? lu???t t??? m???c khi???n tr??ch tr??? l??n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>0</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  b, ?? th???c ch???p h??nh t???t, ?????y ????? c??c n???i quy, quy ch??? v?? c??c
                  quy ?????nh kh??c c???a nh?? tr?????ng
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>10</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - B??? nh???c nh??? trong vi???c th???c hi???n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>5</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - B??? x??? l?? k??? lu???t t??? m???c khi???n tr??ch tr??? l??n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>0</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_red}>
                  ??i???m t???i ??a n???i dung 2 l?? 25 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  3, ????nh gi?? v??? ?? th???c v?? k???t qu??? tham gia c??c ho???t ?????ng CT,
                  XH, v??n ho??, v??n ngh???, th??? thao, ph??ng ch???ng t???i ph???m v?? c??c
                  t??? n???n x?? h???i
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  a, Tham gia t??ch c???c c??c ho???t ?????ng ch??nh tr???, x?? h???i, v??n ho??,
                  v??n ngh???, th??? thao v?? c?? s??? tr?????ng th??nh c???a b???n th??n qua c??c
                  ho???t ?????ng r??n luy???n:
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>8</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - T??ch c???c tham gia c??c ho???t ?????ng ch??nh tr???, x?? h???i, v??n ho??,
                  v??n ngh???, th??? thao
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>5</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  - ???????c k???t n???p ?????ng ho???c ?????t danh hi???u ??o??n vi??n ??u t?? ho???c
                  ?????t gi???i Nh???t, Nh??, Ba trong c??c ho???t ?????ng ch??nh tr???, v??n h??a,
                  th??? thao t??? c???p tr?????ng tr??? l??n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>8</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  b, T??ch c???c tham gia c??c ho???t ?????ng c??ng ??ch, t??nh nguy???n, c??ng
                  t??c x?? h???i
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>6</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  c, Tham gia tuy??n truy???n, ph??ng ch???ng t???i ph???m, c??c t??? n???n x??
                  h???i v?? c??c ho???t ?????ng kh??c do l???p, khoa, tr?????ng, c??c ??o??n th???,
                  ?????a ph????ng t??? ch???c
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>6</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_red}>
                  ??i???m t???i ??a n???i dung 3 l?? 20 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  4, ????nh gi?? v??? ?? th???c c??ng d??n trong quan h??? c???ng ?????ng
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  a, Ch???p h??nh v?? tham gia tuy??n truy???n c??c ch??? tr????ng c???a ?????ng,
                  ch??nh s??ch, ph??p lu???t c???a Nh?? n?????c t???i n??i c?? tr??
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>10</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  b, ???????c ghi nh???n, bi???u d????ng, khen th?????ng v??? tham gia c??c ho???t
                  ?????ng x?? h???i
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>5</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  c, C?? tinh th???n chia s???, gi??p ????? b???n b??, ng?????i th??n, ng?????i c??
                  ho??n c???nh kh?? kh??n, ho???n n???n.
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>10</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  ??i???m t???i ??a n???i dung 4 l?? 25 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  5, ????nh gi?? v??? ?? th???c v?? k???t qu??? tham gia c??ng t??c ph??? tr??ch
                  l???p, c??c ??o??n th???, t??? ch???c trong nh?? tr?????ng ho???c ?????t ???????c
                  th??nh t??ch ?????c bi???t trong h???c t???p, r??n luy???n c???a h???c sinh,
                  sinh vi??n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  a, Tham gia t??ch c???c v??o phong tr??o c???a L???p, ??o??n, H???i sinh
                  vi??n v?? c??c c??ng t??c ??o??n th??? x?? h???i kh??c
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>3</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  b, Ph??t huy vai tr?? v?? ho??n th??nh t???t nhi???m v??? ng?????i c??n b???
                  Chi ??o??n, L???p, C??u l???c b???, ?????i t??? qu???n
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>3</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  c, ?????m nhi???m, ????ng g??p c?? hi???u qu??? cho c??ng t??c ??o??n tr?????ng,
                  H???i sinh vi??n, Li??n chi ??o??n, ?????i t??? qu???n, C??u l???c b???
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  d, ???????c bi???u d????ng, khen th?????ng v?? c?? th??nh t??ch ?????c bi???t
                  trong h???c t???p, r??n luy???n v?? c??c ho???t ?????ng kh??c
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>- C???p khoa</Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>1</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>- C???p tr?????ng tr??? l??n</Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}>2</Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_red}>
                  ??i???m t???i ??a n???i dung 5 l?? 10 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_red}>
                  T???ng ??i???m t???i ??a: 100 ??i???m
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft}></Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}></Text>
              </View>
            </View>
            <View style={styles.view_button}>
              <View style={{marginRight: 11}}>
                <TouchableOpacity style={styles.btn_logout}>
                  <Text style={styles.text_btn}>L??u</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view_1}>
              <View style={styles.view_text_hello}>
                <Text style={styles.text_hello}></Text>
              </View>
            </View>
            {/* 
                                L??u tr???ng th??i ch???m
                            */}
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  Sinh Vi??n: Tr???n Qu???c Th??i ???? n???p
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  T???p th??? l???p: ???? x??c nh???n
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>Khoa: ???? x??c nh???n</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}></Text>
              </View>
            </View>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#f3faff',
    // justifyContent: 'center'
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
    // backgroundColor: 'yellow'
  },
  footer: {
    // backgroundColor: 'green'
  },
  notthing: {
    flex: 1,
    // backgroundColor: 'red'
  },
  btn_list: {
    marginTop: -17,
    marginLeft: -12,
    marginBottom: 12,
  },
  title_header: {
    fontSize: 25,
    fontFamily: 'Tinos-Bold',
    textAlign: 'center',
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
    marginTop: 15,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
    justifyContent: 'center',
    // alignContent: 'center',
    paddingHorizontal: 2,
    // paddingBottom: 35
  },
  view_text_hello: {
    justifyContent: 'center',
    // backgroundColor: 'yellow'
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
    alignItems: 'center',
    marginLeft: 1,
  },
  view_numberright: {
    flex: 0.2,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 1,
  },
  view_1: {
    flex: 0.4,
    // backgroundColor: 'red',
    flexDirection: 'row-reverse',
    marginBottom: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 1,
    justifyContent: 'center',
  },
  text_hello: {
    fontFamily: 'Tinos-Bold',
    fontSize: 20,
    marginRight: 10,
  },
  text_content_header: {
    fontFamily: 'Tinos-Bold',
    fontSize: 18,
    textAlign: 'left',
  },
  text_content_red: {
    fontFamily: 'Tinos-Bold',
    fontSize: 18,
    textAlign: 'left',
    color: 'red',
  },
  text_content: {
    fontFamily: 'Tinos-Regular',
    fontSize: 17,
    textAlign: 'left',
  },

  text_content_numberleft_header: {
    fontFamily: 'Tinos-Bold',
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text_content_numberleft: {
    fontFamily: 'Tinos-Bold',
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text_content_numberright: {
    fontFamily: 'Tinos-Bold',
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  view_button: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 7,
    backgroundColor: 'white',
  },
  btn_logout: {
    elevation: 5,
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 35,
    textAlign: 'center',
  },
  text_btn: {
    fontFamily: 'Tinos-Regular',
    color: 'azure',
    fontSize: 17,
  },
  container_infors: {
    flex: 0.5,
    marginTop: 15,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    // borderRadius: 15,
    // justifyContent: 'center',
    // alignContent: 'center',
    paddingHorizontal: 2,
    // paddingBottom: 35
  },
  centeredView: {
    flex: 0.1,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    marginTop: -160,
    marginBottom: 200,
  },
  check: {},
  btn_logouts: {
    // elevation: 5,
    // backgroundColor: colors.button,
    borderRadius: 360,
    // paddingVertical: 10,
    // // paddingHorizontal: 12,
  },
});
