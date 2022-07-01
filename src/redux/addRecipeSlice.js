import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  intro: "",
  time: 0,
  number: 0,
  level: "Easy",
  tutorial: ["Làm gì đó"],
  ingredients: [],
  typeList: [],
  image: "",
}

export const addRecipeSlice = createSlice({
  name: "addRecipe",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    changeId: (state, action) => {
      state.id = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeIntro: (state, action) => {
      state.intro = action.payload;
    },
    changeTime: (state, action) => {
      state.time = action.payload;
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
    changeTutorial: (state, action) => {
      state.tutorial = action.payload;
    },
    addEmptyTutorialStep: (state, action) => {
      state.tutorial.push("");
    },
    changeTutorialStepText: (state, action) => {
      state.tutorial[action.payload.index] = action.payload.text;
    },
    removeTutorialStep: (state, action) => {
      state.tutorial = state.tutorial.filter(
        (tutorial, index) => index !== action.payload,
      );
    },
    changeIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    addEmptyIngredient: (state, action) => {
      state.ingredients.push({});
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (ingredient, index) => index !== action.payload,
      );
    },
    changeIngredientName: (state, action) => {
      state.ingredients[action.payload.index].name = action.payload.name;
    },
    changeIngredientAmount: (state, action) => {
      state.ingredients[action.payload.index].amount = action.payload.amount;
    },
    addTypeList: (state, action) => {
      state.typeList.push(action.payload);
    },
    removeTypeList: (state, action) => {
      state.typeList = state.typeList.filter(type => {
        return type.id !== action.payload.id;
      });
    },
    changeImage: (state, action) => {
      state.image = action.payload;
    },
  },
});
