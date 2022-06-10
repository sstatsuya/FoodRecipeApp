import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Start from './src/component/Start';
import {StatusBar} from 'react-native';
import {Colors} from './src/constant/Styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RecipeList from './src/component/RecipeList';
import Wrapper from './src/component/Wrapper';
import RecipeInfo from './src/component/RecipeInfo';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import LoadingImg from './src/asset/img/loading.gif';
import Loading from './src/component/Loading';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={Colors.colorYellow}
          barStyle="dark-content"
        />
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
            <Stack.Screen
              name="RecipeInfo"
              component={RecipeInfo}
              options={{
                animation: 'fade_from_bottom',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Loading/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
