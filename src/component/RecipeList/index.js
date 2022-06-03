import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BottomNavigator from '../BottomNavigator';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSlidersH, faSearch} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';

const RecipeList = props => {
  const types = [
    'All',
    'Cơm',
    'Mì',
    'Canh',
    'Bún, phở',
    'Đồ nướng',
    'Món xào',
    'Món hấp',
  ];
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
        <TouchableOpacity style={styles.filterBtn}>
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
                index === 0 ? styles.typeItemActive : {},
              ]}
              key={index}>
              <Text
                style={[
                  styles.typeItemText,
                  index === 0 ? styles.typeItemTextActive : {},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView style={styles.recipeSVWrapper}>
        <View style={styles.recipeWrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <TouchableOpacity style={styles.recipeItem} key={index}>
                <Text
                  style={styles.recipeItemText}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  Xôi gà
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
