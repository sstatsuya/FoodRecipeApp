// const initState = {
//   recipeSearchText: '',
//   typeSearchId: '-1',
//   isLoading: false,
// };
// export const viewSlice = (state = initState, action) => {
//   switch (action.type) {
//     case 'view/changeTypeFilter':
//       return {
//         ...state,
//         typeSearchId: action.id,
//       };
//     case 'view/setIsLoading':
//       return {
//         ...state,
//         isLoading: action.isLoading,
//       };
//     case 'view/changeSearchText':
//       return {
//         ...state,
//         recipeSearchText: action.payload.text,
//       };
//     default:
//       return state;
//   }
// };

import {createSlice} from '@reduxjs/toolkit';
export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    typeSearchId: -1,
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
