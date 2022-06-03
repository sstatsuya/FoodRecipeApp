import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSlidersH, faSearch, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';

const Favourite = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                props.navigation.navigate('RecipeInfo', {});
              }}
              style={styles.favouriteItem}>
              <View style={styles.favouriteImgWrapper}>
                <Image source={Food1Img} style={styles.foodImg} />
              </View>
              <View style={styles.favouriteInfo}>
                <Text style={styles.name}>Xôi gà</Text>
                <Text style={styles.dish}>Món chính</Text>
                <View style={styles.levelWrapper}>
                  <View style={styles.level}></View>
                  <Text style={styles.levelText}>Dễ</Text>
                </View>
              </View>
              <View style={styles.selectBtn}>
                <FontAwesomeIcon icon={faAngleRight} size={24}/>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Favourite;
