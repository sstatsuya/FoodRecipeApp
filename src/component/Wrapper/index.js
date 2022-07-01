import {View, Text} from "react-native";
import React, { useEffect } from "react";
import BottomNavigator from "../BottomNavigator";
import {BackHandler} from "react-native";

const Wrapper = (props) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (props.navigation.isFocused()) {
          return true;
        }
      },
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={{flex: 1}}>
      <BottomNavigator />
    </View>
  );
};

export default Wrapper;
