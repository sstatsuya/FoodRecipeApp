import {createSelector} from 'reselect';

export const typesSelector = state => state.types;
export const recipesSelector = state => state.recipes;
export const searchTextSelector = state => state.view.recipeSearchText;
export const typeSearchIdSelector = state => state.view.typeSearchId;
export const isLoadingSelector = state => state.view.isLoading;
export const addRecipeNameSelector = state => state.addRecipe.name
export const addRecipeIntroSelector = state => state.addRecipe.intro
export const addRecipeTimeSelector = state => state.addRecipe.time
export const addRecipeNumberSelector = state => state.addRecipe.number
export const addRecipeLevelSelector = state => state.addRecipe.level
export const addRecipeTutorialSelector = state => state.addRecipe.tutorial
export const addRecipeIngredientsSelector = state => state.addRecipe.ingredients
export const addRecipeTypesSelector = state => state.addRecipe.types
export const addRecipeImageSelector = state => state.addRecipe.image
export const newRecipe = state => state.addRecipe

export const filteredNameRecipes = createSelector(
  recipesSelector,
  searchTextSelector,
  (recipes, searchText) => {
    return recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  },
);

export const homeTypeSelector = createSelector(typesSelector, types => {
  const newTypes = [...types]
  newTypes.unshift({
    id : '-1',
    name: 'Tất cả'
  })
  return newTypes
});
