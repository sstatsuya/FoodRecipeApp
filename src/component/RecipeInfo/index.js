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
import {
  faSlidersH,
  faSearch,
  faAngleLeft,
  faClock,
  faUtensils,
  faGrinBeam,
  faGrinHearts,
  faDizzy,
} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';
import {Colors} from '../../constant/Styles';
import {Fragment} from 'react';

const RecipeInfo = props => {
  const recipe = props.recipe ? props.recipe : {...props.route?.params?.recipe};
  // console.log('Here: ' + JSON.stringify(recipe));
  return (
    <ScrollView>
      <View style={styles.container}>
        {!props.isEdit && (
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <FontAwesomeIcon icon={faAngleLeft} size={32} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.imgWrapper}>
          <Image
            source={{uri: 'data:image/png;base64,' + recipe.image}}
            style={styles.foodImg}
          />
        </View>
        <Text style={styles.foodName}>{recipe.name}</Text>
        <Text style={styles.foodInfo}>{recipe.intro}</Text>
        <View style={styles.types}>
          {recipe.typeList.map((type, index) => {
            return (
              <View key={index} style={styles.typeItem}>
                <Text style={styles.typeText}>{type.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.featureWrapper}>
          <View style={[styles.feature, {backgroundColor: '#97AEFF'}]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={faClock}
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>{recipe.time} mins</Text>
          </View>
          <View style={[styles.feature, {backgroundColor: '#E3C7FF'}]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={faUtensils}
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>
              {recipe.number} person{recipe.number < 2 ? '' : 's'}
            </Text>
          </View>
          <View
            style={[
              styles.feature,
              {
                backgroundColor:
                  recipe.level.toLowerCase() === 'easy'
                    ? '#BAF5C0'
                    : recipe.level.toLowerCase() === 'medium'
                    ? Colors.colorYellow
                    : '#FF1E21',
              },
            ]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={
                recipe.level.toLowerCase() === 'easy'
                  ? faGrinHearts
                  : recipe.level.toLowerCase() === 'medium'
                  ? faGrinBeam
                  : faDizzy
              }
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>{recipe.level}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Thành phần</Text>
        <View style={styles.ingredientWrapper}>
          {recipe.ingredients.map((item, index) => {
            return (
              <Fragment key={index}>
                <View style={styles.ingreName}>
                  <Text style={styles.ingreNameText}>{item.name}</Text>
                </View>
                <View style={styles.ingreAmount}>
                  <Text style={styles.ingreAmountText}>{item.amount}</Text>
                </View>
              </Fragment>
            );
          })}
        </View>
        <Text style={styles.sectionTitle}>Cách thực hiện</Text>
        <Text style={styles.recipeDetail}>{recipe.tutorial}</Text>
      </View>
    </ScrollView>
  );
};

export default RecipeInfo;
