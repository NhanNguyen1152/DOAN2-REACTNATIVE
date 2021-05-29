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
                                <Text style={styles.text_content}> b, Tham gia các câu lạc bộ học thuật; các hoạt động học thuật; hoạt động ngoại khóa; hoạt động nghiên cứu khoa học</Text>
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

              <Text style={styles.title_header}> Điểm rèn luyện học kì I </Text>
              <Text style={styles.title_header}> Năm học: 2021 -2022 </Text>
            </View>
          </View>
          <View style={styles.view_logo}>
            <Image
              style={styles.logo}
              source={require('./assets/logo/Đại_học_Kỹ_thuật_-_Công_nghệ_Cần_Thơ.png')}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.container_infor}>
            <View style={styles.view_1}>
              <View style={styles.view_text_hello}>
                <Text style={styles.text_hello}>Xin chào , Trần Quốc Thái</Text>
              </View>
            </View>

            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  {' '}
                  Nội dung đánh giá{' '}
                </Text>
              </View>
              <View style={styles.view_numberleft}>
                <Text style={styles.text_content_numberleft_header}>
                  {' '}
                  Điểm tối đa
                </Text>
              </View>
              <View style={styles.view_numberright}>
                <Text style={styles.text_content_numberright}>
                  {' '}
                  Điểm tự chấm
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content_header}>
                  {' '}
                  1, Đánh giá về ý thức học tập{' '}
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
                    a, Ý thức, thái độ trong học tập. (Nghỉ học 1 buổi không
                    phép trừ 1 điểm; đi muộn hoặc bỏ tiết mỗi 3 lần trừ 1 điểm)
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
                  b, Tham gia các câu lạc bộ học thuật; các hoạt động học thuật;
                  hoạt động ngoại khóa; hoạt động nghiên cứu khoa học
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
                  c, Ý thức thực hiện tốt quy chế khi tham gia các kỳ thi, cuộc
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
                  - Bị nhắc nhở khi thi, kiểm tra{' '}
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
                  - Bị lập biên bản xử lý khi thi và kiểm tra
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
                  d, Có tinh thần vượt khó, phấn đấu vươn lên trong học tập
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
                  đ, Đạt kết quả cao trong học tập
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
                  - Loại Trung bình: Điểm số từ 2.0 đến 2.49
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
                  - Loại Khá: Điểm số từ 2.5 đến 3.19
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
                  - Loại Giỏi: Điểm số từ 3.2 đến 3.59
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
                  - Loại Xuất sắc: Điểm số từ 3.6 đến 4.0
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
                  Điểm tối đa nội dung 1 là 20 điểm
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
                  2, Đánh giá về ý thức và kết quả chấp hành nội quy, quy chế,
                  quy định trong nhà trường
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
                  a, Ý thức chấp hành các văn bản chỉ đạo của ngành, của cơ quan
                  chỉ đạo cấp trên được thực hiện trong nhà trường.
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
                  - Bị nhắc nhở trong việc thực hiện
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
                  - Bị xử lý kỷ luật từ mức khiển trách trở lên
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
                  b, Ý thức chấp hành tốt, đầy đủ các nội quy, quy chế và các
                  quy định khác của nhà trường
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
                  - Bị nhắc nhở trong việc thực hiện
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
                  - Bị xử lý kỷ luật từ mức khiển trách trở lên
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
                  Điểm tối đa nội dung 2 là 25 điểm
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
                  3, Đánh giá về ý thức và kết quả tham gia các hoạt động CT,
                  XH, văn hoá, văn nghệ, thể thao, phòng chống tội phạm và các
                  tệ nạn xã hội
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
                  a, Tham gia tích cực các hoạt động chính trị, xã hội, văn hoá,
                  văn nghệ, thể thao và có sự trưởng thành của bản thân qua các
                  hoạt động rèn luyện:
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
                  - Tích cực tham gia các hoạt động chính trị, xã hội, văn hoá,
                  văn nghệ, thể thao
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
                  - Được kết nạp Đảng hoặc đạt danh hiệu Đoàn viên ưu tú hoặc
                  đạt giải Nhất, Nhì, Ba trong các hoạt động chính trị, văn hóa,
                  thể thao từ cấp trường trở lên
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
                  b, Tích cực tham gia các hoạt động công ích, tình nguyện, công
                  tác xã hội
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
                  c, Tham gia tuyên truyền, phòng chống tội phạm, các tệ nạn xã
                  hội và các hoạt động khác do lớp, khoa, trường, các đoàn thể,
                  địa phương tổ chức
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
                  Điểm tối đa nội dung 3 là 20 điểm
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
                  4, Đánh giá về ý thức công dân trong quan hệ cộng đồng
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
                  a, Chấp hành và tham gia tuyên truyền các chủ trương của Đảng,
                  chính sách, pháp luật của Nhà nước tại nơi cư trú
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
                  b, Được ghi nhận, biểu dương, khen thưởng về tham gia các hoạt
                  động xã hội
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
                  c, Có tinh thần chia sẻ, giúp đỡ bạn bè, người thân, người có
                  hoàn cảnh khó khăn, hoạn nạn.
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
                  Điểm tối đa nội dung 4 là 25 điểm
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
                  5, Đánh giá về ý thức và kết quả tham gia công tác phụ trách
                  lớp, các đoàn thể, tổ chức trong nhà trường hoặc đạt được
                  thành tích đặc biệt trong học tập, rèn luyện của học sinh,
                  sinh viên
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
                  a, Tham gia tích cực vào phong trào của Lớp, Đoàn, Hội sinh
                  viên và các công tác đoàn thể xã hội khác
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
                  b, Phát huy vai trò và hoàn thành tốt nhiệm vụ người cán bộ
                  Chi đoàn, Lớp, Câu lạc bộ, Đội tự quản
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
                  c, Đảm nhiệm, đóng góp có hiệu quả cho công tác Đoàn trường,
                  Hội sinh viên, Liên chi đoàn, Đội tự quản, Câu lạc bộ
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
                  d, Được biểu dương, khen thưởng vì có thành tích đặc biệt
                  trong học tập, rèn luyện và các hoạt động khác
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
                <Text style={styles.text_content}>- Cấp khoa</Text>
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
                <Text style={styles.text_content}>- Cấp trường trở lên</Text>
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
                  Điểm tối đa nội dung 5 là 10 điểm
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
                  Tổng điểm tối đa: 100 điểm
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
                  <Text style={styles.text_btn}>Lưu</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view_1}>
              <View style={styles.view_text_hello}>
                <Text style={styles.text_hello}></Text>
              </View>
            </View>
            {/* 
                                Lưu trạng thái chấm
                            */}
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  Sinh Viên: Trần Quốc Thái đã nộp
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>
                  Tập thể lớp: Đã xác nhận
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.view_content}>
                <Text style={styles.text_content}>Khoa: Đã xác nhận</Text>
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
