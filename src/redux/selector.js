import {createSelector} from 'reselect';

export const typesSelector = state => state.types;
export const recipesSelector = state => state.recipes;
export const searchTextSelector = state => state.view.recipeSearchText;
export const typeSearchIdSelector = state => state.view.typeSearchId
export const isLoadingSelector = state => state.view.isLoading

export const filteredNameRecipes = createSelector(
  recipesSelector,
  searchTextSelector,
  (recipes, searchText) => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchText.toLowerCase()));
  },
);
