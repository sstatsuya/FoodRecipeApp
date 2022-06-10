import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomNavigator from '../BottomNavigator';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSlidersH, faSearch} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
import 'react-native-get-random-values';
import {v4} from 'uuid';
import APICaller from '../../utils/APICaller';

const RecipeList = props => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const types = useSelector(state => state.types);
  const typeSearchId = useSelector(state => state.view.typeSearchId)
  console.log("Type ID: "+typeSearchId)

  const handleChangeTypeSearch = (id) =>{
    dispatch(Actions.changeTypeFilter(id))
  }

  const handleAddRecipe = async () => {
    dispatch(Actions.requestGetAllRecipe());
  };
  if (!types) return <></>;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} size={24} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm công thức"
            placeholderTextColor={'#999'}
          />
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => {
            handleAddRecipe();
          }}>
          <FontAwesomeIcon icon={faSlidersH} size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.typeWrapper}>
        {types.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.typeItem,
                item.id === typeSearchId ? styles.typeItemActive : {},
              ]}
              key={item.id}
              onPress={()=>{
                handleChangeTypeSearch(item.id)
              }}>
              <Text
                style={[
                  styles.typeItemText,
                  item.id === typeSearchId ? styles.typeItemTextActive : {},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView style={styles.recipeSVWrapper}>
        <View style={styles.recipeWrapper}>
          {recipes.map((item, index) => {
            return (
              <TouchableOpacity
                style={[styles.recipeItem, index === 2 ? {} : {}]}
                key={index}
                onPress={() => {
                  props.navigation.navigate('RecipeInfo', {});
                }}>
                <Text
                  style={styles.recipeItemText}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <View style={styles.recipeItemImgWrapper}>
                  <Image style={styles.recipeItemImg} source={Food1Img} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeList;
