import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import EmptyImg from '../../../asset/img/empty.png';
import TakePicture from '../../TakePicture';

const ARScreen2 = props => {
  // Variable
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TakePicture
        show={show}
        onDismiss={() => setShow(false)}
        enableBackdropDismiss
        heightScale={0.36}>
        <View style={styles.pickImageWrapper}>
          <Text style={styles.pickImgTitle}>Đổi ảnh đại diện</Text>
          <Text style={styles.pickImgDesc}>
            Chọn một bức hình trong máy bạn
          </Text>
          <TouchableOpacity
            onPress={() => {
              pickImage(2);
            }}
            style={styles.pickImgBtn}>
            <Text style={styles.pickImgTxt}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pickImgBtn}
            onPress={() => {
              pickImage(1);
            }}>
            <Text style={styles.pickImgTxt}>Chọn từ thư viện</Text>
          </TouchableOpacity>
        </View>
      </TakePicture>
      <ScrollView>
        <Text style={styles.title}>Nhập chi tiết</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hình ảnh món ăn</Text>
          <TouchableOpacity
            style={styles.imageSelectBtn}
            onPress={() => setShow(true)}>
            <Image source={EmptyImg} style={styles.foodImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.nextBtn,
          {
            left: 20,
          },
        ]}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faAngleLeft} size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextBtn}>
        <FontAwesomeIcon icon={faAngleRight} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen2;
