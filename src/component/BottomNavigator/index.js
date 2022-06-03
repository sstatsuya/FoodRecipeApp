import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faSearch,
  faUser,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import RecipeList from '../RecipeList';
import Favourite from '../Favourite';
import User from '../User';
import {Colors} from '../../constant/Styles';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName={RecipeList}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'RecipeList') {
              return (
                <FontAwesomeIcon icon={faSearch} size={20} color={focused?'black': '#999'} />
              );
            } else if (rn === 'Favourite') {
              return (
                <FontAwesomeIcon icon={faBookmark} size={20} color={focused?'black': '#999'} />
              );
            } else if (rn === 'User') {
              return (
                <FontAwesomeIcon icon={faUser} size={20} color={focused?'black': '#999'} />
              );
            }
          },
        })}>
        <Tab.Screen
          name="RecipeList"
          component={RecipeList}
          options={{
            headerTitle: 'Danh sách công thức',
            tabBarActiveBackgroundColor: Colors.colorYellow,
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
            headerTitle: 'Công thức yêu thích',
            tabBarActiveBackgroundColor: Colors.colorYellow,
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            // headerShown: false,
            headerTitle: 'Tài khoản',
            tabBarActiveBackgroundColor: Colors.colorYellow,
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default BottomNavigator;
