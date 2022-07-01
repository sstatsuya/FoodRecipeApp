import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import EmptyImg from '../../../asset/img/empty.png';
import TakePicture from '../../TakePicture';
import {Colors} from '../../../constant/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {addRecipeIngredientsSelector} from '../../../redux/selector';
import {addRecipeSlice} from '../../../redux/addRecipeSlice';

const ARScreen2 = props => {
  // Variable
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const ingredients = useSelector(addRecipeIngredientsSelector);

  // Function
  const handleAddEmptyIngredient = () => {
    dispatch(addRecipeSlice.actions.addEmptyIngredient());
  };
  const handleRemoveIngredient = index => {
    dispatch(addRecipeSlice.actions.removeIngredient(index));
  };
  const handleChangeIngredientName = (text, index) => {
    dispatch(
      addRecipeSlice.actions.changeIngredientName({name: text, index: index}),
    );
  };
  const handleChangeIngredientAmount = (text, index) => {
    dispatch(
      addRecipeSlice.actions.changeIngredientAmount({
        amount: text,
        index: index,
      }),
    );
  };
  return (
    <View style={styles.container}>
      <TakePicture
        show={show}
        onDismiss={() => setShow(false)}
        enableBackdropDismiss
        heightScale={0.36}>
        <View style={styles.pickImageWrapper}>
          <Text style={styles.pickImgTitle}>Chọn ảnh món ăn</Text>
          <Text style={styles.pickImgDesc}>Chọn một bức ảnh trong máy bạn</Text>
          <TouchableOpacity
            onPress={() => {
              pickImage(2);
            }}
            style={styles.pickImgBtn}>
            <Text style={styles.pickImgTxt}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pickImgBtn}
            onPress={() => {
              pickImage(1);
            }}>
            <Text style={styles.pickImgTxt}>Chọn từ thư viện</Text>
          </TouchableOpacity>
        </View>
      </TakePicture>
      <ScrollView>
        <Text style={styles.title}>Bước 2</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hình ảnh món ăn</Text>
          <TouchableOpacity
            style={styles.imageSelectBtn}
            onPress={() => setShow(true)}>
            <Image source={EmptyImg} style={styles.foodImage} />
          </TouchableOpacity>
        </View>

        {/* Ingredient */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nhập danh sách thành phần</Text>
          <View style={styles.ingredientWrapper}>
            {ingredients.map((ingredient, index) => {
              return (
                <View style={styles.ingredientItem} key={index}>
                  <View style={styles.ingredientBorder}>
                    <View style={styles.ingredientName}>
                      <TextInput
                        style={styles.input}
                        placeholder="Nhập thành phần"
                        value={ingredient.name}
                        onChangeText={text =>
                          handleChangeIngredientName(text, index)
                        }
                      />
                    </View>
                    <View style={styles.ingredientAmount}>
                      <TextInput
                        style={styles.input}
                        placeholder="Số lượng"
                        value={ingredient.amount}
                        onChangeText={text =>
                          handleChangeIngredientAmount(text, index)
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.removeBtn}>
                    <TouchableOpacity
                      style={styles.addIngredientBtn}
                      onPress={() => {
                        handleRemoveIngredient(index);
                      }}>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        color={'#999'}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
            <TouchableOpacity
              style={styles.addIngredientBtn}
              onPress={() => {
                handleAddEmptyIngredient();
              }}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                color={Colors.colorOrange}
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.nextBtn,
          {
            left: 20,
          },
        ]}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faAngleLeft} size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextBtn} onPress={()=>{
        props.navigation.navigate("ARScreen3", {})
      }}>
        <FontAwesomeIcon icon={faAngleRight} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen2;
