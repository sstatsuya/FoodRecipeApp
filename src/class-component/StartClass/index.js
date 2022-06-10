import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import BottomNavigatorClass from '../BottomNavigatorClass';
// import StartImg from '../../asset/img/start.gif';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../redux/actions';

const StartClass = props => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(Actions.requestGetAllType());
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={StartImg} style={styles.startImg} />
      <Text style={styles.startInfo}>30+ Công thức món ngon</Text>
      <Text style={styles.startTitle}>Happy {'\n'}Cooking</Text>
      <TouchableOpacity
        style={styles.startBtnWrapper}
        onPress={() => {
          props.navigation.navigate('Wrapper', {});
        }}>
        <Text style={styles.startBtn}>Bắt đầu</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default StartClass;
