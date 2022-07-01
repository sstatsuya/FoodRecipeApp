import {createSlice} from '@reduxjs/toolkit';
export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    typeSearchId: '-1',
    isLoading: false,
    recipeSearchText: '',
  },
  reducers: {
    changeTypeFilter: (state, action) => {
      state.typeSearchId = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    changeSearchText: (state, action) => {
      state.recipeSearchText = action.payload;
    },
  },
});
