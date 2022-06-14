// const initState = [];
// export const recipeSlice = (state = initState, action) => {
//   switch (action.type) {
//     case 'recipe/all':
//       return [...action.data];
//     case 'recipe/add':
//       return [...state, action.data];
//     default:
//       return state;
//   }
// };

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import APICaller from '../utils/APICaller';
import {viewSlice} from './viewSlice';
export const getAllRecipes = createAsyncThunk(
  'recipe/getAll',
  async (params, thunk) => {
    thunk.dispatch(viewSlice.actions.setIsLoading(true));
    const res = await APICaller.requestGetAllRecipe();
    thunk.dispatch(viewSlice.actions.setIsLoading(false));
    return res.data;
  },
);
export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    getAll: (state, action) => {
      state = [...action.data];
    },
    addRecipe: (state, action) => {
      state.push(action.data);
    },
  },
  extraReducers: {
    [getAllRecipes.pending]: (state, action) => {},
    [getAllRecipes.fulfilled]: (state, action) => {
      state = action.payload
      return state
    },
    [getAllRecipes.rejected]: (state, action) => {},
  },
});
