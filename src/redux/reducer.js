import { combineReducers } from "redux";
import { addRecipeSlice } from "./addRecipeSlice";
import { recipeSlice } from "./recipeSlice";
import { typeSlice } from "./typeSlice";
import { viewSlice } from "./viewSlice";

const rootReducer = combineReducers({
    types: typeSlice.reducer,
    recipes: recipeSlice.reducer,
    view: viewSlice.reducer,
    addRecipe: addRecipeSlice.reducer
})

export default rootReducer