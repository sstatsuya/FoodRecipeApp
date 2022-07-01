import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import BottomNavigator from '../BottomNavigator';
import StartImg from '../../asset/img/start.gif';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../redux/actions';
import {getAllTypes, typeSlice} from '../../redux/typeSlice';
import {getAllRecipes, recipeSlice} from '../../redux/recipeSlice';
import {unwrapResult} from '@reduxjs/toolkit';
import {typesSelector} from '../../redux/selector';
import {getType} from '../../graphql/query';
import { useQuery } from '@apollo/client/react';
import { viewSlice } from '../../redux/viewSlice';

const Start = props => {
  const dispatch = useDispatch();
  const {loading, error, data} = useQuery(getType);
  if (loading){
    dispatch(viewSlice.actions.setIsLoading(true))
  }
  else{
    dispatch(viewSlice.actions.setIsLoading(false))
  }
  if (error) console.log('Error...');
  if (data){
    dispatch(typeSlice.actions.getAll({data: data.types}))
    dispatch(recipeSlice.actions.getAll({data: data.recipes}))
  }
  useEffect(() => {
    // dispatch(Actions.requestGetAllType());
    // dispatch(Actions.requestGetAllRecipe());
    // dispatch(typeSlice.actions.getAll())
    // dispatch(recipeSlice.actions.getAll())
    // dispatch(getAllTypes());
    // dispatch(getAllRecipes());
  }, []);

  // const types = useSelector(typesSelector)
  // console.log("Types: "+ JSON.stringify(types))

  return (
    <View style={styles.container}>
      <Image source={StartImg} style={styles.startImg} />
      <Text style={styles.startInfo}>30+ Công thức món ngon</Text>
      <Text style={styles.startTitle}>Happy {'\n'}Cooking</Text>
      <TouchableOpacity
        style={styles.startBtnWrapper}
        onPress={() => {
          props.navigation.navigate('Wrapper', {});
        }}>
        <Text style={styles.startBtn}>Bắt đầu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;
