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
  faSmileBeam,
} from '@fortawesome/free-solid-svg-icons';
import Food1Img from '../../asset/img/food1.png';

const RecipeInfo = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgWrapper}>
          <Image source={Food1Img} style={styles.foodImg} />
        </View>
        <Text style={styles.foodName}>Xôi gà</Text>
        <Text style={styles.foodInfo}>
          Một món ăn gì đó Một món ăn gì đó Một món ăn gì đó Một món ăn gì đó gì
          đó Một món ăn gì đó gì đó Một món ăn gì đó
        </Text>
        <View style={styles.featureWrapper}>
          <View style={[styles.feature, {backgroundColor: '#97AEFF'}]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={faClock}
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>30 mins</Text>
          </View>
          <View style={[styles.feature, {backgroundColor: '#E3C7FF'}]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={faUtensils}
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>30 mins</Text>
          </View>
          <View style={[styles.feature, {backgroundColor: '#BAF5C0'}]}>
            <FontAwesomeIcon
              style={{opacity: 0.9}}
              icon={faSmileBeam}
              size={28}
              color="black"
            />
            <Text style={styles.featureText}>30 mins</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Thành phần</Text>
        <View style={styles.ingredientWrapper}>
          <>
            <View style={styles.ingreName}>
              <Text style={styles.ingreNameText}>Gạo</Text>
            </View>
            <View style={styles.ingreAmount}>
              <Text style={styles.ingreAmountText}>300gr</Text>
            </View>
          </>
          <>
            <View style={styles.ingreName}>
              <Text style={styles.ingreNameText}>Gạo</Text>
            </View>
            <View style={styles.ingreAmount}>
              <Text style={styles.ingreAmountText}>300gr</Text>
            </View>
          </>
          <>
            <View style={styles.ingreName}>
              <Text style={styles.ingreNameText}>Gạo</Text>
            </View>
            <View style={styles.ingreAmount}>
              <Text style={styles.ingreAmountText}>300gr</Text>
            </View>
          </>
        </View>
        <Text style={styles.sectionTitle}>Cách thực hiện</Text>
        <Text style={styles.recipeDetail}>
          Gà rửa sạch, cho vào nồi đổ ngập nước, thêm 2 muỗng bột nghệ, vài lát
          gừng đập dập và luộc trong khoảng 20-30 phút. Sau khi gà chín, vớt gà
          ra khỏi nồi, để nguội và xé nhỏ. Gạo nếp vo sạch, để ráo nước. Phi tỏi
          với dầu ăn và cho gạo nếp vào xào trong khoảng 3 phút. Cho nước luộc
          gà vào gạo đã xào và nấu cơm nếp. Lưu ý, chỉ cho lượng nhỏ nước bởi
          gạo nếp cần ít nước để nấu chín hơn so với gạo tẻ. Hành tây thái lát
          mỏng, ngâm trong nước đá lạnh khoảng 10 phút và vớt ra để ráo nước.
          Cho vào bát to gà xé, hành tây, rau răm, ớt tỏi băm, nước cốt chanh,
          nước mắm và trộn đều. Nêm nếm lại gia vị cho vừa ăn. Cho xôi đã nấu
          chín ra đĩa, rưới thêm dầu tỏi hoặc hành phi lên trên ăn chung với
          thịt gà xé.
        </Text>
      </View>
    </ScrollView>
  );
};

export default RecipeInfo;
