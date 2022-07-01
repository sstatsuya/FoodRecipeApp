import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, {useEffect, useState} from "react";
import {styles} from "./styles";
import SearchableDropdown from "react-native-searchable-dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCheck,
  faPlusCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import EmptyImg from "../../../asset/img/empty.png";
import TakePicture from "../../TakePicture";
import {Colors} from "../../../constant/Styles";
import {useDispatch, useSelector} from "react-redux";
import {
  addRecipeIngredientsSelector,
  addRecipeTutorialSelector,
  newRecipe,
} from "../../../redux/selector";
import {addRecipeSlice} from "../../../redux/addRecipeSlice";
import RecipeInfo from "../../RecipeInfo";
import {useMutation} from "@apollo/client";
import {addRecipeGQL} from "../../../graphql/mutation";
import Function from "../../../utils/Function";
import {viewSlice} from "../../../redux/viewSlice";
import "react-native-get-random-values";
import {v4} from "uuid";
import {recipeSlice} from "../../../redux/recipeSlice";

const ARScreen4 = props => {
  // Variable
  const dispatch = useDispatch();
  const recipe = useSelector(newRecipe);
  // Function
  // Hanlde call add recipe api
  const [addRecipe, addRecipeData] = useMutation(addRecipeGQL);
  useEffect(() => {
    if (addRecipeData.loading) {
      dispatch(viewSlice.actions.setIsLoading(true));
    } else {
      dispatch(viewSlice.actions.setIsLoading(false));
      if (addRecipeData.error) {
        Function.showToast("error", "Đã có lỗi khi thêm công thức mới");
        addRecipeData.reset();
      } else if (addRecipeData.data) {
        Function.showToast("success", "Thêm công thức thành công");
        dispatch(recipeSlice.actions.addRecipe(addRecipeData.data.addRecipe));
        dispatch(addRecipeSlice.actions.reset());
        addRecipeData.reset();
        props.navigation.navigate("Wrapper", {})
      }
    }
  }, [addRecipeData.loading]);
  const handleAddRecipe = () => {
    let typeList = recipe.typeList.map(item => item.id);
    addRecipe({
      variables: {
        _id: v4(),
        name: recipe.name,
        intro: recipe.intro,
        time: parseInt(recipe.time),
        number: parseInt(recipe.number),
        level: recipe.level,
        tutorial: recipe.tutorial,
        ingredients: recipe.ingredients,
        types: typeList,
        image: recipe.image,
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Bước 4</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kiểm tra lại thông tin</Text>
        </View>
        <RecipeInfo isEdit={true} recipe={recipe} />
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
          handleAddRecipe();
        }}>
        <FontAwesomeIcon icon={faCheck} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ARScreen4;
