import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const ARScreen1 = (props) => {
  var types = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'React Native',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'Python',
    },
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    },
  ];
  const [selectedTypes, setSelectedTypes] = useState([
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    },
  ]);
  console.log('Da chon: ' + selectedTypes.length);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập thông tin sơ bộ</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loại món ăn</Text>
        <SearchableDropdown
          multi={true}
          selectedItems={selectedTypes}
          onItemSelect={item => {
            const items = selectedTypes;
            items.push(item);
            setSelectedTypes(items);
          }}
          containerStyle={{padding: 5}}
          onRemoveItem={(item, index) => {
            const items = selectedTypes.filter(sitem => sitem.id !== item.id);
            setSelectedTypes(items);
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
          <TextInput style={styles.nameInput} placeholder="Nhập tên món ăn" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin khác</Text>
        <View style={styles.moreInfo}>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>SL người ăn</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.moreInfoInput} />
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>Thời gian (phút)</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.moreInfoInput} />
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoTitle}>Mức độ</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.moreInfoInput} />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.nextBtn} onPress={()=>{
        props.navigation.navigate("ARScreen2", {})
      }}>
        <FontAwesomeIcon icon={faAngleRight} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen1;
