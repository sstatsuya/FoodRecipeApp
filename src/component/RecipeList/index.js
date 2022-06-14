import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomNavigator from '../BottomNavigator';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSlidersH,
  faSearch,
  faPlus,
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
import 'react-native-get-random-values';
import {v4} from 'uuid';
import APICaller from '../../utils/APICaller';
import {Colors} from '../../constant/Styles';
import {filteredNameRecipes, recipesSelector, typeSearchIdSelector, typesSelector} from '../../redux/selector';
import { viewSlice } from '../../redux/viewSlice';

const RecipeList = props => {
  // Variable
  const dispatch = useDispatch();
  const recipes = useSelector(filteredNameRecipes);
  const types = useSelector(typesSelector);
  const typeSearchId = useSelector(typeSearchIdSelector);
  const [isAddNewType, setIsAddNewType] = useState(false);
  const [isDeleteType, setIsDeleteType] = useState(false);
  const [newTypeNameText, setNewTypeNameText] = useState('');
  const [searchText, setSearchText] = useState('');


  console.log("state: "+JSON.stringify(useSelector(state=>state)))
  // console.log("typeSearchId: "+ typeSearchId)
  // console.log("Types: "+ JSON.stringify(types))

  var fadeTypeAnimation = new Animated.Value(1);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeTypeAnimation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeTypeAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeTypeAnimation]);

  // Function
  const handleChangeTypeSearch = id => {
    dispatch(viewSlice.actions.changeTypeFilter(id));
  };
  const handleAddType = () => {
    dispatch(Actions.requestAddType({id: v4(), name: newTypeNameText}));
  };

  const handleDeleteType = id => {
    dispatch(Actions.requestDeleteType(id));
  };

  const handleChangeSearchText = (text) =>{
    setSearchText(text)
    dispatch(viewSlice.actions.changeSearchText(text))
  }

  const handleAddRecipe = async () => {};
  if (!types) return <></>;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.recipeAddBtn}
        onPress={() => {
          props.navigation.navigate('ARScreen1', {});
        }}>
        <FontAwesomeIcon icon={faPlus} size={32} color="white" />
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} size={24} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm công thức"
            placeholderTextColor={'#999'}
            value={searchText}
            onChangeText={text => handleChangeSearchText(text)}
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
      <View style={styles.typeSection}>
        <View style={styles.typeControlWrapper}>
          {(isAddNewType || isDeleteType) && (
            <TouchableOpacity
              style={styles.addTypeControlBtn}
              onPress={() => {
                setIsAddNewType(false);
                setIsDeleteType(false);
              }}>
              <Text style={styles.cancelTypeBtn}>Hủy</Text>
            </TouchableOpacity>
          )}
          {isAddNewType && (
            <View style={[styles.addNewTypeWrapper]}>
              <View style={styles.typeNewWrapper}>
                <TextInput
                  style={styles.typeNewInput}
                  placeholder="Nhập tên loại mới"
                  value={newTypeNameText}
                  onChangeText={text => setNewTypeNameText(text)}
                />
              </View>
              <View style={[styles.addTypeControlWrapper]}>
                <TouchableOpacity
                  style={styles.addTypeControlBtn}
                  onPress={() => {
                    handleAddType();
                  }}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size={36}
                    color={Colors.colorOrange}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {!isAddNewType && !isDeleteType && (
            <TouchableOpacity
              style={styles.showAddTypeBtn}
              onPress={() => {
                setIsAddNewType(true);
              }}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                size={36}
                color={Colors.colorOrange}
              />
            </TouchableOpacity>
          )}
          {!isDeleteType && !isAddNewType && (
            <TouchableOpacity
              style={styles.showAddTypeBtn}
              onPress={() => {
                setIsDeleteType(true);
              }}>
              <FontAwesomeIcon
                icon={faMinusCircle}
                size={36}
                color={Colors.colorOrange}
              />
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.typeSV}>
          <View style={styles.typeWrapper}>
            {/* Add new type */}
            {types.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.typeItem,
                    item.id == typeSearchId ? styles.typeItemActive : {},
                  ]}
                  key={item.id}
                  onPress={() => {
                    handleChangeTypeSearch(item.id);
                  }}>
                  {isDeleteType && index !== 0 && (
                    <TouchableOpacity
                      style={styles.deleteTypeBtn}
                      onPress={() => {
                        handleDeleteType(item.id);
                      }}>
                      <Animated.View style={{opacity: fadeTypeAnimation}}>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          size={24}
                          color="#ccc"
                        />
                      </Animated.View>
                    </TouchableOpacity>
                  )}
                  <Text
                    style={[
                      styles.typeItemText,
                      item.id == typeSearchId ? styles.typeItemTextActive : {},
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.recipeSVWrapper}>
        <View style={styles.recipeWrapper}>
          {recipes.map((item, index) => {
            if (item.typeID === typeSearchId || typeSearchId < 0)
              return (
                <TouchableOpacity
                  style={styles.recipeItem}
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
