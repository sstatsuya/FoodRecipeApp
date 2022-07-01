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
  faCheck,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import EmptyImg from '../../../asset/img/empty.png';
import TakePicture from '../../TakePicture';
import {Colors} from '../../../constant/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRecipeIngredientsSelector,
  addRecipeTutorialSelector,
} from '../../../redux/selector';
import {addRecipeSlice} from '../../../redux/addRecipeSlice';

const ARScreen3 = props => {
  // Variable
  const dispatch = useDispatch();
  const tutorial = useSelector(addRecipeTutorialSelector);

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
  const handleAddEmptyStep = () => {
    dispatch(addRecipeSlice.actions.addEmptyTutorialStep());
  };
  const handleChangeStepText = (text, index) => {
    dispatch(addRecipeSlice.actions.changeTutorialStepText({text, index}));
  };
  const handleRemoveStep = index => {
    dispatch(addRecipeSlice.actions.removeTutorialStep(index));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bước 3</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nhập các bước thực hiện</Text>
          <View style={styles.tutorialWrapper}>
            {tutorial.map((step, index) => {
              return (
                <View style={styles.tutorialItem} key={index}>
                  <Text style={styles.stepNumberText}>
                    Nhập bước {index + 1}
                  </Text>
                  <TextInput
                    multiline
                    placeholder="Nhập công thức"
                    style={styles.stepInput}
                    value={step}
                    onChangeText={text => {
                      handleChangeStepText(text, index);
                    }}
                  />
                  <TouchableOpacity
                    style={styles.removeBtn}
                    onPress={() => {
                      handleRemoveStep(index);
                    }}>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      color="#999"
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
            <TouchableOpacity
              style={styles.addStepBtn}
              onPress={() => {
                handleAddEmptyStep();
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
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          props.navigation.navigate('ARScreen4', {});
        }}>
        <FontAwesomeIcon icon={faAngleRight} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen3;
