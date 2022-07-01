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
import Function from '../utils/Function';
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
    reset: () => state = initialState,
    getAll: (state, action) => {
      for (let i = 0; i < action.payload.data.length; i++) {
        state.push({
          ...action.payload.data[i],
          id: action.payload.data[i]._id,
          bg: '#' + Function.randomColor() + '33'
        });
      }
    },
    addRecipe: (state, action) => {
      state.push({
        ...action.payload,
        id: action.payload._id,
        bg: '#' + Function.randomColor() + '33'
      });
    },
  },
  extraReducers: {
    [getAllRecipes.pending]: (state, action) => {},
    [getAllRecipes.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [getAllRecipes.rejected]: (state, action) => {},
  },
});
