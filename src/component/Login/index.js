import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import BottomNavigator from '../BottomNavigator';
import StartImg from '../../asset/img/start.gif';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
import { v4 } from 'uuid';

const Login = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.startImgWrapper}>
        <Image source={StartImg} style={styles.startImg} />
      </View>
      <Text style={styles.startInfo}>30+ Công thức món ngon</Text>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <FontAwesomeIcon icon={faUser} size={20} color={'#333'} />
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            placeholderTextColor={'#666'}
          />
        </View>
        <View style={styles.inputWrapper}>
          <FontAwesomeIcon icon={faLock} size={20} color={'#333'} />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor={'#666'}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.startBtnWrapper}
        onPress={() => {
          dispatch(
            Actions.tam(),
          );
        }}>
        <Text style={styles.startBtn}>Bắt đầu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
