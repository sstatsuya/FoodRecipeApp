import {View, Text} from 'react-native';
import React from 'react';
import Login from '../Login';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const User = () => {
  return (
    <View style={styles.container}>
      <Login/>
      {/* <View style={styles.loggedWrapper}>
        <FontAwesomeIcon icon={faCheckCircle} size={120} color="green" />
        <Text style={styles.loggedText}>Đã đăng nhập</Text>
      </View> */}
    </View>
  );
};

export default User;
