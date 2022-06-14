import {View, Text, Image} from 'react-native';
import React from 'react';
import LoadingImg from '../../asset/img/loading.gif';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../redux/selector';

const Loading = () => {
  const isLoading = useSelector(isLoadingSelector)
  if(!isLoading) return <></>
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
      <Image
        source={LoadingImg}
        style={{
          width: '80%',
          aspectRatio: 1,
          marginTop: -120,
        }}
      />
    </View>
  );
};

export default Loading;
