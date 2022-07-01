import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRecipeIntroSelector,
  addRecipeLevelSelector,
  addRecipeNameSelector,
  addRecipeNumberSelector,
  addRecipeTimeSelector,
  addRecipeTypesSelector,
  typesSelector,
} from '../../../redux/selector';
import {addRecipeSlice} from '../../../redux/addRecipeSlice';

const ARScreen1 = props => {
  const dispatch = useDispatch();
  const types = useSelector(typesSelector);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const name = useSelector(addRecipeNameSelector);
  const intro = useSelector(addRecipeIntroSelector);
  const number = useSelector(addRecipeNumberSelector);
  const time = useSelector(addRecipeTimeSelector);
  const level = useSelector(addRecipeLevelSelector);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bước 1</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loại món ăn</Text>
        <SearchableDropdown
          multi={true}
          selectedItems={selectedTypes}
          onItemSelect={item => {
            const items = selectedTypes;
            let existed = false;
            items.forEach(i => {
              if (i.id === item.id) {
                existed = true;
                return true;
              }
            });
            if (!existed) {
              items.push(item);
              setSelectedTypes(items);
              dispatch(addRecipeSlice.actions.addTypeList(item));
            }
          }}
          containerStyle={{padding: 5}}
          onRemoveItem={(item, index) => {
            const items = selectedTypes.filter(sitem => sitem.id !== item.id);
            setSelectedTypes(items);
            dispatch(addRecipeSlice.actions.removeTypeList(item));
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{color: '#222'}}
          itemsContainerStyle={{maxHeight: 140}}
          items={types}
          // defaultIndex={2}
          chip={true}
          resetValue={false}
          textInputProps={{
            placeholder: 'Nhập tên loại món ăn',
            underlineColorAndroid: 'transparent',
            style: {
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            },
          }}
          listProps={{
            nestedScrollEnabled: true,
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tên món ăn</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.nameInput}
            placeholder="Nhập tên món ăn"
            value={name}
            onChangeText={text => {
              dispatch(addRecipeSlice.actions.changeName(text));
            }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giới thiệu</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.nameInput}
            placeholder="Nhập giới thiệu món ăn"
            value={intro}
            onChangeText={text => {
              dispatch(addRecipeSlice.actions.changeIntro(text));
            }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin khác</Text>
        <View style={styles.moreInfo}>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>SL người ăn</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.moreInfoInput}
                value={number}
                keyboardType={'numeric'}
                onChangeText={text => {
                  dispatch(addRecipeSlice.actions.changeNumber(text));
                }}
              />
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>Thời gian (phút)</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.moreInfoInput}
                value={time}
                keyboardType={'numeric'}
                onChangeText={text => {
                  dispatch(addRecipeSlice.actions.changeTime(text));
                }}
              />
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>Mức độ</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.moreInfoInput}
                value={level}
                onChangeText={text => {
                  dispatch(addRecipeSlice.actions.changeLevel(text));
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          props.navigation.navigate('ARScreen2', {});
        }}>
        <FontAwesomeIcon icon={faAngleRight} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen1;
