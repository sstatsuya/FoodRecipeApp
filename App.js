import React from "react";
import {Image, SafeAreaView, View} from "react-native";
import Start from "./src/component/Start";
import {StatusBar} from "react-native";
import {Colors} from "./src/constant/Styles";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import RecipeList from "./src/component/RecipeList";
import Wrapper from "./src/component/Wrapper";
import RecipeInfo from "./src/component/RecipeInfo";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import LoadingImg from "./src/asset/img/loading.gif";
import Loading from "./src/component/Loading";
import ARScreen1 from "./src/component/AddRecipe/ARScreen1";
import ARScreen2 from "./src/component/AddRecipe/ARScreen2";
import {Provider as PaperProvider} from "react-native-paper";
import ARScreen3 from "./src/component/AddRecipe/ARScreen3";
import ARScreen4 from "./src/component/AddRecipe/ARScreen4";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();
const apolloClient = new ApolloClient({
  uri: `https://tien-food-recipe.herokuapp.com/`,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <PaperProvider>
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
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="Wrapper"
                  component={Wrapper}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="RecipeInfo"
                  component={RecipeInfo}
                  options={{
                    animation: "fade_from_bottom",
                  }}
                />
                <Stack.Screen
                  name="ARScreen1"
                  component={ARScreen1}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="ARScreen2"
                  component={ARScreen2}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="ARScreen3"
                  component={ARScreen3}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="ARScreen4"
                  component={ARScreen4}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <Loading />
            <FlashMessage position="top" /> 
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
