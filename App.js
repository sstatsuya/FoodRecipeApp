import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Start from './src/component/Start';
import {StatusBar} from 'react-native';
import {Colors} from './src/constant/Styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipeList from './src/component/RecipeList';
import Wrapper from './src/component/Wrapper';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.colorYellow} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Wrapper"
            component={Wrapper}
            options={{
              animation: 'slide_from_right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
